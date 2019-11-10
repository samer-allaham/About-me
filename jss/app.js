'use strict'
var userPoints = 0;

var user = prompt('Hi there, whats your name?');

while (!user) { user = prompt('really whats your name we\'ll need it later') };

alert(' hello ' + user + ' and welcome to my page, im going to ask you a few questions about me, Are you ready?');

alert(' great ');

console.log('user', user);

// var name = prompt('is my middle and third name the same?');
// name = name.toUpperCase()
// if (name == 'YES' || name == 'Y') {
//     alert('Good job!');
//     //console.log('Good job!'+name)

// } else if (name == 'NO' || name == 'N') {
//     alert('wrong answer')

// }
// var color = prompt('is my favourite color green?');
// color = color.toUpperCase()
// if (color == 'YES' || color == 'Y') {
//     alert('sry, wrong answer');

// } else if (color == 'NO' || color == 'N') {
//     //console.log('great'+color)
//     alert('nice!')

// }
// var hobby = prompt('do you think drawing is my hobby?');
// hobby = hobby.toUpperCase()
// if (hobby == 'YES' || hobby == 'Y') {
//     //console.log('Great!'+hobby)
//     alert('Great!');

// } else if (hobby == 'NO' || hobby == 'N') {
//     alert('oops, Wrong answer')

// }
// var drive = prompt('Do i have a drivers license?');
// drive = drive.toUpperCase()
// if (drive == 'YES' || drive == 'Y') {
//     alert('good job!');
//     //console.log('good job!'+drive)

// } else if (drive == 'NO' || drive == 'N') {
//     alert('Nope, wrong answer');

// }
// var food = prompt('is mlokheyeh my favourite food?');
// food = food.toUpperCase()
// if (food == 'YES' || food == 'Y') {
//     alert('No' + ' ' + user + ' ' + ',no one likes mlokheyeh... ');

// } else if (food == 'NO' || food == 'N') {
//     alert('A bit obvious' + ' ' + user + ' ' + 'but good job none the less');
//     //console.log('A bit obvious' + ' '+ user+ ' ' + 'but good job none the less'+food)

// }
function aboutme() {
    var questions = [
        [
            'is my middle and third name the same?',
            ' Good job! ',
            ' wrong answer ',
            true

        ],

        [
            ' is my favourite color green? ',
            ' sorry, wrong answer ',
            ' nice! ',
            false
        ],
        [
            ' do you think drawing is my hobby? ',
            ' Great! ',
            ' oops, Wrong answer ',
            true

        ],
        [
            ' Do i have a drivers license? ',
            ' good job! ',
            'Nope, wrong answer',
            true
        ],
        [
            ' is mlokheyeh my favourite food? ',
            ' No ' + user + ' ,no one likes mlokheyeh... ',
            ' A bit obvious ' + user + ' ,but good job none the less ',
            false
        ],
    ];
    for (var i = 0; i < questions.length; i++) {

        var question = questions[i];

        var answer = prompt(question[0]);

        answer = answer.toUpperCase();

        var yesReply = question[1];

        var noReply = question[2];
        var YesIstrue = question[3];
        switch (answer) {
            case 'YES':
            case 'Y':
                if (YesIstrue == true) {
                    userPoints++;
                }
                alert(yesReply + ' your score is ' + userPoints);
                break;

            case 'NO':
            case 'N':
                if (question[3] == false) {
                    userPoints++;
                }
                alert(noReply + ' your score is ' + userPoints);
                break;
            default:
                alert('keep the answer to \'yes\' or \'no\' only please')
        }

    } return question;
}
aboutme();
 


//Question 6
function guessNum() {
    var userNumber = 5;
    var maxTries = 5;
    var count = 0;

    var randomNumber = Math.floor(Math.random() * userNumber) + 1;

    while (picks !== randomNumber) {

        var picks = prompt(' pick a number between 1 and ' + userNumber);
        count += 1;

        if (count > maxTries) {
            document.write('<p>' + ' The correct answer is ' + randomNumber + '</p>');
            break;
        }
        if (picks == randomNumber) {
            userPoints++
            alert(' good job! ' + ' your score is ' + userPoints)
            break;

        }
        if (picks > randomNumber) {
            alert('too high');

        }
        if (picks < randomNumber) {
            alert('too low');

        }

    } return picks;
}
guessNum()



//Question 7 
function guessQuizz() {
    var options = [
        ['whats a thing that flies without wings?',
            'cloud',
            'plastic bag',
            'kite']
    ]
    for (var z = 0; z < options.length; z++) {

        var option = options[z];

        // var pick = prompt(option[0]);



        var maxTries1 = 5;

        var counter = 0;

        var ansCloud = option[1];

        var ansPlasticBag = option[2];

        var ansKite = option[3];

        while (pick !== options[z]) {

            var pick = prompt(option[0]);
            pick = pick.toLowerCase();
            counter += 1;

            if (counter > maxTries1) {
                document.write('<p>' + ' The correct answers are ' + option[1] + ' ,' + option[2] + ' ,' + option[3] +'.'+ '</p');
                break;
            }
            if (pick == ansCloud) {
                userPoints++
                alert(' goodjob! ' + ' your score is ' + userPoints)
                break;
            }

            if (pick == ansPlasticBag) {
                userPoints++
                alert(' goodjob! ' + ' your score is ' + userPoints)
                break;
            }
            if (pick == ansKite) {
                userPoints++
                alert(' goodjob! ' + ' your score is ' + userPoints)
                break;

            }
            if (pick !== ansKite && pick !== ansCloud && pick !== ansPlasticBag) {
                alert('wrong answer')
            }
        }

    } return options;
}
guessQuizz();
alert(user+','+' your score is' + ' ' + userPoints + '/7 Thanks for playing :)');





















// function askAnotherQuestion() {
//     return prompt("what are my favourite football teams?", "");
// }

// var counter2 = 0;
// var correctAns;

// while(!correctAns && counter2 < 6) {

//     counter2++;
//      correctAns = askAnotherQuestion() ==='real madrid';
//     correctAns=correctAns.toUpperCase();
//     if(correctAns > '3'){
//         alert ("too high");
//     }
//     else if (correctAns <'3') {
//         alert("too low");
//     }



//     else if (correctAns) {
//     alert("good job");
// } else {
//     alert("the answer is 3");
// }
//