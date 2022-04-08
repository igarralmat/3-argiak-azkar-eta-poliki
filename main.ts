input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.CYAN)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    basic.pause(500)
})
input.onButtonPressed(Button.A, function () {
    pausa += 50
})
let pausa = 1000
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
	
})
