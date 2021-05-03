export type Command = Alert;

export interface State {
  key: string;
  state: unknown;
}

export interface Alert {
  alert: string;
}
