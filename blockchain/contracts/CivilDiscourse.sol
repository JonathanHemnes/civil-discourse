pragma solidity ^0.4.18;

contract CivilDiscourse {
    struct Statement {
        string text;
        address owner;
        uint id;
    }

    event StatementAdded(address by, string text);

    Statement[] public statements;   

    function AddStatement(string text) public returns (uint){
        var stmt = Statement({
           owner: msg.sender,
           text: text,
           id: statements.length + 1
       })
       statements.push(stmt);
       StatementAdded(msg.sender, text);
       return stmt.id;
    }

    function GetStatements() public view returns (Statement[]) {
        return statements;
    }
}

