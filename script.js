// Задание 1
// Создать html-страницу для ввода имени пользователя.
// Необходимо проверять каждый символ, который вводит поль-
// зователь. Если он ввел цифру, то не отображать ее в input.

function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
}

// Задание 2
// Создать html-страницу с кнопкой Открыть и модальным
// окном. На модальном окне должен быть текст и кнопка Закрыть.
// Изначально модальное окно не отображается. При клике на
// кнопку Открыть появляется модальное окно, на кнопку –
// исчезает.

const btn = document.querySelector(".exercise2__button");
const clickOnBtn = function(){
    document.getElementById("modal").style.display = `block`;
}
const btnClose = document.querySelector(".exercise2__modal-button");
const clickOnCloseBtn = function(){
    document.getElementById("modal").style.display = `none`;
}

// Задание 3
// Создать html-страницу с футбольным полем, которое занимает всю ширину и высоту экрана, и мячом размером 100 на 100
// пикселей.
// Сделать так, чтобы при клике мышкой по полю, мяч плавно
// перемещался на место клика. Учтите: необходимо, чтобы центр
// мяча останавливался именно там,где был совершен клик мышкой.
// Также предусмотрите, чтобы мяч не выходил за границы поля.

const element = document.querySelector( '.exercise3__container' );
const rect = element.getBoundingClientRect();

$(".exercise3__container").click(function(e) {
    let offset = $(this).offset();
    let positionX = (e.pageX - offset.left);
    let positionY = (e.pageY - offset.top);
    if (positionX < 50) positionX = 50;
    if (positionY < 50) positionY = 60;
    if ((rect.width - positionX) < 50) positionX = rect.width - 50;
    if ((rect.height - positionY) < 50) positionY = rect.height - 60;
   
    document.getElementById("ball").style.left = `${positionX}px`;
    document.getElementById("ball").style.top = `${positionY}px`;
});

// Задание 4
// Создать html-страницу со светофором и кнопкой, которая
// переключает светофор на следующий цвет.

// const btn4 = document.querySelector(".exercise4__button");
// const red = document.getElementsByClassName('light1');
// const yellow = document.getElementsByClassName('light2');
// const green = document.getElementsByClassName('light3');
// const btn4 = document.querySelector('.exercise4__button')

// btn4.addEventListener('click', function (event) {
//   console.log('Произошло событие', event.type)
//   red.classList.add('active');
// })
// const clickOnBtn4 = function() {
//     red.addEventListener('click', function (event) {
//         console.log('Произошло событие', event.type)
//     })
//     // red.classList.remove('active');
//     // yellow.classList.add('active');
//     // green.classList.remove('active');
// }
// .addEventListener('click', function (event) {
//     console.log('Произошло событие', event.type)
// })

let i = 0;
$('.exercise4__button').click(function() {
    if (i == 0) {
        $('.light1').toggleClass('active');
        $('.light2').toggleClass('active');
        i++ ;
    } else  {
        if (i == 1) {
            $('.light3').toggleClass('active');
            $('.light2').toggleClass('active');
            i++ ;
        } else {
            if (i == 2) {
                $('.light3').toggleClass('active');
                $('.light2').toggleClass('active');
                i++ ;
            } else {
                if (i == 3) {
                    $('.light1').toggleClass('active');
                    $('.light2').toggleClass('active');
                    i = 0;
                }
            }
        }
    }
    
});

// Задание 5
// Создать html-страницу со списком книг.
// При щелчке на книгу, цветфона долженменяться на оранжевый.
// при щелчке на другую книгу, предыдущей-необходимо возвращать
// прежний цвет.


$('.item1').click(function() {
    $('.exercise5__list-item').removeClass('activeColor');
    $('.item1').toggleClass('activeColor');
})
$('.item2').click(function() {
    $('.exercise5__list-item').removeClass('activeColor');
    $('.item2').toggleClass('activeColor');
})
$('.item3').click(function() {
    $('.exercise5__list-item').removeClass('activeColor');
    $('.item3').toggleClass('activeColor');
})
$('.item4').click(function() {
    $('.exercise5__list-item').removeClass('activeColor');
    $('.item4').toggleClass('activeColor');
})
$('.item5').click(function() {
    $('.exercise5__list-item').removeClass('activeColor');
    $('.item5').toggleClass('activeColor');
})
$('.item6').click(function() {
    $('.exercise5__list-item').removeClass('activeColor');
    $('.item6').toggleClass('activeColor');
})
$('.item7').click(function() {
    $('.exercise5__list-item').removeClass('activeColor');
    $('.item7').toggleClass('activeColor');
})

// Задание 6
// Создать html-страницу с несколькими кнопками.
// При наведении на кнопку, должна появляться подсказка с текс-
// том. По умолчанию – подсказка появляется сверху от кнопки. Но
// если она не помещается сверху от кнопки, тогда отображается снизу.

for (let i = 1; i < 5; i++) {
let tool = document.querySelector(`.btn_${i}`);
let parentTool = document.querySelector('.exercise6');
let yPosition = tool.offsetTop - parentTool.offsetTop;
if (yPosition < 60) {
    $(`.tool6${i}`).addClass('toolDown');
}
}

