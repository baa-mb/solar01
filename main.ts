basic.showIcon(IconNames.Yes)
datalogger.setColumnTitles(
"L",
"X"
)
let n = 0
basic.forever(function () {
    datalogger.log(
    datalogger.createCV("L", input.lightLevel()),
    datalogger.createCV("X", input.acceleration(Dimension.Y))
    )
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(2000)
    basic.showString("SOLAR")
    n += 1
    basic.showNumber(n)
})
