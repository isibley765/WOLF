import RPi.GPIO as GPIO
import time

# setup GPIO using Board numbering
GPIO.setmode(GPIO.BOARD)
GPIO.setup(12, GPIO.OUT)

 # Set pin 10 to be an input pin and set initial value to be pulled low (off)
GPIO.setup(10, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

finish = start = time.time()

while(True):
    GPIO.output(12, GPIO.HIGH)
    print(finish-start)
    if GPIO.input(10) == GPIO.HIGH:
        print("Button was pushed!")

    time.sleep(1)
    print(finish-start)
    GPIO.output(12, GPIO.LOW)
    if GPIO.input(10) == GPIO.HIGH:
        print("Button was pushed!")

    time.sleep(1)
