import React, { Component } from 'react';
import { Icon, Popup } from 'semantic-ui-react'
import './style.css'

export default class SButton extends Component {

    render() {
        return (
            <Popup
                trigger={<div className={this.props.isFolded
                    ? ""
                    : "SBbutton-wrapper"}>
                    <Icon
                        color={this.props.color}
                        className={this.props.isFolded
                            ? ""
                            : "SBbutton-icon"}
                        name={this.props.icon}
                        size={this.props.size ? this.props.size : "huge"} />
                    {!this.props.isFolded && !this.props.isMoving
                        ? <h3 className="SBbutton-text">{this.props.text}</h3>
                        : null}
                </div>}
                content={this.props.text} >
            </Popup>
        )
    }
}

