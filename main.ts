let Q = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 12; index++) {
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
    }
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("F C5 B D E G B A ", 120)
})
