import React, { useEffect, useState } from "react"
import engine from "../common/engine"
import Renderer from "./Renderer"
import demoXml from "@intertext/utils/src/examples/demo.xml"
import { Branch } from "@intertext/engine"

const Stage = () => {
  const [packages, packagesSet] = useState<Branch[]>([])

  useEffect(() => {
    fetch(demoXml)
      .then((response) => response.text())
      .then(engine.parseXml)
      .then(packagesSet)
  }, [])

  return (
    <>
      {packages.map((branch, i) => (
        <Renderer key={i} branch={branch} />
      ))}
    </>
  )
}

export default Stage
