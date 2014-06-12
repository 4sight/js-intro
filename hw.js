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

	var joyDivision = {
		name: 'Joy Division',
		members: 4,
		favoriteSongs: ['Disorder', 'Love Will Tear Us Apart', 'I Remember Nothing'],
		stats: {yearsTogether: 4, albums: 2}
	}
	console.log(joyDivision.name + ' was together for ' + joyDivision.stats.yearsTogether + ' years and released ' + joyDivision.stats.albums + ' albums. Some of my favorite songs by them: ' + joyDivision.favoriteSongs.join(', '));
}