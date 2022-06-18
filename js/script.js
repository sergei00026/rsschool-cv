
let burger = document.querySelector(".header__burger");
console.log(burger);

let burgerIcon = document.querySelector(".ham6");

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

const headerLink = document.querySelectorAll(".header__link");
console.log(headerLink);


headerLink.forEach((link) => {
	link.addEventListener("click", deleteClass);
});

function deleteClass(e) {
	htmlMain.classList.remove("open");
	bodyMain.classList.remove("noscroll");
	burgerIcon.classList.remove("active");
}

const anchors = document.querySelectorAll('.header__list a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

function scrollTo(to, duration = 700) {
	const
		element = document.scrollingElement || document.documentElement,
		start = element.scrollTop,
		change = to - start,
		startDate = +new Date(),
		// t = current time
		// b = start value
		// c = change in value
		// d = duration
		easeInOutQuad = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		},
		animateScroll = function () {
			const currentDate = +new Date();
			const currentTime = currentDate - startDate;
			element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
			if (currentTime < duration) {
				requestAnimationFrame(animateScroll);
			}
			else {
				element.scrollTop = to;
			}
		};
	animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
	let btn = document.querySelector('#toTop');
	window.addEventListener('scroll', function () {
		// Если прокрутили дальше 599px, показываем кнопку
		if (pageYOffset > 100) {
			btn.classList.add('show');
			// Иначе прячем
		} else {
			btn.classList.remove('show');
		}
	});

	// При клике прокручиываем на самый верх
	btn.onclick = function (click) {
		click.preventDefault();
		scrollTo(0, 400);
	}
});