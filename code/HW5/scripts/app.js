import * as http from './http.js' 									//Import http functions
import * as view from './view.js'; 									//Import view functions

const GET_DOGGO = 'https://dog.ceo/api/breeds/image/random'; 	//Get picture of Dog
const GET_CATTO = 'https://api.thecatapi.com/v1/images/search'; 	//Get picture of Cat
const state = {
	dogscore: 0,
	catscore: 0,	
	doggo: null
}; 

window.playGame = async () => { 										//PLAY function
	const json = await http.sendGETRequest(GET_DOGGO); 				//GET Request for Dog data
	const json2 = await http.sendGETRequest(GET_CATTO); 			//GET Request for Cat data
	state.doggo  = json; 											//Destructure Dog data
	[ state.catto ] = json2; 										//Destructure Dog data from array
	view.PlayScene(state); 											//Pass Dog data to view
}

window.checkAnswer = async (attempt) => {
	if (attempt == 'Dog'){
		state.dogscore += 1;
		playGame(); 
	}
	else {
		state.catscore += 1;
		playGame(); 
	}

}





window.start = async () => { 										//START function
	playGame(); 													//call play function
	state.score = 0; 												//reset score
}

window.addEventListener('load', start); 							//When window loads execute start

