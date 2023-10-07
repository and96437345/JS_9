// document.querySelector(".block")
// $('.block').click(function() 
    // $(".block").toggleClass("newClass")
    // $(".block").addClass("newClass")
    // $(".block").removeClass("newClass")
//     $(this).toggleClass("newClass")
// })

// $(".child11").click(function(){
//     // $(this).toggleClass("isActive")
//     $(this).parent().next().toggleClass("isActive")
//     .parent() - выход на родителя
//     .next() - следующий в узле
//     .prev() - предыдущий в узле
//     .children() - выход на ребенка
//     .closest(".allParent") выход на allParent
//     .find(".child44") поиск элемента child44
//     .siblings() - все соседние элементы
// })

// const btn = document.querySelector("#button")
// console.log(btn)

// const btn1 = $("#button")
// console.log(btn1[0])

// btn.addEventListener("click", function(){
//     console.log("Что будем делать с этим элементом")
// })

// $("#button").hover(function(){
//     console.log("eto hover")
// })

// btn.addEventListener("mouseover", function(){
//     btn.style.color = "blue";
// })

// btn.addEventListener("mouseout", function(){
//     btn.style.color = "red";
// })

// document.addEventListener("keyup", function(event){
//   console.log("Я нажал")
//     alert(event.key)//     if (event.key == "Escape") {
// //         alert('Вы нажали Escape')
// //     }
//     if (event.key == "F5") {
//         event.preventDefault()
//         return
//     }
// })

// const btn = document.querySelector(".button")
// console.log(btn)

// const clickOnBtn = function(event){
//     console.log(event)
//     console.log(event.screenX)
//     btn.classList.add("newClass, newClass2")
//     btn.classList.remove("newClass")
//     btn.classList.toggle("newClass")
//     if (btn.classList.contains("newClass")){

//     }
//     btn.classList.replace("oldClass", "newClass")
// }


// btn.addEventListener('click', clickOnBtn);
// btn.removeEventListener('click', clickOnBtn);

// const tabHead = document.querySelector(".tabs__head")
// const tabBody = document.querySelector(".tabs__body")

    // tabHead.addEventListener('click', function() {
    // tabBody.classList.toggle(".tabs__body--open")
    // })

    // tabHead.addEventListener('click', () => {
    //     tabBody.classList.toggle(".tabs__body--open")
    // }

    // $(".tabs__head").click(function()) {
    //     $(".tabs__head").toggleClass("tabs__body--open")
    // }

    // $(".tabs__caption").click(function() {

    
    // $(this).addClass("tabs__caption--active");
    // $(this).siblings().removeClass("tabs__caption--active");
    // let currentTabIndex = $(this).index();
    // console.log(currentTabIndex);

    // })