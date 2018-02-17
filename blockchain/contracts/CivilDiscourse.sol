pragma solidity ^0.4.18;

contract CivilDiscourse {
    struct Statement {
        string text;
        address owner;
    }

    Statement[] public statements;   

    function AddStatement(string text) public {
       statements.push(Statement({
           owner: msg.sender,
           text: text
       }));
    }
}

