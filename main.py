Q = 0

def on_button_pressed_a():
    global Q
    for index in range(12):
        Q += randint(1, 3)
        if Q == 1:
            basic.show_leds("""
                # . # . #
                                # . # . #
                                # # # # #
                                # . # . #
                                # . # . #
            """)
        elif Q == 2:
            basic.show_leds("""
                # . . . #
                                . # . # .
                                . . # . .
                                . # . # .
                                # . . . #
            """)
        else:
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    music.play_melody("A F E F D G E F ", 120)
input.on_button_pressed(Button.B, on_button_pressed_b)
