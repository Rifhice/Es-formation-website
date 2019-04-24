import React, { Component } from 'react';
import { Icon, Header, Segment, Image, Divider } from 'semantic-ui-react'
import './style.css'

export default class CogSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isFocused: false,
        }
    }

    render() {
        return (<div
            onMouseEnter={() => this.setState({ isFocused: true })}
            onMouseLeave={() => this.setState({ isFocused: false })}
            onClick={() => this.props.onClick()}
        >
            <Icon name="cog" style={{ color: this.props.isSelected || this.state.isFocused ? "#29b02e" : "white" }} size="massive"></Icon>
            <h2 style={{ marginTop: "30px", color: this.props.isSelected || this.state.isFocused ? "#29b02e" : "white" }}>{this.props.label}</h2>
            <Icon name="triangle down" style={{ color: this.props.isSelected || this.state.isFocused ? "#29b02e" : "white" }} size="huge"></Icon>
        </div>
        )
    }
}

