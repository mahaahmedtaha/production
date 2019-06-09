import React, { Component } from 'react';
import Dropdownlist from '../Dropdown/dropdown.js';
import SideMenu from '../menu/menu.js';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import akfaLogo from '../../Images/logocopy.png';
import MainPhoto from './mainPhoto.js';
import {colors} from '../../assets/colors.js'
import {navigation} from '../../assets/string.js'
import 'semantic-ui-css/semantic.min.css';
import './header.css'

class headertest extends Component {
    state = {
        list: "none"
    }
    hoverOn = (e) => {

        this.setState({ list: "block" });

    }
    hoverOff = (e) => {
        this.setState({ list: "none" });

    }
    toggle = () => {
        if (this.state.list === "none") {
            this.setState({ list: "block" });
        }
        else {
            this.setState({ list: "none" });
        }
    }
    mainPhoto(mainphoto) {
        if (mainphoto !== "none") {
            return (
                <div>
                    <MainPhoto cover={mainphoto} caption={this.props.captiontitle} url={this.props.url} />
                </div>
            );
        }

    }

    render() {
        const allcategory= this.props.categories
        const singlecategory=this.props.id
        return (        
            <div class={this.props.cover} onMouseEnter={this.hoverOff}>
                 
                <div class="headernavbar" style={{ backgroundColor: this.props.background , position: this.props.cover==="bg"?'none':'none'}}>
                   <Link to="/web/home" id="logoLinkLeft" ><img src={akfaLogo} alt="akfa logo" class="logoleft" /></Link>

                    <Link to="/web/contact" className={this.props.titlename === "contact" ? "active tab" : "tab"} style={{ color: colors.LinksColors, textDecoration: 'none' }} onMouseEnter={this.hoverOff}>{navigation.contact}</Link>
                    <a href="http://souq-akfa.com/" className={this.props.titlename === "order" ? "active tab" : "tab"} style={{ color: colors.LinksColors, textDecoration: 'none' }} onMouseEnter={this.hoverOff}>{navigation.order}</a>
                    <div className="dropdowncontainer" >
                    <button className="headerdropdown" onMouseEnter={this.hoverOn} style={{color: colors.LinksColors}}>
                     {navigation.sectors}
                    <span className="NavBtn" ><FontAwesomeIcon icon={faAngleDown} color= {colors.LinksColors} onClick={() => this.toggle()} /></span>
                    </button>
                    <div id="headerdropdown-content" style={{ display: this.state.list , top:this.props.cover==="bg"? "8%":"8%"}} onMouseLeave={this.hoverOff}>
                    <Dropdownlist categories={allcategory} id={singlecategory}/>
                    </div>
                    </div>
                    <Link to="/web/about" id="selector" className={this.props.titlename === "about" ? "active tab" : "tab"} style={{ color: colors.LinksColors, textDecoration: 'none' }} onMouseEnter={this.hoverOff}>{navigation.about}</Link>
                    <Link to="/web/home" style={{ color: colors.LinksColors, textDecoration: 'none' }} onMouseEnter={this.hoverOff} className={this.props.titlename === "main" ? "active tab" : "tab"} >{navigation.mainmenu}</Link>
                    <div class="topnav-right" onMouseEnter={this.hoverOff} onMouseLeave={this.hoverOff}>
                      <Link to="/web/home" id="logoLink"><img src={akfaLogo} alt="akfa logo" class="logo" /></Link>
                    </div>
                    <SideMenu />
                </div>
        
                 <div onMouseEnter={this.hoverOff}> 
                    {this.mainPhoto(this.props.mainphoto)}

                </div>
                
            </div>
           
        )

    };
}
export default headertest;