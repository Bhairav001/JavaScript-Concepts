class Stack{
    constructor(){
        this.items=[]  // Array to store stack elements
    }
    //push elements to the top of the stack
    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "Underflow - Stack is empty";
        }
        return this.items.pop();
    }

    //Return the top element in the stack without removing it

    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.items.length;
    }

    //Clear the stack
    clear(){
        this.items=[]
    }
}


const stack = new Stack();


stack.push(5);
stack.push(10)
stack.push(15);


console.log("Stack Elements", stack.items);


console.log("Top of the stack", stack.peek());

console.log("Popped element", stack.pop())


console.log("Stack size",stack.size());


console.log("Is the stack empty?", stack.isEmpty());


stack.clear()
// console.log("Stack Elements", stack.items);


