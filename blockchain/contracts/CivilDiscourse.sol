pragma solidity ^0.4.19;

contract CivilDiscourse {
    struct AllStatements {
        Statement[] statements;
    }
    struct Statement {
        string text;
        address owner;
        uint id;
    }

    event StatementAdded(address by, string text);

    AllStatements allStatements;

    function AddStatement(string text) public returns (uint){
        var stmt = Statement({
           owner: msg.sender,
           text: text,
           id: allStatements.statements.length + 1
       });
       allStatements.statements.push(stmt);
       StatementAdded(msg.sender, text);
       return stmt.id;
    }

    function GetStatements() public view returns (AllStatements) {
        return allStatements;
    }

}

