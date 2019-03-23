import React, { Component } from 'react';
import { Icon, Image, Header, Segment, Container, Divider } from 'semantic-ui-react'
import Footer from '../../components/App/Footer'
import './style.css'

export default class AboutUs extends Component {

    constructor() {
        super()
        this.state = {
            currentTab: 0,
        }
    }

    render() {
        return (
            <div style={{ width: "100%" }}>
                <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <Header as='h2' textAlign='center'>
                        ES Formations avec une phrase d'accroche ?
                    </Header>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginLeft: "5vw", marginRight: "5vw" }}>
                    <div>
                        <Segment style={{ textAlign: "justify", display: "flex", flexDirection: "column" }}>
                            <div>
                                <div>
                                    <Header textAlign='center'>
                                        Qui sommes-nous ?
                                </Header>
                                </div>
                                <Divider style={{ marginBottom: "40px" }}></Divider>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <p>
                                        Quae dum ita struuntur, indicatum est apud Tyrum indumentum regale textum occulte, incertum quo
                                        locante vel cuius usibus apparatum. ideoque rector provinciae tunc pater Apollinaris eiusdem nominis ut
                                        conscius ductus est aliique congregati sunt ex diversis civitatibus multi, qui atrocium criminum ponderibus
                                        urgebantur.
                                </p>
                                </div>
                                <div style={{
                                    marginLeft: "1vw",
                                }}>
                                    <Image src='/group.jpg' size="huge" />
                                </div>
                            </div>
                        </Segment>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginLeft: "5vw", marginRight: "5vw", marginTop: "20px" }}>
                    <div>
                        <Segment style={{ textAlign: "justify", display: "flex", flexDirection: "column" }}>
                            <div>
                                <Header textAlign='center'>
                                    Une équipe complémentaire
                                </Header>
                            </div>
                            <Divider style={{ marginBottom: "40px" }}></Divider>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <Header textAlign='left' style={{ marginBottom: "5px" }}>
                                        <Header.Subheader style={{ fontSize: "20px" }}>Valérie Evesque</Header.Subheader>
                                    </Header>
                                    <p>
                                        Quae dum ita struuntur, indicatum est apud Tyrum indumentum regale textum occulte, incertum quo
                                        locante vel cuius usibus apparatum. ideoque rector provinciae tunc pater Apollinaris eiusdem nominis ut
                                        conscius ductus est aliique congregati sunt ex diversis civitatibus multi, qui atrocium criminum ponderibus
                                        urgebantur.
                                </p>
                                </div>
                                <div style={{
                                    marginLeft: "1vw",
                                }}>
                                    <Image circular src='/people-sample1.jpg' size="medium" />
                                </div>
                            </div>
                            <Divider style={{ marginBottom: "40px" }}></Divider>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <Header textAlign='left' style={{ marginBottom: "5px" }}>
                                        <Header.Subheader style={{ fontSize: "20px" }}>Stéphanie Sabadel</Header.Subheader>
                                    </Header>
                                    <p>
                                        Quae dum ita struuntur, indicatum est apud Tyrum indumentum regale textum occulte, incertum quo
                                        locante vel cuius usibus apparatum. ideoque rector provinciae tunc pater Apollinaris eiusdem nominis ut
                                        conscius ductus est aliique congregati sunt ex diversis civitatibus multi, qui atrocium criminum ponderibus
                                        urgebantur.
                                </p>
                                </div>
                                <div style={{
                                    marginLeft: "1vw",
                                }}>
                                    <Image circular src='/people-sample2.jpg' size="medium" />
                                </div>
                            </div>
                        </Segment>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginLeft: "5vw", marginRight: "5vw", marginTop: "20px" }}>
                    <Segment style={{ textAlign: "justify", display: "flex", flexDirection: "row", width: "100%" }}>
                        <div style={{ width: "100%" }}>
                            <div>
                                <Header textAlign='center' style={{ marginBottom: "5px" }}>
                                    Nos plus
                                </Header>
                                <Divider style={{ marginBottom: "40px" }}></Divider>
                            </div>
                            <div>
                                <p>Je sais pas</p>
                            </div>
                        </div>
                    </Segment>
                </div>
                <Footer style={{}}></Footer>
            </div>
        )
    }
}

