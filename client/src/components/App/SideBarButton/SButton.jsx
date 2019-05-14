import React, { Component } from 'react';
import { Button, Dropdown } from 'semantic-ui-react'
import './style.css'
import colors from "../../../helpers/colors"

export default class SButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isFocused: false,
            isHovered: false,
        }
    }

    render() {
        return (
            this.props.dropdown && this.props.dropdown.length !== 0
                ? <Dropdown
                    button
                    closeOnChange
                    basic={this.props.isFocused || this.state.isHovered ? false : true}
                    onMouseEnter={() => this.setState({ isHovered: true })}
                    onMouseLeave={() => this.setState({ isHovered: false })}
                    defaultSelectedLabel="Nos formations"
                    open={this.state.isHovered}
                    style={{ boxShadow: `0 0 0 1px ${colors.mainColor} inset`, backgroundColor: colors.mainColor }
                    }
                    text={this.props.text}
                    options={this.props.dropdown}
                />
                : <div
                    onMouseEnter={() => this.setState({ isHovered: true })}
                    onMouseLeave={() => this.setState({ isHovered: false })}>
                    <Button
                        basic={this.props.isFocused || this.state.isHovered ? false : true}
                        style={{ boxShadow: `0 0 0 1px ${colors.mainColor} inset`, backgroundColor: colors.mainColor }}
                    >{this.props.text}</Button>
                </div>
        )
    }
}

