import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import googleplay from '../../Images/download.png';
import appstore from '../../Images/ios-app-badge-fd60a24e3e78e27dcb40a055bcc4240d.png';
import { Col, Container, Row, Footer } from "mdbreact";
import facebook from '../../Images/facebook-letter-logo.png';
import twitter from '../../Images/twitter-logo-silhouette.png';
import insta from '../../Images/instagram-logo.png';
import snap from '../../Images/snapchat.png';
import youtube from '../../Images/youtube-logo.png';
import { colors } from '../../assets/colors.js';
import { footerData } from '../../assets/string.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchCompany} from '../../redux/Action/companyAction'
import { fetchCategory,fetchAllCategory, removeCategory } from '../../redux/Action/categoryAction';
import {fetchSubCategory} from '../../redux/Action/subCategoryAction';
import './footer.css';

class footer extends Component {
    componentDidMount() {
        var spanElements = document.getElementById('footerelemnts');
        var spans = spanElements.getElementsByTagName('span')
        var hrs = spanElements.getElementsByTagName('hr')
        var linksa = spanElements.getElementsByTagName('a')
        var links = spanElements.getElementsByTagName('Link')
        var headings = spanElements.getElementsByTagName('h4')
        var titles = spanElements.getElementsByTagName('h5')
        for (var i = 0; i < spans.length; i++) {
            spans[i].style.color = colors.paragraphsColor;
        }
        for (var count = 0; count < hrs.length; count++) {
            hrs[count].style.backgroundColor = colors.LinksColors;
        }
        for (var counte = 0; counte < headings.length; counte++) {
            headings[counte].style.color = colors.primaryColor;
        }
        for (var counter = 0; counter < titles.length; counter++) {
            titles[counter].style.color = colors.LinksColors;
        }
        for (var icount = 0; icount < linksa.length; icount++) {
            linksa[icount].style.color = colors.LinksColors;
        }
        for (var icounte = 0; icounte < links.length; icounte++) {
            links[icounte].style.color = colors.LinksColors;
        }
    }
    render() {
        const data = this.props.categories
        const contacts = this.props.company;
        return (
            <div class="footer" id="footerelemnts" style={{ backgroundColor: colors.primaryColor }}>
                <Footer color="transparent" className="font-small pt-4 mt-4">
                    <Container fluid className="text-center text-md-left">
                        <Row>
                            {contacts.map((element, index) =>
                                <Col id="download" >
                                    <h5 className="footer-title">{footerData.downloadheader}</h5>
                                    <hr></hr>
                                    <a href={element.contacts.filter(x => x.type === "رابط التطبيق للاندرويد").map((element, index) => { return (element.value) })}><img src={googleplay} alt="google Play " ></img><br></br></a>
                                    <a href={element.contacts.filter(x => x.type === "رابط التطبيق للايفون").map((element, index) => { return (element.value) })}><img src={appstore} id="googlrplayicon" alt=" Play Store " className="playstoreImg"></img></a>
                                </Col>)}
                            <Col id="aboutus">
                                <h5 className="footer-title">{footerData.aboutheader}</h5>
                                <hr></hr>
                                <ul class="ulelement" id="aboutUl">
                                    <li className="list-unstyled"><Link to="/web/about" class="testLink">{footerData.abouttitle} </Link></li>
                                    <li className="list-unstyled"><Link to="/web/contact"> {footerData.conatctiltle} </Link></li>
                                </ul>
                            </Col>
                            <Col id="services">
                                <h5 className="footer-title">{footerData.servicesheader}</h5>
                                <hr></hr>
                                <ul class="ulelement" id="ServUl">
                                    <li className="list-unstyled"><Link to="/web/complain">{footerData.comptitle}</Link></li>
                                    <li className="list-unstyled"><Link to="/web/apply"> {footerData.jobtitle} </Link></li>
                                </ul>
                            </Col>

                            <Col id="Links">
                                <h5 className="footer-title">{footerData.sectorsheader}</h5>
                                <hr></hr>
                                <ul class="ulelement" >
                                    {data &&
                                        data.map((element, index) => {
                                            return (
                                                <li className="list-unstyled">
                                                    <Link to={{ pathname: `/web/category/${element._id}/${element.subcategories.length?element.subcategories[0].id:0}`, state: { selectorname: element._id ,subcategory:element.subcategories.length?element.subcategories[0].id:0} }}
                                                     onClick={() =>{
                                                        this.props.fetchCategory(element._id)
                                                        if(element.subcategories.length){
                                                            this.props.fetchSubCategory(element.subcategories[0].id)
                                                        
                                                        }
                                                    }}
                                                    >
                                                        {element.name}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>

                            </Col>
                        </Row>
                    </Container>

                    <div className="footer-copyright text-center py-3" id="footerCR">
                        {contacts.map((element, index) =>
                            <Container fluid>
                                <a href={element.contacts.filter(x => x.type === "رابط تويتر").map((element, index) => { return (element.value) })}><img src={twitter} class="fImage" alt="twitter logo"></img></a>
                                <a href={element.contacts.filter(x => x.type === "رابط اليوتيوب").map((element, index) => { return (element.value) })}> <img src={youtube} alt="youtube logo"></img></a>
                                <a href={element.contacts.filter(x => x.type === "رابط الانستجرام").map((element, index) => { return (element.value) })}><img src={insta} alt="instagram logo"></img></a>
                                <a href={element.contacts.filter(x => x.type === "رابط سناب شات").map((element, index) => { return (element.value) })}><img src={snap} alt="snapChat logo"></img></a>
                                <a href={element.contacts.filter(x => x.type === "رابط الفيس بوك").map((element, index) => { return (element.value) })}><img src={facebook} class="fbimg" alt=" facebook logo"></img></a>
                                <p class="copyrightsp" style={{ color: colors.LinksColors }}>جميع الحقوق محفوظة2018-Designed by <a className="newConceptLink" style={{ color:"#20a8d8" }} href="http://newconcept-group.com/">New Concept</a></p>
                            </Container>
                        )}
                    </div>
                </Footer>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        allCategories: state.category.allcategory,
        company: state.company.company,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchAllCategory,
        removeCategory,
        fetchSubCategory,
        fetchCategory,
        fetchCompany
    }
    , dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(footer);

