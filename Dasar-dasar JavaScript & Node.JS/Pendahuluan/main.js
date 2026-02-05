// Penulisan code di JavaScript
console.log("Hello from main.js")

// localStorage.setItem("user", "alice")
let name= localStorage.getItem("user")

document.getElementById("greet").innerHTML = "Hi "+ name
// localStorage.clear()

// mengirimkan api device baterai local ke browser
navigator.getBattery().then(battery => {
    window.alert("Your battery level is :"+ battery.level)
})
