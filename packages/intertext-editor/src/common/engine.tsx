import React from "react"

import Engine from "@intertext/engine"
import Text from "../components/core/Text/Text"
import Block from "../components/core/Block/Block"
import Grid from "../components/core/Grid/Grid"
import Collapse from "../components/core/Collapse/Collapse"
import Button from "../components/core/Button/Button"

const engine = new Engine()

engine.renderer.registerBlockRenderer(({ index, children, props }) => (
  <Block key={index} {...props}>
    {engine.renderer.render({ branch: children })}
  </Block>
))

engine.renderer.registerGridRenderer(({ index, children, props }) => (
  <Grid key={index} {...props}>
    {engine.renderer.render({ branch: children })}
  </Grid>
))

engine.renderer.registerCollapseRenderer(({ index, children, props }) => (
  <Collapse
    key={index}
    {...props}
    handle={engine.renderer.render({ branch: props.handle })}
  >
    {engine.renderer.render({ branch: children })}
  </Collapse>
))

engine.renderer.registerButtonRenderer(({ index, children, props }) => (
  <Button key={index} {...props}>
    {engine.renderer.render({ branch: children })}
  </Button>
))

engine.renderer.registerTextRenderer(({ index, children, props }) => {
  const isDirect = typeof children === "string" || typeof children === "number"
  return (
    <Text
      key={index}
      {...props}
      b={props.bold}
      i={props.italic}
      u={props.underlined}
      muted={props.muted}
      code={props.code}
      p={"p" in props}
      h1={"h1" in props}
      h2={"h2" in props}
      h3={"h3" in props}
    >
      {isDirect && children}
      {!isDirect && engine.renderer.render({ branch: children })}
    </Text>
  )
})

engine.renderer.registerLiteralRenderer(({ children }) => {
  return <Text>{children}</Text>
})

export default engine