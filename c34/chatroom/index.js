
let deleted = document.querySelectorAll(".delete")
updateDeleted()

let input = document.getElementById("user_input")
let chat = document.getElementById("chatbox")
// const form = document.querySelector('form')
// form.addEventListener('submit', nullMessage)
let fullJSON

function addMessage (message, sender){
    let newMessage = ` <div class= "message" id= 3> 
    <span id ="time">${time()}</span>
    <span id="person" class="sender">${sender}</span>
    <span id="message3">${message}</span>
    <span  id="deletebutton" class="delete" >❌</span>
</div>`
    chat.innerHTML = chat.innerHTML + newMessage 
    updateDeleted()
    input.value = " "
}

function nullMessage(event){
    console.log('event', event)
    event.preventDefault()
    if (input.value.trim().length === 0){
        alert("please put in text")
    } else {
        addMessage(document.getElementById("user_input").value, sender())
    // return document.getElementById("user_input").value
    }
}

 function sender(){
    let names = ["Me:", "Myself:", "I:"]
    return names[Math.floor(Math.random()*names.length)];
    
}

function time(){
    var d = new Date();
    return d.getHours() + ':' + d.getMinutes(); 
    
}

// function deleteButton(){
//     return document.getElementById("deletebutton" ).innerHTML = "❌"

// }

function updateDeleted(){
    deleted = document.querySelectorAll(".delete")
    deleted.forEach((param) => {
        param.addEventListener("click", function(){
            this.closest('div').remove()
        })
    });
}

function getJoke(){
    let jokeOutput= ""
    fetch('https://api.icndb.com/jokes/random')
    .then(function(response){
    return response.json();
    
    })
    .then(function(prettyJson){
       let fullJSON = JSON.stringify(prettyJson)
       let tryThis = JSON.parse(fullJSON)
       addMessage(tryThis.value.joke, "Facts:")
        // jokeOutput = `${tryThis.value.joke}`
        // console.log(jokeOutput)
        // return jokeOutput
            })
}


// function addJoke(){
//         return 
// }

function senderResponse(){
    let senderReposnse = ` <div class= "message" id= 3> 
    <span >${time()}</span>
    <span class="sender">Fact:</span>
    <span >${getJoke()}</span>
    <span id="deletebutton" class="delete" >❌</span>
</div>`
    chat.innerHTML = chat.innerHTML + senderReposnse
    updateDeleted()
    input.value = " "
}

   









    
console.log(sender())