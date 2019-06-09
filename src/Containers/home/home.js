import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import NavBar from '../../Components/header/header.js';
import Footer from '../../Components/footer/footer.js';
import Contact from '../../Components/contactUs/contactUs.js';
import AboutUS from '../../Components/aboutUS/aboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from '../../Images/facebook-letter-logo.png';
import twitter from '../../Images/twitter-logo-silhouette.png';
import insta from '../../Images/instagram-logo.png';
import snap from '../../Images/snapchat.png';
import youtube from '../../Images/youtube-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../../assets/colors.js';
import {cover,mainphoto} from '../../assets/string.js';
import HomeSlider from '../../Components/Slider/slider.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchCompany} from '../../redux/Action/companyAction'
import {fetchAllCategory} from '../../redux/Action/categoryAction';

import LoadingBar, { showLoading, hideLoading } from 'react-redux-loading-bar';

import './home.css';
class home extends Component {
    changeOverfloow = () => {
        document.body.style.overflow = "auto"
    }
    componentWillMount() {
        this.props.fetchCompany();
        this.props.fetchAllCategory();
        this.props.showLoading();
        this.props.hideLoading();
      }
    render() {
        document.body.style.overflow = "auto"
        document.body.style.backgroundColor =colors.LinksColors;
        const  data =  this.props.company;
        const allcategory=this.props.allcategory
        return (

            <body >
                <div className="wrapPage" ref={(section) => { this.wrapPage = section; }} >
                <div className="loading-bar" >
                       <LoadingBar style={{ backgroundColor: '#293744', height: '10px' ,direction:'rtl' }} />
                </div>  
                    <NavBar background={colors.defult} cover={cover.exist} mainphoto={mainphoto.defult} titlename="main" categories={allcategory} />
                   
                    {data.map((element,index)=>
                     <div className="homeTitle">
                         <h1 className="homeTitleheading" style={{color:colors.LinksColors}}>{element.name}</h1>
                          <div className="HomeiconStyle">
                          <a href={element.contacts.filter(x=>x.type==="رابط سناب شات").map((element,index)=>{return(element.value)})}><img src={snap} className="iconeStyle" alt="snap logo"/></a>
                          <a href={element.contacts.filter(x=>x.type==="رابط الانستجرام").map((element,index)=>{return(element.value)})}><img src={insta} className="iconeStyle" alt="instagrame logo"/></a>
                            <a href={element.contacts.filter(x=>x.type==="رابط اليوتيوب").map((element,index)=>{return(element.value)})}><img src={youtube} className="iconeStyle" alt="youtube" /></a>
                            <a href={element.contacts.filter(x=>x.type==="رابط الفيس بوك").map((element,index)=>{return(element.value)})}><img src={facebook} className="iconeStyle" alt="facebook"/></a>
                            <a href={element.contacts.filter(x=>x.type==="رابط تويتر").map((element,index)=>{return(element.value)})}><img src={twitter} className="iconeStyle" alt="twitter"/></a>
                        </div>
                        </div>
                        )}
                   
                        {/* <h1 className="homeTitleheading" style={{color:colors.LinksColors}}>مجموعة أكفاء  للتجارة و المقاولات العامة و الأنشطة الاستثمارية</h1> */}
                        <br />
                        {/* <h1  style={{color:colors.LinksColors}}>الداعم الأكبر  للإقتصاد السعودي في مختلف المجالات</h1> */}
                        {/* <div className="HomeiconStyle">
                            <a href="https://accounts.snapchat.com/"><img src={snap} className="iconeStyle" alt="snap logo"/></a>
                            <a href="https://www.instagram.com/accounts/login/?hl=en"><img src={insta} className="iconeStyle" alt="instagrame logo"/></a>
                            <a href="https://www.youtube.com/"><img src={youtube} className="iconeStyle" alt="youtube" /></a>
                            <a href="https://www.facebook.com/login/"><img src={facebook} className="iconeStyle" alt="facebook"/></a>
                            <a href="https://twitter.com/"><img src={twitter} className="iconeStyle" alt="twitter"/></a>
                        </div> */}
                       
                    {/* </div> */}
                    <button className="DropDownButton"  style={{borderColor:colors.LinksColors}} onClick={(e) => {
                            this.changeOverfloow();
                            scrollToComponent(this.about,
                                { offset: 0, align: 'bottom', transitionDuration:"0.5s",ease: 'linear',  smooth: "easeInOutQuint",
                            })
                        }}>
                        <FontAwesomeIcon icon={faAngleDoubleDown} color={colors.LinksColors} className="dropDownImg " />
                     </button>
                    <section >
                   
                    <div className="cursoleContainer"><HomeSlider categories={allcategory}/></div>
                        <div id="about" ref={(section) => { this.about = section; }}>
                            <AboutUS margin="right" />
                        </div>
                        <Contact display="none" />
                       {this.props.allcategory.length>0&&this.props.company.length>0&&
                            <Footer categories={allcategory}/>
                       }
                    </section>

                </div>
            </body>
        );
    }
}
const mapStateToProps = state => {
    return {
      company: state.company.company,
      allcategory:state.category.allcategory
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
      fetchCompany,
      fetchAllCategory,
      showLoading,
      hideLoading
    }
    , dispatch
  )
  export default connect(mapStateToProps, mapDispatchToProps)(home);
