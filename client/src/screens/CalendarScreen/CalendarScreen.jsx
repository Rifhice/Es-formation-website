import React, { Component } from 'react';
import { Icon, Popup } from 'semantic-ui-react'
import './style.css'

export default class SButton extends Component {

    constructor() {
        super()
        this.state = {
            currentTab: 0,
        }
    }

    componentWillUnmount() {
        this.props.getFormations()
    }

    render() {
        return (
            <p>Calendar {this.props.counter}</p>
        )
    }
}

