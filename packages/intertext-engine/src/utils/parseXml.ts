import xml2js from 'xml2js';
import { Component } from '../types/components'
import { Command } from '../types/commands'
import { Branch, Renderable } from '../types/renderable'

const parser = new xml2js.Parser({
  preserveChildrenOrder: true,
  explicitArray: true,
  explicitChildren: true,
  explicitRoot: true,
});

type XmlParseOutput = {
  '#name': string;
  $: Record<string, unknown>;
  $$: XmlParseOutput[];
  _: string;
};

// convert values of a node from string
const parseAttrValues = (node: Record<string, unknown> ): Record<string, unknown> => {
  return Object.keys(node ?? {}).reduce((acc, key) => {
    let parsed = node[key];
    if (typeof parsed === 'string') {
      parsed = parseAttrValueFromString(parsed);
    }
    return Object.assign({}, acc, { [key]: parsed });
  }, {});
}

// convert string based values into values of a type
const parseAttrValueFromString = (attrValue: string ): string | boolean | number[] => {
  // convert from string to boolean
  if (attrValue === 'true') return true;
  if (attrValue === 'false') return false;
  // parses things like '[1, 2, 3]'
  if (/\s*\[[\s*\d+\s*,]+\]\s*/gi.test(attrValue ?? '')) {
    return <number[]>JSON.parse(attrValue ?? '');
  }
  return attrValue;
}

/**
 * Fix complex attribute node names. ie:
 * { #name: block.pocketLeft } to { #name: pocketLeft }
 */
const fixComplexAttrNodeName = (node: XmlParseOutput): XmlParseOutput => {
  return Object.assign({}, node, {
    '#name': (node['#name'] ?? '').split('.').slice(1).join('.'),
  });
}

const parseXmlJsonOutput = (output: XmlParseOutput): Branch => {
  const nodeName: string = output['#name'];
  const nodeValue: string = output['_'];
  const nodeAttrs: Record<string, unknown> = output['$'] ?? {};
  const nodeChildren: XmlParseOutput[] = output['$$'];

  const complexAttributes: Record<string, Renderable> = {};

  let children: string | Component[] | Command[] = nodeValue;

  // handle children
  if (nodeChildren && nodeChildren.length > 0) {
    // seperate complex attributes from actual children.
    // ie: { #name: block.pocketLeft, ... }
    // complex attributes needs to be handled differently
    const [complexAttrArray, nodeChildrenSafe] = nodeChildren.reduce<
      [XmlParseOutput[], XmlParseOutput[]]
    >(
      (acc, n) => {
        const childNodeName = n['#name'] || '';
        const isComplexNode = childNodeName.indexOf('.') !== -1;
        const isCorrectNode = childNodeName.split('.')[0] === nodeName;
        return isComplexNode && isCorrectNode
          ? [[...acc[0], n], acc[1]]
          : [acc[0], [...acc[1], n]];
      },
      [[], []],
    );

    // parse complex attribute children nodes
    complexAttrArray.forEach((attrNode) => {
      const attrNodeNameFixed = fixComplexAttrNodeName(attrNode);
      const attrName = attrNodeNameFixed['#name'];
      const attrParsed = parseXmlJsonOutput(attrNodeNameFixed);
      // TODO:
      // @ts-ignore
      complexAttributes[attrName] = attrParsed[attrName];
    });

    // parse actual children
    children = nodeChildrenSafe.map(parseXmlJsonOutput);
  }

  // TODO:
  // @ts-ignore
  return {
    [nodeName]: children,
    ...parseAttrValues(nodeAttrs),
    ...complexAttributes,
  };
}

export default async (xmlString: string): Promise<Branch[]> => {
  const output = await parser.parseStringPromise(xmlString);
  // console.log('output', output)
  const parsed = parseXmlJsonOutput(output.root);
  // console.log('parsed', parsed)

  // TODO:
  // @ts-ignore
  return parsed?.root;
}