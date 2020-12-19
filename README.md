# Infovid
# University Name: SJSU <br />
# Course: EnterpriseSoftware-CMPE172/Fall2020 <br />
# Team Members: 
  - Renad Morrar
  - Elias Faris
  - Saikiran Vaidhyanathan
# Project Introduction
   Our application is an informative website that provides information regarding COVID-19 cases, testing websites, and donation websites. We decided to involve testing websites where people can go and get tested. Also, we inputted websites within our donate section that will refer you to reputable organizations to help the cause for people in need during these unpresidented times and funding hospitals/vaccine companies.
   
# SampleDemoScreenshots

<img width="1440" alt="Home Page" src="https://user-images.githubusercontent.com/54517360/100950747-e4fc3b00-34c1-11eb-9efa-f6aff0aa65db.png">
<img width="1440" alt="Register Page" src="https://user-images.githubusercontent.com/54517360/100950753-e7f72b80-34c1-11eb-9b28-eac8f2d52e98.png">
<img width="1440" alt="Login Page" src="https://user-images.githubusercontent.com/54517360/100950754-e88fc200-34c1-11eb-9f76-5483a476ae85.png">
<img width="1440" alt="Testing Page" src="https://user-images.githubusercontent.com/54517360/100931945-09dfb680-34a0-11eb-9697-41fb1c94d2cf.png">
<img width="1440" alt="About Page" src="https://user-images.githubusercontent.com/54517360/100931239-1b748e80-349f-11eb-9142-2aff846d6edd.png">
<img width="1440" alt="Donate Page" src="https://user-images.githubusercontent.com/54517360/100931251-1fa0ac00-349f-11eb-8352-5fa1c5add3c3.png">

# Instructions for running the project locally through docker
1. Download Github zip file
2. Unzip the file and go into the folder directory using terminal
3. Edit the settings.py file in the covid/covid directory for the database on lines <b>90-94</b> as follows. 
The name would be your table name, user would be your database username, and password 
would be your database password, host would be your database connection URL, and your port 
would be which port the database is on usually 3306.
<img width="427" alt="Screen Shot 2020-12-02 at 9 54 54 PM" src="https://user-images.githubusercontent.com/54517360/100970079-0fadba00-34e9-11eb-80ab-3764b98d1c49.png">
4. Open docker
<br>5. cd into covid in the terminal/command prompt
<br>6. In terminal, type docker build . -t covid
<br>7. In terminal, type docker-compose build
<br>8. In terminal, type docker-compose up
<br>9. Go to localhost:8000 or 0.0.0.0:8000



# System Diagram
<img width="979" alt="Screen Shot 2020-11-29 at 12 00 33 AM" src="https://user-images.githubusercontent.com/47757618/100933500-4ca28e00-34a2-11eb-8f45-199139c8672b.png">

# Sequence Diagram
<img width="814" alt="Screen Shot 2020-11-29 at 12 01 54 AM" src="https://user-images.githubusercontent.com/47757618/100933521-53c99c00-34a2-11eb-855a-d2caf391ffca.png">

# Class Diagram 
<img width="581" alt="Screen Shot 2020-11-28 at 9 35 23 PM" src="https://user-images.githubusercontent.com/47757618/100933527-55935f80-34a2-11eb-8785-ad6518e9c919.png">

# Database Schema
<img width="1097" alt="Database" src="https://user-images.githubusercontent.com/54566871/100937037-3fd46900-34a7-11eb-9f12-3033419ceda9.png">
