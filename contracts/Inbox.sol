pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    function Inbox(string initialMessage) public{ //constructor to Inbox contract. Contract behaves as a class
        message = initialMessage;
    }
    function setMessage(string newMessage) public returns (string){
        message = newMessage;
        return message;
    }
    // function getMessage() public view returns (string){
    //     return message;
    // }
}