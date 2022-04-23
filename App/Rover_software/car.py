import socket

import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD)
GPIO.setup(3, GPIO.OUT)
GPIO.setup(5, GPIO.OUT)
GPIO.setup(7, GPIO.OUT)
GPIO.setup(8, GPIO.OUT)

def create_socket():
    try:
        global host
        global port
        global s
        host = ""
        port = 2225
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    except socket.error as msg:
        print("Socket creation error: " + str(msg))



def bind_socket():
    try:
        global host
        global port
        global s
        print("Binding the Port: " + str(port))
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

        s.bind((host, port))
       
        s.listen(5)

    except socket.error as msg:
        print("Socket Binding error" + str(msg) + "\n" + "Retrying...")
        bind_socket()

def socket_accept():
    conn, address = s.accept()
    print("Connection has been established! |" + " IP " + address[0] + " | Port" + str(address[1]))
    send_commands(conn)
    conn.close()


def front():
    print("Going front")

    GPIO.output(3, True)
    GPIO.output(5, False)
    GPIO.output(7, False)
    GPIO.output(8, False)

def back():
    print("Going back")

    GPIO.output(3, False)
    GPIO.output(5, True)
    GPIO.output(7, False)
    GPIO.output(8, False)

def left():
    print("Going left")

    GPIO.output(3, False)
    GPIO.output(5, False)
    GPIO.output(7, True)
    GPIO.output(8, False)


def right():
    print("Going right")

    GPIO.output(3, False)
    GPIO.output(5, False)
    GPIO.output(7, False)
    GPIO.output(8, True)

def stop():
    print("Stopping")

    GPIO.output(3, False)
    GPIO.output(5, False)
    GPIO.output(7, False)
    GPIO.output(8, False)

        
def main():
    create_socket()
    bind_socket()
    socket_accept()

def disconnect_client():
    global s
    s.shutdown(socket.SHUT_RDWR)
    s.close()
    
    main()




def send_commands(conn):
  
    while True:
        data =  conn.recv(1024)
       

        if data == b'front\n':
            front()
        elif data == b'back\n':
            back()
        elif data == b'right\n':
            right()
        elif data == b'left\n':
            left()
        elif data == b'stop\n':
            stop()
        elif data == b'd\n':
           
            disconnect_client();
        




main()
