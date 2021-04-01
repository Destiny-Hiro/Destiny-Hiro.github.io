import HUD from './components/HUD.js'; 											//Import HUD function
import Dog from './components/Dog.js'; 											//Import Dog function
import Cat from './components/Cat.js'; 											//Import Cat function
import Choice from './components/Choice.js';									//Import Choice function


const renderDOM = (html) => document.getElementById('view').innerHTML = html; 	//Set HTML in view

export const PlayScene = (props) => { 											//Function for HTML view
		const {dogscore, catscore,doggo, catto} = props; 											//Destructure properties
		renderDOM( 																//Render the Scene's HTML to DOM
			`
			${HUD(dogscore, catscore)}
			${Dog(doggo)}
			${Cat(catto)}
			${Choice()}
			`
	)
}