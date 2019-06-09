import React, { Component } from 'react';
import { colors } from '../../assets/colors.js'
import '../../Components/popUp/popUp.css'
import './reduxsidemenu.css';
import {fetchSubCategory} from '../../redux/Action/subCategoryAction';
import {fetchCategory} from '../../redux/Action/categoryAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class reduxsidemenu extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            pageindex: 0,
            selecteditem:null,
            pageselected:false,
            showModal: false,
            count: 0,
            popup: '',
            contentBody: [],
            title: "",
            url: '',
            caption: '',
            video: '',
            videodiscription: '',
            videotitle: '',
            videosubtitle: '',
            itemcontentname: "",
            pageselector: true,
            popupview: false,
            height: "100%",
            w: "50%",
            subcategory:0,


        };
     
    }  
    componentDidMount(){
        const id = this.props.id
        this.props.fetchCategory(id);
        this.setState({subcategory:id},()=>{
          
        })
     
        
    } 
    render() {
               let items=''
             if(this.props.category.subcategories){
                items =this.props.category.subcategories.map((item, element) => {
                    return (
                        <tr onClick={() =>{this.props.fetchSubCategory(item.id)
                             this.setState({subcategory:item.id})}} className="trtable"
                            style={{ borderColor: colors.secondaryColor, backgroundColor:this.props.subcategory.subcategory.id=== item.id   ?colors.secondaryColor : colors.LinksColors  }}
                        >
                            <td style={{ color: this.props.subcategory.subcategory.id=== item.id   ? colors.LinksColors : colors.secondaryColor }}>
                                {item.name}
                            </td>
                            <td className="arrowtd"><div className="arrow" style={{ display: this.props.subcategory.subcategory.id=== item.id  ? "inline-block" : "none" }}></div></td>
                        </tr>
    
                    )
                })
             }
            return (
            <div>
                <table className="my-table">
                        {items}
                </table>
            </div>
           
        );
    }
}

const mapStateToProps = state => {
    return {
        subcategory: state.subcategory.subcategories,
        category: state.category.categories,
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchSubCategory,
        fetchCategory
    }
    , dispatch
  )
export default  connect(mapStateToProps, mapDispatchToProps)(reduxsidemenu) ;