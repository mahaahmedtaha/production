import React, { Component } from 'react';
import {colors} from '../../assets/colors.js'
import './mainPhoto.css'
class mainPhoto extends Component {
    render() {
        
        return (
            <div className={this.props.cover} style={{backgroundImage:"linear-gradient(180deg, #293744e0 0%, #293744ed 100%),url("+this.props.url+")"}}>
            <div className="captionStyle" >
            <h1 style={{color:colors.LinksColors}}>{this.props.caption}</h1>
            <hr className="breakLine" style={{backgroundColor:colors.LinksColors}}></hr>
            </div>
            </div>
        );
    }
}
export default mainPhoto;