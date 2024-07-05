export const addTodo = async (todoContract:any, todo:string)=> {
    await todoContract.addTodo(todo);
}
