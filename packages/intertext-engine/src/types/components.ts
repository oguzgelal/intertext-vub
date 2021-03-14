import { LayoutProps } from './layout'
import { Size } from './size'
import { Intent } from './theme'
import { Command } from './commands'
import { Renderable } from './renderable'

export type Component =
  | Block
  | Grid
  | Text
  | TextP
  | TextH1
  | TextH2
  | TextH3
  | Button;

/**
 * Components
 */

export interface Block extends LayoutProps {
  block: Renderable;
  intent?: Intent;
};

export interface Grid extends LayoutProps {
  grid: Renderable;
  cols: number[];
  gap?: Size;
};

interface TextBase extends LayoutProps {
  intent?: Intent;
  muted?: boolean;
  bold?: boolean;
  italic?: boolean;
  underlined?: boolean;
};
export interface Text extends TextBase { text: Renderable };
export interface TextP extends TextBase { p: Renderable };
export interface TextH1 extends TextBase { h1: Renderable };
export interface TextH2 extends TextBase { h2: Renderable };
export interface TextH3 extends TextBase { h3: Renderable };

export interface Button extends LayoutProps {
  button: Renderable;
  intent?: Intent;
  size?: 'xs' | 'sm' | 'md' | 'lg'
  disabled?: boolean;
  onClick: Command[];
};