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
				
				if (todo[1]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
		}
			

			document.getElementById("b2").addEventListener("click", displaycompletedtodos2);
		document.getElementById("b2").addEventListener("click", deleteinside);
		function displaycompletedtodos2 () {
				
				if (todo[2]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
		}
				
			document.getElementById("b3").addEventListener("click", displaycompletedtodos3);
		document.getElementById("b3").addEventListener("click", deleteinside);
		function displaycompletedtodos3 () {
				
			if (todo[3]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
		}
				
			document.getElementById("b4").addEventListener("click", displaycompletedtodos4);
		document.getElementById("b4").addEventListener("click", deleteinside);
			function displaycompletedtodos4 () {
					
					if (todo[4]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
			}
					
			document.getElementById("b5").addEventListener("click", displaycompletedtodos5);
		document.getElementById("b5").addEventListener("click", deleteinside);
			function displaycompletedtodos5 () {
					
					if (todo[4]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
			}
					
			document.getElementById("b6").addEventListener("click", displaycompletedtodos6);
		document.getElementById("b6").addEventListener("click", deleteinside);
			function displaycompletedtodos6 () {
						
						if (todo[6]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
			}
						
			document.getElementById("b7").addEventListener("click", displaycompletedtodos7);
		document.getElementById("b7").addEventListener("click", deleteinside);
			function displaycompletedtodos7 () {
					
					if (todo[7]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
				
					
				}
				document.getElementById("b8").addEventListener("click", displaycompletedtodos8);
		document.getElementById("b8").addEventListener("click", deleteinside);
			function displaycompletedtodos8 () {
					
					if (todo[8]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b9").addEventListener("click", displaycompletedtodos9);
		document.getElementById("b9").addEventListener("click", deleteinside);
			function displaycompletedtodos9 () {
					
					if (todo[9]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b10").addEventListener("click", displaycompletedtodos10);
		document.getElementById("b10").addEventListener("click", deleteinside);
			function displaycompletedtodos10 () {
					if (todo[10]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b11").addEventListener("click", displaycompletedtodos11);
		document.getElementById("b11").addEventListener("click", deleteinside);
			function displaycompletedtodos11 () {
					
					if (todo[11]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b12").addEventListener("click", displaycompletedtodos12);
		document.getElementById("b12").addEventListener("click", deleteinside);
			function displaycompletedtodos12 () {
					
					if (todo[12]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b13").addEventListener("click", displaycompletedtodos13);
		document.getElementById("b13").addEventListener("click", deleteinside);
			function displaycompletedtodos13 () {
					
				if (todo[13]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b14").addEventListener("click", displaycompletedtodos14);
		document.getElementById("b14").addEventListener("click", deleteinside);
				function displaycompletedtodos14 () {
						
						if (todo[14]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
						
					}
					document.getElementById("b15").addEventListener("click", displaycompletedtodos15);
		document.getElementById("b15").addEventListener("click", deleteinside);
			function displaycompletedtodos15 () {
					
					if (todo[15]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b16").addEventListener("click", displaycompletedtodos16);
		document.getElementById("b16").addEventListener("click", deleteinside);
			function displaycompletedtodos16 () {
					
				if (todo[16]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b17").addEventListener("click", displaycompletedtodos17);
		document.getElementById("b17").addEventListener("click", deleteinside);
			function displaycompletedtodos17 () {
					
				if (todo[17]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b18").addEventListener("click", displaycompletedtodos18);
		document.getElementById("b18").addEventListener("click", deleteinside);
			function displaycompletedtodos18 () {
					
				if (todo[18]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b19").addEventListener("click", displaycompletedtodos19);
		document.getElementById("b19").addEventListener("click", deleteinside);
			function displaycompletedtodos19 () {
					
				if (todo[19]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b20").addEventListener("click", displaycompletedtodos20);
		document.getElementById("b20").addEventListener("click", deleteinside);
			function displaycompletedtodos20 () {
					
				if (todo[20]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b21").addEventListener("click", displaycompletedtodos21);
		document.getElementById("b21").addEventListener("click", deleteinside);
			function displaycompletedtodos21 () {
					
			if (todo[21]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b22").addEventListener("click", displaycompletedtodos22);
		document.getElementById("b22").addEventListener("click", deleteinside);
			function displaycompletedtodos22 () {
					if (todo[22]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b23").addEventListener("click", displaycompletedtodos23);
		document.getElementById("b23").addEventListener("click", deleteinside);
			function displaycompletedtodos23 () {
					if (todo[23]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b24").addEventListener("click", displaycompletedtodos24);
		document.getElementById("b24").addEventListener("click", deleteinside);
			function displaycompletedtodos24 () {
					
					if (todo[24]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b25").addEventListener("click", displaycompletedtodos25);
		document.getElementById("b25").addEventListener("click", deleteinside);
			function displaycompletedtodos25 () {
					
if (todo[25]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;					
				}
				document.getElementById("b26").addEventListener("click", displaycompletedtodos26);
		document.getElementById("b26").addEventListener("click", deleteinside);
			function displaycompletedtodos26 () {
				if (todo[26]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b27").addEventListener("click", displaycompletedtodos27);
		document.getElementById("b27").addEventListener("click", deleteinside);
			function displaycompletedtodos27 () {
				if (todo[27]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b28").addEventListener("click", displaycompletedtodos28);
		document.getElementById("b28").addEventListener("click", deleteinside);
				function displaycompletedtodos28 () {
						
				if (todo[28]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
						
					}
					document.getElementById("b29").addEventListener("click", displaycompletedtodos29);
		document.getElementById("b29").addEventListener("click", deleteinside);
			function displaycompletedtodos29 () {
					if (todo[29]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b30").addEventListener("click", displaycompletedtodos30);
		document.getElementById("b30").addEventListener("click", deleteinside);
			function displaycompletedtodos30 () {
				if (todo[30]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
				}
				document.getElementById("b31").addEventListener("click", displaycompletedtodos31);
		document.getElementById("b31").addEventListener("click", deleteinside);
			function displaycompletedtodos31 () {
					if (todo[31]>0) {
						document.getElementById("completedtodos").innerHTML += `${todo.content} was done </br>`;
					}
					else document.getElementById("completedtodos").innerHTML += `${todo.content} was not done </br>`;
					
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
		    todo[curentdate] = false
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
		
		
		todos.forEach(todo =>{
			curentdate = new Date().getDate()
			if (todo[curentdate-1] != true && todo[curentdate-2] != true && todo[curentdate] != true ) {
				todo.timescompleted = 0
				console.log(todo.content);
			}
			
			localStorage.setItem('todos', JSON.stringify(todos));
		     
				
				
		});
	
	
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

