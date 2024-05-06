# StandardBEP20 Token

This project implements a StandardBEP20 token, which is a standard BEP20 token with a constructor that sets the initial balance for the token holders.

## Features

- Standard BEP20 token implementation
- Constructor to set token name, symbol, decimals, and initial balance
- Initial balance is minted to the contract creator

## Getting Started

### Prerequisites

- Node.js
- Hardhat

### Installation

1. Clone the repository:

git clone <repository-url>


2. Install dependencies:

npm install


### Usage

1. Deploy the StandardBEP20 token:

npx hardhat run scripts/deploy.js


2. Run tests:

npx hardhat test


### Contract Details

- Name: StandardBEP20
- Symbol: SBEP
- Decimals: 18
- Initial Balance: 1000

## License

This project is licensed under the MIT License.