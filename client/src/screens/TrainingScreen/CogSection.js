import React, { Component } from 'react';
import { Icon, Header, Segment, Image, Divider } from 'semantic-ui-react'
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
        return (<div
            onMouseEnter={() => this.setState({ isFocused: true })}
            onMouseLeave={() => this.setState({ isFocused: false })}
            onClick={() => this.props.onClick()}
            style={{ display: "flex", alignItems: "center", ...this.props.style }}
        >
            <Icon name="cog" style={{ color: this.props.isSelected || this.state.isFocused ? colors.mainColor : "grey" }} size="massive"></Icon>
            <h2 style={{ marginTop: "30px", color: this.props.isSelected || this.state.isFocused ? colors.mainColor : "grey" }}>{this.props.label}</h2>
            <Icon name="triangle right" style={{ color: this.props.isSelected || this.state.isFocused ? colors.mainColor : "grey" }} size="huge"></Icon>
        </div>
        )
    }
}

