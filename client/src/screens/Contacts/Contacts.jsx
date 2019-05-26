import React, { Component } from 'react';
import { Icon, Image, Segment, Header } from 'semantic-ui-react'
import Footer from '../../components/App/Footer'
import './style.css'
import colors from "../../helpers/colors"

export default class Contacts extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (<div style={{ width: "100%", backgroundColor: "white", paddingTop: "50px" }}>
            <div style={{ width: "75%", display: "inline-block" }} className="slide-in">
                <Header as='h1' style={{ marginTop: "30px", color: colors.mainColor }}>Contacts</Header>
                <div style={{ marginTop: "50px", display: "flex", flexDirection: "column" }}>
                    <Segment style={{ width: "90%", marginLeft: "5%", backgroundColor: "rgba(50,50,50,.05)", "border-style": "dotted" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ textAlign: "justify" }}>
                                <h2><Icon name="map marker alternate" /> Adresse</h2>
                                <p>68 avenue du 8 mai 1945
                            <br />
                                    48000 Mende
                            <br />
                                    France, Lozère
                            </p>
                                <h2><Icon name="address card" /> Business</h2>
                                <p>es-formation@gmail.com
                                <br />+33 4 66 49 29 74
                                <br />+33 4 66 49 29 74
                            </p>
                                <h2><Icon name="users" /> Réseaux sociaux</h2>
                            </div>
                            <div>
                                <Image src="./map.png" size="big"></Image>
                            </div>
                        </div>
                    </Segment>
                </div>
            </div>
        </div>
        )
    }
}

