import React from "react"
import Renderer from "./Renderer"
import { Branch } from "@intertext/engine"

const Stage = ({ packages }: { packages: Branch[] }) => {

  if (!Array.isArray(packages)) return null;

  return (
    <>
      {packages.map((branch, i) => (
        <Renderer key={i} branch={branch} />
      ))}
    </>
  )
}

export default Stage
