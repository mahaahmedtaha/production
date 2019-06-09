import React, { Component } from 'react';
import { colors } from '../../assets/colors.js'
import Popup from '../../Components/popUp/popUp.js'
import '../../Components/popUp/popUp.css'
import './content.css';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import wrong from '../../Images/wrong.png'

var x = window.matchMedia("(max-width: 414px)")
class content extends Component {
    constructor(props) {

        super(props);
        this.state = {
            pageindex: 0,
            selecteditem: null,
            pageselected: false,
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


        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });

    }
    handleCloseModal() {
        this.setState({ showModal: false });
        document.body.style.overflow = "auto"

    }

    hoverOn = (e) => {

        this.setState({ popupview: false });

    }

    hoverOff = (e) => {
        this.setState({ popupview: true });

    }


    showpopup(popupitem) {
        this.setState({ url: popupitem.source })
        this.setState({ video: popupitem.video })
        this.setState({ videodiscription: popupitem.description })
        this.setState({ caption: popupitem.caption })
        this.setState({ showModal: true })
        document.body.style.overflow = "hidden"

    }

    section(item) {

        if (item.description) {
            return (
                <div className="title-contaner" >
                    {item.name !== '' &&
                    <div>
                    
                         <h4 style={{ color: colors.sectorsHeading }}>{item.name}</h4>
                        <hr class="sectorsHr" style={{ backgroundColor: colors.sectorsHeading }}></hr>
                    </div>    
                    }
                    <section>
                        {item.description.map((itemdescrption) => {
                            if (itemdescrption.title !== '' || itemdescrption.text !== '') {
                                return (
                                    <div>
                                        <h6  style={{marginTop:"1%",color: colors.sectorsHeading }}>{itemdescrption.title}</h6>
                                        <div className="paragraph-container" style={{ color: colors.paragraphsColor }}>{itemdescrption.text}</div>
                                    </div>
                                )
                            }
                            return null

                        })
                        }
                    </section>

                    {item.images.map((image) => {
                        if (image.source) {
                            return (
                                <div className="image-container-style" onClick={() => this.showpopup(image)}>
                                    {image.source !== "" &&
                                        < img src={image.source} alt={image.caption + "logo"} class="sectorsImages" style={this.props.imageStyle} />
                                    }
                                    <div class="captionContainer" style={{ display: image.caption === "" ? "none" : "block", width: this.props.captionwidth.width }}>
                                        {image.caption && <span class="captionSpan"> {image.caption}</span>}
                                    </div>
                                </div>
                            )
                        }
                        return null
                    })
                    }
                    {item.videos && item.videos.map((video) => {
                        if (item.videos.source === '') {
                            return (
                                <div className="video-content">
                                    <iframe class="embed-responsive-item"
                                        title="medical video"
                                        src={item.source}
                                        allowfullscreen>
                                    </iframe>
                                </div>
                            )
                        }
                        return null
                    }
                    )}
                </div>
            )
        }
    }
    showsector(data) {
        return (
            data.map((item) => {
                return (
                    <div id="contentDivs" style={{marginRight:'2%',marginLeft:'5%',width:'100% '}}>
                        {this.section(item)}
                    </div>
                )
            })
        )
    }

    render() {

        const w = this.props.popup.width;
        const wr = this.props.popupresp.width;
        const h = this.props.popup.height;
        const hres = this.props.popupresp.height;
       
        const customStylesvideo = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: "0px",
                width: "50%",
                height: "100%",
                marginRight: '-50%',
                padding: '0px',
                transform: 'translate(-50%, -50%)',

            }
        };
        const customStylesRespvideo = {

            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: "0px",
                width: "80%",
                height: "100%",
                marginRight: '-50%',
                padding: '0px',
                transform: 'translate(-50%, -50%)',

            }
        };
        const customStylesPic = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: "0px",
                width: w,
                height: h,
                marginRight: '-50%',
                padding: '0px',
                transform: 'translate(-50%, -50%)',

            }
        };
        const customStylesRespPic = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: "0px",
                width: wr,
                height: hres,
                marginRight: '-50%',
                padding: '0px',
                transform: 'translate(-50%, -50%)',

            }
        };
        let data = (this.props.category.subcategories.length) ? (this.props.subcategory ? this.props.subcategory.subcategory.titles : []) : this.props.category.category.titles
        return (
            <div>

                <div class="row" id="containerDiv">
                    {/* <div class="col-9" id="multiple-content"> */}
                    {this.showsector(data)}

                    {/* </div> */}
                    <div onMouseEnter={this.hoverOn}>
                        <div className="popup" onClick={this.handleCloseModal}>
                            <div
                                onMouseEnter={this.hoverOn}
                                onMouseLeave={this.hoverOff}
                            >

                                <ReactModal
                                    isOpen={this.state.showModal}
                                    style={x.matches ?
                                        this.state.video === "" ? customStylesRespPic : customStylesRespvideo :
                                        this.state.video === "" ? customStylesPic : customStylesvideo}

                                >
                                    <div className="popup-colse-button"><button onClick={this.handleCloseModal} class="btnpopUp"><img src={wrong} alt="close logo"></img></button></div>
                                    <div className="popup-content-container">
                                        <Popup url={this.state.url}
                                            caption={this.state.caption}
                                            video={this.state.video}
                                            discription={this.state.videodiscription}
                                            subtitle={this.state.videosubtitle}
                                            VideoTitle={this.state.VideoTitle}
                                        />
                                    </div>

                                </ReactModal>
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
        category: state.category.categories,
        allcategory: state.category.allcategory,
        subcategory: state.subcategory.subcategories,

    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        // fetchSubCategory
    }
    , dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(content);