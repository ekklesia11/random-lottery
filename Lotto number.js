// JavaScript Lotto Number Pick
// 2019-06-01 Sat
// 45 numbers in total
// 6 numbers + bonus number
// ----------------------------------------------------

function Lotto() {
  let numbers = [];
  let bonus = Math.floor((Math.random() * 45) + 1);
  while (numbers.length !== 6) {
    let random = Math.floor((Math.random() * 45) + 1);
    if (!numbers.includes(random)) {
     numbers.push(random);
    }
  }
  while (numbers.includes(bonus)) {
    bonus = Math.floor((Math.random() * 45) + 1);
  }
  // return 'Lucky numbers : ' + numbers + '\n' + 'Bonus : ' + bonus;
  numbers.sort((a, b) => a - b);
  let luckyNum = 'Lucky Numbers : ' + numbers.join(', ') + ' / Bonus : ' + bonus.toString();
  // console.log(luckyNum);

  let winner = document.createElement('li');
  // let winNum = document.createTextNode(luckyNum);
  // let winner = winDiv.appendChild(winNum);
  let location = document.getElementById('list');
  winner.innerHTML = luckyNum;
  let newNum = location.childNodes[0];
  // console.log(winner);
  location.insertBefore(winner, newNum);

  console.log(newNum);
  
}

function reset() {
  document.location.reload(false);
}