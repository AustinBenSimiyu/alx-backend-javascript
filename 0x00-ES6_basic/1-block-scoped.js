#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;
  const task3 = task;
  const task4 = task2;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }
  task = task3;
  task2 = task4;
  return [task, task2];
}
