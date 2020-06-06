import { NumbersCollection } from './NumbersCollection';

// this is an abstract class:
// - can't be used to create object directly
// - only used as a parent class
// - can contain real implementaion for some methods
// - the implemented methods can refer to other methods that don't actually exist yet
// (its still necesarry to provide names and types for the un-implemented menthods)
// - can make child classed promise to implement some ohter method

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
