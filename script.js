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

let i = 0;
function redYellow() {
    $('.light1').toggleClass('active');
    $('.light2').toggleClass('active');
}
function    greenYellow() {
    $('.light3').toggleClass('active');
    $('.light2').toggleClass('active');
}

$('.exercise4__button').click(function() {
    if (i == 0) {
        redYellow();
        i++;
    } else  {
        if (i == 1) {
            greenYellow();
            i++;
        } else {
            if (i == 2) {
                greenYellow();
                i++;
            } else {
                if (i == 3) {
                    redYellow();
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

function activate() {
    $('.exercise5__list-item').removeClass('activeColor');
    $(this).toggleClass('activeColor')};

$('.item1').click(activate);
$('.item2').click(activate);
$('.item3').click(activate);
$('.item4').click(activate);
$('.item5').click(activate);
$('.item6').click(activate);
$('.item7').click(activate);



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



// Задание 7
// Создать html-страницу с деревом вложенных директорий.
// При клике на элемент списка, он должен сворачиваться или
// разворачиваться. При наведении на элемент, шрифт должен 
// становится жирным (с помощью CSS).

$('.exercise7__list-title').click(function() {
    $('.exercise7__list').toggleClass('activeFolder');
});
$('.subtitle1').click(function() {
    $('.sublist1').toggleClass('activeSubFolder');
});
$('.subtitle2').click(function() {
    $('.sublist2').toggleClass('activeSubFolder');
});



// Задание 8
// Создать html-страницу с блоком текста в рамочке.
// Реализовать возможность изменять размер блока, если зажать
// мышку в правом нижнем углу и тянуть ее дальше.
