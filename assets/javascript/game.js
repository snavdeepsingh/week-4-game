$(document).ready(function() {
// create an array with objects in it that has 4 different crystals with initial value set to 0
var crystals = [ {
    name: 'Alexandrite',
    value: 0
},
{
    name: 'Grandidierite',
    value: 0
},
{
    name: 'Red Diamond',
    value: 0
},
{
    name: 'Taaffeite',
    value: 0
}];

// create variables to hold number of wins, losses, goal total and current total.
var game = {
    'wins': $('#wins'),
    'losses': $('#losses'),
    'goalTotal': $('#goalTotal'),
    'currentTotal': $('#currentTotal')
};
// create a function to get a random number 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// create a function to reset crystals,game total and current Total
function resetCrystals() {
$(game.currentTotal).text(0);
$(game.goalTotal).text(randomNumber(19, 120));
for (var i = 0; i < crystals.length; i++) {
    crystals[i].value = randomNumber(1, 12);
}
}
// game starts here by calling the resetCrystal function 
resetCrystals();
});