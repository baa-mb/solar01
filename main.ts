let abstand = 0
let n = 0
basic.showIcon(IconNames.Yes)
datalogger.setColumnTitles(
"L",
"X"
)
basic.forever(function () {
    datalogger.log(
    datalogger.createCV("L", input.lightLevel()),
    datalogger.createCV("X", input.acceleration(Dimension.Y))
    )
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    basic.pause(2000)
    basic.showString("SOLAR")
    n += 1
    abstand = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(abstand)
    pins.analogWritePin(AnalogPin.P2, Math.map(abstand, 1, 15, 300, 800))
})
