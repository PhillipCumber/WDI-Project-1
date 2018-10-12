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

let test = $('.toprow').eq(0)

test.on('click', function () {

    test.text('What is a banana?')
})

  