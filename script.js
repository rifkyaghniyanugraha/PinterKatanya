//GETTING ALL REQUIRED ELEMENTS
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//If Start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
}

//If Exit Button Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the infobox
}

//If Continue Button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the infobox
    quiz_box.classList.add("activeQuiz");//show quiz box
    showQuestions(0);
    queCounter(1);
}
let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

//If Next Button Clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    }else{
        console.log("Questions completed");
    }
}

//getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>';
                     '<div class="option">' + questions[index].options[1] + '<span></span></div>';
                     '<div class="option">' + questions[index].options[2] + '<span></span></div>';
                     '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}

function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>dari<p>' + questions.length + '</p>Pertanyaan</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

