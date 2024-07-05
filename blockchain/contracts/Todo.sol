// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Todo {
    address public owner;
    uint256 public todoCount;
    struct Item {
        string todo;
        bool done;
        address authur;
        uint256 index;
    }

    mapping(uint256 => Item) public todos;
    event itemLog(string todo, bool done, address authur, uint256 index);
    event itemDelete(uint256 index);
    modifier onlyOwner(address _owner) {
        require(msg.sender == _owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addTodo(string memory todo) public {
        // TODO
        todos[todoCount] = Item(todo, false, msg.sender, todoCount);
        emit itemLog(todo, false, msg.sender, todoCount);
        todoCount++;
    }

    function completeTodo(uint index) public onlyOwner(todos[index].authur) {
        // TODO

        todos[index].done = true;
        emit itemLog(todos[index].todo, true, todos[index].authur, index);
    }

    function deleteTodo(uint256 index) public onlyOwner(todos[index].authur) {
        delete todos[index];
        emit itemDelete(index);
    }

    function updateTodo(
        uint256 index,
        string memory _todo
    ) public onlyOwner(todos[index].authur) {
        todos[index].todo = _todo;
        emit itemLog(_todo, todos[index].done, todos[index].authur, index);
    }
    // function getTodo(uint256 index) public returns(Item memory){
    //     if(todos[index].authur == msg.sender){
    //         return todos[index];
    //     }
    //     return
    // }
}
