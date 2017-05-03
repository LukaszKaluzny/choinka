
function drawTree (pietra) {
	for (var i = 1; i <= pietra; i++)
	{
		var star = ' ';
    		for (var j = 1; j <= i; j++)
    		{
    			star=star+"*";
    		}
    	console.log(star);
    	document.write(star);
    	document.write('<br>');
	}
}
pietra = prompt ('Podaj ilość pięter');
drawTree (pietra);
