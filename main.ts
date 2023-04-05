let handOpened = false;
SuperBit.Servo(SuperBit.enServo.S5, 0)

radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            255,
            SuperBit.enMotors.M3,
            255
        )
    } else if (receivedNumber == 0) {
        if (handOpened) {
            SuperBit.Servo(SuperBit.enServo.S5, 0)
            handOpened = false
        } else {
            SuperBit.Servo(SuperBit.enServo.S5, 40)
            handOpened = true
        }
    } else if (receivedNumber == 2) {
        SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            -255
        )
    } else if (receivedNumber == 3) {
        SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            255
        )
    } else if (receivedNumber == 4) {
        SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            255,
            SuperBit.enMotors.M3,
            -255
        )
    } else {
        SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            0
        )
    }
})
radio.setGroup(1)
