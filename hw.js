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

	var nwa = {
		name: 'N.W.A.',
		members: 5,
		favoriteSongs: ['Dopeman', 'Fuck Tha Police', 'Something to Dance To'],
		stats: {yearsTogether: 5, albums: 3}
	}
	console.log(nwa.name + ' was together for ' + nwa.stats.yearsTogether + ' years and released ' + nwa.stats.albums + ' albums. Some of my favorite songs by them: ' + nwa.favoriteSongs.join(', '));

	var theSmiths = {
		name: 'The Smiths',
		members: 4,
		favoriteSongs: ['This Charming Man', 'Hand in Glove', 'There is a Light That Never Goes Out'],
		stats: {yearsTogether: 5, albums: 4}
	}
	console.log(theSmiths.name + ' was together for ' + theSmiths.stats.yearsTogether + ' years and released ' + theSmiths.stats.albums + ' albums. Some of my favorite songs by them: ' + theSmiths.favoriteSongs.join(', '));

	var rage = {
		name: 'Rage Against the Machine',
		members: 4,
		favoriteSongs: ['Calm Like a Bomb', 'Bulls on Parade', 'Sleep Now in the Fire'],
		stats: {yearsTogether: 9, albums: 4}
	}
	console.log(rage.name + ' was together for ' + rage.stats.yearsTogether + ' years and released ' + rage.stats.albums + ' albums. Some of my favorite songs by them: ' + rage.favoriteSongs.join(', '));

	var grandmasterFlash = {
		name: 'Grandmaster Flash & The Furious Five',
		members: 6,
		favoriteSongs: ['The Message', 'White Lines', 'New York New York'],
		stats: {yearsTogether: 4, albums: 2}
	}
	console.log(grandmasterFlash.name + ' was together for ' + grandmasterFlash.stats.yearsTogether + ' years and released ' + grandmasterFlash.stats.albums + ' albums. Some of my favorite songs by them: ' + grandmasterFlash.favoriteSongs.join(', '));

	var clash = {
		name: 'The Clash',
		members: 4,
		favoriteSongs: ['Lost in the Supermarket', 'Should I Stay or Should I Go?', 'The Guns of Brixton'],
		stats: {yearsTogether: 10, albums: 6}
	}
	console.log(clash.name + ' was together for ' + clash.stats.yearsTogether + ' years and released ' + clash.stats.albums + ' albums. Some of my favorite songs by them: ' + clash.favoriteSongs.join(', '));

	var tribeCalledQuest = {
		name: 'A Tribe Called Quest',
		members: 3,
		favoriteSongs: ['Electric Relaxation', 'Midnight Marauders', 'Verses from the Abstract'],
		stats: {yearsTogether: 28, albums: 5}
	}
	console.log(tribeCalledQuest.name + ' was together for ' + tribeCalledQuest.stats.yearsTogether + ' years and released ' + tribeCalledQuest.stats.albums + ' albums. Some of my favorite songs by them: ' + tribeCalledQuest.favoriteSongs.join(', '));

	var ledZeppelin = {
		name: 'Led Zeppelin',
		members: 4,
		favoriteSongs: ['When the Levee Breaks', 'Stairway to Heaven', 'The Bridge'],
		stats: {yearsTogether: 12, albums: 9}
	}
	console.log(ledZeppelin.name + ' was together for ' + ledZeppelin.stats.yearsTogether + ' years and released ' + ledZeppelin.stats.albums + ' albums. Some of my favorite songs by them: ' + ledZeppelin.favoriteSongs.join(', '));
}