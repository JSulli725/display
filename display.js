class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
//1.AddFront
    addFront(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    display(){
        var newArr = [];
        var thisNode = this.head;
        if(thisNode == null){
            console.log("its an empty list")
        }
        while(thisNode!= null) {
            var i = thisNode.val.toString()
            newArr.push(i);
            thisNode = thisNode.next;
        }
        console.log(newArr);
        return this;
    }
}

//initiate:
var sll = new SLL();
//function feeder:
sll.addFront(12);
sll.addFront(34);
sll.addFront(18);
sll.addFront(27);
sll.addFront(55);
sll.display();