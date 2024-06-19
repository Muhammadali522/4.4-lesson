// let userName = prompt("Ismingizni kriting ")

// let newText = document.createElement("h1")

// newText.textContent = userName

// document.body.appendChild(newText)


let Random = Math.round(Math.random() * 100)

let newText = document.createElement("h1")

// newText.textContent = Random

// newText.style.color = "red"
// newText.style.textAlign = "center"
// newText.style.marginTop = "250px"
// newText.style.fontSize = "200px"

newText.innerHTML = `<h2 style="color:red; text-align:center; margin-top: 250px; font-size: 200px">${Random}</h2>`  
document.body.style.backgroundColor = "black"

document.body.appendChild(newText)