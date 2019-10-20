'use strict'
var user = prompt('Hi there, whats your name?');
alert('hello' + ' ' + user + ' ' + ' and welcome to my page, im going to ask you a few quistions about me, Are you ready?');
alert('great');

var name = prompt('is my middle and third name the same?');
name = name.toUpperCase()
if (name == 'YES' || name == 'Y') {
    alert('Good job!');
    //console.log('Good job!'+name)

} else if (name == 'NO' || name == 'N') {
    alert('wrong answer')

}
var color = prompt('is my favourite color green?');
color = color.toUpperCase()
if (color == 'YES' || color == 'Y') {
    alert('sry, wrong answer');

} else if (color == 'NO' || color == 'N') {
    //console.log('great'+color)
    alert('nice!')

}
var hobby = prompt('do you think drawing is my hobby?');
hobby = hobby.toUpperCase()
if (hobby == 'YES' || hobby == 'Y') {
    //console.log('Great!'+hobby)
    alert('Great!');

} else if (hobby == 'NO' || hobby == 'N') {
    alert('oops, Wrong answer')

}
var drive = prompt('Do i have a drivers license?');
drive = drive.toUpperCase()
if (drive == 'YES' || drive == 'Y') {
    alert('good job!');
    //console.log('good job!'+drive)

} else if (drive == 'NO' || drive == 'N') {
    alert('Nope, wrong answer');

}
var food = prompt('is mlokheyeh my favourite food?');
food = food.toUpperCase()
if (food == 'YES' || food == 'Y') {
    alert('No' + ' ' + user + ' ' + ',no one likes mlokheyeh... ');

} else if (food == 'NO' || food == 'N') {
    alert('A bit obvious' + ' ' + user + ' ' + 'but good job none the less');
    //console.log('A bit obvious' + ' '+ user+ ' ' + 'but good job none the less'+food)

}

// var prompts [
//     [   
//      'is my middle and third name the same?',
//     ' Good job! ',
//     ' wrong answer '
//    ],

// [
//     ' is my favourite color green? ',
//     ' sry, wrong answer ',
//     ' nice! '
// ],
//     [
//         ' do you think drawing is my hobby? ',
//         ' Great! ',
//         ' oops, Wrong answer '

//     ],
//     [
//         ' Do i have a drivers license? ',
//         ' good job! ',
//         'Nope, wrong answer'
//     ],
//     [
//         ' is mlokheyeh my favourite food? ',
//         ' No' + ' ' + user + ' ' + ',no one likes mlokheyeh... ',
//         ' A bit obvious ' + ' ' + user + ' ' + ' but good job none the less ',

//     ]
// ]

// var question = prompt(prompts[0]);

// var answer = prompt(question[0]);
// answer = answer.toUpperCase();

// switch (name) {
//     case 'YES':
//     case 'Y':
//         alert(question[1])
// }


