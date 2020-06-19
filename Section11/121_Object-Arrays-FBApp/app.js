let database = [
	{
		username : 'GQR',
		password : 'secretpassword'
	}
];

let newsfeed = [
	{
		username : 'Jack',
		timeline : 'Whats everyone doing tonight?'
	},
	{
		username : 'Lexi', 
		timeline : 'Ready to party this weekend!'
	},
	{
		username : 'Charlotte',
		timeline : 'I cant wait to see the world!'
	}
];

var userNamePrompt = prompt('Enter Your Username.');
var passwordPrompt = prompt('Enter Your Password');

function signIn(username, password) {
  if (username === database[0].username && 
      password === database[0].password) {
        console.log(newsfeed)
      } else {
        alert('Sorry, wrong username and/or password')
      }
}

signIn(userNamePrompt, passwordPrompt);