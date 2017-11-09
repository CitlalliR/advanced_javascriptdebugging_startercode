
function magicianMagic() {
    return Math.floor((Math.random() * 100) + 1);
}
var secretNumber = magicianMagic();
debugger;
var input = prompt("Im thinking of a number between 1 - 100: ");

if(secretNumber == input) {
    alert("Impressive!");
}
    else if (secretNumber > input){
        alert("think bigger");
    }
    else if (secretNumber < input){
        alert("think smaller");
    }
 else {
	alert("Wrong!");
}
