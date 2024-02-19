const dino=document.getElementById("dino") //силка на елементи ,які будуть використовуватись у джаваскрипт файлі 
const cactus=document.getElementById("cactus")//силка на елементи ,які будуть використовуватись у джаваскрипт файлі 

document.addEventListener("keydown" , function(event) {//обробник подій при якому при нажатті кнопки запускається функція jump
     jump()
})
function jump() {
   if (dino.classList !="jump") {
    dino.classList.add("jump") //до нашої константи діно за допомогою метода класліст додаєм клас jump
   }
   setTimeout(function(){
    dino.classList.remove("jump")
   },3000)
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")) 
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    //parseInt - розбиває строковий елемент і повертає ціле число 
    //getComputedStyle - повертає обєкт який містить значення всіх CSS-свойств
    //getPropertyValue - отримуєм значення CSS елемента (позволяє отримати свойства яке має бути рбработано , але воно йде у строковому значенні)
    if(cactusleft < 90 && cactusleft> 50 && dinoTop>140) {
        alert("Game Over!")
    }
},10) //setInterval - дозволяє визивати функцію регулярно повторюючи визов через вказаний інтервал часу