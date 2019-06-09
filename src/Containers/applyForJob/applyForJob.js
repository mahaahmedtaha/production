import React, { Component } from 'react';
import './applyForJob.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import upload from '../../Images/upload.png';
import Nav from '../../Components/header/header.js';
import Footer from '../../Components/footer/footer.js';
import { cover, mainphoto } from '../../assets/string.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllCategory } from '../../redux/Action/categoryAction';
import { fetchCompany } from '../../redux/Action/companyAction';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { colors } from '../../assets/colors.js';
import { API_ENDPOINT } from '../../AppConfig';
import axios from 'axios';
import { Redirect } from 'react-router';

class applyForJob extends Component {
    state = {
        name: '',
        phone: '',
        job: '',
        redirect: false,
        file: null,
        imagePreviewUrl: null,


    }
    componentWillMount() {
        this.props.fetchCompany()
        this.props.fetchAllCategory()
    }
    handleSelectedFile(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        this.setState({ selectedFile: file.name })
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    submit() {

        let uri = `${API_ENDPOINT}jobApply`
        const data = new FormData();
        data.append("name",this.state.name)
        data.append("job",this.state.job)
        data.append("phoneNumber",this.state.phone)
        data.append("cv",this.state.file)
        axios.post(uri, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                this.setState({ redirect: true })
            }).catch(error => {
            })
    }
    reset(){

    }
    componentDidMount() {
        var spanElements = document.getElementById('applyform');
        var spans = spanElements.getElementsByTagName('span')
        var hrs = spanElements.getElementsByTagName('hr')
        var headings = spanElements.getElementsByTagName('h4')
        var titles = spanElements.getElementsByTagName('h3')


        for (var i = 0; i < spans.length; i++) {

            spans[i].style.color = colors.paragraphsColor;
        }
        for (var count = 0; count < hrs.length; count++) {

            hrs[count].style.backgroundColor = colors.sectorsHeading;
        }
        for (var counte = 0; counte < headings.length; counte++) {

            headings[counte].style.color = colors.sectorsHeading;
        }
        for (var icount = 0; icount < titles.length; icount++) {

            titles[icount].style.color = colors.sectorsHeading;
        }

    }
   
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="/web/home" />
            )
        }
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = this.state.selectedFile
        }
        document.body.style.backgroundColor = colors.LinksColors;
        const allcategory = this.props.allcategory
        return (
            <div>
                <Nav background={colors.secondaryColor} cover={cover.defult} mainphoto={mainphoto.defult} />
                <div class="col-sm-6" id="applyform">
                    <h4>تقدم للعمل</h4>
                    <hr class="applyformhr"></hr>
                    {/* <form class="form-horizontal"> */}
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="name" placeholder="الاسم" name="name" value={this.state.name}
                                 onChange={(e) => this.setState({ name: e.target.value })}
                                />

                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="phone" class="form-control" id="email" placeholder="رقم الجوال" name="email" value={this.state.phone}
                                 onChange={(e) => this.setState({ phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="email" placeholder="الوظيفة المراد الالتحاق بها" name="email" value={this.state.job}
                                 onChange={(e) => this.setState({ job: e.target.value})}
                                />
                            </div>
                        </div>
                        <label id="formuplaodfile" style={{ color: colors.paragraphsColor }}> نرجو ارفاق نسخة من السيرة الذاتية
                                <input type="file" id="File" size="60" onChange={(e) => this.handleSelectedFile(e)} />
                            <img class="uplaodicone" src={upload} alt="uploadCV logo" style={{ Color: colors.primaryColor }}></img>
                        </label>
                        {this.state.imagePreviewUrl &&
                            <div className="imgPreview mb-3">
                                {$imagePreview}
                                <i onClick={() => this.setState({ imagePreviewUrl: null, file: null })} className="fa fa-window-close" style={{ rigth: "300px", top: "-15px" }}></i>
                            </div>}

                        <div class="form-group">
                            <div class="col-sm-10" id="apllybuttons">
                                <input type="submit" class="btn btn-primary" id="signbuttonapply" value="ارسال" style={{ backgroundColor: colors.primaryColor, color: colors.LinksColors }}  onClick={() => { this.submit() }}></input>
                                <input type="reset"  class="btn btn-primary" id="signbuttonapply" value="اعادة" style={{ backgroundColor: colors.primaryColor, color: colors.LinksColors }} onClick={() => {this.setState({name:' ',job:' ',phone:' ',imagePreviewUrl: null, file: null})}}></input>
                            </div>
                        </div>
                    {/* </form> */}
                </div>
                <Footer categories={allcategory}/>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        allcategory: state.category.allcategory
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchAllCategory,fetchCompany,
        showLoading,
        hideLoading
    }
    , dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(applyForJob);