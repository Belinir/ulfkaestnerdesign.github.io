/*eslint-env es6*/
const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
	.forEach((item, index) => {
		item.onmouseover = () => {
			menu.dataset.activeIndex = index;
		}
console.log("BIMBAM");
alert("BAMBIM");
});// JavaScript Document