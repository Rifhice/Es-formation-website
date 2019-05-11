import React, { Component } from 'react';
import { Button, Header, Menu, Icon, Segment, Sidebar, Image, Divider } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import './style.css'

export default class MainPage extends Component {

    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return <MediaQuery minDeviceWidth={700}>
            {(matches) =>
                matches
                    ? <div style={{
                        "border-top": "0.1px solid grey",
                        "box-shadow": "0px 0px 12px #grey",
                        backgroundColor: "rgba(50,50,50,.05)" 
                    }}>
                        <div style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "space-around",
                            paddingBottom: "50px",
                        }}>
                            <div style={{ marginTop: "50px", textAlign: "justify",    }}>
                                <h2>ES Formations</h2>
                                <p>Votre super slogan qui claque !</p>
                            </div>
                            <div style={{ marginTop: "50px", textAlign: "justify",    }}>
                                <h3><Icon name="linkify" />Links</h3>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <a style={{ "color": "#29b02e" }} href="/Home"><Icon name="home" />Acceuil</a>
                                    <a style={{ "color": "#29b02e" }} href="/Calendar"><Icon name="calendar" />Calendrier</a>
                                    <a style={{ "color": "#29b02e" }} href="/"><Icon name="lightbulb" />Nos formations</a>
                                    <a style={{ "color": "#29b02e" }} href="/"><Icon name="book" />Nos ateliers</a>
                                    <a style={{ "color": "#29b02e" }} href="/"><Icon name="box" />Boîte à outils</a>
                                    <a style={{ "color": "#29b02e" }} href="/AboutUs"><Icon name="question" />Qui sommes-nous?</a>
                                </div>
                            </div>
                            <div style={{ marginTop: "50px", textAlign: "justify",    }}>
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
                            </div>
                            <div style={{ marginTop: "50px", textAlign: "justify",    }}>
                                <h3><Icon name="users" /> Réseaux sociaux</h3>
                                <Icon name="linkedin" />
                            </div>
                        </div>
                        <p style={{ position: "relative", bottom: "5px", paddingLeft: "20px",    }}><Icon name="copyright" />2019 ES Formations, Tout droits réservés.</p>
                    </div>
                    : <div style={{
                        "border-right": "0.1px solid lightgray",
                        "box-shadow": "0px 0px 12px #aaa",
                    }}>
                        <div style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "space-around",
                            paddingBottom: "50px",
                        }}>
                            <div style={{ marginTop: "50px", textAlign: "justify" }}>
                                <h3>ES Formations</h3>
                                <p>Votre super slogan qui claque !</p>
                            </div>
                            <div style={{ marginTop: "50px", textAlign: "justify" }}>
                                <Icon name="linkify" />
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <a style={{ "background-color": "#29b02e" }} href="/Home"><Icon name="home" />Acceuil</a>
                                    <a style={{ "background-color": "#29b02e" }} href="/Calendar"><Icon name="calendar" />Calendrier</a>
                                    <a style={{ "background-color": "#29b02e" }} href="/"><Icon name="lightbulb" />Nos formations</a>
                                    <a style={{ "background-color": "#29b02e" }} href="/"><Icon name="book" />Nos ateliers</a>
                                    <a style={{ "background-color": "#29b02e" }} href="/"><Icon name="box" />Boîte à outils</a>
                                    <a style={{ "background-color": "#29b02e" }} href="/AboutUs"><Icon name="question" />Qui sommes-nous?</a>
                                </div>
                            </div>
                            <div style={{ marginTop: "50px", textAlign: "justify" }}>
                                <Icon name="map marker alternate" />
                                <p>68 avenue du 8 mai 1945
                                    <br />
                                    48000 Mende
                                    <br />
                                    France, Lozère
                                </p>
                                <Icon name="address card" />
                                <p>es-formation@gmail.com
                                    <br />+33 4 66 49 29 74
                                    <br />+33 4 66 49 29 74
                                </p>
                            </div>
                            <div style={{ marginTop: "50px", textAlign: "justify" }}>
                                <Icon name="users" />
                                <Icon name="linkedin" />
                            </div>
                        </div>
                        <p style={{ position: "relative", bottom: "5px", paddingLeft: "20px" }}><Icon name="copyright" />2019 ES Formations, Tout droits réservés.</p>
                    </div>}
        </MediaQuery>
    }
}

