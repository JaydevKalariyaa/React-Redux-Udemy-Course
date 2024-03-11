class Todo {
  id: string;
  text: string;
  constructor(todoItem: string) {
    this.id = new Date().toLocaleTimeString();
    this.text = todoItem;
  }
}
export default Todo;
