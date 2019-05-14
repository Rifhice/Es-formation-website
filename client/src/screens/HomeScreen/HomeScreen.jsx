import React, { Component } from 'react';
import { Image, Popup } from 'semantic-ui-react'
import './style.css'

export default class SButton extends Component {

    componentWillUnmount() {
        console.log('jme casse')
    }

    render() {
        return (
            <div style={{ width: "100%", backgroundColor: "white" }}>
                <div style={{ width: "100%", background: `url(./background.png) no-repeat center`, height: "100vh" }}>

                </div>
                <p>YO</p>
            </div>
        )
    }
}

