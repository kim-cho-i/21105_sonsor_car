let cm = 0
basic.forever(function () {
	
})
basic.forever(function () {
	
})
// 자동차후방센서
basic.forever(function () {
    cm = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (cm > 10 && cm <= 20) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (cm > 5 && cm <= 10) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    if (cm > 1 && cm <= 5) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
    } else {
        music.stopAllSounds()
        music.stopMelody(MelodyStopOptions.All)
    }
})
basic.forever(function () {
    basic.showNumber(cm)
})
