import { Component } from './components';
import { Command } from './commands';

export type Branch = Component | Command;

export type Renderable =
  | Renderable[]
  | Branch
  | string
  | number
  | undefined
  | null;
