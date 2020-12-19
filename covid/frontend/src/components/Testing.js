import React, { Component } from "react";
import { render } from "react-dom";

export default class Testing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        document.title = 'Covid | Testing'
        return (
            <div>
                <center>
                    <h1>Testing Websites</h1>
                    <br></br>
                </center>
                <center>
                    <table border='3px'>
                        <tr>
                            <a class="btn btn-link" href="https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html" target="_blank">Health and Human Services</a>
                            <br></br>
                            <br></br>
                            <a class="btn btn-link" href="https://www.anthem.com/microsites/covid19/test-site-finder/" target="_blank">Anthem</a>
                            <br></br>
                            <br></br>
                        </tr>
                        <tr>
                            <a class="btn btn-link" href="https://my.castlighthealth.com/corona-virus-testing-sites/" target="_blank">Castlight</a>
                            <br></br>
                            <br></br>
                            <a class="btn btn-link" href="https://www.sccgov.org/sites/covid19/Pages/press-release-11-6-2020-daily-covid19-tests-rise-1000-per-day.aspx" target="_blank">SCC Public Health</a>
                            <br></br>
                            <br></br>
                            <a class="btn btn-link" href="https://covid19.lacounty.gov/testing/" target="_blank">County of LA</a>
                        </tr>
                    </table>
                </center>
            </div>
        );
    }
}
