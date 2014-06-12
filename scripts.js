function everything() {

	//Declaring variables.

	var work = 'work it';
	console.log(work);
	var doIt = 'do it';
	console.log(doIt);
	var makes = 'makes us';
	console.log(makes);
	var harder = 'harder';
	console.log(harder);
	var better = 'better';
	console.log(better);
	var faster = 'faster';
	console.log(faster);
	var stronger = 'stronger';
	console.log(stronger);

	//Splitting the variable work by spaces.

	var workSplit = work.split(' ');
	console.log(workSplit);

	//Adding exclamation point.

	var strongest = stronger.concat('!');
	console.log(strongest);

	//Delcaring an array.

	var lyricsArray = ['work it', 'make it', 'do it', 'makes us', 'harder', 'better', 'faster', 'stronger', 'more than', 'our', 'hour', 'after', 'our', 'work is', 'never', 'over']
	console.log(lyricsArray);

	//Count the number of phrases in the lyrics array.

	var howManyPhrases = lyricsArray.length
	console.log(howManyPhrases);

	//Join array of phrases into the lyrics.

	var lyricsString = lyricsArray.join();
	console.log(lyricsString);

	//Find the length of the lyrics.

	var lyricsLength = lyricsString.length;
	console.log(lyricsLength);

	//Adding exclamation point to the array.

	var lyricsEmphasized = lyricsArray.push('!');
	console.log(lyricsEmphasized);

	//Remove exclamation point from the array.

	var exclamation = lyricsArray.pop();
	console.log(exclamation);

	//Reverse order of words/phrases in lyrics.

	var reverse = lyricsArray.reverse();
	console.log(reverse);

	//Get the second part of the lyrics.

	var end = lyricsArray.splice(4);
	console.log(end);

}