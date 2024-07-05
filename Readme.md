# ToDo DApp Project

Hey, this is my ToDo DApp project! This README will guide you through how to run this code on your local machine.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
- Hardhat

### Installation

1. **Clone the Project**

   Clone the project to your local machine with the following command:
   ```bash
   git clone https://github.com/johnsmccain/todo_app.git
   ```

2. **Navigate to the Project Directory**

   Open a terminal and navigate to the project directory:
   ```bash
   cd todo_app
   ```

### Running the Project

To run the project, you'll need to spin up both the frontend and the blockchain backend.

1. **Start the Frontend**

   Open a terminal and navigate to the `frontend` directory, then run the following command to spin up the frontend:
   ```bash
   cd frontend
   npm run dev
   ```
   This will start the frontend on [http://localhost:5173](http://localhost:5173).

2. **Start the Blockchain Backend**

   Open two terminals and navigate to the `blockchain` directory in both.

   In the first terminal, run:
   ```bash
   cd blockchain
   npx hardhat node
   ```

   In the second terminal, run:
   ```bash
   cd blockchain
   npx hardhat ignition deploy ignition/modules/Todo.ts --network localhost
   ```

### Additional Information

- **Frontend**: This directory contains the frontend code for the ToDo DApp project.
- **Blockchain**: This directory contains the smart contracts and Hardhat configuration for deploying the contracts.

Feel free to explore the code and make modifications as you see fit. Enjoy building with Solidity and Web3!

---

If you encounter any issues or have questions, please refer to the Hardhat and Node.js documentation, or reach out to the me for guidance.

Happy coding!

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Thanks to "Web3 Club" on YouTube for the inspiration and guidance on this project.
- A big thank you to [Guild Audits](https://x.com/GuildAudits) and the founder, Mr. David, for playing a major role in my learning journey.

---

## Contact

Follow me on Twitter: [@Johnsdanlami](https://x.com/Johnsdanlami)
