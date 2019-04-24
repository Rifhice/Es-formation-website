import React, { Component } from 'react';
import { Icon, Header, Segment, Image, Divider } from 'semantic-ui-react'
import './style.css'
import CogSection from './CogSection'
import TrainingDetail from './TrainingDetail'
import Footer from '../../components/App/Footer'

export default class Training extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }
    }

    render() {
        return (<div style={{ width: "100%", backgroundColor: "#121613" }}>
            <div style={{ width: "75%", display: "inline-block" }} className="slide-in">
                <Header as='h1' style={{ marginTop: "30px", color: "white" }}>Se former et former ses équipes</Header>
                <h3 style={{ marginTop: "30px", color: "white", textAlign: "justify" }}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</h3>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "30px", marginBottom: 25 }}>
                    <Icon name="quote left" style={{ color: "white" }}></Icon>
                    <div style={{ color: "white", marginRight: 5, marginLeft: 5 }}>
                        <p>Ma super citation d'une personne célèbre (j'imagine) haha</p>
                        <p style={{ textAlign: "right" }}>- Personne célèbre</p>
                    </div>
                    <Icon name="quote right" style={{ color: "white" }}></Icon>
                </div>
                <Divider />
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: 25 }}>
                    <CogSection
                        label="Stress au travail"
                        isSelected={this.state.current === 0}
                        onClick={() => this.setState({ current: 0 })}
                    />
                    <CogSection
                        label="Neurosciences et enfance"
                        isSelected={this.state.current === 1}
                        onClick={() => this.setState({ current: 1 })}
                    />
                </div>
                <TrainingDetail
                    title="Gérer et positiver son stress au travail"
                    objectives={["Consulter les méchanismes physiogiques du stress et des émotions.", "Acquerir des outils renforcant la confiance en soi et l'estime de soi.", "Appliquer sa strategie de gestion du stress dans le milieu professionel."]}
                />
            </div>
            <Footer style={{}}></Footer>
        </div>
        )
    }
}

