import { Alert } from './types/commands';
import { Renderable } from './types/renderable';

type RunnerArgs<T> = {
  props: T;
};

type RunnerFn<T> = (args: RunnerArgs<T>) => unknown;

class Runner {
  private alertRunner: RunnerFn<Alert> = () => null;

  /**
   * Register a command
   */
  public registerAlertCommand = (fn: RunnerFn<Alert>): void => {
    this.alertRunner = fn;
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

    // Alert
    if (args.branch && 'alert' in args.branch) {
      return this.alertRunner({
        props: args.branch,
      });
    }

    return null;
  };
}

export default Runner;
