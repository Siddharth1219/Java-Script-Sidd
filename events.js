//  mouse events list link -->>  https://developer.mozilla.org/en-US/docs/Web/Events#mouse_events --> 


let button = document.getElementById("btn");

// ---------Click--------------
// button.addEventListener("click", () => {
//     alert("I was clicked. Yay!!");
//     document.querySelector(".box").innerHTML = "<b>Yay I was clicked.</b> Enjoy your Click";
// })



// ---------Double Click--------------
button.addEventListener("dblclick", () => {
    alert("Doubled Clicked. Yay!!");
    document.querySelector(".box").innerHTML = "<b>Yay I was doubled clicked.</b> Enjoy your Click";
})


// ---------Context Menu (Right Click)--------------
button.addEventListener("contextmenu", () => {
    alert("Hack us by right: Clicking. Yay!!");
    document.querySelector(".box").innerHTML = "<b>Yay I was right clicked.</b> Enjoy your hacked Click";
})






// -----KEYBOARD EVENTS LIST LINK -->>  https://developer.mozilla.org/en-US/docs/Web/Events#keyboard_events --> 


// ---------Keydown--------------
button.addEventListener("keydown", (e) => {
    console.log(e);
})