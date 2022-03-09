let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

/* eventos*/ 
element.addEventListener("click", increment);
element.addEventListener("click", decrement);

/* funções de incremento e decremento*/
function increment() {
	/* mudando cor do número*/
	if (count >= 0){
		CURRENT_NUMBER.style.color='green';
	}
	else if (count < 0){
		CURRENT_NUMBER.style.color='red';
	}
	
	/*incremeto a no máxixo 10*/
	if(count >= 10){
		CURRENT_NUMBER.innerHTML = count;
	}
	else {
		count++;
		CURRENT_NUMBER.innerHTML = count;
	}
}

function decrement() {
	/* mudando cor do número*/
	if (count <= 0){
		CURRENT_NUMBER.style.color='red';
	}
	else if (count >= 1){
		CURRENT_NUMBER.style.color='green';
	}

	/*decremeto a no máxixo -10*/
	if(count <= -10){
		CURRENT_NUMBER.innerHTML = count;
	}
	else {
		count--;
		CURRENT_NUMBER.innerHTML = count;
	}
}