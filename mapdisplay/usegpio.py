import RPi.GPIO as GPIO
import time

# setup GPIO using Board numbering
GPIO.setmode(GPIO.BOARD)
GPIO.setup(12, GPIO.OUT)

finish = start = time.time()

while(finish - start < 4):
    print(finish-start)
    GPIO.output(12, GPIO.HIGH)
    time.sleep(.1)
    GPIO.output(12, GPIO.LOW)
    time.sleep(.1)
    
    finish = time.time()

