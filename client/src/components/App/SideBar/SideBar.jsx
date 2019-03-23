import React, { Component } from 'react';
import { Button, Header, Menu, Icon, Segment, Transition, Image, Divider } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import SideBarButton from '../SideBarButton'
import './style.css'

export default class MainPage extends Component {

    constructor() {
        super()
        this.state = {
            pages: [],
            index: 0,
            current: -1,
            isVisible: true,
            isFolded: true,
            isMoving: false,
            width: 0,
            height: 0,
            theposition: 0,
            mobileDisplayBar: false
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener('scroll', this.listenToScroll.bind(this))
        this.resize();
    }

    resize() {
        console.log(window.innerWidth, window.innerHeight)
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            theposition: scrolled,
        })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
        window.removeEventListener('scroll', this.listenToScroll.bind(this))
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
                                    onClick={() => { this.setState({ current: 0 }); this.props.history.push('/Calendar') }}
                                >
                                    <SideBarButton
                                        icon='calendar'
                                        text='Calendrier'
                                        color={this.state.current === 0 ? "green" : "black"}
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
                                <div
                                    className="sidebar-button"
                                    onClick={() => { this.setState({ current: 1 }); this.props.history.push('/Formations') }}
                                >
                                    <SideBarButton
                                        icon='lightbulb'
                                        text='Nos formations'
                                        color={this.state.current === 1 ? "green" : "black"}
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
                                <div
                                    className="sidebar-button"
                                    onClick={() => { this.setState({ current: 2 }); this.props.history.push('/Workshops') }}
                                >
                                    <SideBarButton
                                        icon='book'
                                        text='Nos ateliers'
                                        color={this.state.current === 2 ? "green" : "black"}
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
                                <div
                                    className="sidebar-button"
                                    onClick={() => { this.setState({ current: 3 }); this.props.history.push('/Toolbox') }}
                                >
                                    <SideBarButton
                                        icon='box'
                                        text='Boîte à outils'
                                        color={this.state.current === 3 ? "green" : "black"}
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
                                <div
                                    className="sidebar-button"
                                    onClick={() => { this.setState({ current: 4 }); this.props.history.push('/Contacts') }}
                                >
                                    <SideBarButton
                                        icon='phone'
                                        text='Contacts'
                                        color={this.state.current === 4 ? "green" : "black"}
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
                                <div
                                    className="sidebar-button"
                                    onClick={() => { this.setState({ current: 5 }); this.props.history.push('/AboutUs') }}
                                >
                                    <SideBarButton
                                        icon='question'
                                        text='Qui sommes-nous ?'
                                        color={this.state.current === 5 ? "green" : "black"}
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
                        : <div style={{ position: "fixed", left: "20px", top: "20px", zIndex: 10, opacity: this.state.theposition > 0 && !this.state.mobileDisplayBar ? this.state.theposition < 0.5 ? 1 - this.state.theposition : .5 : 1 }}>
                            <Icon
                                style={{ position: "fixed", left: "20px", top: "20px", zIndex: 10, opacity: this.state.theposition > 0 && !this.state.mobileDisplayBar ? this.state.theposition < 0.5 ? 1 - this.state.theposition : .5 : 1 }}
                                inverted
                                circular
                                name="align justify"
                                size="large"
                                color="green"
                                onClick={() => {
                                    this.setState({ mobileDisplayBar: !this.state.mobileDisplayBar })
                                }}
                            ></Icon>
                            <Transition visible={this.state.mobileDisplayBar} animation='fade right' duration={500}>
                                <div className='sidebar-container'
                                    style={{ width: 200, backgroundColor: "white" }}>
                                    <div
                                        onClick={() => this.props.history.push('/Home')}
                                    >
                                        <Image src='/logo.png' size='mini' className='company-logo' />
                                    </div>
                                    <Divider></Divider>
                                    <div className='sidebar-buttons-container'>
                                        <div
                                            className="sidebar-button"
                                            onClick={() => { this.setState({ current: 0, mobileDisplayBar: false }); this.props.history.push('/Calendar') }}
                                        >
                                            <SideBarButton
                                                icon='calendar'
                                                text='Calendrier'
                                                color={this.state.current === 0 ? "green" : "black"}
                                                isFolded={false}
                                                isMoving={this.state.isMoving}
                                                size="large"
                                            />
                                        </div>
                                        <div
                                            className="sidebar-button"
                                            onClick={() => { this.setState({ current: 1, mobileDisplayBar: false }); this.props.history.push('/Formations') }}
                                        >
                                            <SideBarButton
                                                icon='lightbulb'
                                                text='Nos formations'
                                                color={this.state.current === 1 ? "green" : "black"}
                                                isFolded={false}
                                                isMoving={this.state.isMoving}
                                                size="large"
                                            />
                                        </div>
                                        <div
                                            className="sidebar-button"
                                            onClick={() => { this.setState({ current: 2, mobileDisplayBar: false }); this.props.history.push('/Workshops') }}
                                        >
                                            <SideBarButton
                                                icon='book'
                                                text='Nos ateliers'
                                                color={this.state.current === 2 ? "green" : "black"}
                                                isFolded={false}
                                                isMoving={this.state.isMoving}
                                                size="large"
                                            />
                                        </div>
                                        <div
                                            className="sidebar-button"
                                            onClick={() => { this.setState({ current: 3, mobileDisplayBar: false }); this.props.history.push('/Toolbox') }}
                                        >
                                            <SideBarButton
                                                icon='box'
                                                text='Boîte à outils'
                                                color={this.state.current === 3 ? "green" : "black"}
                                                isFolded={false}
                                                isMoving={this.state.isMoving}
                                                size="large"
                                            />
                                        </div>
                                        <div
                                            className="sidebar-button"
                                            onClick={() => { this.setState({ current: 4, mobileDisplayBar: false }); this.props.history.push('/Contacts') }}
                                        >
                                            <SideBarButton
                                                icon='phone'
                                                text='Contacts'
                                                color={this.state.current === 4 ? "green" : "black"}
                                                isFolded={false}
                                                isMoving={this.state.isMoving}
                                                size="large"
                                            />
                                        </div>
                                        <div
                                            className="sidebar-button"
                                            onClick={() => { this.setState({ current: 5, mobileDisplayBar: false }); this.props.history.push('/AboutUs') }}
                                        >
                                            <SideBarButton
                                                icon='question'
                                                text='Qui sommes-nous ?'
                                                color={this.state.current === 5 ? "green" : "black"}
                                                isFolded={false}
                                                isMoving={this.state.isMoving}
                                                size="large"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Transition>
                        </div>
                }
            </MediaQuery>
        )
    }
}

