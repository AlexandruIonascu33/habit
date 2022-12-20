window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	const newTodoForm = document.querySelector('#new-todo-form');

	newTodoForm.addEventListener('submit', e => {
		e.preventDefault();

		const todo = {
			content: e.target.elements.content.value,
			category: e.target.elements.category.value,
			done: false,
			doneforyesterday : false,
			timescompleted: 0,
			createdAt: new Date().getDate()
			
		}
        
		todos.push(todo);
		// curentdate = new Date().getDate()
		// todo[curentdate] = false
		
		

		localStorage.setItem('todos', JSON.stringify(todos));

		// Reset the form
		e.target.reset();

		
		DisplayTodos();

	})
	
	DisplayTodos();
})


function DisplayTodos () {
	const todoList = document.querySelector('#todo-list');
	todoList.innerHTML = "";
	
	

	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');
		const label = document.createElement('label');
		const input = document.createElement('input');
		const yesterday = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const check = document.createElement('div');
		const checkforyesterday =document.createElement('div');
		
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');
		const rewind = document.createElement('button');

		//total score
		totalpoints = localStorage.getItem("totalpoints");
       
        
		input.type = 'checkbox';
		input.checked = todo.done;
		yesterday.type ='checkbox';
		yesterday.checked = todo.doneforyesterday;
		span.classList.add('bubble');
		if (todo.category == 'personal') {
			span.classList.add('personal');
		} else {
			span.classList.add('business');
		}
		content.classList.add('todo-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');
		check.classList.add('timesdone')
		checkforyesterday.classList.add('doneforyesterday');


		yesterday.classList.add('yesterdaydone');

		content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';
		rewind.innerHTML = 'Rewind';
		check.innerHTML = `<input type="text" value="${todo.timescompleted}" class="timesdoneclass" readonly>`;
		
		

		label.appendChild(input);
		
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		actions.appendChild(rewind);
		todoItem.appendChild(label);
		todoItem.appendChild(content);
		todoItem.appendChild(yesterday);
		todoItem.appendChild(actions);
		todoItem.appendChild(check);
		todoItem.appendChild(checkforyesterday);
	    
		todoList.appendChild(todoItem);
 
		
		function deleteinside () {
	setTimeout(deleteit, 5000)
}
function deleteit () {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach (todo => 
	document.getElementById("completedtodos").innerHTML = ``)
}
		
		document.getElementById("b1").addEventListener("click", displaycompletedtodos1);
		document.getElementById("b1").addEventListener("click", deleteinside);
		function displaycompletedtodos1 () {
				
				document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[1]} </br>`;}
			

			document.getElementById("b2").addEventListener("click", displaycompletedtodos2);
		document.getElementById("b2").addEventListener("click", deleteinside);
		function displaycompletedtodos2 () {
				
				document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[2]} </br>`;}
				
			document.getElementById("b3").addEventListener("click", displaycompletedtodos3);
		document.getElementById("b3").addEventListener("click", deleteinside);
		function displaycompletedtodos3 () {
				
				document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[3]} </br>`;
		}
				
			document.getElementById("b4").addEventListener("click", displaycompletedtodos4);
		document.getElementById("b4").addEventListener("click", deleteinside);
			function displaycompletedtodos4 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[4]} </br>`;}
					
			document.getElementById("b5").addEventListener("click", displaycompletedtodos5);
		document.getElementById("b5").addEventListener("click", deleteinside);
			function displaycompletedtodos5 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[5]} </br>`;}
					
			document.getElementById("b6").addEventListener("click", displaycompletedtodos6);
		document.getElementById("b6").addEventListener("click", deleteinside);
			function displaycompletedtodos6 () {
						
						document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[6]} </br>`;}
						
			document.getElementById("b7").addEventListener("click", displaycompletedtodos7);
		document.getElementById("b7").addEventListener("click", deleteinside);
			function displaycompletedtodos7 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[7]} </br>`;
				
					
				}
				document.getElementById("b8").addEventListener("click", displaycompletedtodos8);
		document.getElementById("b8").addEventListener("click", deleteinside);
			function displaycompletedtodos8 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[8]} </br>`;
					
				}
				document.getElementById("b9").addEventListener("click", displaycompletedtodos9);
		document.getElementById("b9").addEventListener("click", deleteinside);
			function displaycompletedtodos9 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[9]} </br>`;
					
				}
				document.getElementById("b10").addEventListener("click", displaycompletedtodos10);
		document.getElementById("b10").addEventListener("click", deleteinside);
			function displaycompletedtodos10 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[10]} </br>`;
					
				}
				document.getElementById("b11").addEventListener("click", displaycompletedtodos11);
		document.getElementById("b11").addEventListener("click", deleteinside);
			function displaycompletedtodos11 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[11]} </br>`;
					
				}
				document.getElementById("b12").addEventListener("click", displaycompletedtodos12);
		document.getElementById("b12").addEventListener("click", deleteinside);
			function displaycompletedtodos12 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[12]} </br>`;
					
				}
				document.getElementById("b13").addEventListener("click", displaycompletedtodos13);
		document.getElementById("b13").addEventListener("click", deleteinside);
			function displaycompletedtodos13 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[13]} </br>`;
					
				}
				document.getElementById("b14").addEventListener("click", displaycompletedtodos14);
		document.getElementById("b14").addEventListener("click", deleteinside);
				function displaycompletedtodos14 () {
						
						document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[14]} </br>`;
						
					}
					document.getElementById("b15").addEventListener("click", displaycompletedtodos15);
		document.getElementById("b15").addEventListener("click", deleteinside);
			function displaycompletedtodos15 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[15]} </br>`;
					
				}
				document.getElementById("b16").addEventListener("click", displaycompletedtodos16);
		document.getElementById("b16").addEventListener("click", deleteinside);
			function displaycompletedtodos16 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[16]} </br>`;
					
				}
				document.getElementById("b17").addEventListener("click", displaycompletedtodos17);
		document.getElementById("b17").addEventListener("click", deleteinside);
			function displaycompletedtodos17 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[17]} </br>`;
					
				}
				document.getElementById("b18").addEventListener("click", displaycompletedtodos18);
		document.getElementById("b18").addEventListener("click", deleteinside);
			function displaycompletedtodos18 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[18]} </br>`;
					
				}
				document.getElementById("b19").addEventListener("click", displaycompletedtodos19);
		document.getElementById("b19").addEventListener("click", deleteinside);
			function displaycompletedtodos19 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[19]} </br>`;
					
				}
				document.getElementById("b20").addEventListener("click", displaycompletedtodos20);
		document.getElementById("b20").addEventListener("click", deleteinside);
			function displaycompletedtodos20 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[20]} </br>`;
					
				}
				document.getElementById("b21").addEventListener("click", displaycompletedtodos21);
		document.getElementById("b21").addEventListener("click", deleteinside);
			function displaycompletedtodos21 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[21]} </br>`;
					
				}
				document.getElementById("b22").addEventListener("click", displaycompletedtodos22);
		document.getElementById("b22").addEventListener("click", deleteinside);
			function displaycompletedtodos22 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[22]} </br>`;
					
				}
				document.getElementById("b23").addEventListener("click", displaycompletedtodos23);
		document.getElementById("b23").addEventListener("click", deleteinside);
			function displaycompletedtodos23 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[23]} </br>`;
					
				}
				document.getElementById("b24").addEventListener("click", displaycompletedtodos24);
		document.getElementById("b24").addEventListener("click", deleteinside);
			function displaycompletedtodos24 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[24]} </br>`;
					
				}
				document.getElementById("b25").addEventListener("click", displaycompletedtodos25);
		document.getElementById("b25").addEventListener("click", deleteinside);
			function displaycompletedtodos25 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[25]} </br>`;
					
				}
				document.getElementById("b26").addEventListener("click", displaycompletedtodos26);
		document.getElementById("b26").addEventListener("click", deleteinside);
			function displaycompletedtodos26 () {
				
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[26]} </br>`;
					
				}
				document.getElementById("b27").addEventListener("click", displaycompletedtodos27);
		document.getElementById("b27").addEventListener("click", deleteinside);
			function displaycompletedtodos27 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[27]} </br>`;
					
				}
				document.getElementById("b28").addEventListener("click", displaycompletedtodos28);
		document.getElementById("b28").addEventListener("click", deleteinside);
				function displaycompletedtodos28 () {
						
						document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[28]} </br>`;
						
					}
					document.getElementById("b29").addEventListener("click", displaycompletedtodos29);
		document.getElementById("b29").addEventListener("click", deleteinside);
			function displaycompletedtodos29 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[29]} </br>`;
					
				}
				document.getElementById("b30").addEventListener("click", displaycompletedtodos30);
		document.getElementById("b30").addEventListener("click", deleteinside);
			function displaycompletedtodos30 () {
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[30]} </br>`;
					
				}
				document.getElementById("b31").addEventListener("click", displaycompletedtodos31);
		document.getElementById("b31").addEventListener("click", deleteinside);
			function displaycompletedtodos31 () {
					
					document.getElementById("completedtodos").innerHTML = `${todo.content} was ${todo[31]} </br>`;
					
				}
				

		if (todo.done) {
			todoItem.classList.add('done');
		}
		if (todo.doneforyesterday) {
todoItem.classList.add('doneforyesterday');
		}
		
		input.addEventListener('change', (e) => {
			todo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.done) {
				todoItem.classList.add('done');
				todo.timescompleted += 1;
				localStorage.setItem('todos', JSON.stringify(todos));
				if (todo.category == 0) {
					updatescore();
					todos = todos.filter(t => t != todo);
					localStorage.setItem('todos', JSON.stringify(todos));
			        
					DisplayTodos()
				}
				curentdate = new Date().getDate()
				todo[curentdate] = true;
				localStorage.setItem('todos', JSON.stringify(todos));
			} else {
				todoItem.classList.remove('done');
				localStorage.setItem('todos', JSON.stringify(todos));
			}
            
			DisplayTodos()

		})
		yesterday.addEventListener('change', (e) => {
			todo.doneforyesterday = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.doneforyesterday) {
				todoItem.classList.add('doneforyesterday');
				todo.timescompleted += 1;
				localStorage.setItem('todos', JSON.stringify(todos));
			} else {
				todoItem.classList.remove('donedoryesterday');
				localStorage.setItem('todos', JSON.stringify(todos));
			}
            
			DisplayTodos()

		})

		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()

			})
		})
        
		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})

		rewind.addEventListener('click', (e) => {
			// todo.timescompleted -= 1;
			// // todo.done = false;
			// todo.doneforyesterday = false;
            if (todo.done) {
				todo.timescompleted -= 1;
			todo.done = false;
			}
			if (todo.doneforyesterday) {
				todo.timescompleted -= 1;
				todo.doneforyesterday = false;
			}

			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		}
		
		)
		let d = new Date();
		document.getElementById("clockdemo").innerHTML = d.getDate();
        
		const savedDay = localStorage.getItem("lastDate");
		const date = new Date();
		if (savedDay == date.getDate()) {
			const todos = localStorage.getItem("todos");
			// if (todos) {
			// 	var vals = JSON.parse(todos);
			// 	Object.keys(vals).forEach((key) => {
			// 		// document.querySelector(`#${key}`).checked = vals[key];
			// 		if (todo.done) {todo.done = false}
			// 		localStorage.setItem("lastDate", date.getDate());
			// 	});
				
			// // localStorage.setItem("todos", "");
			// }
			
		}
		else {
			// localStorage.setItem("lastDate", date.getDate());
			// localStorage.setItem("todos", "done: false");
			// const todos = localStorage.getItem("todos");
			todos.forEach(todo =>{
				curentdate = new Date().getDate()
		        todo[curentdate] = false
				todo.done = false
				todo.doneforyesterday = false
				localStorage.setItem('todos', JSON.stringify(todos));
				
			});
			localStorage.setItem("lastDate", date.getDate());
			// DisplayTodos();
		}

		// totalpoints = localStorage.setItem ("totalpoints", 0);
	    function updatescore () {
			totalscore = JSON.parse(localStorage.getItem("totalpoints"));
			totalscore += 1;
			localStorage.setItem ("totalpoints", JSON.stringify(totalscore));
			
		}
	    document.getElementById("totaltodos").innerHTML = `You did this many mementos:  ${totalpoints}`;
		
	
	
	})

	// document.getElementById("b1").addEventListener("click", displaycompletedtodos);
	// function displaycompletedtodos () {
	// 	todos.forEach(todo =>{
	// 	document.getElementById("completedtodos").innerHTML = `${todo[3]} + ${todo.content} `;});
	// }
	
    
	
}
// let daytime = {
// 	thisday : 30
// }
// localStorage.setItem('dateobj', JSON.stringify(daytime));

// function resetchecklist (){
// 	const todos = JSON.parse(window.localStorage.getItem('todos'))
// 	todo.done = false;
// 		localStorage.setItem('todos', JSON.stringify(todos))};

// // }
// const curentday = {
// 	actualcurentday : new Date().getDate()
// }


// if (daytime.thisday != curentday.actualcurentday) {

// 	// resetchecklist();

// 	daytime.thisday = curentday.actualcurentday;
// localStorage.setItem('dateobj', JSON.stringify(daytime));
// dateobj = JSON.parse(localStorage.getItem('dateobj'));

// console.log("this worked" + daytime.thisday + curentday.actualcurentday);
// }
// console.log(daytime.thisday);
// // else {console.log("this didnt work");}

