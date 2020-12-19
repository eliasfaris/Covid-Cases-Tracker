import React, { Component } from "react";
import { render } from "react-dom";




export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        document.title = 'Covid | About'
        return(

            <div class='About'>
                <br></br>
                
                <body>
                <center><h1>Reason of Creation</h1></center>
                <br></br>

                  We want people in the United States to be informed about COVID-19, also known as the Coronavirus.
                  We hope people will use our website to get the consistent daily updates of cases within each state and to 
                  be aware of the severity of this virus. We created a donations and testing tab for easy source access.
                  We are hoping having easy accessibility to donation websites will encourage others to help the community
                  and donate what they can. The testing site tab is a great feature to have as well because it can provide
                  others with the knowledge on where to go if they need to get tested. 
                </body>
                <br></br>
                <br></br>
                <br></br>


                <body> 
                <center><h1>Creators</h1></center>
                <br></br>

                    <h3>Elias F.</h3>
                    
                    I am a Senior at San Jose State Univeristy studying Software Engineering.
                    My hobby is playing basketball and spending time with family. I hope this 
                    website will be beneficial to all who need to be informed. 
                    <br></br>
                    <h3>Saikiran N.</h3>

                    I am a Senior at San Jose State Univeristy studying Software Engineering planning on graduating Fall 2021. 
                    In my free time, I spend time with my puppy and do photography and cook. I hope that this website would 
                    be able to provide information and be beneficial to everyone. 
                    <br></br>
                    <h3>Renad M.</h3>

                    I am a Senior at San Jose State University studying Software Engineering. I love spending time with my 
                    family and working out. Creating this website has been a great experience, and hopefully this will help 
                    people in the future with being aware of COVID-19 and giving them the information they need.
                </body>

                
          </div>

            

        );
    }
}
