import React, { Component } from 'react';
import './aboutUs.css';
import AboutUS from '../../Components/aboutUS/aboutUs.js';
import Nav from '../../Components/header/header.js'
import { cover, mainphoto } from '../../assets/string.js';
import { colors } from '../../assets/colors.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllCategory } from '../../redux/Action/categoryAction';
import LoadingBar, { showLoading, hideLoading } from 'react-redux-loading-bar';
import Footer from '../../Components/footer/footer.js';



class aboutUs extends Component {
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
                <div className="loading-bar" >
                    <LoadingBar style={{ backgroundColor: '#293744', height: '10px', direction: 'rtl' }} />
                </div>
                <Nav background={colors.secondaryColor} cover={cover.defult} mainphoto={mainphoto.defult} titlename="about" categories={allcategory}/>
                <AboutUS allcategory={allcategory}/>
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
  export default connect(mapStateToProps, mapDispatchToProps)(aboutUs);