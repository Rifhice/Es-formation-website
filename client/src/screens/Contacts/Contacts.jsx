import React, { Component } from 'react';
import { Icon, Image, Segment, Header } from 'semantic-ui-react'
import Footer from '../../components/App/Footer'
import './style.css'

export default class Contacts extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (<div style={{ width: "100%", marginTop: "30px" }}>
            <Header as='h2'>Contacts</Header>
            <div style={{ marginTop: "50px", display: "flex", flexDirection: "column" }}>
                <Segment style={{ width: "90%", marginLeft: "5%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ textAlign: "justify" }}>
                            <h3><Icon name="map marker alternate" /> Adresse</h3>
                            <p>68 avenue du 8 mai 1945
                            <br />
                                48000 Mende
                            <br />
                                France, Lozère
                            </p>
                            <h3><Icon name="address card" /> Business</h3>
                            <p>es-formation@gmail.com
                                <br />+33 4 66 49 29 74
                                <br />+33 4 66 49 29 74
                            </p>
                            <h3><Icon name="users" /> Réseaux sociaux</h3>
                        </div>
                        <div>
                            <Image src="./map.png" size="big"></Image>
                        </div>
                    </div>
                </Segment>
            </div>
        </div>
        )
    }
}

