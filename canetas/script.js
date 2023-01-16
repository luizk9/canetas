let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

//carrossel
let time = 2000,
	currentImageIndex = 0,
	imagens = document
			.querySelectorAll("#slider img"),
	max = imagens.length

function nextImage(){
	//console.logo("imagens");
	imagens[currentImageIndex]
		.classList.remove("selected")

	currentImageIndex++;

	if(currentImageIndex >=max){
		currentImageIndex=0;
	}

	imagens[currentImageIndex]
		.classList.add("selected")

}
function start(){	
	setInterval(()=> {
		//console.log("funcao rodada a 2s");
		nextImage();
	},time)
} // fim da função start

window.addEventListener("load", start);

