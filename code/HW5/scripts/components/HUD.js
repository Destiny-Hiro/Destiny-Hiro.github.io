const HUD = (dogscore, catscore) => ( //Function for HTML component
	`<h1 class="center">DO YOU LIKE THE DOG OR CAT MORE</h1>
	<div class="blankSpace"> </div>
	<h2 class="center">
		<div id='dogscore' id='catscore'> Dogs: ${dogscore} Cats: ${catscore} </div>
	</h2>
	<div class="blankSpace">
	<hr>`
)

export default HUD; //Export HUD function