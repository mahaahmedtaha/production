import React, { Component } from 'react';
import Contact from '../../Components/contactUs/contactUs';
import './contactUs.css';
import Nav from '../../Components/header/header.js';
import {colors} from '../../assets/colors.js';
import {cover,mainphoto} from '../../assets/string.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllCategory } from '../../redux/Action/categoryAction';
import  { showLoading, hideLoading } from 'react-redux-loading-bar';
import Footer from '../../Components/footer/footer.js';


class contactUs extends Component {
    componentWillMount() {
        this.props.fetchAllCategory();
        this.props.showLoading();
        this.props.hideLoading();
    }
    render() {
        document.body.style.overflow = "auto"
        document.body.style.backgroundColor = colors.LinksColors;
        const allcategory=this.props.allcategory
        return (
            <div>
               <Nav background={colors.secondaryColor} cover={cover.defult} mainphoto={mainphoto.defult} titlename="contact" categories={allcategory}/>
               <Contact display="true" allcategory={allcategory}/>
             {this.props.allcategory.length>0&&
               <Footer categories={allcategory}/>
             }
              
           
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      allcategory:state.category.allcategory
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
      fetchAllCategory,
      showLoading,
      hideLoading
    }
    , dispatch
  )
  export default connect(mapStateToProps, mapDispatchToProps)(contactUs) ;