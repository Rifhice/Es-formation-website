import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react'
import Footer from '../../components/App/Footer'
import './style.css'
import colors from "../../helpers/colors"

export default class SButton extends Component {

    render() {
        return (
            <div style={{ width: "100%", backgroundColor: "white" }}>
                <div style={{ width: "100%", background: `url(./background.jpg) no-repeat center`, height: "100vh", display: "flex", justifyContent: "center" }}>
                    <div style={{ marginTop: 67 }}>
                        <h1 style={{ marginTop: 25, fontSize: "4rem", color: "white", textShadow: `1px 1px ${colors.mainColor}` }}>ES Formations</h1>
                        <h1 style={{ position: "absolute", fontSize: "3rem", color: "white", textShadow: `1px 1px ${colors.mainColor}`, bottom: 35, left: 0, width: "100%", textAlign: "center" }}>S'Épanouir pour Soi réussir EnSemble</h1>
                    </div>
                </div>
                <div style={{
                    backgroundColor: "rgba(50,50,50,.05)", padding: 20, width: "100%", display: "flex", justifyContent: "center", flexDirection: "column",

                }}>
                    <div style={{ display: "flex", width: "100%", flexDirection: "column", paddingLeft: '10%', paddingRight: '10%' }}>
                        <h2 style={{ "color": colors.mainColor }}>Notre domaine d’intervention, l’Éducation à la Santé :</h2>
                        <h3 style={{ textAlign: "justify", fontWeight: 500 }}>"L’éducation pour la santé a pour objectif que chaque citoyen acquière tout au long de sa vie les compétences et les moyens qui lui permettront de promouvoir sa santé et sa qualité de vie ainsi que celles de la collectivité”  (INPES 2001) en : <br />
                            <h3 style={{ textAlign: "justify", fontWeight: 500 }}>
                                - en respectant la liberté, en promouvant la responsabilité des personnes,<br />
                                - en développant les connaissances et les compétences,<br />
                                - en favorisant l'estime de soi et l'attention aux autres".<br />
                            </h3>
                            Pour que les personnes adoptent des comportements plus favorables à leur santé et à celles des autres, diverses approches ont été utilisées (les leçons de bonne santé, la peur, par exemple). Nous vous proposons une autre démarche : le développement des compétences psychosociales  c’est-à-dire la capacité à mobiliser un ensemble de ressources (savoirs, savoir-faire, savoir-être) pour répondre avec efficacité aux exigences et aux épreuves de la vie quotidienne.<br /><br />

                            Savoir résoudre des problèmes, Savoir communiquer efficacement son deux des dix compétences que nous vous proposons de cultiver en participant à nos ateliers et nos formations.
                        </h3>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", marginTop: 15, marginBottom: 15 }}>
                        <div onClick={() => { }}>
                            <Image src="atelier.jpg" style={{ width: "150px" }} />
                            <p>Nos ateliers</p>
                        </div>
                        <div onClick={() => { }}>
                            <Image src="formation.jpg" style={{ width: "150px" }} />
                            <p>Nos formations</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "white", padding: 20, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", height: "300px" }}>
                    <h2 style={{ "color": colors.mainColor, marginBottom: 20 }}>Une structure de l’économie sociale et solidaire (ESS)</h2>
                    <div style={{ width: "80%", display: "flex", maxWidth: "1150px", justifyContent: "center" }}>
                        <div style={{
                            marginRight: "2vw"
                        }}>
                            <Image onClick={() => window.open("https://www.minedetalents.fr/")} src='data:image/png;base64,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' size="massive" />
                        </div>
                        <div>
                            <h3 style={{ textAlign: "justify", fontWeight: 500 }}>
                                Es formations est une entreprise de la Scop Mine de Talents, une structure de l’ESS.

    La loi du 31 juillet 2014 définit l'économie sociale et solidaire comme un mode d'entreprendre et de développement économique adapté à tous les domaines de l'activité humaine, auquel adhèrent des personnes morales de droit privé qui remplissent les conditions cumulatives suivantes : un but autre que le seul partage des bénéfices, une gouvernance démocratique, une lucrativité limitée.
                                </h3>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 25, padding: 20, width: "100%", backgroundColor: "rgba(50,50,50,.05)" }}>
                    <h2 style={{ "color": colors.mainColor }}>Actualités</h2>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <div>
                            <h4>La qualité de vie au travail : qu'est ce que c'est ?</h4>
                            <Image
                                onClick={() => window.open("https://www.youtube.com/watch?v=uF18PgutL8Y")}
                                src="https://i.ytimg.com/vi/uF18PgutL8Y/hqdefault.jpg" />
                        </div>
                        <div>
                            <h4>Offres avantageuses pour les CE d'entreprises.</h4>
                            <Image src="bagnols.png" size="medium"
                                onClick={() => window.open('https://www.bagnols-les-bains.com/escale-maman-bebe/')}
                            />
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div >
        )
    }
}

