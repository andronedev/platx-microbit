function ygen () {
    if (Math.randomBoolean()) {
        l0 = 1
    } else {
        l0 = 0
    }
    if (Math.randomBoolean()) {
        l1 = 1
    } else {
        l1 = 0
    }
    if (Math.randomBoolean()) {
        l2 = 1
    } else {
        l2 = 0
    }
    if (Math.randomBoolean()) {
        l3 = 1
    } else {
        l3 = 0
    }
    if (Math.randomBoolean()) {
        l4 = 1
    } else {
        l4 = 0
    }
    if (l0 + (l1 + (l2 + (l3 + l4))) > 4 || l0 + (l1 + (l2 + (l3 + l4))) < 2) {
        ygen()
    }
}
input.onButtonPressed(Button.A, function () {
    led.unplot(XV, 4)
    XV = XV - 1
    if (XV < 0) {
        XV = XV + 1
        led.plot(XV, 4)
    } else {
        led.plot(XV, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(XV, 4)
    XV = XV + 1
    if (XV > 4) {
        XV = XV - 1
        led.plot(XV, 4)
    } else {
        led.plot(XV, 4)
    }
})
function plat () {
    ygen()
    for (let i = 0; i <= 5; i++) {
        YV = i
        if (l0 == 1) {
            led.plot(0, YV)
        }
        if (l1 == 1) {
            led.plot(1, YV)
        }
        if (l2 == 1) {
            led.plot(2, YV)
        }
        if (l3 == 1) {
            led.plot(3, YV)
        }
        if (l4 == 1) {
            led.plot(4, YV)
        }
        basic.pause(tempsv)
        if (l0 == 1) {
            led.unplot(0, YV)
        }
        if (l1 == 1) {
            led.unplot(1, YV)
        }
        if (l2 == 1) {
            led.unplot(2, YV)
        }
        if (l3 == 1) {
            led.unplot(3, YV)
        }
        if (l4 == 1) {
            led.unplot(4, YV)
        }
        if (!(led.point(XV, 4))) {
            stop = true
            basic.clearScreen()
            basic.showLeds(`
                . # . # .
                # # # # #
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.pause(1000)
            stop = false
            tempsv = 500
            XV = 2
            basic.clearScreen()
            led.plot(XV, 4)
            plat()
        }
    }
    basic.pause(tempsv)
    if (tempsv > 150) {
        tempsv = tempsv - 15
    }
    if (stop == false) {
        plat()
    }
}
let YV = 0
let l4 = 0
let l3 = 0
let l2 = 0
let l1 = 0
let l0 = 0
let tempsv = 0
let stop = false
let XV = 0
basic.showLeds(`
    # . . . #
    . # # # .
    . # # # .
    . # # # .
    # . . . #
    `)
basic.pause(500)
basic.showString(" PLATX")
basic.clearScreen()
basic.pause(500)
XV = 2
led.plot(XV, 4)
basic.pause(200)
stop = false
tempsv = 500
plat()
