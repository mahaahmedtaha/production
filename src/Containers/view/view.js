import React, { Component } from 'react';
import TableContent from '../../Components/reduxsidemenu/reduxsidemenu';
import LoadingBar, { showLoading } from 'react-redux-loading-bar';
import Nav from '../../Components/header/header.js';
import { colors } from '../../assets/colors.js';
import { foodstyle } from '../../assets/style';
import {cover,mainphoto} from '../../assets/string.js';
import {fetchCategory,removeCategory,fetchAllCategory} from '../../redux/Action/categoryAction';
import {fetchSubCategory} from '../../redux/Action/subCategoryAction';
import {fetchCompany} from '../../redux/Action/companyAction'

import Footer from '../../Components/footer/footer.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../../Components/content/content';
import './view.css'
class view extends Component {
    constructor(props) {
        super(props);
        // const {selectorname} = this.props.location.state
        this.state = {
        // id:selectorname,
        previous:0
        };
      }
    componentWillMount(){
        this.props.fetchCategory(this.props.match.params.id);
        if(this.props.match.params.subid>0){
            this.props.fetchSubCategory(this.props.match.params.subid);
        }
        this.props.fetchAllCategory()
        this.props.showLoading();
        this.props.fetchCompany()
    }  
    render() {
        document.body.style.backgroundColor = colors.LinksColors;
        const allcategory = this.props.allcategory
        if(this.props.match.params.id!==this.state.previous){
            // this.props.removeCategory();
            this.setState({previous:this.props.match.params.id})
            this.props.fetchCategory(this.props.match.params.id); 
            this.props.fetchAllCategory()
            if(this.props.match.params.subid>0){
                this.props.fetchSubCategory(this.props.match.params.subid);
            }
        }
        return (
            <div>
               
                    <div className="loading-bar" >
                       <LoadingBar style={{ backgroundColor: '#293744', height: '10px' ,direction:'rtl' }} />
                   </div>
                    <Nav background={colors.secondaryColor} cover={cover.defult} mainphoto={mainphoto.exist} captiontitle={this.props.category.category ? this.props.category.category.name : ''} url={this.props.category.category ? this.props.category.category.image : ''} categories={allcategory ? allcategory : []}/>
                    <div class="row" id="containerDiv">
                    <div class="col-3" id="table">
                    {this.props.subcategory &&
                        <TableContent data={this.props.category.subcategories} id={this.props.match.params.subid} />
                    }
                    </div> 
                    
                   {this.props.category.subcategories &&
                    <div class={(this.props.category.subcategories.length)?"col-md-9":''} id="multiple-content">
                     <Content captionwidth={foodstyle.captionwidth}  
                     popup={foodstyle.imagepop} 
                     imageStyle={foodstyle.image} 
                     popupresp={foodstyle.imagepopresp} 
                  />
                  </div>
                   }

             
                </div>
              {this.props.allcategory.length>0&&
                    <Footer categories={allcategory}/>
              }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        category: state.category.categories,
        allcategory: state.category.allcategory,
        subcategory: state.subcategory.subcategories,
        company: state.company.company,
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchCategory,
        fetchAllCategory,
        fetchSubCategory,
        removeCategory,
        showLoading,
        fetchCompany,
    }
    , dispatch
  )
export default  connect(mapStateToProps, mapDispatchToProps)(view);