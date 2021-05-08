import {
  Timeout,
  OnLoad,
  Alert,
  State,
  Request,
  Navigate,
} from './types/commands';
import { Renderable } from './types/renderable';

type RunnerArgs<T> = {
  props: T;
};

type RunnerFn<T> = (args: RunnerArgs<T>) => unknown;

class Runner {
  private timeoutRunner: RunnerFn<Timeout> = () => null;
  private onloadRunner: RunnerFn<OnLoad> = () => null;
  private alertRunner: RunnerFn<Alert> = () => null;
  private stateRunner: RunnerFn<State> = () => null;
  private requestRunner: RunnerFn<Request> = () => null;
  private navigateRunner: RunnerFn<Request> = () => null;

  /**
   * Register a command
   */
  public registerTimeoutCommand = (fn: RunnerFn<Timeout>): void => {
    this.timeoutRunner = fn;
  };
  public registerOnLoadCommand = (fn: RunnerFn<OnLoad>): void => {
    this.onloadRunner = fn;
  };
  public registerAlertCommand = (fn: RunnerFn<Alert>): void => {
    this.alertRunner = fn;
  };
  public registerStateCommand = (fn: RunnerFn<State>): void => {
    this.stateRunner = fn;
  };
  public registerRequestCommand = (fn: RunnerFn<Request>): void => {
    this.requestRunner = fn;
  };
  public registerNavigateCommand = (fn: RunnerFn<Navigate>): void => {
    this.navigateRunner = fn;
  };

  /**
   * Run a command
   */
  public run = (args: { branch: Renderable }): unknown => {
    // List of items
    if (Array.isArray(args.branch)) {
      return args.branch.map((branch) => {
        return this.run({ branch });
      });
    }

    // Literal values
    if (typeof args.branch === 'string' || typeof args.branch === 'number') {
      return null;
    }

    // Timeout
    if (args.branch && 'timeout' in args.branch) {
      return this.timeoutRunner({
        props: args.branch,
      });
    }

    // OnLoad
    if (args.branch && 'onload' in args.branch) {
      return this.onloadRunner({
        props: args.branch,
      });
    }

    // Alert
    if (args.branch && 'alert' in args.branch) {
      return this.alertRunner({
        props: args.branch,
      });
    }

    // State
    if (args.branch && 'state' in args.branch) {
      return this.stateRunner({
        props: args.branch,
      });
    }

    // Request
    if (args.branch && 'request' in args.branch) {
      return this.requestRunner({
        props: args.branch,
      });
    }

    // Navigate
    if (args.branch && 'navigate' in args.branch) {
      return this.navigateRunner({
        props: args.branch,
      });
    }

    return null;
  };
}

export default Runner;
