import React, { Component } from 'react';
import { Icon, Button, Segment, Image, Divider, StepContent } from 'semantic-ui-react'
import './style.css'
import colors from "../../helpers/colors"

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
                <Button style={{ backgroundColor: colors.mainColor, color: "white" }} size="large"><Icon name='download' />Télécharger en PDF</Button>
                <Button style={{ backgroundColor: colors.mainColor, color: "white" }} size="large"><Icon name='dollar' />Tarifs</Button>
                <Button style={{ backgroundColor: colors.mainColor, color: "white" }} size="large"><Icon name='calendar' />Prochaine dates</Button>
                <Button style={{ backgroundColor: colors.mainColor, color: "white" }} size="large"><Icon name='file' />Bulletin d'inscription</Button>
            </div>
            <Divider style={{ width: "90%" }} />
            <h2 style={{ marginTop: "30px", }}>{this.props.title}</h2>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ flex: 1, marginRight: 15 }}>
                    <h2 style={{ marginTop: "30px", "color": colors.mainColor }}>Objectifs</h2>
                    <Divider style={{ width: "90%" }} />
                    {this.props.objectives && this.props.objectives.map(objective =>
                        <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{}}></Icon>
                            <p style={{}}>{objective}</p>
                        </div>)}
                    <h2 style={{ marginTop: "30px", "color": colors.mainColor }}>Programme</h2>
                    <Divider style={{ width: "90%" }} />
                    <p style={{ textAlign: "justify" }}>{this.props.program ? this.props.program.map(module => <div style={{ marginBottom: 20 }}>
                        <h3>{module.title}</h3>
                        {module.bulletPoints.map(point => <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{}}></Icon>
                            <p style={{}}>{point}</p>
                        </div>)}
                    </div>) : "Pas de programme."} </p>
                    <h2 style={{ marginTop: "30px", "color": colors.mainColor }}>Evaluation</h2>
                    <Divider style={{ width: "90%" }} />
                    <p style={{ textAlign: "justify" }}>{this.props.evaluations ? this.props.evaluations.map(evaluation => <div style={{ display: "flex", marginBottom: 20 }}>
                        <Icon name="triangle right" style={{}}></Icon>
                        <p style={{}}>{evaluation}</p>
                    </div>) : "Pas d'évaluation."} </p>
                </div>
                <div style={{ flex: 1 }}>
                    <h2 style={{ marginTop: "30px", "color": colors.mainColor }}>Public</h2>
                    <Divider style={{ width: "90%" }} />
                    {this.props.targets && this.props.targets.map(target =>
                        <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{}}></Icon>
                            <p style={{}}>{target}</p>
                        </div>)}
                    <h2 style={{ marginTop: "30px", "color": colors.mainColor }}>Méthodes</h2>
                    <Divider style={{ width: "90%" }} />
                    {this.props.methods && this.props.methods.map(target =>
                        <div style={{ display: "flex" }}>
                            <Icon name="triangle right" style={{}}></Icon>
                            <p style={{}}>{target}</p>
                        </div>)}
                    <h2 style={{ marginTop: "30px", "color": colors.mainColor }}>Formatrices</h2>
                    <Divider style={{ width: "90%" }} />
                    <div style={{ textAlign: "left" }}>
                        <h3>Valérie Evesque</h3>
                        <p>Sophrologue - Animatrice LAEP</p>
                        <h3>Stéphanie Sabadel</h3>
                        <p>Éducatrice Jeune Enfance</p>
                    </div>
                    <h2 style={{ marginTop: "30px", "color": colors.mainColor }}>Moyens techniques</h2>
                    <Divider style={{ width: "90%" }} />
                    <div style={{ textAlign: "left" }}>
                        <p>Support de cours remis en fin de
formation, outils numériques et
papiers.</p>
                    </div>
                    <h2 style={{ marginTop: "30px", "color": colors.mainColor }}>Contacts</h2>
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

