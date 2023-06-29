//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";


import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SimpleNFT is ERC721URIStorage {
    uint256 public tokenID;

    constructor(address _owner) ERC721("SimpleNFT", "SNFT") {}

    function mintNFT(string memory tokenURI) public returns (uint256){
        _safeMint(msg.sender, tokenID);
        _setTokenURI(tokenID, tokenURI);
        tokenID++;
        return tokenID - 1;
    }
}
