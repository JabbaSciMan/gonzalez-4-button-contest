// red button pin 5
input.onButtonPressed(Button.A, function () {
    if (!(won)) {
        won = true
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.playMelody("E D G F B A C5 B ", 120)
        strip.clear()
        strip.show()
        won = false
    }
})
// Yellow Button
// 
input.onPinPressed(TouchPin.P2, function () {
    if (!(won)) {
        won = true
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        music.playMelody("C5 A B G A F G E ", 120)
        strip.clear()
        strip.show()
        won = false
    }
})
// Blue Button pin 11
input.onButtonPressed(Button.B, function () {
    if (!(won)) {
        won = true
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        music.playMelody("C5 G B A F A C5 B ", 120)
        strip.clear()
        strip.show()
        won = false
    }
})
// Green Button
input.onPinPressed(TouchPin.P1, function () {
    if (!(won)) {
        won = true
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        music.playMelody("C5 B A G F E D C ", 120)
        strip.clear()
        strip.show()
        won = false
    }
})
let strip: neopixel.Strip = null
let won = false
won = false
strip = neopixel.create(DigitalPin.P8, 27, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.pause(2000)
strip.clear()
strip.show()
basic.forever(function () {
	
})
