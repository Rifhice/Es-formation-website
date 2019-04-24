import React, { Component } from 'react';
import { Icon, Popup, Transition } from 'semantic-ui-react'
import './style.css'

export default class SButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isFocused: false,
            isVisible: true
        }
    }

    render() {
        return (
            <Transition visible={this.state.isVisible} animation='scale' duration={500}>
                <Popup
                    position="right"
                    flowing
                    basic
                    trigger={<div className={this.props.isFolded
                        ? ""
                        : "SBbutton-wrapper"}
                        onMouseEnter={() => this.setState({ isFocused: true, isVisible: true })}
                        onMouseLeave={() => this.setState({ isFocused: false, isVisible: false })}>
                        <Icon
                            color={this.props.isFocused || this.state.isFocused ? this.props.focusedColor : this.props.unFocusedColor}
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
            </Transition>
        )
    }
}

