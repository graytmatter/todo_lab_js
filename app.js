var myForm = document.getElementById("movieForm");
var list = document.getElementById("movieList");
console.log(list);
myForm.addEventListener("submit", function (event) {

    // prevent the data from being sent to the server
    event.preventDefault();

    // add your code to deal with the user's data here.
    // if your form has an text field  with a `name` (not `id`) of
    // taco, then you can access what the user typed with:
    //
    // var userInput = this.taco.value;

	var deleteHandler = function(){
		list.removeChild(l);
	};
	var undoHandler = function(){
		l.classList.remove("strike");
		this.innerText = "done";
		this.removeEventListener("click", undoHandler);
		this.addEventListener("click", doneHandler);
	};
	var doneHandler = function(){
		l.classList.add("strike");
		this.innerText = "undo";
		this.removeEventListener("click", doneHandler);
		this.addEventListener("click", undoHandler);
	};

    var userInput = this.task.value;
	var l = document.createElement("li");
	var text = document.createTextNode(userInput);
	l.appendChild(text);
	//makes , sets up delete button
	var del = document.createElement("button");
	del.classList.add("del");
	text = document.createTextNode("delete");
	del.appendChild(text);
	del.addEventListener("click", deleteHandler);
	l.appendChild(del);
	//makes , sets up done button
	var done = document.createElement("button");
	done.classList.add("done");
	text = document.createTextNode("done");
	done.appendChild(text);
	done.addEventListener("click", doneHandler);
	l.appendChild(done);
	//adds list ellement to list
	list.appendChild(l);
});











