import React, { Component } from 'react'

class Welcome extends React.Component{
    constructor(){
        super()
        this.state={
            toggleSideBar:false
        }
    }
    toggleSideBarFunc(){
        this.setState((prevState)=>{
            return{
                toggleSideBar: !prevState.toggleSideBar
            }
        })
    }
    render(){
        return(
            <header>
                <div>
                    <div className="logo">
                        <a href="#">Start Bootstrap</a>
                    </div>
                    <button onClick={()=>this.toggleSideBarFunc()}>Menu</button>
                    <nav className={this.state.toggleSideBar? "show":""}>
                        <ul>
                            <li>
                                <a href="#/services">SERVICES</a>
                            </li>
                            <li>
                                <a href="#/portfolio">PORTFOLIO</a>
                            </li>
                            <li>
                                <a href="#/about">ABOUT</a>
                            </li>
                            <li>
                                <a href="#/team">TEAM</a>
                            </li>
                            <li>
                                <a href="#/contact">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Welcome