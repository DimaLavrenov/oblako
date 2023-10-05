let tea_button = document.querySelector('.menu_item.tea')
let bar_button = document.querySelector('.menu_item.bar')
let drinks_button = document.querySelector('.menu_item.drinks')
let snacks_button = document.querySelector('.menu_item.snacks')
let smoke_button = document.querySelector('.menu_item.smoke')


tea_button.addEventListener('click', function(e){
    let current = document.querySelector(".menu_item.active")
    let add = document.querySelector('.add_menu.active')
    let menu = document.querySelector('.selector.active')

    add.classList.remove("active")
    menu.classList.remove('active')
    current.classList.remove('active')

    add.classList.add("hidden")
    menu.classList.add('hidden')
    current.classList.add('hidden')

    document.querySelector('.menu_item.tea').classList.add("active")
    document.querySelector('.add_menu.tea_menu').classList.add("active")
    document.querySelector('.add_menu.tea_menu').classList.remove("hidden")
    document.querySelector('.selector.tea').classList.add("active")
    document.querySelector('.selector.tea').classList.remove("hidden")
})

bar_button.addEventListener('click', function(e){
    let current = document.querySelector(".menu_item.active")
    let add = document.querySelector('.add_menu.active')
    let menu = document.querySelector('.selector.active')

    add.classList.remove("active")
    menu.classList.remove('active')
    current.classList.remove('active')

    add.classList.add("hidden")
    menu.classList.add('hidden')
    current.classList.add('hidden')

    document.querySelector('.menu_item.bar').classList.add("active")
    document.querySelector('.add_menu.bar_menu').classList.add("active")
    document.querySelector('.add_menu.bar_menu').classList.remove("hidden")
    document.querySelector('.selector.bar').classList.add("active")
    document.querySelector('.selector.bar').classList.remove("hidden")
})

drinks_button.addEventListener('click', function(e){
    let current = document.querySelector(".menu_item.active")
    let add = document.querySelector('.add_menu.active')
    let menu = document.querySelector('.selector.active')

    add.classList.remove("active")
    menu.classList.remove('active')
    current.classList.remove('active')

    add.classList.add("hidden")
    menu.classList.add('hidden')
    current.classList.add('hidden')

    document.querySelector('.menu_item.drinks').classList.add("active")
    document.querySelector('.add_menu.drinks_menu').classList.add("active")
    document.querySelector('.add_menu.drinks_menu').classList.remove("hidden")
    document.querySelector('.selector.drinks').classList.add("active")
    document.querySelector('.selector.drinks').classList.remove("hidden")
})

snacks_button.addEventListener('click', function(e){
    let current = document.querySelector(".menu_item.active")
    let add = document.querySelector('.add_menu.active')
    let menu = document.querySelector('.selector.active')

    add.classList.remove("active")
    menu.classList.remove('active')
    current.classList.remove('active')

    add.classList.add("hidden")
    menu.classList.add('hidden')
    current.classList.add('hidden')

    document.querySelector('.menu_item.snacks').classList.add("active")
    document.querySelector('.add_menu.snacks_menu').classList.add("active")
    document.querySelector('.add_menu.snacks_menu').classList.remove("hidden")
    document.querySelector('.selector.snacks').classList.add("active")
    document.querySelector('.selector.snacks').classList.remove("hidden")
})

smoke_button.addEventListener('click', function(e){
    let current = document.querySelector(".menu_item.active")
    let add = document.querySelector('.add_menu.active')
    let menu = document.querySelector('.selector.active')

    add.classList.remove("active")
    menu.classList.remove('active')
    current.classList.remove('active')

    add.classList.add("hidden")
    menu.classList.add('hidden')
    current.classList.add('hidden')

    document.querySelector('.menu_item.smoke').classList.add("active")
    document.querySelector('.add_menu.smoke_menu').classList.add("active")
    document.querySelector('.add_menu.smoke_menu').classList.remove("hidden")
    document.querySelector('.selector.smoke').classList.add("active")
    document.querySelector('.selector.smoke').classList.remove("hidden")
})

let menu = document.querySelector(".menu")
let selector = document.querySelector(".selector")

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    console.log(Math.round(scrollPosition));

    if(scrollPosition > 224){
        menu.classList.add("hidden")
        selector.classList.add("mt20")
    } else{
        menu.classList.remove("hidden")
        selector.classList.remove("mt20")
    }
});

const handleClick = event => {
    event.preventDefault()  
    const headerOffset = 150 // полная высота header'a
    const contentAnchors = document.querySelectorAll(".anchor-hash-content")
    const href = event.target.getAttribute("href")
    const elementToScroll = Array.from(contentAnchors).filter(item => 
    item.getAttribute("href") === href) 
    const elementPosition = elementToScroll[0].offsetTop
    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth"
    })
  }
  
  document.querySelectorAll(".anchor-hash-header").forEach(item => 
  item.addEventListener("click", handleClick))
  // игнорирует клики по заголовкам, здесь только для примера 
  document.querySelectorAll(".anchor-hash-content").forEach(item => 
  item.addEventListener("click", event => event.preventDefault()))

let now = new Date()
let day = now.getDay()
let hourss = now.getHours()
let minutes = now.getMinutes()
let dayWeek = document.querySelector('.day_of_week')
let hours = document.querySelector('.opening_hours')

if(day == 1 || day == 2 && hourss < 2){
    dayWeek.innerText = 'Понедельник'
    hours.innerText = '14:00 - 02:00'
} else if(day == 2 || day == 3 && hourss < 2){
    dayWeek.innerText = 'Вторник'
    hours.innerText = '14:00 - 02:00'
} else if(day == 3 || day == 4 && hourss < 2){
    dayWeek.innerText = 'Среда'
    hours.innerText = '14:00 - 02:00'
} else if(day == 4 || day == 5 && hourss < 2){
    dayWeek.innerText = 'Четверг'
    hours.innerText = '14:00 - 02:00'
} else if(day == 5 || day == 6 && hourss < 4){
    dayWeek.innerText = 'Пятница'
    hours.innerText = '14:00 - 04:00'
} else if(day == 6 || day == 7 && hourss < 4){
    dayWeek.innerText = 'Суббота'
    hours.innerText = '14:00 - 04:00'
} else if(day == 7 || day == 1 && hourss < 2){
    dayWeek.innerText = 'Воскресенье'
    hours.innerText = '14:00 - 02:00'
}
