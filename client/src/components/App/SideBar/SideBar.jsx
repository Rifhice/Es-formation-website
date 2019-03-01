import React, { Component } from 'react';
import { Button, Header, Menu, Icon, Segment, Sidebar, Image, Divider } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import SideBarButton from '../SideBarButton'
import './style.css'

export default class MainPage extends Component {

    constructor() {
        super()
        this.state = {
            pages: [],
            index: 0,
            isVisible: true,
            isFolded: true,
            isMoving: false,
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        console.log(window.innerWidth, window.innerHeight)
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    showSettings(event) {
        event.preventDefault();

    }

    render() {
        return (
            <MediaQuery minDeviceWidth={700}>
                {(matches) =>
                    matches
                        ? <div className='sidebar-container'
                            style={{ width: this.state.isFolded ? 100 : 200 }}>
                            <div
                                onClick={() => this.props.history.push('/Home')}
                            >
                                <Image src='/logo.png' size='small' className='company-logo' />
                            </div>
                            <Divider></Divider>
                            <div className='sidebar-buttons-container'>
                                <div
                                    className="sidebar-button"
                                    onClick={() => this.props.history.push('/Calendar')}
                                >
                                    <SideBarButton
                                        icon='calendar'
                                        text='Calendrier'
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
                                <div
                                    className="sidebar-button"
                                    onClick={() => this.props.history.push('/Formations')}
                                >
                                    <SideBarButton
                                        icon='lightbulb'
                                        text='Nos formations'
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
                                <div
                                    className="sidebar-button"
                                    onClick={() => this.props.history.push('/Workshops')}
                                >
                                    <SideBarButton
                                        icon='book'
                                        text='Nos ateliers'
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
                                <div
                                    className="sidebar-button"
                                    onClick={() => this.props.history.push('/Toolbox')}
                                >
                                    <SideBarButton
                                        icon='box'
                                        text='Boîte à outils'
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
                                <div
                                    className="sidebar-button"
                                    onClick={() => this.props.history.push('/Contacts')}
                                >
                                    <SideBarButton
                                        icon='phone'
                                        text='Contacts'
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
                            </div>
                            <div className='sidebar-icon-container'>
                                <Icon
                                    name={this.state.isFolded ? 'right arrow' : 'left arrow'}
                                    className='sidebar-size-button'
                                    size="large"
                                    onClick={() => {
                                        this.setState({ isFolded: !this.state.isFolded, isMoving: true })
                                        setTimeout(() => this.setState({ isMoving: false }), 1000)
                                    }}
                                />
                            </div>
                        </div>
                        : <div id="page-wrap">
                            <Button>Click Here</Button>
                        </div>
                }
            </MediaQuery>
        )
    }
}

