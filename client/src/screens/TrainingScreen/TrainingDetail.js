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
            <h2 style={{ marginTop: "30px", }}>{this.props.title}</h2>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ flex: 1, marginRight: 15 }}>
                    <h2 style={{ marginTop: "30px", "color": "#29b02e" }}>Objectifs</h2>
                    <Divider style={{ width: "90%" }} />
                    {this.props.objectives && this.props.objectives.map(objective =>
                        <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{}}></Icon>
                            <p style={{}}>{objective}</p>
                        </div>)}
                    <h2 style={{ marginTop: "30px", "color": "#29b02e" }}>Programme</h2>
                    <Divider style={{ width: "90%" }} />
                    <p style={{ textAlign: "justify" }}>{this.props.program ? this.props.program.map(module => <div style={{ marginBottom: 20 }}>
                        <h3>{module.title}</h3>
                        {module.bulletPoints.map(point => <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{}}></Icon>
                            <p style={{}}>{point}</p>
                        </div>)}
                    </div>) : "Pas de programme."} </p>
                    <div style={{ marginLeft: 30 }}>
                        <h3 style={{ marginTop: "30px", textAlign: "justify", "color": "#29b02e" }}>Déroulement</h3>
                        <Divider />
                        {this.props.schedule && this.props.schedule.map(step =>
                            <div style={{ display: "flex" }}>
                                <Icon name="triangle right" style={{}}></Icon>
                                <p style={{}}>{step}</p>
                            </div>)}
                    </div>
                    <div style={{ marginLeft: 30 }}>
                        <h3 style={{ marginTop: "30px", textAlign: "justify", "color": "#29b02e" }}>Contenu</h3>
                        <Divider />
                        {this.props.schedule && this.props.schedule.map(step =>
                            <div style={{ display: "flex" }}>
                                <Icon name="triangle right" style={{}}></Icon>
                                <p style={{}}>{step}</p>
                            </div>)}
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <h2 style={{ marginTop: "30px", "color": "#29b02e" }}>Public</h2>
                    <Divider style={{ width: "90%" }} />
                    {this.props.targets && this.props.targets.map(target =>
                        <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{}}></Icon>
                            <p style={{}}>{target}</p>
                        </div>)}
                    <h2 style={{ marginTop: "30px", "color": "#29b02e" }}>Méthodes</h2>
                    <Divider style={{ width: "90%" }} />
                    {this.props.methods && this.props.methods.map(target =>
                        <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{}}></Icon>
                            <p style={{}}>{target}</p>
                        </div>)}
                    <h2 style={{ marginTop: "30px", "color": "#29b02e" }}>Contacts</h2>
                    <Divider style={{ width: "90%" }} />
                    <h3>es-formation@gmail.com
                                <br />+33 4 66 49 29 74
                                <br />+33 4 66 49 29 74
                            </h3>
                </div>
            </div>
        </div>
        )
    }
}

