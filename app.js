let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run(e);
    }
});

userNum.focus();

let counter = 0;


function run() {
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("userNumber");
    let c = document.getElementById("counter");
    if (a != b) {
        z.innerHTML = "Try again. Computer got " + b + " and User got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "Red";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "Attempt number " + counter;
        c.style.color = "white";
        c.style.backgroundColor = "darkcyan";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor = "red";
    } else if (a == b) {
        z.innerHTML = "Congrats. Computer got " + b + " and User got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "darkgreen";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "It took you " + counter + " attempts to get it right.";
        c.style.color = "white";
        c.style.backgroundColor = "darkcyan";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = "darkgreen";
    }
    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}