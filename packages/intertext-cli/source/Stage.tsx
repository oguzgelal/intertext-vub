import fs from 'fs';
import React, { useState, useEffect } from 'react';
import { Branch } from '@intertext/engine';
import engine from './engine';
const demoXmlPath = require.resolve('@intertext/utils/src/examples/demo.xml');
import Renderer from './Renderer';

const Stage = () => {
  const [packages, packagesSet] = useState<Branch[]>([]);
  useEffect(() => {
    fs.readFile(demoXmlPath, async (err, data) => {
      if (err) console.log('ERR: ', err);
      else {
        const xmlString = data.toString();
        const xmlParsed = await engine.parseXml(xmlString);
        packagesSet(xmlParsed);
      }
    });
  }, []);

  return (
    <>
      {packages.map((branch, i) => (
        <Renderer branch={branch} key={i} />
      ))}
    </>
  );
};

Stage.propTypes = {};

export default Stage;
