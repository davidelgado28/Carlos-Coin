pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CarlosCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("Carlos Coin", "CARLOS") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}
