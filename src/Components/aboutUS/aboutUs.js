import React, { Component } from 'react';
import { about } from '../../assets/string.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './aboutUs.css';
import { colors } from '../../assets/colors.js'
import {fetchCompany} from '../../redux/Action/companyAction'

// import headimg from '../../Images/head.png'

class aboutUs extends Component {
    componentDidMount() {
        var spanElements = document.getElementById('aboutelements');
        var paraghraphs = spanElements.getElementsByTagName('p')
        var spans = spanElements.getElementsByTagName('span')
        var hrs = spanElements.getElementsByTagName('hr')
        var headings = spanElements.getElementsByTagName('h4')
        var inputs = spanElements.getElementsByTagName('input')

        for (var count = 0; count < paraghraphs.length; count++) {
            paraghraphs[count].style.color = colors.paragraphsColor;
        }
        for (var counte = 0; counte < spans.length; counte++) {
            spans[counte].style.color = colors.paragraphsColor;
        }
        for (var icounte = 0; icounte < hrs.length; icounte++) {
            hrs[icounte].style.backgroundColor = colors.sectorsHeading;
        }
        for (var counter = 0; counter < headings.length; counter++) {
            headings[counter].style.color = colors.sectorsHeading;
        }
        for (var icounter = 0; icounter < inputs.length; icounter++) {
            inputs[icounter].style.backgroundColor = colors.LinksColors;
            inputs[icounter].style.borderColor = colors.aboutbackground;
        }
    }
    componentWillMount() {
        this.props.fetchCompany();
      }
    render() {
        const  data =  this.props.company;
     
        const margin = this.props.margin;
        var classnamevar = ""
        var classhr = ""
        if (margin === "right") {
            classnamevar = "right";
            classhr = "abouthrhome"
        }
        return (
            <div>
            <div class="container" id="aboutelements">
                <div class="row" id="aboutelements">
                    <div class="col-sm-12" id="aboutelements">
                        <h3 id="abouth4" class={classnamevar} style={{ color: colors.sectorsHeading }}>{about.aboutheader}</h3>
                        <hr id="abouthr" class={classhr} style={{ backgroundColor: colors.sectorsHeading }}></hr>
                        {data.map((about, index) =>
                            <span>
                                {about.companyIntro}
                            </span>
                        )}
                    </div>
                </div>
               
                {/* <div class="row" id="aboutelements">
                    <div class="col-sm-12" id="aboutelements">
                        <h3 id="abouth4" class={classnamevar} style={{ color: colors.sectorsHeading }}>{about.aboutheader}</h3>
                        <hr id="abouthr" class={classhr} style={{ backgroundColor: colors.sectorsHeading }}></hr>
                        <span>{about.aboutfirstspan}</span>
                        <br></br>
                        <span>{about.aboutsecspan}</span>

                    </div>
                </div> */}
                <br></br>

                     {this.props.company.map((element,index)=>
                        <section className="talk-section">
                             <div class="row" id="headtalkcontdiv" style={{ backgroundColor: colors.aboutbackground }}>
                                <div class="col-sm-4" id="aboutelements">
                                    <img class="headimgabout" src={element.took.userImage} alt="head imagee"></img>
                                    <p className="headNmae">{element.took.userName}</p>
                                </div>
                                <div class="col-sm-8" id="aboutelements" >
                                    <h3 class="headtalkh4" style={{ color: colors.sectorsHeading }}>{about.headtalkname}</h3>
                                    <hr class="abouthr2" style={{ backgroundColor: colors.sectorsHeading }}></hr>
                                    <span class="headtalk">{element.took.text}</span>
                                </div>
                                </div>
                        </section>
                     )}
                    {/* <div class="col-sm-4" id="aboutelements">
                        <img class="headimgabout" src={headimg} alt="head log"></img>
                        <p className="headNmae">{about.headname}</p>
                    </div>
                    <div class="col-sm-8" id="aboutelements" >
                        <h3 class="headtalkh4" style={{ color: colors.sectorsHeading }}>{about.headtalkname}</h3>
                        <hr class="abouthr2" style={{ backgroundColor: colors.sectorsHeading }}></hr>
                        <span class="headtalk">{about.headtalk}</span>
                    </div> */}

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
      fetchCompany
    }
    , dispatch
  )
export default connect(mapStateToProps, mapDispatchToProps)(aboutUs);