const todoList = document.querySelector(".todoLists");
const listValue = document.querySelector(".todoValue");
const btn = document.querySelector(".btn");

let todoListValue = [];

const addTodoListLocalStorage = (todo) =>{
    return localStorage.setItem( "localData" , JSON.stringify( todo ) ); // add value to local storage  , we have to converat the 2nd argument to string .
    // stringify use for storing data in string format 
};

const getTodoListFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("localData")) || [] ;
    // parse convert string to original form of data 
};

todoListValue = getTodoListFromLocalStorage();

// Stored Value
const showTodoList = () =>{
    todoListValue.forEach((currentTodo) => {
        const li = document.createElement('li'); 
        li.innerHTML = currentTodo ; // Show the stored array Value .
        todoList.append(li);
    })
};

// Delete li element 

const removeTodoList = (evt) => {
    console.log(evt.target.textContent);
    console.log(todoListValue);

    let currentTodovalue = evt.target;

    let updatedTodoList = todoListValue.filter( 
    (currentTodo) =>  evt.target.textContent !== currentTodo
    );

    console.log(updatedTodoList);
    
    currentTodovalue.remove();
    
    addTodoListLocalStorage(updatedTodoList);
    // todoList.innerHTML = " " ;
    // showTodoList();
};


// Add todo List 

const addTodoList = (evt) =>{
    evt.preventDefault();
    
    // todoListValue = getTodoListFromLocalStorage();
    let inputValue = listValue.value.trim() ; //The trim() method removes whitespace from both side of astring .

    if ( inputValue !== ""  && todoListValue.includes(inputValue) === false ) {
        console.log("hello world");
        todoListValue.push(inputValue);

        addTodoListLocalStorage(todoListValue);

        //Creating  a new li element  and assigning it to the variable 'li' .

        const li = document.createElement('li'); 
        li.innerHTML = inputValue ; // Add input Value  to the List Item .
        todoList.append(li);

        listValue.value = "";  // Clearing the input value after clicking the value .
    }
}

todoList.addEventListener("click", (evt) => removeTodoList(evt) ) ;


showTodoList();


btn.addEventListener("click",(evt) =>{
    addTodoList(evt);
});