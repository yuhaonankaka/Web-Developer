var todos = ["Buy New Turtle"];
var input = prompt("What would you like to do?");



while(input !=="quit"){
if(input==="list"){
	listTodos();
} else if(input==="new"){
	addTodo();
} 
else if(input==="delete"){
deleteTodo();
}
input = prompt("What would you like to do?");
}

console.log("quit!");


function listTodos(){
	console.log("**********");
	todos.forEach(function(todo,i){

		console.log(i+": "+todo);
	});
	console.log("**********");
}

function addTodo(){
	var newTodo = prompt("Enter new newTodo");

	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
	//ask for index of todo tobe deletetd
var index = prompt("Enter index of todo to delete");
//delete
//splice();
todos.splice(index,1);
console.log("deleted todo");

}