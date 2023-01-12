//function greeter
function greeter(person: string){
	return "Hello, " + person;
}

let user = "Teresa Teng CN";
document.body.innerHTML = greeter(user);