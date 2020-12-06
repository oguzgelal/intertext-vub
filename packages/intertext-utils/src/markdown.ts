/**
 * Simple markdown parser
 * https://github.com/Khan/simple-markdown
 */

import SimpleMarkdown from "simple-markdown";

export default (str: string): SimpleMarkdown.SingleASTNode[] => {
  
  const customParser = SimpleMarkdown.parserFor(Object.assign({}, SimpleMarkdown.defaultRules, {
    Array: null,
    // heading: null,
    nptable: null,
    lheading: null,
    hr: null,
    codeBlock: null,
    fence: null,
    blockQuote: null,
    list: null,
    def: null,
    table: null,
    newline: null,
    paragraph: null,
    escape: null,
    tableSeparator: null,
    autolink: null,
    mailto: null,
    url: null,
    link: null,
    image: null,
    reflink: null,
    refimage: null,
    // em: null,
    // strong: null,
    // u: null,
    del: null,
    inlineCode: null,
    br: null,
    // text: null,
  }))

  return customParser(str);
}
