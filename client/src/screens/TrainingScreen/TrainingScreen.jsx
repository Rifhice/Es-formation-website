import React, { Component } from 'react';
import { Icon, Header, Segment, Image, Divider } from 'semantic-ui-react'
import './style.css'
import CogSection from './CogSection'
import TrainingDetail from './TrainingDetail'
import Footer from '../../components/App/Footer'
import queryString from 'query-string'

export default class Training extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: queryString.parse(this.props.location.search).selected && queryString.parse(this.props.location.search).selected.match(/^\d+$/) ? parseInt(queryString.parse(this.props.location.search).selected) : 0
        }
        this.formations = [
            {
                title: "Neurosciences au travail",
                header: "Gérer et positiver son stress au travail",
                objectives: ["Consulter les méchanismes physiogiques du stress et des émotions.", "Acquerir des outils renforcant la confiance en soi et l'estime de soi.", "Appliquer sa strategie de gestion du stress dans le milieu professionel."],
                targets: ["Dirigeants, cadres, et salariés/es des secteurs privés et publics.", "Personnes en recherche d’emploi.", "Centres de formations professionnelles."],
                methods: ["Alternance de manière dynamique d’approches théoriques, d’ateliers de travail en groupe, de partages d’expériences et d’exercices pratiques.", "Jeux de coopération."],
                program: [{ title: "Le stress en situation professionnelle", bulletPoints: ["Approche théorique sur les mécanismes physiologiques.", "Approches pratiques et réalisation de sa méthode d’auto-adaptation antistress.", "Le stress : facteur d’équilibre et de biodiversité dans l’entreprise."] },
                { "title": "Les émotions", bulletPoints: ["Le rôle et mécanismes physiologiques.", "Outils d’auto-adaptation de gestion des émotions.", "Les émotions : aide et soutien à la relation d’équipe."] },
                { title: "Être acteur et auteur de son environnement socio-professionnel", bulletPoints: ["Quels outils et quelles habiletés de communication pour gérer les conflits.", "Qualité de vie au travail : quel cercle vertueux."] }
                ],
                evaluations: ["Évaluation diagnostique avant la formation.", "Évaluations à chaud en fin de journée présentielle et une évaluation finale.", "Attestation de fin de formation."]
            },
            {
                title: "Neurosciences et enfance",
                header: "Accompagner l’enfant au quotidien.",
                objectives: ["S’initier aux progrès des neurosciences affectives et sociales.", "Donner des clés de compréhension des comportements émotionnels des enfants.", "Réfléchir sur sa pratique professionnelle pour accompagner l’enfant dans ses émotions et la gestion du stress."],
                targets: ["Personnel de crèche, assistantes maternelles.", "Animateurs de centres sociaux, périscolaires.", "Éducateurs - Enseignants - ATSEM - AVS - Soignants."],
                methods: ["Alternance de manière dynamique d’approches théoriques et pratiques.", "Jeux coopératifs (compétences psychosociales)."],
                program: [{ title: "", bulletPoints: ["Les neurosciences affectives et le développement du cerveau de l’enfant"] },
                { "title": "", bulletPoints: ["Comment adapter les pratiques professionnelles pour accompagner l’enfant dans ses émotions et la gestion du stress"] },
                ],
                evaluations: ["Évaluation diagnostique avant la formation.", "Évaluations à chaud en fin de journée présentielle et une évaluation finale.", "Attestation de fin de formation."]
            }
        ]
    }

    render() {
        const selected = queryString.parse(this.props.location.search).selected && queryString.parse(this.props.location.search).selected.match(/^\d+$/) ? queryString.parse(this.props.location.search).selected : this.state.current
        return (<div style={{ width: "100%", backgroundColor: "white", paddingTop: "50px" }}>
            <div style={{ width: "75%", display: "inline-block" }} className="slide-in">
                <Header as='h1' style={{ marginTop: "30px", color: "#29b02e" }}>Se former et former ses équipes</Header>
                <h3 style={{ marginTop: "30px", textAlign: "justify" }}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</h3>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "30px", marginBottom: 25 }}>
                    <Icon name="quote left" style={{}}></Icon>
                    <div style={{ marginRight: 5, marginLeft: 5 }}>
                        <p>Ma super citation d'une personne célèbre (j'imagine) haha</p>
                        <p style={{ textAlign: "right" }}>- Personne célèbre</p>
                    </div>
                    <Icon name="quote right" style={{}}></Icon>
                </div>
                <Divider />
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", marginTop: 25, textAlign: "center", flexDirection: "column" }}>
                        {this.formations.map((formation, i) => <CogSection
                            style={{ marginBottom: 20 }}
                            label={formation.title}
                            isSelected={this.state.current === i}
                            onClick={() => this.setState({ current: i }, () => this.props.history.push(`/Training?selected=${i}`))}
                        />)}
                    </div>
                    <TrainingDetail
                        title={this.formations[selected].header}
                        objectives={this.formations[selected].objectives}
                        targets={this.formations[selected].targets}
                        methods={this.formations[selected].methods}
                        program={this.formations[selected].program}
                        evaluations={this.formations[selected].evaluations}
                    />
                </div>
            </div>
            <Footer style={{}}></Footer>
        </div>
        )
    }
}

