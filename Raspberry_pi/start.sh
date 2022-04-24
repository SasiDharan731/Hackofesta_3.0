# Team name: A2Z Agri
# Code discription: This file contains the startup processes to be ran on the raspberry pi
cd /home/pi/
python3 connection.py -e a7f5zt95qzmgl-ats.iot.ap-south-1.amazonaws.com -r root-CA.crt -c agri-rover.cert.pem -k agri-rover.private.key
