import smbus
import math
import RPi.GPIO as GPIO
from time import sleep

# Power management registers
power_mgmt_1 = 0x6b
power_mgmt_2 = 0x6c
float angle_x,angle_y

def read_byte(adr):
    return bus.read_byte_data(address, adr)

def read_word(adr):
    high = bus.read_byte_data(address, adr)
    low = bus.read_byte_data(address, adr+1)
    val = (high << 8) + low
    return val

def read_word_2c(adr):
    val = read_word(adr)
    if (val >= 0x8000):
        return -((65535 - val) + 1)
    else:
        return val

def dist(a,b):
    return math.sqrt((a*a)+(b*b))

def get_y_rotation(x,y,z):
    radians = math.atan2(x, dist(y,z))
    return -math.degrees(radians)

def get_x_rotation(x,y,z):
    radians = math.atan2(y, dist(x,z))
    return math.degrees(radians)

def SetAngle1(angle):
	duty = angle / 18 + 2
	GPIO.output(03, True)
	pwm.ChangeDutyCycle(duty)
	sleep(1)
	GPIO.output(03, False)
	pwm.ChangeDutyCycle(0)

def SetAngle2(angle):
	duty = angle / 18 + 2
	GPIO.output(04, True)
	pwm.ChangeDutyCycle(duty)
	sleep(1)
	GPIO.output(04, False)
	pwm.ChangeDutyCycle(0)

bus = smbus.SMBus(0) # or bus = smbus.SMBus(1) for Revision 2 boards
address = 0x68       # This is the address value read via the i2cdetect command

# Now wake the 6050 up as it starts in sleep mode
bus.write_byte_data(address, power_mgmt_1, 0)


#
gyro_xout = read_word_2c(0x43)
gyro_yout = read_word_2c(0x45)
gyro_zout = read_word_2c(0x47)

accel_xout = read_word_2c(0x3b)
accel_yout = read_word_2c(0x3d)
accel_zout = read_word_2c(0x3f)

accel_xout_scaled = accel_xout / 16384.0
accel_yout_scaled = accel_yout / 16384.0
accel_zout_scaled = accel_zout / 16384.0


angle_x = get_x_rotation(accel_xout_scaled, accel_yout_scaled, accel_zout_scaled)
angle_y = get_y_rotation(accel_xout_scaled, accel_yout_scaled, accel_zout_scaled)

GPIO.setmode(GPIO.BOARD)
GPIO.setup(03, GPIO.OUT)
GPIO.setup(04, GPIO.OUT)
pwm1=GPIO.PWM(03, 50)
pwm2=GPIO.PWM(04, 50)
pwm1.start(0)
pwm2.start(0)

while 1:
	SetAngle1(angle_x)
	SetAngle2(angle_y)
	pwm1.stop()
	pwm2.stop()
	GPIO.cleanup()
