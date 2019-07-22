import React, { Component} from 'react';
import NewBlogLayout from '../../components/Blog/new-blog-layout';

import Editor from 'for-editor';

class NewBlog extends Component {
  constructor() {
    super();
    this.state = {
      value: `> react-leaflet-cluster-layer
      react-leaflet-cluster-layer provides a simple component for plotting React components as markers and clusters in a react-leaflet map.
      Usage



      import React from 'react';
      import { render } from 'react-dom';
      import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
      import ClusterLayer from 'react-leaflet-cluster-layer';

      const position = { lng: -122.673447, lat: 45.522558 };
      const markers = [
        {
          position: { lng: -122.673447, lat: 45.5225581 },
          text: 'Voodoo Doughnut',
        },
        {
          position: { lng: -122.6781446, lat: 45.5225512 },
          text: 'Bailey\'s Taproom',
        },
        {
          position: { lng: -122.67535700000002, lat: 45.5192743 },
          text: 'Barista'
        }
      ];

      class ExampleClusterComponent extends React.Component {

        render() {
          const style = {
            border: 'solid 2px darkgrey',
            borderRadius: '8px',
            backgroundColor: 'white',
            padding: '1em',
            textAlign: 'center'
          };
          const cluster = this.props.cluster;

          if (cluster.markers.length == 1) {
            return (
              <div style={style} >{cluster.markers[0].text}</div>
            );
          }

          return (
            <div style={style}>{cluster.markers.length} items</div>
          );
        }

      }

      const map = (
        <Map center={position} zoom={13}>
          <ClusterLayer
            markers={markers}
            clusterComponent={ExampleClusterComponent} />
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
      );

      render(map, document.getElementById('app'));`
    };
  }

  handleChange(value) {
    this.setState({
      value
    });
  }

  onSave(value) {
    console.log(value);

  }

  render() {
    const { value } = this.state;
    return (
      <Editor value={value} language='en' onSave={this.onSave.bind(this)} preview={false} toolbar={{}} onChange={this.handleChange.bind(this)} />
    );
  }
}
export default NewBlog;
