function hw() {

	// Declaring everyone's age

	var greeleyAge = new Date().getFullYear() - 1988;
	var mcLovinAge = new Date().getFullYear() - 1996;
	var princeAge = new Date().getFullYear() - 1958;

	//Deciding if everyone gets to drink

	if (mcLovinAge < 21) {
		console.log('Get outta my bar, McLovin!');
	}
	else {
		console.log('What can I get you to drink, McLovin?');
	}

	if (greeleyAge < 21) {
		console.log('Get outta my bar, Greeley!');
	}
	else {
		console.log('What can I get you to drink, Greeley?');
	}

	if (princeAge < 21) {
		console.log('Get outta my bar, Prince!');
	}
	else {
		console.log('What can I get you to drink, Prince?');
	}

	var bestSongs = ['Disorder', 'Love Will Tear Us Apart', 'I Remember Nothing'];
	var howManySongs = bestSongs.length;

	var joyDivision = {
		bestSongs: ['Disorder', 'Love Will Tear Us Apart', 'I Remember Nothing'],
		howManySongs: bestSongs.length,
		bestAlbum: 'Unknown Pleasures',
		listSongs: function(bestSongs) {
			bestSongs.join(', ');
		}
	}	
	console.log(joyDivision.listSongs);
}