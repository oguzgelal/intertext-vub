export type Command = Timeout | OnLoad | State | Alert | Request | Navigate;

/**
 * Execute commands with a timeout
 */
export interface Timeout {
  timeout: Command | Command[];
  delay: string;
}

/**
 * Execute commands on load
 */
export interface OnLoad {
  onload: Command | Command[];
}

/**
 * Set / read from the state
 */
export interface State {
  key: string;
  state: unknown;
}

/**
 * Make a request to the backend
 */
export interface Request {
  endpoint: string;
  strategy: 'replace' | 'append' | 'prepend' | 'execute' | 'ignore';
}

/**
 * Make a navigation request to the backend
 * This command works like `Request` but defines
 * the action as `navigation`, changing the state
 * of the host platform accordingly
 */
export interface Navigate {
  endpoint: string;
}

/**
 * Display an alert message to the user
 */
export interface Alert {
  alert: string;
}
