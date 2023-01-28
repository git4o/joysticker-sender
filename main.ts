WSJoyStick.onKey(KEY.F, function () {
    radio.sendNumber(7)
})
WSJoyStick.onKey(KEY.A, function () {
    radio.sendNumber(2)
})
WSJoyStick.onKey(KEY.P, function () {
    radio.sendNumber(1)
})
WSJoyStick.onKey(KEY.E, function () {
    radio.sendNumber(6)
})
WSJoyStick.onKey(KEY.D, function () {
    radio.sendNumber(5)
})
WSJoyStick.onKey(KEY.B, function () {
    radio.sendNumber(3)
})
WSJoyStick.onKey(KEY.C, function () {
    radio.sendNumber(4)
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    while (true) {
        radio.sendNumber(2)
    }
})
WSJoyStick.JoyStickInit()
radio.setGroup(1)
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        radio.sendNumber(8)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendNumber(9)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendNumber(10)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendNumber(11)
    }
    if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        radio.sendNumber(12)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        radio.sendNumber(13)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        radio.sendNumber(14)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        radio.sendNumber(15)
    }
})
