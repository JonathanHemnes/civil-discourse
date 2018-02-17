pragma solidity ^0.4.18;

contract CivilDiscourse {
    struct Statement {
        string text;
        address owner;
    }

    event StatementAdded(address by, string text);

    Statement[] public statements;   

    function AddStatement(string text) public {
       statements.push(Statement({
           owner: msg.sender,
           text: text
       }));
       StatementAdded(msg.sender, text);
    }

    function GetStatements() public view returns (Statement[]) {
        return statements;
    }
}

