/**
 * This class creates an integer stack
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-10-5
 */

class Stack {
  readonly stackList: number[] = [];

  // methods
  public push(pushedNumber: number): void {
    // add a number to list
    this.stackList.push(pushedNumber);
  }
  // getters
  public getStack(): number[] {
    return this.stackList;
  }

  public pop(): void {
    this.stackList.pop();
  }
}
export = Stack;
