import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { render } from "react-dom";

export default class Donate extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        document.title = 'Covid | Donate'
        return (
            <div>
                <center>
                    <h1>Donation Websites</h1>
                    <br></br>
                </center>
                <center>
                    <table border='3px'>
                        <tr>
                            <a class="btn btn-link" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate" target="_blank">World Health Organization</a>
                            <br></br>
                            <br></br>
                            <a class="btn btn-link" href="https://help.rescue.org/donate/coronavirus?ms=gs_ppc_ye20_w_191118&initialms=gs_ppc_ye20_w_191118&gclid=CjwKCAiA-_L9BRBQEiwA-bm5frFhnVuFoCyzNoBtsRwHBUOro9i3B8gM3p-bJFhn4vGvHjEpnPiARhoCwagQAvD_BwE" target="_blank">International Rescue Commitee</a>
                            <br></br>
                            <br></br>
                            <a class="btn btn-link" href="https://donate.bgca.org/maindonationform/rc_connect__campaign_designform?id=7011M000001VS8fQAG&form=00P1M00001A5YqRUAV&c_src=IDM_COVID_GOOGLEADS&gclid=CjwKCAiA-_L9BRBQEiwA-bm5fvgE0yXh-wUzMeY-DC8ChqSTNU_zhw9cepMX8CTZRBg0ZtrQy9P0MBoCz88QAvD_BwE" target="_blank">Boys & Girls Club Of America</a>
                        </tr>
                        <tr>
                            <br></br>
                            <a class="btn btn-link" href="https://give.ucdavis.edu/HSYS/324615" target="_blank">UC Davis Medical Center</a>
                            <br></br>
                            <br></br>
                            <a class="btn btn-link" href="https://www.unicef.org/coronavirus/covid-19/donate" target="_blank">United Nations Children's Fund</a>
                            <br></br>
                            <br></br>
                            <a class="btn btn-link" href="https://give.undp.org/campaign/undp-giving/c120717?utm_source=EN&utm_medium=GSR&utm_content=PaidSearch_Brand_English_AutoCurrency&utm_campaign=CENTRAL&c_src=CENTRAL&c_src2=GSR&gclid=CjwKCAiA-_L9BRBQEiwA-bm5fvo5Rxbz1NxRpabsJpmmpVN_OVra_kWcSxItdZjFClLqAJlf6KYughoCrwMQAvD_BwE" target="_blank">United Nations Development Programme</a>
                        </tr>
                    </table>
                </center>
            </div>
        );
    }
}
