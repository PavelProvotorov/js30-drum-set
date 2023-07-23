// VARIABLES
const sfx_clap = new Audio("sounds/clap.wav")

// SIGNALS
addEventListener("keypress", (event) => {
    const key_code = event.code
    const key_repeat = event.repeat
    const element = document.getElementById(key_code)

    // Prevent sound from repeating 
    // Repeat is not always returned true in some browsers, checking for class instead
    if (element !== null && key_repeat !== true && !element.classList.contains("key-pressed")){
        element.classList.toggle("key-pressed")
    } else {
        return
    }

    // Check which sound to play based on key
    if (key_code === "KeyA"){
        new Audio("sounds/clap.wav").play()
    } else if (key_code === "KeyS"){
        new Audio("sounds/hihat.wav").play()
    } else if (key_code === "KeyD"){
        new Audio("sounds/kick.wav").play()
    } else if (key_code === "KeyF"){
        new Audio("sounds/openhat.wav").play()
    } else if (key_code === "KeyG"){
        new Audio("sounds/boom.wav").play()
    } else if (key_code === "KeyH"){
        new Audio("sounds/ride.wav").play()
    } else if (key_code === "KeyJ"){
        new Audio("sounds/snare.wav").play()
    } else if (key_code === "KeyK"){
        new Audio("sounds/tom.wav").play()
    } else if (key_code === "KeyL"){
        new Audio("sounds/tink.wav").play()
    } else{
    }
});

addEventListener("keyup", (event) => {
    const key_code = event.code
    const element = document.getElementById(key_code)
    if (element !== null){
        element.classList.toggle("key-pressed")
    }
});