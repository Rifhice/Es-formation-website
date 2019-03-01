import React, { Component } from 'react';
import { Loader, Dimmer, Grid, Button, TextArea, Form, Segment, Header, Image } from 'semantic-ui-react'
import FormationService from '../../../services/FormationService'

export default class HomePage extends Component {

    async componentDidMount() {
        setTimeout(() =>
            FormationService.getFormations(), 5000)
    }

    render() {
        return (
            <div className='register-form'>
                <p>Salut le monde !</p>
                {
                    this.props.formations.map(formation =>
                        <p>{formation.name}</p>
                    )
                }
            </div>
        )
    }
}

