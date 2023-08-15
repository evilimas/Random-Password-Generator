const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordLength = 15

//generate random character
function generateRandomCharecters(){
    return characters[Math.floor(Math.random() * characters.length)]
}

//generate random password from random characters
function generateRandomPasswords(){
    let randomPasswords = ""
    for(let i = 0; i < passwordLength; i++){
        randomPasswords += generateRandomCharecters()
    }
    return randomPasswords
}


//render input fields with random password when clicked the button

let generateBtn = document.getElementById("btn")
let inputOne = document.getElementById("input-one")
let inputTwo = document.getElementById("input-two")



generateBtn.addEventListener("click", function(){
    let generateRandomPasswordOne = generateRandomPasswords()
    let generateRandomPasswordTwo = generateRandomPasswords()

    inputOne.value = generateRandomPasswordOne
    inputTwo.value = generateRandomPasswordTwo
   
})
// copyn selected input

inputOne.addEventListener("click", function(){
    this.select()
    document.execCommand("copy")
    
})
inputTwo.addEventListener("click", function(){
    this.select()
    document.execCommand("copy")
    
})
