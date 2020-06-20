var todos = [ 'Clean Room!', 'Brush Teeth', 'Exercise', 'Study JavaScript', 'Eat Healthy!' ];

//----------- For Loop -----------//
// var todosLength = todos.length;
// for (let i = 0; i < todosLength; i++) {
//   console.log(todos[i], i)
  // console.log(todos[i]);
  // todos.pop();
  // console.log(todos);
// }

//--------- ForEach Loop ---------//
// todos.forEach(function(todo, i) {
//   console.log(todo, i)
// });

// or

function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);

//---------- While Loop ----------//
// var counterOne = 0;
// while (counterOne < 10) {
//   console.log(counterOne);
//   counterOne++;
// }

//-------- Do While Loop --------//
// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0)

