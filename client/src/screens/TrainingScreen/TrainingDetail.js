import React, { Component } from 'react';
import { Icon, Button, Segment, Image, Divider, StepContent } from 'semantic-ui-react'
import './style.css'

export default class CogSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isFocused: false,
        }
    }

    render() {
        return (<div>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: 50, marginBottom: 50 }}>
                <Button color="green" size="large"><Icon name='download' />Télécharger en PDF</Button>
                <Button color="green" size="large"><Icon name='dollar' />Tarifs</Button>
                <Button color="green" size="large"><Icon name='calendar' />Prochaine dates</Button>
                <Button color="green" size="large"><Icon name='file' />Bulletin d'inscription</Button>
            </div>
            <Divider style={{ width: "90%" }} />
            <h2 style={{ marginTop: "30px", color: "white" }}>{this.props.title}</h2>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{ marginTop: "30px", color: "white" }}>Objectifs</h2>
                    <Divider style={{ width: "90%" }} />
                    {this.props.objectives && this.props.objectives.map(objective =>
                        <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{ color: "white" }}></Icon>
                            <p style={{ color: "white" }}>{objective}</p>
                        </div>)}
                    <Image style={{ marginTop: 25, marginLeft: 20, textAlign: "center" }} src='./group.jpg' size="medium"></Image>
                    <div style={{ textAlign: "justify", color: "white", marginTop: 25 }}>
                        <h2><Icon name="address card" /> Contact</h2>
                        <p>es-formation@gmail.com
                                <br />+33 4 66 49 29 74
                                <br />+33 4 66 49 29 74
                            </p>
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <h2 style={{ marginTop: "30px", color: "white" }}>Public</h2>
                    <Divider style={{ width: "90%" }} />
                    {this.props.targets && this.props.targets.map(target =>
                        <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{ color: "white" }}></Icon>
                            <p style={{ color: "white" }}>{target}</p>
                        </div>)}
                    <h2 style={{ marginTop: "30px", color: "white" }}>Programme</h2>
                    <Divider style={{ width: "90%" }} />
                    <p style={{ color: "white", textAlign: "justify" }}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                    <div style={{ marginLeft: 30 }}>
                        <h3 style={{ marginTop: "30px", color: "white", textAlign: "justify" }}>Déroulement</h3>
                        <Divider />
                        {this.props.schedule && this.props.schedule.map(step =>
                            <div style={{ display: "flex" }}>
                                <Icon name="triangle right" style={{ color: "white" }}></Icon>
                                <p style={{ color: "white" }}>{step}</p>
                            </div>)}
                    </div>
                    <div style={{ marginLeft: 30 }}>
                        <h3 style={{ marginTop: "30px", color: "white", textAlign: "justify" }}>Contenu</h3>
                        <Divider />
                        {this.props.schedule && this.props.schedule.map(step =>
                            <div style={{ display: "flex" }}>
                                <Icon name="triangle right" style={{ color: "white" }}></Icon>
                                <p style={{ color: "white" }}>{step}</p>
                            </div>)}
                    </div>
                    <h2 style={{ marginTop: "30px", color: "white" }}>Méthodes</h2>
                    <Divider style={{ width: "90%" }} />
                    {this.props.targets && this.props.targets.map(target =>
                        <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{ color: "white" }}></Icon>
                            <p style={{ color: "white" }}>{target}</p>
                        </div>)}
                </div>
            </div>
        </div>
        )
    }
}

