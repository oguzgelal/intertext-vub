import React from 'react';
import { As, Text, Heading, useMultiStyleConfig } from '@chakra-ui/react'
import { Intent, LayoutProps, getLayoutProps } from '@intertext/engine';

const InxText = ({
  children,
  block,
  muted,
  code,
  intent,
  p,
  h1,
  h2,
  h3,
  b,
  i,
  u,
  ...rest
}: LayoutProps & {
  children: any,
  block?: boolean,
  muted?: boolean,
  code?: boolean,
  intent?: Intent,
  p?: boolean,
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  b?: boolean,
  i?: boolean,
  u?: boolean,
}) => {

  const isHeading = h1 || h2 || h3
  const isBlock = block || p
  
  // heading as
  let tagHeading: As = 'h3'
  if (h1) tagHeading = 'h1'
  if (h2) tagHeading = 'h2'
  if (h3) tagHeading = 'h3'

  const styles = useMultiStyleConfig('InxText', {
    __text_heading: isHeading,
    __text_h1: h1,
    __text_h2: h2,
    __text_h3: h3,
    __text_block: isBlock,
    __text_p: isBlock,
    __text_span: !isBlock,
    __text_bold: b,
    __text_italic: i,
    __text_underlined: u,
    __text_muted: muted,
    __text_code: code,
    __intent: intent,
  })

  if (isHeading) {
    return (
      <Heading
        as={tagHeading}
        sx={{
          ...styles.heading,
          ...getLayoutProps(rest),
        }}
      >
        {children}
      </Heading>
    )
  }

  return (
    <Text
      as={isBlock ? 'p' : 'span'}
      sx={{
        ...styles.text,
        ...getLayoutProps(rest),
      }}
    >
      {children}
    </Text>
  );
}

export default InxText;