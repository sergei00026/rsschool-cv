
let burger = document.querySelector(".header__burger");
console.log(burger);

let htmlMain = document.querySelector("html");
let bodyMain = document.querySelector("body");


// const menu = document.querySelector("#menu").cloneNode(1);
// const body = document.body;

burger.addEventListener("click", burgeropen);

function burgeropen(e) {
	e.preventDefault();

	htmlMain.classList.toggle("open");
	bodyMain.classList.toggle("noscroll");

}



// // Код для закрытия меню при нажатии на ссылку

// const links = Array.from(menu.children);

// links.forEach((link) => {
// 	link.addEventListener("click", closeOnClick);
// });

// function closeOnClick() {
// 	popup.classList.remove("open");
// 	hamb.classList.remove("active");
// 	body.classList.remove("noscroll");
// }