import React, { Component } from 'react'
import './googleMap.css'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <div className="googleMap">
        <ContentWrapper>
          <Map
            google={this.props.google}
            zoom={14}
            initialCenter={{
              lat: 30.316496,
              lng: 78.032188,
            }}
            style={{ width: '60%', height: '60%' }}
          >
            <Marker onClick={this.onMarkerClick} name={'Current location'} />
            <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
          </Map>
        </ContentWrapper>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAY20-SEKxM8yt94YQe7PJ-o5y2tHajLfw',
})(MapContainer)
