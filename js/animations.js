const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber) {
	if (i <= endNumber) {
		if (i === endNumber) {
			element.innerText = i + "+";
		} else {
			element.innerText = i;
		}
		i += 100;
	}
	setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, i, element, endNumber);

}
function initIncreaseNumberAnimation() {
	let element = document.querySelector(".features__clients-count");
	increaseNumberAnimationStep(0, element, 5000)
}

//  добавление поля в форму

document.querySelector("#budget").addEventListener("change", function handleSelectChange(event) {
	if (event.target.value === "other") {
		const formContainer = document.createElement("div");
		formContainer.classList.add("form__group");
		formContainer.classList.add("form__other-input");

		const input = document.createElement("input");
		input.placeholder = "Введите ваш вариант";
		input.type = "text";

		formContainer.appendChild(input);
		document.querySelector(".form form").insertBefore(formContainer, document.querySelector('.form__submit')); // Задание 3
	}

	const otherInput = document.querySelector(".form__other-input");
	if (event.target.value !== "other" && Boolean(otherInput)) {
		document.querySelector(".form form").removeChild(otherInput);
	}
});

// скролл шапки
function updateScroll() {

	if (window.scrollY > 0) {
		document.querySelector("header").classList.add("header__scrolled");
	} else {
		document.querySelector("header").classList.remove("header__scrolled");
	}

	// Запуск анимации увеличения числа
	let windowBottomPosition = window.scrollY + window.innerHeight;
	let countElementPosition = document.querySelector(".features__clients-count").offsetTop;
	let animationInited = false;
	if (windowBottomPosition >= countElementPosition && !animationInited) {
		animationInited = true;
		initIncreaseNumberAnimation();

	}

}
window.addEventListener("scroll", updateScroll);


function addSmoothScroll(anchor) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
}

document.querySelectorAll('a[href^="#"]').forEach (anchor => {
	addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector('.more-button'));





