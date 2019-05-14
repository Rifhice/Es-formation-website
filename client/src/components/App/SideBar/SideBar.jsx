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
        if (this.props.history.location.pathname.includes("/Workshops")) {
            this.setState({ current: 2 })
        } else if (this.props.history.location.pathname.includes("/Training")) {
            this.setState({ current: 1 })
        } else if (this.props.history.location.pathname.includes("/AboutUs")) {
            this.setState({ current: 5 })
        } else if (this.props.history.location.pathname.includes("/Contacts")) {
            this.setState({ current: 4 })
        } else if (this.props.history.location.pathname.includes("Calendar")) {
            this.setState({ current: 0 })
        } else if (this.props.history.location.pathname.includes("/Toolbox")) {
            this.setState({ current: 3 })
        }
        this.props.history.listen((location, action) => {
            console.log(location.pathname)
            if (location.pathname.includes("/Lists")) {
                this.setState({ current: 1 })
            }
        })
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
                        ? <div className='sidebar-container' style={{ borderBottom: "solid", borderWidth: ".5px", backgroundColor: `rgba(255,255,255,${this.state.theposition > 0.25 ? 1 : this.state.theposition === 0 ? 0 : this.state.theposition + 0.35})` }}>
                            <div
                                onClick={() => { this.setState({ current: -1 }); this.props.history.push('/Home') }}
                            >
                                <div className='company-logo'>
                                    <Image src='/logo.png' size='mini' />
                                </div>
                            </div>
                            <Divider></Divider>
                            <div className='sidebar-buttons-container'>
                                <div
                                    className="sidebar-button"
                                >
                                    <SideBarButton
                                        text='Notre activité'
                                        dropdown={[
                                            { value: "Nos ateliers", key: "Nos ateliers", text: "Nos ateliers", onClick: () => { this.setState({ current: 2 }); this.props.history.push('/Workshops') } },
                                            { value: "Nos formations", key: "Nos formations", text: "Nos formations", onClick: () => { this.setState({ current: 1 }); this.props.history.push('/Training') } },
                                            { value: "Calendrier", key: "Calendrier", text: "Calendrier", onClick: () => { this.setState({ current: 0 }); this.props.history.push('/Calendar') } }
                                        ]}
                                        isFocused={this.state.current === 2 || this.state.current === 0 || this.state.current === 1}
                                        focusedColor={"green"}
                                        unFocusedColor={"grey"}
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
                                        isFocused={this.state.current === 5}
                                        focusedColor={"green"}
                                        unFocusedColor={"grey"}
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
                                        isFocused={this.state.current === 4}
                                        focusedColor={"green"}
                                        unFocusedColor={"grey"}
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
                                        isFocused={this.state.current === 3}
                                        focusedColor={"green"}
                                        unFocusedColor={"grey"}
                                        isFolded={this.state.isFolded}
                                        isMoving={this.state.isMoving}
                                    />
                                </div>
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

