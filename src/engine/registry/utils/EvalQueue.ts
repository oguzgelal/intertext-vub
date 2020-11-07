/**
 * Evaluation queue is a mechanism to ensure packages
 * cross referencing each other can interact with each
 * other regardless of their evaluation order. Packages
 * of Intertext relies on side effects, therefor the order
 * of availability cannot be guaranteed. For instance, consider
 * componenets A, B, C and D. A is the grandparent, B and
 * C are siblings, and D is the child of C: A[B,C[D]]. Due
 * to the nature of side effects, we may not be receiving
 * them in order. It is the responsibility of this class to
 * make sure packages gets evaluated correctly as they become
 * availabie.
 * 
 * It is possible to create multiple evaluation queues, therefore
 * this class is not concerned with the evaluation logic, what is
 * considered as 'hit' or 'miss', or if the package should be
 * dequeued or not. Functions that will determine these logic
 * should be passed during instantiation of this class explicitly
 * 
 * @example <caption>The pseudo-code algorithm</caption>
 *   VOID eval (package OR packages[])
 *     unshift_packages_to_queue()
 *     eval_queue()
 *   VOID eval_queue()
 *     IF Queue IS EMPTY
 *       RETURN
 *     FOR package in Queue
 *       IF hit
 *         handle(package)
 *         eval_queue()
 *         BREAK
 *   VOID handle(package)
 *     // do whatever needs to be done with the package
 *     // update registry presence if necessary
 *     // if no further eval needed, remove from queue
 *     // if package needs further evaluation, leave in the queue
 *       
 * @example <caption>Step-by-step example</caption>
 *   Say the eval order is C, B, D, A
 *   --
 *   1. Stage: [], Registry: {}, Queue: [] // receive C
 *   2. Stage: [], Registry: {C}, Queue: [C] // evaluate queue -> C -> miss
 *   3. Stage: [], Registry: {C}, Queue: [C] // queue empty -> done
 *   --
 *   1. Stage: [], Registry: {C}, Queue: [C] // receive B
 *   2. Stage: [], Registry: {B,C}, Queue: [B,C] // evaluate queue -> B -> miss
 *   3. Stage: [], Registry: {B,C}, Queue: [B,C] // evaluate queue -> C -> miss
 *   4. Stage: [], Registry: {B,C}, Queue: [B,C] // queue empty -> done
 *   --
 *   1. Stage: [], Registry: {B,C}, Queue: [B,C] // receive D
 *   2. Stage: [], Registry: {B,C,D}, Queue: [D,B,C] // evaluate queue -> D -> hit -> (recurse)
 *   3. Stage: [], Registry: {B,C[D],D}, Queue: [B,C] // evaluate queue -> B -> miss
 *   4. Stage: [], Registry: {B,C[D],D}, Queue: [B,C] // evaluate queue -> C -> miss
 *   5. Stage: [], Registry: {B,C[D],D}, Queue: [B,C] // queue empty -> done
 *   --
 *   1. Stage: [], Registry: {B,C[D],D}, Queue: [B,C] // receive A
 *   2. Stage: [], Registry: {A,B,C[D],D}, Queue: [A,B,C] // evaluate queue -> A -> hit -> (recurse)
 *   3. Stage: [A], Registry: {A,B,C[D],D}, Queue: [B,C] // evaluate queue -> B -> hit -> (recurse)
 *   4. Stage: [A], Registry: {A[B],B,C[D],D}, Queue: [C] // evaluate queue -> C -> hit -> (recurse)
 *   5. Stage: [A], Registry: {A[B,C],B,C[D],D}, Queue: [] // queue empty -> done
 */


 /**
  * Retur true if item invalid and should be removed from
  * the queue without further evaluation
  * @function
  * @param item
  * @returns {boolean}
  */
type EvalFnInvalidate = (item: any) => boolean;

 /**
  * Dictates is an item should be considered a hit
  * @function
  * @param item
  * @returns {boolean}
  */
type EvalFnIsHit = (item: any) => boolean;

/**
  * How should the item be handled ? Should it be removed
  * from the queue after being handled ?
  * @function
  * @param item
  * @returns {boolean} True if item should be removed from the queue
  */
type EvalFnHandle = (item: any) => boolean;

interface IEvalQueue {
  invalidate: EvalFnInvalidate,
  isHit: EvalFnIsHit,
  handle: EvalFnHandle,
  evaluate: (items: any[]) => void
}

class EvalQueue implements IEvalQueue {

  isHit: EvalFnIsHit;
  handle: EvalFnHandle;
  invalidate: EvalFnInvalidate;
  private queue: any[];

  /**
   * @param {EvalFnIsHit} isHit
   * @param {EvalFnHandle} handle 
   */
  constructor(
    isHit: EvalFnIsHit,
    handle: EvalFnHandle,
    invalidate?: EvalFnInvalidate,
  ) {

    // these are required
    if (typeof isHit !== 'function' || typeof handle !== 'function') {
      throw new Error('Invalid parameters given to EvalQueue')
    }

    this.isHit = isHit;
    this.handle = handle;
    this.invalidate = invalidate;
  }

  /**
   * Remove an item from the queue
   */
  private removeFromQueue = (index) => {
    this.queue = this.queue.slice().splice(index, 1);
  }

  /**
   * Recursive eval queue function
   */
  private evalQueue = () => {
    for (let i = 0; i < this.queue.length; i++) {
      // get the item
      const queueItem = this.queue[i];
      // if the item is not valid, remove it from the queue
      // do not evaluate, continue with the next item
      if (typeof this.invalidate === 'function') {
        if (this.invalidate(queueItem)) {
          this.removeFromQueue(i);
          continue;
        }
      }
      // this item was a hit
      if (this.isHit(queueItem)) {
        const shouldRemove = this.handle(queueItem);
        // recurse and start over only if the item is removed
        // from the queue to prevent infinite loops
        if (shouldRemove) {
          // remove item from the queue
          this.removeFromQueue(i);
          // recursively start evaluation again
          this.evalQueue();
          // break the loop here
          break;
        }
      }
    }
  }
  
  // evaluate items
  evaluate = (items: any[]) => {
    this.queue = [ ...items, ...this.queue ];
    this.evalQueue();
  }

}

export default EvalQueue;