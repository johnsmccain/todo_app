import {expect} from "chai";
import hre from "hardhat";
import {time} from "@nomicfoundation/hardhat-toolbox/network-helpers"

describe('Todo', () => {
    it("Should Add todo", async () => {
        const todo = await hre.ethers.deployContract("Todo");
        await(await todo.addTodo("test")).wait()
        expect(await todo.todoCount()).to.equal(1);
        console.log(hre.ethers.getAddress);
        // expect(await todo.todos(todo.owner, 1)).to.equal("test"))

    })
 })