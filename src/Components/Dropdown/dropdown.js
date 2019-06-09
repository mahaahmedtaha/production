import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import { colors } from '../../assets/colors.js'
import './dropdown.css';
import {fetchSubCategory} from '../../redux/Action/subCategoryAction';
import {fetchCategory,clickCategory} from '../../redux/Action/categoryAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




class dropdown extends Component {
   render() {
    const data =this.props.categories
    return (
        <div className="wrapper">
            <Menu vertical>

                { data && data.map((item, bgindex) => {
                        return (
                            <div>
                               { bgindex !==0 &&
                                   <hr className="dropdownHR" />
                               }
                               {item.subcategories.length>0 &&
                               <div>
                                   <Dropdown text={item.name} pointing='right' className={bgindex===0?'link item upperitem':'link item '}>
                                 <Dropdown.Menu>
                                   {item.subcategories.map((element,index)=>{
                                    return(
                                        <div>
                                         { index !==0 &&
                                          <hr className="third-layer-underline" />
                                         }
                                        <Dropdown.Item>
                                            <Link to={{ pathname: `/web/category/${item._id}/${element.id}`, state: { selectorname:item._id ,subcategory:element.id } }} style={{ color: colors.LinksColors, textDecoration: 'none' }} 
                                            onClick={() =>{ 
                                                this.props.fetchSubCategory(element.id)
                                                this.props.fetchCategory(item._id)
                                                this.props.clickCategory(false)
                                            }}>
                                                {element.name}
                                            </Link>
                                        </Dropdown.Item>
                                        </div>
                                       )
                                   })}
                                 </Dropdown.Menu>
                                </Dropdown>
                               </div>
                                }
                               {!item.subcategories.length  &&
                                <Menu.Item className=  {bgindex===0?'menuitem upperitem':'menuitem'}>
                                     <Link to={{ pathname: `/web/category/${item._id}/0`, state: { selectorname: item._id  } }} style={{ color: colors.LinksColors, textDecoration: 'none' }} 
                                      onClick={() =>{
                                                this.props.fetchCategory(item._id)
                                                this.props.clickCategory(false)
                                            }}> 
                                    {item.name}
                                      </Link>
                                </Menu.Item>
                                }

                            </div>
                        )
                    })
                }
            </Menu>
        </div>
    );
   }
}
const mapStateToProps = state => {
    return {
      
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
        // fetchCategory,
        // fetchAllCategory,
        fetchSubCategory,
        fetchCategory,
        clickCategory
        // removeCategory,
        // showLoading
    }
    , dispatch
  )
export default  connect(mapStateToProps, mapDispatchToProps)(dropdown) ;