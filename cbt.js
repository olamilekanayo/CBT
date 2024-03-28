let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let submitBtn = document.getElementById("submitBtn");

prevBtn.setAttribute("disabled", true)
submitBtn.style.display = "none"
let index = 0;
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
    output.innerHTML = `<h1>${index+1}. ${quest[index].question}</h1>`
    
    quest[index].Option.forEach(element => {
        output.innerHTML +=`
            <div>
                <input id="optAns" onchange="pickAns(event)" value="${element}" name="dan" type="radio" />
                <span>${element}</span>
            </div>
        `
    });
    // output.innerHTML += `
    //     <div>
    //         <input name="dan" type="radio" />
    //         <span>${quest[index].Option[0]}
    //     </div>
    //     <div>
    //         <input name="dan" type="radio" />
    //         <span>${quest[index].Option[1]}
    //     </div>
    //     <div>
    //         <input name="dan" type="radio" />
    //         <span>${quest[index].Option[2]}
    //     </div>
    //     <div>
    //         <input name="dan" type="radio" />
    //         <span>${quest[index].Option[3]}
    //     </div>
    // `
    // output.innerHTML = `<h3>
    // ${quest[index].question}
    // <br></br>
    // ${quest[index].Option}
    // <br></br>
    // ${quest[index].answer}
    // </h3>`
}

 display()
 function pickAns(ev){
    console.log(ev.target);
    console.log(ev.target.value);
 }
function next(){
    // console.log(index);
    prevBtn.removeAttribute("disabled");
    index++;
    if(index == quest.length-1){
        console.log(index);
        nextBtn.style.display = "none";
        submitBtn.style.display = "initial"
    }
    // if (index == quest.length -1) {
    //     index = 0
    // }
    // else{
    //     index++
    // }
    display()
}
function prev(){
    console.log(index);
    index--;
    nextBtn.style.display = "initial";
    submitBtn.style.display = "none"
    if(index == 0){
        prevBtn.setAttribute("disabled", true)
    }
    // if (index == 0) {
    //     prevBtn.setAttribute("disabled", true)
    //     // index =cbt.length -1 
    // } else{
    //     index--
    // }
    display()
}