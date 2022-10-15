var correct_Answr = 0;

// Declaring Random Number
var num_random1 = Math.ceil(Math.random() * 100);
var num_random2 = Math.ceil(Math.random() * 100);
var num_random3 = Math.ceil(Math.random() * 100);
var num_random4 = Math.ceil(Math.random() * 100);
var num_random5 = Math.ceil(Math.random() * (num_random3 - (num_random4 > 0)));

// Generate random background color
function generateRandomColor() {
    var symbols, color1, color2, color3;
    symbols = "0123456789ABCDEF";
    color1 = "#";
    color2 = "#";
    color3 = "#";

    for (var i = 0; i < 6; i++) {
        color1 = color1 + symbols[Math.floor(Math.random() * 16)];
        color2 = color2 + symbols[Math.floor(Math.random() * 16)];  
        color3 = color3 + symbols[Math.floor(Math.random() * 16)];       
    }

    document.getElementById('slotAnswr1').style.backgroundColor = color1;
    document.getElementById('slotAnswr2').style.backgroundColor = color2;
    document.getElementById('slotAnswr3').style.backgroundColor = color3;
}

// ADDITION
function addition() {
    correct_Answr = num_random1 + num_random2;

    min_Answer = correct_Answr - 10;
    max_Answer = correct_Answr + 10;

    var add_quest = num_random1 + " &#43; " + num_random2 + " &#61; ?";
    document.getElementById("add_quest").innerHTML = add_quest;
    
    var wrong_Answr1 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    var wrong_Answr2 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    var wrong_Answr3 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    
    document.getElementById('answr1').innerHTML = wrong_Answr1;
    document.getElementById("answr2").innerHTML = wrong_Answr2;
    document.getElementById("answr3").innerHTML = wrong_Answr3;
    
    var correct_AnswrIndex = Math.floor(Math.random() * 3) + 1;
    var correct_AnswrID = "answr" + correct_AnswrIndex;
    document.getElementById(correct_AnswrID).innerHTML = correct_Answr;
}

// SUBSTRACT
function substract() {
    correct_Answr = num_random1 - num_random2;

    min_Answer = correct_Answr - 10;
    max_Answer = correct_Answr + 10;

    var add_quest = num_random1 + " &#8722 " + num_random2 + " &#61; ?";
    document.getElementById("add_quest").innerHTML = add_quest;
    
    var wrong_Answr1 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    var wrong_Answr2 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    var wrong_Answr3 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    
    document.getElementById('answr1').innerHTML = wrong_Answr1;
    document.getElementById("answr2").innerHTML = wrong_Answr2;
    document.getElementById("answr3").innerHTML = wrong_Answr3;
    
    var correct_AnswrIndex = Math.floor(Math.random() * 3) + 1;
    var correct_AnswrID = "answr" + correct_AnswrIndex;
    document.getElementById(correct_AnswrID).innerHTML = correct_Answr;
}

// MULTIPLE
function multiple() {
    correct_Answr = num_random1 * num_random2;

    min_Answer = correct_Answr - 10;
    max_Answer = correct_Answr + 10;

    var add_quest = num_random1 + " &#215; " + num_random2 + " &#61; ?";
    document.getElementById("add_quest").innerHTML = add_quest;
    
    var wrong_Answr1 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    var wrong_Answr2 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    var wrong_Answr3 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    
    document.getElementById('answr1').innerHTML = wrong_Answr1;
    document.getElementById("answr2").innerHTML = wrong_Answr2;
    document.getElementById("answr3").innerHTML = wrong_Answr3;
    
    var correct_AnswrIndex = Math.floor(Math.random() * 3) + 1;
    var correct_AnswrID = "answr" + correct_AnswrIndex;
    document.getElementById(correct_AnswrID).innerHTML = correct_Answr;
}

// DIVISION
function division() {
    var devide_correct_Answr = num_random3 / num_random5;

    correct_Answr = devide_correct_Answr.toFixed(2);

    min_Answer = correct_Answr - 10;
    max_Answer = correct_Answr + 10;

    var add_quest = num_random3 + " &#247; " + num_random5 + " &#61; ?";
    document.getElementById("add_quest").innerHTML = add_quest;
    
    var wrong_Answr1 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    var wrong_Answr2 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    var wrong_Answr3 = Math.ceil(Math.random() * (max_Answer - min_Answer)) + min_Answer;
    
    document.getElementById('answr1').innerHTML = wrong_Answr1.toFixed(2);
    document.getElementById("answr2").innerHTML = wrong_Answr2.toFixed(2);
    document.getElementById("answr3").innerHTML = wrong_Answr3.toFixed(2);
    
    var correct_AnswrIndex = Math.floor(Math.random() * 3) + 1;
    var correct_AnswrID = "answr" + correct_AnswrIndex;
    document.getElementById(correct_AnswrID).innerHTML = correct_Answr;
}

// Answer Output
function ChkAnswer(buttonIndex) {
    var answer = document.getElementById("answr" + buttonIndex).innerHTML;

    if (answer == correct_Answr){
        document.getElementById("slotAnswr" + buttonIndex).style.paddingLeft = "25%";
        document.getElementById("slotAnswr" + buttonIndex).style.paddingRight = "25%";
        
        setTimeout(() => {
            window.location.reload(true);
        }, 3000);
    }

    else {
        document.getElementById("slotAnswr" + buttonIndex).style.marginLeft = "2%";
    }
}

