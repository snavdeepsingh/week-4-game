$(document).ready(function () {
    // create an array with objects in it that has 4 different crystals with initial value set to 0
    var crystals = [ {
            name: "alexandrite",
            value: 0
        },
        {
            name: "grandidierite",
            value: 0
        },
        {
            name: "reddiamond",
            value: 0
        },
        {
            name: "taaffeite",
            value: 0
        }
    ];

    // create variables to hold number of wins, losses, goal total and current total.
    var game = {
        "wins": $('#wins'),
        "losses": $('#losses'),
        "goalTotal": $('#goalTotal'),
        "currentTotal": $('#currentTotal')
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
    $('button').click(function () {

        //button is clicked, which one is it?

        var crystalPick = $(this).attr('id');

        //loop through crystals array and find the crystal
        for (var i = 0; i < crystals.length; i++) {
            //we are only interested with the matching crystal
            if (crystalPick == crystals[i].name) {
                var crysValue = crystals[i].value;
                var goalInt = parseInt($(game.goalTotal).text());
                //increase current total by the crystals value
                var currentInt = parseInt($(game.currentTotal).text()) + crysValue;

                $(game.currentTotal).text(currentInt);
                //is current total greater than goal total? If so, increase losses, and reset crystals
                //else if current total is equal, increase wins and reset crystals
                //otherwise keep hitting a crystal button
                if (currentInt > goalInt) {
                    var lossesInt = parseInt($(game.losses).text()) + 1;
                    $(game.losses).text(lossesInt);
                    resetCrystals();
                } else if (currentInt == goalInt) {
                    var winsInt = parseInt($(game.wins).text()) + 1;
                    $(game.wins).text(winsInt);
                    resetCrystals();
                }
                break;
            } // if crystalChosen == crystals[i].name
        } // for loop 

    }); // button on click function
}); // document.ready function