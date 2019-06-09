import React, { Component } from 'react';

import {Map,Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
        state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: ['39.4379121115577',
           '-110.00812757760286' ],
        };
       
        onMarkerClick = (props, marker, e) =>
          this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
          });
       
        onMapClicked = (props) => {
          if (this.state.showingInfoWindow) {
            this.setState({
              showingInfoWindow: false,
              activeMarker: null
            })
          }
        };
       
        render() {
          return (
                <Map style={{position: "absolute",width:this.props.homewidth?"100%":"96%",height: "300px"}}
                google={this.props.google}
                initialCenter={{
                  lat:30.0522229,
                  lng:31.2045179
              }}
                onClick={this.onMapClicked}>
              <Marker onClick={this.onMarkerClick}
                      name={'Client location'} />
            </Map>
          )
        }
      }
export default GoogleApiWrapper({
    // apiKey: ("AIzaSyAML8ZX9GfbLCWYsrI0xsc4YWajgSPSOMI")
    apiKey:("")
  })(MapContainer)