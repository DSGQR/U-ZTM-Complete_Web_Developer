let database = [
	{
		username : 'GQR',
		password : 'secretpassword'
	},
	{
		username : 'Anchor',
		password : 'supersecret'
	},
	{
		username : 'alchemist',
		password : '12345'
	},
	{
		username : 'DavyJones',
		password : 'asdwww'
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

function isUserValid(username, password) {
	for (let i = 0; i < database.length; i++) {
		if (database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert('Sorry, wrong username and/or password');
	}
}

var userNamePrompt = prompt('Enter Your Username.');
var passwordPrompt = prompt('Enter Your Password');

signIn(userNamePrompt, passwordPrompt);
