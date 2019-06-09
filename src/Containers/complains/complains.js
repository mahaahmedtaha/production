import React, { Component } from 'react';
import './complains.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../Components/header/header.js';
import {colors} from '../../assets/colors.js';
import Footer from '../../Components/footer/footer.js';
import {cover,mainphoto} from '../../assets/string.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllCategory } from '../../redux/Action/categoryAction';
import {fetchCompany} from '../../redux/Action/companyAction'
import { API_ENDPOINT } from '../../AppConfig';
import axios from 'axios';
import { Redirect } from 'react-router';

class complains extends Component {
    state={
        name:'',
        complaintto:'',
        job:'',
        phone:'',
        compamint:'',
        redirect:false

    }
    componentDidMount(){
        var spanElements = document.getElementById('applyform');
         var spans=spanElements.getElementsByTagName('span')
         var hrs=spanElements.getElementsByTagName('hr')
         var headings=spanElements.getElementsByTagName('h4')
         var titles=spanElements.getElementsByTagName('h3')

        for (var i = 0; i < spans.length; i++)
         {  
             
              spans[i].style.color=colors.paragraphsColor; 
        }
        for (var count = 0; count < hrs.length; count++)
         {  
  
              hrs[count].style.backgroundColor=colors.primaryColor; 
        }
        for (var counte = 0; counte< headings.length; counte++)
         {  

              headings[counte].style.color=colors.sectorsHeading; 
        }
        for (var counter = 0; counter < titles.length; counter++)
        {  
 
             titles[counter].style.color=colors.sectorsHeading; 
       }

       }
       componentWillMount() {
        this.props.fetchAllCategory();
        this.props.fetchCompany();

    }
    submit() {
        let data = {
            complainFrom: this.state.name,
            complainTo:this.state.complaintto,
            jobComplainTo:this.state.job,
            phone: this.state.phone,
            title: this.state.compamint
        }
        let uri = `${API_ENDPOINT}complain`

        axios.post(uri,JSON.stringify(data),{
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                this.setState({ redirect:true})
            }).catch(error => {
            })
    }
    render() {
        document.body.style.overflow = "auto"
        document.body.style.backgroundColor = colors.LinksColors;
        const allcategory=this.props.allcategory
        if (this.state.redirect) {
            return (
              <Redirect to="/web/home" />
            )
          }
        return (
            <div>
                <Nav background={colors.secondaryColor} cover={cover.defult} mainphoto={mainphoto.defult}  categories={allcategory}/>

                <div class="col-sm-6" id="applyform">
                    <h4>قدم شكوى</h4>
                    <hr class="applyformhr"></hr>
                    {/* <form class="form-horizontal" > */}
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="name" placeholder="اسم مقدم الشكوى" name="name"
                                onChange={(e) => this.setState({ name: e.target.value })}
                                />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="email" placeholder="اسم المشكو فيه" name="email"
                                onChange={(e) => this.setState({ complaintto: e.target.value })}
                                 />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="email" placeholder="وظيفة المشكو فيه" name="email" 
                                onChange={(e) => this.setState({ job: e.target.value })}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="phone" class="form-control" id="email" placeholder="رقم هاتف مقدم الشكوى" name="email"
                                onChange={(e) => this.setState({ phone: e.target.value})}
                                />
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="4" id="comment" placeholder="موضوع الشكوى" style={{backgroundColor:colors.LinksColors,borderColor:colors.aboutbackground}}
                            onChange={(e) => this.setState({ compamint: e.target.value })}
                            ></textarea>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10" id="apllybuttons">
                               
                                <button type='submit' class="btn btn-default"  id="signbutton" style={{ backgroundColor: colors.primaryColor, color: colors.LinksColors }}
                                            onClick={() => { this.submit() }}
                                        >ارسال</button>

                            </div>
                        </div>
                    {/* </form> */}
                </div>

             {
                 this.props.allcategory.length>0&&
                 <Footer  categories={allcategory}/>
             }
               
            </div>
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
        fetchAllCategory,
        fetchCompany,
    }
    , dispatch
  )
  export default connect(mapStateToProps, mapDispatchToProps)(complains);