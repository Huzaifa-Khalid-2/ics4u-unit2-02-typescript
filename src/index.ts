/**
 * This program uses the Stack
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-10-5
 */

import Stack from "./stack";
import promptSync from "prompt-sync";

const myNewStack = new Stack();

const prompt = promptSync();
const someNumberString = prompt("Enter an integer: ");
const someNumberInt = parseInt(someNumberString);
myNewStack.push(someNumberInt);
console.log("Stack before the pop is: ");
console.log(myNewStack.getStack());

myNewStack.pop();
console.log("Stack after pop is: ");
console.log(myNewStack.getStack());
