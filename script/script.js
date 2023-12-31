let tea_button = document.querySelector(".menu_item.tea");
let bar_button = document.querySelector(".menu_item.bar");
let drinks_button = document.querySelector(".menu_item.drinks");
let snacks_button = document.querySelector(".menu_item.snacks");
let smoke_button = document.querySelector(".menu_item.smoke");

tea_button.addEventListener("click", function(e) {
    let current = document.querySelector(".menu_item.active");
    let add = document.querySelector(".add_menu.active");
    let menu = document.querySelector(".selector.active");

    add.classList.remove("active");
    menu.classList.remove("active");
    current.classList.remove("active");

    add.classList.add("hidden");
    menu.classList.add("hidden");
    current.classList.add("hidden");

    document.querySelector(".menu_item.tea").classList.add("active");
    document.querySelector(".add_menu.tea_menu").classList.add("active");
    document.querySelector(".add_menu.tea_menu").classList.remove("hidden");
    document.querySelector(".selector.tea").classList.add("active");
    document.querySelector(".selector.tea").classList.remove("hidden");
});

bar_button.addEventListener("click", function(e) {
    let current = document.querySelector(".menu_item.active");
    let add = document.querySelector(".add_menu.active");
    let menu = document.querySelector(".selector.active");

    add.classList.remove("active");
    menu.classList.remove("active");
    current.classList.remove("active");

    add.classList.add("hidden");
    menu.classList.add("hidden");
    current.classList.add("hidden");

    document.querySelector(".menu_item.bar").classList.add("active");
    document.querySelector(".add_menu.bar_menu").classList.add("active");
    document.querySelector(".add_menu.bar_menu").classList.remove("hidden");
    document.querySelector(".selector.bar").classList.add("active");
    document.querySelector(".selector.bar").classList.remove("hidden");
});

drinks_button.addEventListener("click", function(e) {
    let current = document.querySelector(".menu_item.active");
    let add = document.querySelector(".add_menu.active");
    let menu = document.querySelector(".selector.active");

    add.classList.remove("active");
    menu.classList.remove("active");
    current.classList.remove("active");

    add.classList.add("hidden");
    menu.classList.add("hidden");
    current.classList.add("hidden");

    document.querySelector(".menu_item.drinks").classList.add("active");
    document.querySelector(".add_menu.drinks_menu").classList.add("active");
    document.querySelector(".add_menu.drinks_menu").classList.remove("hidden");
    document.querySelector(".selector.drinks").classList.add("active");
    document.querySelector(".selector.drinks").classList.remove("hidden");
});

snacks_button.addEventListener("click", function(e) {
    let current = document.querySelector(".menu_item.active");
    let add = document.querySelector(".add_menu.active");
    let menu = document.querySelector(".selector.active");

    add.classList.remove("active");
    menu.classList.remove("active");
    current.classList.remove("active");

    add.classList.add("hidden");
    menu.classList.add("hidden");
    current.classList.add("hidden");

    document.querySelector(".menu_item.snacks").classList.add("active");
    document.querySelector(".add_menu.snacks_menu").classList.add("active");
    document.querySelector(".add_menu.snacks_menu").classList.remove("hidden");
    document.querySelector(".selector.snacks").classList.add("active");
    document.querySelector(".selector.snacks").classList.remove("hidden");
});

smoke_button.addEventListener("click", function(e) {
    let current = document.querySelector(".menu_item.active");
    let add = document.querySelector(".add_menu.active");
    let menu = document.querySelector(".selector.active");

    add.classList.remove("active");
    menu.classList.remove("active");
    current.classList.remove("active");

    add.classList.add("hidden");
    menu.classList.add("hidden");
    current.classList.add("hidden");

    document.querySelector(".menu_item.smoke").classList.add("active");
    document.querySelector(".add_menu.smoke_menu").classList.add("active");
    document.querySelector(".add_menu.smoke_menu").classList.remove("hidden");
    document.querySelector(".selector.smoke").classList.add("active");
    document.querySelector(".selector.smoke").classList.remove("hidden");
});

let menu = document.querySelector(".menu");
let selector = document.querySelector(".selector");

window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;

    // if (scrollPosition > 224) {
    //     menu.classList.add("hidden");
    //     selector.classList.add("mt20");
    // } else {
    //     menu.classList.remove("hidden");
    //     selector.classList.remove("mt20");
    // }

    if (window.screen.availWidth == 320) {
        if (scrollPosition > 480) {
            menu.classList.add("hidden");
            selector.classList.add("mt320");
        } else {
            menu.classList.remove("hidden");
            selector.classList.remove("mt320");
        }
    } else if (window.screen.availWidth <= 375) {
        if (scrollPosition > 470) {
            menu.classList.add("hidden");
            selector.classList.add("mt375");
        } else {
            menu.classList.remove("hidden");
            selector.classList.remove("mt375");
        }
    } else if (window.screen.availWidth <= 425) {
        if (scrollPosition > 470) {
            menu.classList.add("hidden");
            selector.classList.add("mt375");
        } else {
            menu.classList.remove("hidden");
            selector.classList.remove("mt375");
        }
    } else if (window.screen.availWidth <= 768) {
        if (scrollPosition > 320) {
            menu.classList.add("hidden");
            selector.classList.add("mt768");
        } else {
            menu.classList.remove("hidden");
            selector.classList.remove("mt768");
        }
    } else if (window.screen.availWidth <= 1024) {
        if (scrollPosition > 320) {
            menu.classList.add("hidden");
            selector.classList.add("mt768");
        } else {
            menu.classList.remove("hidden");
            selector.classList.remove("mt768");
        }
    } else if (window.screen.availWidth <= 1440) {
        if (scrollPosition > 320) {
            menu.classList.add("hidden");
            selector.classList.add("mt768");
        } else {
            menu.classList.remove("hidden");
            selector.classList.remove("mt768");
        }
    } else if (window.screen.availWidth <= 2560) {
        if (scrollPosition > 320) {
            menu.classList.add("hidden");
            selector.classList.add("mt768");
        } else {
            menu.classList.remove("hidden");
            selector.classList.remove("mt768");
        }
    }
});

const handleClick = (event) => {
    event.preventDefault();
    const headerOffset = 150; // полная высота header'a
    const contentAnchors = document.querySelectorAll(".anchor-hash-content");
    const href = event.target.getAttribute("href");
    const elementToScroll = Array.from(contentAnchors).filter(
        (item) => item.getAttribute("href") === href
    );
    const elementPosition = elementToScroll[0].offsetTop;
    window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
    });
};

document
    .querySelectorAll(".anchor-hash-header")
    .forEach((item) => item.addEventListener("click", handleClick));
// игнорирует клики по заголовкам, здесь только для примера
document
    .querySelectorAll(".anchor-hash-content")
    .forEach((item) =>
        item.addEventListener("click", (event) => event.preventDefault())
    );

document
    .querySelectorAll(".menu_item")
    .forEach((item) =>
        item.addEventListener("click", (event) => event.preventDefault())
    );

let now = new Date();
let day = now.getDay();
let hourss = now.getHours();
let minutes = now.getMinutes();
let dayWeek = document.querySelector(".day_of_week");
let hours = document.querySelector(".opening_hours");

let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
];

if (day == 1 || (day == 2 && hourss < 2)) {
    dayWeek.innerText = "Понедельник";
    hours.innerText = "14:00 - 02:00";
} else if (day == 2 || (day == 3 && hourss < 2)) {
    dayWeek.innerText = "Вторник";
    hours.innerText = "14:00 - 02:00";
} else if (day == 3 || (day == 4 && hourss < 2)) {
    dayWeek.innerText = "Среда";
    hours.innerText = "14:00 - 02:00";
} else if (day == 4 || (day == 5 && hourss < 2)) {
    dayWeek.innerText = "Четверг";
    hours.innerText = "14:00 - 02:00";
} else if (day == 5 || (day == 6 && hourss < 4)) {
    dayWeek.innerText = "Пятница";
    hours.innerText = "14:00 - 04:00";
} else if (day == 6 || (day == 0 && hourss < 4)) {
    dayWeek.innerText = "Суббота";
    hours.innerText = "14:00 - 04:00";
} else if (day == 0 || (day == 1 && hourss < 2)) {
    dayWeek.innerText = "Воскресенье";
    hours.innerText = "14:00 - 02:00";
}

let body = document.querySelector("body");
let rules_button = document.querySelector(".rules_of_build");
let rules_modal = document.querySelector(".rules_modal");

let review_button = document.querySelector(".review");
let review_modal = document.querySelector(".review_modal");

rules_button.addEventListener("click", function() {
    rules_modal.classList.add("active");
    body.classList.add("modal_open");
});

rules_modal.addEventListener("click", function(e) {
    if (e.target == rules_modal) {
        rules_modal.classList.remove("active");
        body.classList.remove("modal_open");
    }
});

review_button.addEventListener("click", function() {
    review_modal.classList.add("active");
    body.classList.add("modal_open");
});

review_modal.addEventListener("click", function(e) {
    if (e.target == review_modal) {
        review_modal.classList.remove("active");
        body.classList.remove("modal_open");
    }
});