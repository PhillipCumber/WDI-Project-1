//First Commit to test repo

//Creating a Jeopardy Game

//step 1 Created a header section for the title of the game. Includes animation and on hover event

let title = $('#title')
// console.log(title)


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

  