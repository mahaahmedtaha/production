import React, { Component } from 'react';

import './slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import {colors} from '../../assets/colors.js'
import {sliderdata} from '../../assets/Data.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchSubCategory} from '../../redux/Action/subCategoryAction';
import { fetchCategory,fetchAllCategory} from '../../redux/Action/categoryAction';


class SliderAnimation extends Component {
    state={
        stateData:sliderdata.data
    }
   setcolor(){

   }
   componentWillMount() {
    this.props.fetchAllCategory();
  }
    render() {
        const settings = {
            infinite: true,
            speed: 8000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 400,
            useTransform:true,
            cssEase: "linear",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        const  data =this.props.allCategories;
        return (
            
            <div className="cursoleStyle" >
                
                <Slider {...settings} >

                { data && data.map((item, index) =>

                        <div   className= {this.state.stateData.filter(x=>x.id===(index%3)).map((element,index)=>{return(element.bg)})}  style={{backgroundColor:"red"}} >
                         {/* <Link to={{pathname: `/web/category/${item._id }`, state: { selectorname: item._id } }} className="linkCursole" style={{ color:colors.LinksColors , textDecoration: 'none' }} > */}
                         <Link to={{ pathname: `/web/category/${item._id}/${item.subcategories.length?item.subcategories[0].id:0}`, state: { selectorname: item._id ,subcategory:item.subcategories.length?item.subcategories[0].id:''} }}
                                                     onClick={() =>{
                                                        this.props.fetchCategory(item._id)
                                                    }}
                                                    className="linkCursole" style={{ color:colors.LinksColors , textDecoration: 'none' }} 
                                                    >   
                            <h3 class="headerstyle" style={{color:colors.LinksColors}}>
                            {/* <Link to={{pathname: `/web/category/${item._id }`, state: { selectorname: item._id } }} className="linkCursole" style={{ color:colors.LinksColors , textDecoration: 'none' }} > */}
                            <Link to={{ pathname: `/web/category/${item._id}/${item.subcategories.length?item.subcategories[0].id:0}`, state: { selectorname: item._id ,subcategory:item.subcategories.length?item.subcategories[0].id:''} }}
                                                     onClick={() =>{
                                                        this.props.fetchCategory(item._id)
                                                    }}
                                                    className="linkCursole" style={{ color:colors.LinksColors , textDecoration: 'none' }} 
                                                    >   
                            {item.name}
                            </Link>
                            </h3>
                            <hr class="cursoleHR" style={{backgroundColor:colors.LinksColors}}></hr>
                            <p className="paragraph-style" style={{color:colors.LinksColors}}>
                            {/* <Link to={{pathname: `/web/category/${item._id }`, state: { selectorname: item._id } }} className="linkCursole" style={{ color:colors.LinksColors , textDecoration: 'none' }} > */}
                            <Link to={{ pathname: `/web/category/${item._id}/${item.subcategories.length?item.subcategories[0].id:0}`, state: { selectorname: item._id ,subcategory:item.subcategories.length?item.subcategories[0].id:''} }}
                                                     onClick={() =>{
                                                        this.props.fetchCategory(item._id)
                                                    }}
                                                    className="linkCursole" style={{ color:colors.LinksColors , textDecoration: 'none' }} 
                                                    >   
                            {item.hint}
                            </Link>
                            </p>
                            <button id="cursolebutton" >
                            {/* this.state.stateData.filter(x=>x.header===item.name).map((element,index)=>{return(element.path)}) */}
                                {/* <Link to={{pathname: `/web/category/${item._id }`, state: { selectorname: item._id } }} className="linkCursole" style={{ color:colors.LinksColors , textDecoration: 'none' }} > */}
                                <Link to={{ pathname: `/web/category/${item._id}/${item.subcategories.length?item.subcategories[0].id:0}`, state: { selectorname: item._id ,subcategory:item.subcategories.length?item.subcategories[0].id:''} }}
                                                     onClick={() =>{
                                                        this.props.fetchCategory(item._id)
                                                    }}
                                                    className="linkCursole" style={{ color:colors.LinksColors , textDecoration: 'none' }} 
                                                    >   
                                    أطلع علي المزيد
                                </Link>
                            </button>
                      </Link>
                        </div>

                  )}  
                </Slider>
               

               
                {/* <Slider {...settings} >
                    {this.state.data.map((item, index) =>
                        <div   className={item.bg}   style={{backgroundColor:"red"}} >
                            <h3 class="headerstyle" style={{color:colors.LinksColors}}>{item.header}</h3>
                            <hr class="cursoleHR" style={{backgroundColor:colors.LinksColors}}></hr>
                            <p className="paragraph-style" style={{color:colors.LinksColors}}>{item.desc}</p>
                            <button id="cursolebutton" >
                                <Link to={{ pathname: item.path, state: { selectorname: item.id } }} className="linkCursole" style={{ color:colors.LinksColors , textDecoration: 'none' }} >
                                    أطلع علي المزيد
                                </Link>
                            </button>
                        </div>
                    )}
                </Slider> */}
            </div> 


        );
    }
}
const mapStateToProps = state => {
    return {
        allCategories: state.category.allcategory,
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchAllCategory,
        fetchCategory,
        fetchSubCategory
    }
    , dispatch
  )
  export default connect(mapStateToProps, mapDispatchToProps)(SliderAnimation);

