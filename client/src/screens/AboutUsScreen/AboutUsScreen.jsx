import React, { Component } from 'react';
import { Icon, Image, Header, Segment, Container, Divider } from 'semantic-ui-react'
import Footer from '../../components/App/Footer'
import './style.css'
import colors from "../../helpers/colors"

export default class AboutUs extends Component {

    constructor() {
        super()
        this.state = {
            currentTab: 0,
        }
    }

    render() {
        return (
            <div style={{ width: "100%", backgroundColor: "white", paddingTop: "50px" }}>
                <div style={{ display: "inline-block", width: "85%", marginBottom: 20 }} className="slide-in">
                    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                        <Header as='h2' textAlign='center' style={{ color: colors.mainColor }}>
                            ES Formations avec une phrase d'accroche ?
                    </Header>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "5vw", marginRight: "5vw" }}>
                        <div>
                            <Segment color="blue" style={{textAlign: "justify", display: "flex", flexDirection: "column", backgroundColor: "rgba(50,50,50,.05)" }} >
                                <div>
                                    <Divider horizontal style={{ marginBottom: "40px" }}>
                                        <Header textAlign='center' style={{}} >
                                            Qui sommes-nous ?
                                </Header>
                                    </Divider>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <p style={{}}>
                                            Quae dum ita struuntur, indicatum est apud Tyrum indumentum regale textum occulte, incertum quo
                                            locante vel cuius usibus apparatum. ideoque rector provinciae tunc pater Apollinaris eiusdem nominis ut
                                            conscius ductus est aliique congregati sunt ex diversis civitatibus multi, qui atrocium criminum ponderibus
                                            urgebantur.
                                </p>
                                    </div>
                                    <div style={{
                                        marginLeft: "2vw",
                                    }}>
                                        <Image src='/group.jpg' size="huge" />
                                    </div>
                                </div>
                            </Segment>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "5vw", marginRight: "5vw", marginTop: "20px" }}>
                        <div>
                            <Segment color="blue" style={{ textAlign: "justify", display: "flex", flexDirection: "column", backgroundColor: "rgba(50,50,50,.05)" }}>

                                <Divider horizontal style={{ marginBottom: "40px" }}>
                                    <Header textAlign='center' style={{}}>
                                        Une équipe complémentaire
                                </Header>
                                </Divider>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <Header textAlign='left' style={{ marginBottom: "10px" }}>
                                            <Header.Subheader style={{ fontSize: "20px", }}>Valérie Evesque</Header.Subheader>
                                        </Header>
                                        <p style={{}}>
                                            Quae dum ita struuntur, indicatum est apud Tyrum indumentum regale textum occulte, incertum quo
                                            locante vel cuius usibus apparatum. ideoque rector provinciae tunc pater Apollinaris eiusdem nominis ut
                                            conscius ductus est aliique congregati sunt ex diversis civitatibus multi, qui atrocium criminum ponderibus
                                            urgebantur.
                                </p>
                                    </div>
                                    <div style={{
                                        marginLeft: "2vw",
                                    }}>
                                        <Image circular src='/people-sample1.jpg' size="medium" />
                                    </div>
                                </div>
                                <Divider style={{ marginBottom: "40px" }}></Divider>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <Header textAlign='left' style={{ marginBottom: "10px" }}>
                                            <Header.Subheader style={{ fontSize: "20px", }}>Stéphanie Sabadel</Header.Subheader>
                                        </Header>
                                        <p style={{}}>
                                            Quae dum ita struuntur, indicatum est apud Tyrum indumentum regale textum occulte, incertum quo
                                            locante vel cuius usibus apparatum. ideoque rector provinciae tunc pater Apollinaris eiusdem nominis ut
                                            conscius ductus est aliique congregati sunt ex diversis civitatibus multi, qui atrocium criminum ponderibus
                                            urgebantur.
                                </p>
                                    </div>
                                    <div style={{
                                        marginLeft: "2vw",
                                    }}>
                                        <Image circular src='/people-sample2.jpg' size="medium" />
                                    </div>
                                </div>
                            </Segment>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "5vw", marginRight: "5vw", marginTop: "20px" }}>
                        <Segment color="blue" style={{ textAlign: "justify", display: "flex", flexDirection: "row", width: "100%", backgroundColor: "rgba(50,50,50,.05)" }}>
                            <div style={{ width: "100%" }}>
                                <Divider horizontal style={{ marginBottom: "40px" }}>
                                    <Header textAlign='center' style={{ marginBottom: "5px", }}>
                                        Nos plus
                                </Header>
                                </Divider>
                                <div>
                                    <p style={{}}>Je sais pas</p>
                                </div>
                            </div>
                        </Segment>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "5vw", marginRight: "5vw", marginTop: "20px" }}>
                        <div>
                            <Segment color="blue" style={{ textAlign: "justify", display: "flex", flexDirection: "column", backgroundColor: "rgba(50,50,50,.05)" }} >
                                <div>
                                    <Divider horizontal style={{ marginBottom: "40px" }}>
                                        <Header textAlign='center' style={{}} >
                                            Au sein de l’économie sociale
                                </Header>
                                    </Divider>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <p style={{}}>
                                            Quae dum ita struuntur, indicatum est apud Tyrum indumentum regale textum occulte, incertum quo
                                            locante vel cuius usibus apparatum. ideoque rector provinciae tunc pater Apollinaris eiusdem nominis ut
                                            conscius ductus est aliique congregati sunt ex diversis civitatibus multi, qui atrocium criminum ponderibus
                                            urgebantur.
                                </p>
                                    </div>
                                    <div style={{
                                        marginLeft: "2vw",
                                    }}>
                                        <Image src='/group.jpg' size="huge" />
                                    </div>
                                </div>
                            </Segment>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "5vw", marginRight: "5vw", marginTop: "20px" }}>
                        <div>
                            <Segment color="blue" style={{ textAlign: "justify", display: "flex", flexDirection: "column", backgroundColor: "rgba(50,50,50,.05)" }} >
                                <div>
                                    <Divider horizontal style={{ marginBottom: "40px" }}>
                                        <Header textAlign='center' style={{}} >
                                            Intégrée dans une coopérative d’activités et  d'emploi
                                </Header>
                                    </Divider>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <p style={{}}>
                                            Quae dum ita struuntur, indicatum est apud Tyrum indumentum regale textum occulte, incertum quo
                                            locante vel cuius usibus apparatum. ideoque rector provinciae tunc pater Apollinaris eiusdem nominis ut
                                            conscius ductus est aliique congregati sunt ex diversis civitatibus multi, qui atrocium criminum ponderibus
                                            urgebantur.
                                </p>
                                    </div>
                                    <div style={{
                                        marginLeft: "2vw",
                                    }}>
                                        <Image src='/group.jpg' size="huge" />
                                    </div>
                                </div>
                            </Segment>
                        </div>
                    </div>
                </div>
                <Footer style={{}}></Footer>
            </div>
        )
    }
}

