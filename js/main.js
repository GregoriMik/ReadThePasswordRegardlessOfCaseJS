// Projekt 5
//Sprawdź czy wpisane w input hasło pasuje do któregoś z haseł z tablicy. Jeśli tak wyświetl wiadomość w <div>
//Wielokść liter nie ma znaczenia (wykorzystaj metode .toUpperCase lub .toLowerCase - pamiętaj, że elementy te działają na pojedynczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'Dwa'];
const messages = ["super", "działa!"];
const div = document.querySelector("input");

// MAP METHOD

const LCPAsswords = passwords.map(password=>password.toLowerCase())



const showMessage = (e)=>{
  const textInput =e.target.value.toLowerCase();

  for (let i=0; i<LCPAsswords.length; i++){
    if(textInput === LCPAsswords[i]){
      div.innerHTML = messages[i];
    }
  }
}


input.addEventListener("input",showMessage)
// passwords.forEach((password,index)=>{
//  passwords[index] =  password.toLowerCase();
//   console.log(password[index]);
// })

// const showMessage =(e) =>{
//   const input = e.target.value.toLowerCase()
//   passwords.forEach((password, i)=>{
//     if(password === input){
//       document.querySelector('div').textContent = messages[i];
//     }
//   })
// }

// const showMessage = (e) => {
//   passwords.forEach((item, i)=>{
//     if(item.toLowerCase() === e.target.value.toLowerCase()){
//       // console.log("trafiliśmy")
//       document.querySelector('div').textContent = messages[i];
//     }
//   })
// }

input.addEventListener("input", showMessage)

