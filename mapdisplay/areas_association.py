import RPi.GPIO as GPIO
import time
import sys

import signal
import sys

# Clean up GPIO resources on Ctrl+C
def signal_handler(sig, frame):
    print("\nCtrl+C signal sensed!\nCleaning up GPIO pins...")

    for el in gout:
        GPIO.output(el, GPIO.LOW)

    GPIO.cleanup()
    sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)

# setup GPIO using Board numbering
GPIO.setmode(GPIO.BOARD)

gout = [10, 12]

gin = [3, 5]

associations = {
    "b1": {"val": 3, "areas": [10]},
    "b2": {"val": 5, "areas": [10, 12]}
}

# Set pins to be an output pin
for el in gout:
    # print("Setting pin {} to ouput...".format(el))
    GPIO.setup(el, GPIO.OUT)
    GPIO.output(el, GPIO.LOW)

# Set pins to be an input pin and set initial value to be pulled low (off)
for el in gin:
    # print("Setting pin {} to input...".format(el))
    GPIO.setup(el, GPIO.IN, pull_up_down=GPIO.PUD_UP)


while(True):
    whats_on = {10: GPIO.LOW, 12: GPIO.LOW}
    for button in associations:
        # TODO:
        #   1. Check if the button is pressed
        #   2. If pressed, set all areas values in whats_on to GPIO.HIGH
        #   3. Test, to make sure b1 turns on one area, and b2 turns on 2

    
    for el in whats_on:
        GPIO.output(el, whats_on[el] )

    time.sleep(.1)
