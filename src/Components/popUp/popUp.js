import React, { Component } from 'react';

import './popUp.css';

class popUp extends Component {
  showContent() {

    if (this.props.video === "") {
      return (
      
        <div class="headerContainerTest"   style={{  backgroundImage: "url(" + this.props.url + ")"}}>
        {/* <img src={this.props.url} className="" /> */}
        </div>
      )
    } else {
      return (
        <div className="popUpTest">
          <div class="headerContainer">
            <h6 class="popUpH6">
              {this.props.caption}
            </h6>
          </div>
          <div class="MedicavideoContainer" id="videotest">
            <iframe class="embed-responsive-item"
              title={this.props.caption + "video"}
              src={this.props.video}
              // src="https://www.youtube.com/embed/xqftGN2Zd94?controls=1&wmode=opaque&modestbranding=1&enablejsapi=1&origin=http%3A%2F%2Fakfa.online&widgetid=1"
              allowfullscreen>
            </iframe>
          </div>

          {
            this.props.discription.map((item) => {
              if (item.title === ''){
                return (
                  <div class="contentafterVideo">
                    {item.text}
                  </div>
                )

              } if (item.title !== '') {
                return (
                  <div >
                    <h6 class="aftervideoh">{item.title}</h6>
                    <hr class="popUpHr"></hr>
                    <div class="contentafterVideo"> {item.text}</div>
                  </div>
                )
              }
             return null 
            }
            )
          }
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.showContent()}
      </div>
    );
  }
}
export default popUp;