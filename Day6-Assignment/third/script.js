var user = prompt("Enter your name");
document.write("Welcome "+ user +" !! Have a fantastic day ahead :))");

//Switching to Dark mode
function turnDark() {
    
    var element = document.body;
    element.classList.toggle("dark-mode");
 
    var btn = document.getElementById("myBtn");
    if (btn.value == "Enable dark mode") {
        btn.value = "Disable dark mode";
        btn.innerHTML = "Disable dark mode";
    }
    else {
        btn.value = "Disable dark mode";
        btn.innerHTML = "Enable dark mode";
    }
}

 //Displaying clock
 const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
clock();
setInterval(clock,1000);





