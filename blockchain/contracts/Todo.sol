// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Todo {
    address public owner;
    uint256 public todoCount;
    struct Item {
        string todo;
        bool done;
    }
    mapping(address => mapping(uint256 => Item)) public todos;
    constructor() {
        owner = msg.sender;
    }
    function addTodo (string memory todo) public {
        // TODO
        todoCount++;
        todos[msg.sender][todoCount] = Item(todo, false);
    }

    function completeTodo (uint index) public {
        // TODO
        todos[msg.sender][index].done = true;
    }

}