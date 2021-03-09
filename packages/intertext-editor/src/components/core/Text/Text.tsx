import React from 'react';
import { Text, Heading } from '@chakra-ui/react'
import { vars } from '../../../common/utils/vars';
import { Intent } from '../../../common/types';
import { TypographyVariants } from './styles'

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

  const variants = vars<TypographyVariants>({
    'bold': b,
    'italic': i,
    'underlined': u,
    'muted': muted,
  }, { intent })

  if (h1 || h2 || h3) {
    return (
      <Heading variants={variants}>
        {children}
      </Heading>
    )
  }

  return (
    <Text variants={variants}>
      {children}
    </Text>
  );
}

export default TextComponent;