let myBtn = document.querySelector(".btn"); 
let container = document.querySelector(".container");
let cicle = document.querySelector(".cicle");
let mode = document.querySelector(".mode");
let root = document.documentElement; 
myBtn.addEventListener("click" , function(e) {

    if(container.classList.contains("dark")) {
        root.style.setProperty("--black-color" , "white");
        root.style.setProperty("--white-color" , "black");
        root.style.setProperty("--body-color" , "rgb(245,247,255)");
        root.style.setProperty("--box-color" , "rgb(228,229,240)");
        cicle.style.marginLeft = "40px";
        container.classList.remove("dark");
        container.classList.add("light");
        mode.style.color = "black"
        mode.textContent = "Light Mode"
    }
    else {
        root.style.setProperty("--black-color" , "rgba(0, 0, 0, 0.801)");
        root.style.setProperty("--white-color" , "white");

        root.style.setProperty("--body-color" , "rgb(31, 33, 46)");
        root.style.setProperty("--box-color" , "rgb(45, 50, 73)");
        cicle.style.marginLeft = "1px";
        container.classList.remove("light");
        container.classList.add("dark");
        mode.style.color = "white"
        mode.textContent = "Dark Mode"
    }
})
