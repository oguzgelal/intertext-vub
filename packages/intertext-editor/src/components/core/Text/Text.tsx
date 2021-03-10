import React from 'react';
import { Box, As, Text, Heading } from '@chakra-ui/react'
import { Intent } from '../../../common/types';

const TextComponent = ({
  children,
  block,
  muted,
  intent,
  p,
  h1,
  h2,
  h3,
  b,
  i,
  u,
}: {
  children: any,
  block?: boolean,
  muted?: boolean,
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

  // text as
  let tagText: As = isBlock ? 'p' : 'span'

  // variants
  let variant = ''
  if (muted) variant = 'muted';

  if (isHeading) {
    return (
      <Heading
        as={tagHeading}
        colorScheme={intent}
        size={tagHeading}
        fontStyle={i ? 'italic' : 'normal'}
        textDecoration={u ? 'underline' : 'none'}
        variant={variant}
      >
        {children}
      </Heading>
    )
  }

  return (
    <Text
      as={tagText}
      colorScheme={intent}
      fontWeight={b ? 'bold' : 'normal'}
      fontStyle={i ? 'italic' : 'normal'}
      textDecoration={u ? 'underline' : 'none'}
      variant={variant}
    >
      {children}
    </Text>
  );
}

export default TextComponent;