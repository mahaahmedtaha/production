import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Dropdownlist from '../Dropdown/dropdown.js';
import {navigation} from '../../assets/string.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {clickCategory} from '../../redux/Action/categoryAction';


import './menu.css'

class menu extends Component {
    state = {
        list: "none",
        onclick:false
    }
   
    hoverOn = (e) => {

        this.setState({ list: "block" });

    }
    hoverOff = (e) => {
        this.setState({ list: "none" });

    }
    toggle = () => {
       if(this.state.list==="none"){
        this.setState({ list: "block" });
       }
       else{
        this.setState({ list: "none" });
       }
    }
    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    isMenuOpen() {
        if(this.props.clickcat){
          return true;
        }
         return false
    };
    render() {
        const allcategory= this.props.allCategories
            return (
            <div className="wrappage">
                <div className="toright">
                    <Menu right 
                    isOpen={this.props.clickcat}
                    >
                    <Link to="/web/" className="tab " style={{ color: "white", textDecoration: 'none',float:"right" ,padding:"10px 30px",fontSize:"20px"}} onMouseEnter={this.hoverOff}>{navigation.mainmenu}</Link>
                    <div  className="tab Sectodiv" style={{ color: "white", textDecoration: 'none' ,float:"right",padding:"10px 25px" ,fontSize:"17px"}} >
                    <span className="NavBtn"><FontAwesomeIcon icon={faAngleDown} color="#FFFFFF" 
                    onClick={() => {
                        this.toggle()
                        this.props.clickCategory(true)
                    }}/></span>
                    <span className="Navtitle" onMouseEnter={this.hoverOn}
                     onClick={() => {
                        this.toggle()
                        this.props.clickCategory(true)
                    }}
                    
                    >{navigation.sectors}</span>
                    </div> 
                  
                    <div className="dropdownlist" style={{ display: this.props.clickcat? this.state.list:"none" /*this.props.clickcat?'block':'none'*/}}> 
                        <Dropdownlist categories={allcategory} />    
                    </div >      
                    <Link to="/web/contact" className="tab" style={{ color: "white", textDecoration: 'none',float:"right" ,padding:"10px 30px",fontSize:"17px"}} onMouseEnter={this.hoverOff}>{navigation.contact}</Link>
                    <Link to="/web/orderProduct" className="tab" style={{ color: "white", textDecoration: 'none' ,float:"right",padding:"10px 30px", fontSize:"17px"}} onMouseEnter={this.hoverOff}>{navigation.order}</Link>
                    <Link to="/web/about" id="selector" className="tab" style={{ color: "white", textDecoration: 'none' ,float:"right",padding:"10px 30px",fontSize:"17px"}} onMouseEnter={this.hoverOff}>{navigation.about}</Link>

                    </Menu>
                    
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        allCategories: state.category.allcategory,
        clickcat:state.category.onclick,
        clicksub:state.subcategory.onclicksub
         }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        clickCategory
    }
    , dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(menu);