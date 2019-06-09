import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from '../../Images/facebook-letter-logo.png';
import phone from '../../Images/phone-receiver.png';
import insta from '../../Images/instagram-logo.png';
import mail from '../../Images/envelope.png'
import snap from '../../Images/snapchat.png';
import twitter from '../../Images/twitter-logo-silhouette.png';
import youtube from '../../Images/youtube-logo.png';
import { colors } from '../../assets/colors.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCompany } from '../../redux/Action/companyAction';
import LoadingBar from 'react-redux-loading-bar';
import Map from '../GoogleMap'
import { API_ENDPOINT } from '../../AppConfig';
import axios from 'axios';
import { Redirect } from 'react-router';


import './contactUs.css'

class contactUs extends Component {
    state = {
        name: '',
        nameError: '',
        email: '',
        message: '',
        redirect:false

    }
    componentDidMount() {
        var spanElements = document.getElementById('contactelemnts');
        var paraghraphs = spanElements.getElementsByTagName('p')
        var spans = spanElements.getElementsByTagName('span')
        var hrs = spanElements.getElementsByTagName('hr')
        var headings = spanElements.getElementsByTagName('h4')
        var titles = spanElements.getElementsByTagName('h3')
        var inputs = spanElements.getElementsByTagName('input')

        for (var i = 0; i < paraghraphs.length; i++) {
            paraghraphs[i].style.color = colors.forthColor;
        }
        for (var count = 0; count < spans.length; count++) {
            spans[count].style.color = colors.paragraphsColor;
        }
        for (var counte = 0; counte < hrs.length; counte++) {
            hrs[counte].style.backgroundColor = colors.sectorsHeading;
        }
        for (var icount = 0; icount < headings.length; icount++) {
            headings[icount].style.color = colors.sectorsHeading;
        }
        for (var icounte = 0; icounte < titles.length; icounte++) {
            titles[icounte].style.color = colors.sectorsHeading;
        }
        for (var icounter = 0; icounter < inputs.length; icounter++) {
            inputs[icounter].style.backgroundColor = colors.LinksColors;
            inputs[icounter].style.borderColor = colors.aboutbackground;
        }
    }
    componentWillMount() {
        this.props.fetchCompany()
    }
    submit() {
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        let uri = `${API_ENDPOINT}contactus`

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
        document.body.style.color = colors.LinksColors;
        const display = this.props.display;

        var map1 = "none";
        if (display === "none") {
            map1 = "true";
        }
        var contacthome = "none";
        if (display === "none") {
            contacthome = "true";
        }
        if (this.state.redirect) {
            return (
              <Redirect to="/web/home" />
            )
          }
        const data = this.props.company;
        return (
            <div>
                 
                  <div className="loading-bar" style={{ width: "100%", position: "absolute", backgroundColor: "transparent", bottom: "-1px" }} >
            
              <LoadingBar style={{ zIndex: "200", backgroundColor: colors.primaryColor, height: '5px', width: this.props.lang === "ar" ? "150%" : "100%" }} />
            </div>
                <div class="container" id="contactelemnts">
                    <div class="jumbotron" id="jumbotronID" style={{ display: this.props.display }} >
                        <h3>اتصل بنا</h3>
                        <hr style={{ backgroundColor: colors.sectorsHeading }}></hr>
                        <div style={{ height: "300px", width: "100%" }}>
                            <Map homewidth={false}></Map>
                        </div>
                    </div>

                    <div class="row" id="contactelemnts">
                        <div class="col-sm-6" id="conatctusicons" style={{ display: this.props.display }}>
                            <h3 style={{ color: colors.sectorsHeading }}>:معلومات الاتصال</h3>
                            {data.map((element, index) =>
                                <div>
                                    <p><span>{element.contacts.filter(x => x.type === "الإيميل").map((element, index) => { return (element.value) })}</span>:البريدالالكترونى</p>
                                    <p><span>{element.contacts.filter(x => x.type === "التلفون").map((element, index) => { return (element.value) })}</span>:الهاتف</p>
                                    <p><span>{element.contacts.filter(x => x.type === "الفاكس").map((element, index) => { return (element.value) })}</span>:الفاكس</p>
                                    <a href={element.contacts.filter(x => x.type === "رابط الفيس بوك").map((element, index) => { return (element.value) })}> <img src={facebook} id="fb" alt="Facebook"></img></a>
                                    <a href={element.contacts.filter(x => x.type === "رابط الانستجرام").map((element, index) => { return (element.value) })}> <img src={insta} id="insta" alt="Instagram"></img></a>
                                    <a href={element.contacts.filter(x => x.type === "رابط سناب شات").map((element, index) => { return (element.value) })}> <img src={snap} id="snap" alt="Snapchat"></img></a>
                                    <a href={element.contacts.filter(x => x.type === "رابط تويتر").map((element, index) => { return (element.value) })}> <img src={twitter} id="twitter" alt="Twitter"></img></a>
                                    <a href={element.contacts.filter(x => x.type === "رابط اليوتيوب").map((element, index) => { return (element.value) })}><img src={youtube} id="youtube" alt="Youtube"></img> </a>

                                </div>

                            )}
                        </div>
                        <div class="col-sm-6" style={{ display: this.props.display }} id="contactelemnts">
                            <h3 style={{ color: colors.sectorsHeading }}>:تواصل معنا عبر النموذج التالى</h3>
                            {/* <form class="form-horizontal" onSubmit={this.submit} method="PUT"> */}
                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="name" placeholder="الاسم" name="name" style={{ backgroundColor: colors.LinksColors }}
                                            onChange={(e) => this.setState({ name: e.target.value, nameError: '' })}
                                        />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="email" placeholder="البريد الالكترونى" name="email" style={{ backgroundColor: colors.LinksColors }}
                                            onChange={(e) => this.setState({ email: e.target.value, nameError: '' })}
                                        />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="4" id="comment" placeholder="نص الرسالة" style={{ backgroundColor: colors.LinksColors, borderColor: colors.aboutbackground }}
                                        onChange={(e) => this.setState({ message: e.target.value, nameError: '' })}
                                    ></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <button type='submit' class="btn btn-default" id="sendcontact" style={{ backgroundColor: colors.primaryColor, color: colors.LinksColors }}
                                            onClick={() => { this.submit() }}
                                        >ارسال</button>
                                    </div>
                                </div>
                            {/* </form> */}

                        </div>

                        <div class="col-sm-6" id="conatctusicons" style={{ display: contacthome, backgroundColor: "#E0E0E1" }}>
                            <h3 className="contact-home-header">اتصل بنا</h3>
                            <hr style={{ backgroundColor: colors.sectorsHeading }} className="contact-home-hr"></hr>

                            {data.map((element, index) =>

                                <div className="contacts-home">
                                    <h6 >{element.name}</h6>
                                    <p><img src={mail} alt="icones" id="mailIcone"></img><span>{element.contacts.filter(x => x.type === "الإيميل").map((element, index) => { return (element.value) })}</span></p>
                                    <p><img src={phone} alt="icones"></img><span >{element.contacts.filter(x => x.type === "التلفون").map((element, index) => { return (element.value) })}</span></p>
                                </div>

                            )}

                        </div>
                        <div class="col-sm-6" id="homeimg" style={{ display: map1 }}>
                            {/* <img src={map} alt="Company location on Map"></img>  */}
                            {/* <Map ></Map> */}
                            <div style={{ height: "300px" }}>
                                <Map homewidth={true}></Map>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        company: state.company.company,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchCompany,
    }
    , dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(contactUs);
