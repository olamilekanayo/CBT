let index = 0
let output = document.getElementById("output")
let quest = [
    {
      question: "what is your favourite food?",
      Option: ['yam', 'rice', 'spag', 'beans'],
      answer: "spag"
    },
    {
        question: "what is your favourite country?",
        Option: ['china', 'canada', 'England', 'nigeria'],
        answer: "canada" 
    },
    {
     question: "what is your favourite snacks?",
      Option: ['pie', 'sausage', 'cake', 'eggroll'],
      answer: "cake"
    }
]
display()

function display(){
    
    output.innerHTML = `<h3>
    ${quest[index].question}
    <br></br>
    ${quest[index].Option}
    <br></br>
    ${quest[index].answer}
    </h3>`
}

 display()
 
function next(){
    if (index == quest.length -1) {
        index = 0
    }
    else{
        index++
    }
    display()
}
function prev(){
    if (index == 0) {
        index =cbt.length -1 
    } else{
        index--
    }
    display()
}