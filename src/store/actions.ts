export const ADD_TODO = "[Todo] Add todo to the list";

export class addTodo {
  readonly type = ADD_TODO;

  constructor(private payload: any) {
  }
}
