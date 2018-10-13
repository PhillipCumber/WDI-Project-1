//First Commit to test repo

//Creating a Jeopardy Game

//step 1 Created a header section for the title of the game. Includes animation and on hover event
// step 2 Create a table to store all data in for game
// step 3 Make sure I can click on a box to change the inner text to a question

let title = $('#title')
// console.log(title)
// Title pic to run on load of page, thats why its not in a function
anime({

        targets: '#title',
        translateY: [ 
            {value: 0, duration: 2000},
            {value: 20, duration: 2000},
            {value: 0, duration: 2000},
            {value: 20, duration: 2000},
            {value: 0, duration: 2000}
        ],
        loop: 1

})

// About to connect boxes to change inner text to a question

function hideText () {

    hunnid.addClass('black')
}

let hunnid = $('.row').eq(0)

hunnid.on('click', function () {

    hunnid.text('This team has won the last 2 NBA Titles?')
    hunnid.addClass('small')
    setInterval(hideText, 5000)
})
/////

function hideText1 () {

    hunnid1.addClass('black')
}

let hunnid1 = $('.row').eq(1)

hunnid1.on('click', function () {

    hunnid1.text('This arithmetic operator assigns a value?')
    hunnid1.addClass('small')
    setInterval(hideText1, 5000)
})

/////

function hideText2 () {

    hunnid2.addClass('black')
}

let hunnid2 = $('.row').eq(2)

hunnid2.on('click', function () {

    hunnid2.text('No Ceilings')
    hunnid2.addClass('small')
    setInterval(hideText2, 5000)
})

//////

function hideText3 () {

    hunnid3.addClass('black')
}

let hunnid3 = $('.row').eq(3)

hunnid3.on('click', function () {

    hunnid3.text('This movie stars Michal Jordan and Bugs Bunny')
    hunnid3.addClass('small')
    setInterval(hideText3, 5000)
})

////// 

function hideText4 () {

    hunnid4.addClass('black')
}

let hunnid4 = $('.row').eq(4)

hunnid4.on('click', function () {

    hunnid4.text('This system is known for its exclusives')
    hunnid4.addClass('small')
    setInterval(hideText4, 5000)
})

//this ends the 100 point value section

/////

function hideText5 () {

    second.addClass('black')
}

let second = $('.row').eq(5)

second.on('click', function () {

    second.text('This man wore #8 and #24')
    second.addClass('small')
    setInterval(hideText5, 5000)
})

//////

function hideText6 () {

    second2.addClass('black')
}

let second2 = $('.row').eq(6)

second2.on('click', function () {

    second2.text('This tag allows you use JS in HTML')
    second2.addClass('small')
    setInterval(hideText6, 5000)
})

//////

function hideText7 () {

    second3.addClass('black')
}

let second3 = $('.row').eq(7)

second3.on('click', function () {

    second3.text('Graduation')
    second3.addClass('small')
    setInterval(hideText7, 5000)
})

//////

function hideText8 () {

    second4.addClass('black')
}

let second4 = $('.row').eq(8)

second4.on('click', function () {

    second4.text('RIIIICKKKYYYYYY!!')
    second4.addClass('small')
    setInterval(hideText8, 5000)
})

/////

function hideText9 () {

    second5.addClass('black')
}

let second5 = $('.row').eq(9)

second5.on('click', function () {

    second5.text('This FPS revolutionized online gaming')
    second5.addClass('small')
    setInterval(hideText9, 5000)
})

///this section is the end of the 200 point value questions

//////

function hideText10 () {

    third.addClass('black')
}

let third = $('.row').eq(10)

third.on('click', function () {

    third.text('This man won 5 straight Nascar titles from 06-10')
    third.addClass('small')
    setInterval(hideText10, 5000)
})

//////


function hideText11 () {

    third2.addClass('black')
}

let third2 = $('.row').eq(11)

third2.on('click', function () {

    third2.text('This CSS framework reminds you of a southern state')
    third2.addClass('small')
    setInterval(hideText11, 5000)
})

//////

function hideText12 () {

    third3.addClass('black')
}

let third3 = $('.row').eq(12)

third3.on('click', function () {

    third3.text('King Remebered In Time(acronym)')
    third3.addClass('small')
    setInterval(hideText12, 5000)
})

//////

function hideText13 () {

    third4.addClass('black')
}

let third4 = $('.row').eq(13)

third4.on('click', function () {

    third4.text('This dog was good at all sports!!')
    third4.addClass('small')
    setInterval(hideText13, 5000)
})

//////

function hideText14 () {

    third5.addClass('black')
}

let third5 = $('.row').eq(14)

third5.on('click', function () {

    third5.text('This character used to jump over barrels')
    third5.addClass('small')
    setInterval(hideText14, 5000)
})

/////this marks the end of the 300 point value questions

  