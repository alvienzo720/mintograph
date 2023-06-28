//SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract SimpleNFT is ERC721URIStorage, Ownable {
    uint256 public tokenID;

    constructor() ERC721("SimpleNFT", "SNFT") {}

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256){
        _safeMint(recipient, tokenID);
        _setTokenURI(tokenID, tokenURI);
        tokenID++;
        return tokenID - 1;
    }
}
