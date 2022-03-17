const titulo = document.getElementById("page-title");
const botao = document.getElementById("mode-selector");
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

function mudar(){
    titulo.classList.toggle('dark-mode');
    botao.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
		botao.innerHTML = 'Light Mode';
		titulo.innerHTML = 'DARK MODE ON';
		return;
	}else{
        botao.innerHTML = 'Dark Mode';
	    titulo.innerHTML = 'LIGHT MODE ON';
    }
}

botao.addEventListener('click', mudar);
