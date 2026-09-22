// document.querySelector(".container").outerhtml
// undefined

// document.querySelector(".container").outerHTML `<div class="container">\n        <div class="box">Hello, I'm Siddharth Yadav</div>\n    </div>`

// document.querySelector(".container").tagName 'DIV'

// document.querySelector(".container").nodeName 'DIV'

// document.querySelector(".container").tectContent
// undefined

// document.querySelector(".container").textContent "\n        Hello, I'm Siddharth Yadav\n    "

// document.querySelector(".container").hidden
// false

// document.querySelector(".container").hidden = true
// true

// document.querySelector(".container").tagName
// 'DIV'

// document.querySelector(".container").innerHTML = "I AM HARRY"
// 'I AM HARRY'




// attribute Methods are

// document.querySelector(".box").hasAttribute("style")
// true

// document.querySelector(".box").getAttribute("style")
// 'display:flex'

// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

// document.querySelector(".box").setAttribute("style", "display:inline"
// VM1505:1 Uncaught SyntaxError: missing ) after argument list (at VM1505:1:54)

// document.querySelector(".box").setAttribute("style", "display:inline")
// undefined