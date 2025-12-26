const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; 

password_one = document.getElementById("passwordSpaceOne")
password_two = document.getElementById("passwordSpaceTwo")

function indexPozGenerator(){
    return (Math.floor(Math.random() * 91))
}

function passwordStrGenerator(){
    let returnIndex = []
    for (let i = 0; i < 15; i++){
        returnIndex.push(characters[indexPozGenerator()])
    }
    return (returnIndex.join(""))
}

function generatePasswords(){
    password_one.textContent = passwordStrGenerator()
    password_two.textContent = passwordStrGenerator()
}







