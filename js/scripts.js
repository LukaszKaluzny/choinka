
function drawTree (floor) {
  for (var i = 1; i <= floor; i++) {
    var star = ' ';
    for (var j = 1; j <= i; j++) {
      star += '*';
    }
    console.log(star);
  }
}
floor = prompt ('Podaj ilość pięter');
drawTree (floor);
