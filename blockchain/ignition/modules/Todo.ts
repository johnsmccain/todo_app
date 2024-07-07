import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { artifacts, ethers } from "hardhat";



const TodoModule = buildModule("TodoModule", (m) => {


  const todo = m.contract("Todo");
saveFrontendFiles(todo, "Todo")
  return { todo };
});

export default TodoModule;
async function main(){

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);


  // Get the ContractFactories and Signers here.
  const Todo = await ethers.getContractFactory("Todo");
  // const Marketplace = await ethers.getContractFactory("Marketplace");
  // deploy contracts
  // const marketplace = await Marketplace.deploy(1);
  const todo = await Todo.deploy();
  console.log(await todo.getAddress());
  // Save copies of each contracts abi and address to the frontend.
  // saveFrontendFiles(marketplace , "Marketplace");
  // saveFrontendFiles(todo , "Todo");

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

async function saveFrontendFiles(contract:any, name:string){
    const fs = require("fs");
    const contractdDir = `${__dirname}/../../../frontend/contractsData`;

    if (!fs.existsSync(contractdDir)){
        fs.mkdirSync(contractdDir);
    }
    // console.log(contract.address)
    fs.writeFileSync(`${contractdDir}/${name}-address.json`,JSON.stringify({address: `${await contract.address}`}, undefined, 2));

    const contractArtifact = artifacts.readArtifactSync(name);
    // console.log(contractArtifact)

    fs.writeFileSync(`${contractdDir}/${name}.json`,JSON.stringify(contractArtifact, null, 2));
}
