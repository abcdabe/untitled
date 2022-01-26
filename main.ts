let Q = 0
input.onButtonPressed(Button.A, function () {
    Q += randint(1, 3)
    if (Q == 1) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # # # # #
            # . # . #
            # . # . #
            `)
    } else if (Q == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("A F E F D G E F ", 120)
})
