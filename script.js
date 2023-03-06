const push = document.querySelector(".push");
const pop = document.querySelector(".pop");
const reset = document.querySelector(".reset");
const input = document.querySelector(".text");
const bucket = document.querySelector(".main-stack-bucket");
const message = document.querySelector(".message");
const messageBox = document.querySelector(".message-box");
const box = document.querySelectorAll(".box");
const stack = [];
// for disable all buttons
const buttonDisable = () => {
    push.disabled = true;
    push.classList.add("disable-button");
    pop.disabled = true;
    pop.classList.add("disable-button");
    reset.disabled = true;
    reset.classList.add("disable-button");
    input.disabled = true;
};

// for enable all buttons

const buttonEnable = () => {
    push.disabled = false;
    push.classList.remove("disable-button");
    pop.disabled = false;
    pop.classList.remove("disable-button");
    reset.disabled = false;
    reset.classList.remove("disable-button");
    input.disabled = false;
};

// when the push button is clicked
push.addEventListener("click", () => {
    if (input.value == "") {
        message.innerHTML = "Please Enter a value";
        messageBox.classList.add("error-message");
        setTimeout(() => {
            messageBox.classList.remove("error-message");
        }, 1200);
        return;
    }

    if (stack.length == 5) {
        input.value = "";
        message.innerHTML = "Stack Overflow";
        messageBox.classList.add("error-message");
        setTimeout(() => {
            messageBox.classList.remove("error-message");
        }, 1200);
        return;
    }
    const itemValue = input.value; //for store the input value
    stack.push(itemValue); // push the value into the stack

    // creating a new element 
    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = stack[stack.length - 1];
    bucket.appendChild(element);

    // upadte the top
    console.log(box);
    box[0].innerHTML = stack[stack.length - 1];
    console.log(box);
    // clear the input box
    input.value = "";

    // adding the animation for a new push element
    element.classList.add("ele-add");

    // disable all buttons
    buttonDisable();

    // after pushing the element
    setTimeout(() => {
        // remove the animation
        element.classList.remove("ele-add");
        // update the Last Pushed Item Value
        box[1].innerHTML = itemValue;
        box[3].innerHTML = Number(box[3].innerText)+1;
        // Dispalye the message 
        message.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;
        // Enable all buttons
        buttonEnable();
    }, 1500);
})

// when th pop button is clicked

pop.addEventListener("click", () => {
    if (stack.length == 0) {
        message.classList.add("error-message");
        message.innerHTML = "Stack Underflow";
        setTimeout(() => {
            messageBox.classList.remove("error-message");
        }, 1200);
        return;
    }
    // adding the poping animation
    bucket.lastElementChild.classList.add("ele-remove");

    //disable all buttons
    buttonDisable();

    // start popping the element
    setTimeout(() => {
        // Delete the element from the bucket
        bucket.removeChild(bucket.lastElementChild);
        // Storing the popped value
        const itemValue = stack.pop();

        //updating the last popped item
        box[2].innerHTML = itemValue;
        box[3].innerHTML = Number(box[3].innerText ) - 1;
        //Updating the Top
        if(stack.length == 0){
            box[0].innerHTML = "";
        }
        else{
            box[0].innerHTML = stack[stack.length-1];
        }

        // adding the message
        message.innerHTML = `Item ${itemValue} is Popped.`;

        // Enable all buttons
        buttonEnable();
    },1500);
});

// When the reset button is clicked
reset.addEventListener("click" ,()=>{
    // clear the full array
    while(stack.length > 0){
        stack.pop();
    }
    //clear all fiels;
    box[0].innerHTML = "0";
    box[1].innerHTML = "0";
    box[2].innerHTML = "0";
    box[3].innerHTML = "0";
    // clear all element from the bucket
    while(bucket.firstChild){
        bucket.removeChild(bucket.firstChild);
    }

})