import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { artifacts } from "hardhat";



const TodoModule = buildModule("TodoModule", (m) => {


  const todo = m.contract("Todo");
saveFrontendFiles(todo, "Todo")
  return { todo };
});

export default TodoModule;


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
