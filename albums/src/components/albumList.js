import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';


class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount(){
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

renderAlbums(){
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album}/>
  );
}

  render(){
    console.log(this.state);
  return (
  <ScrollView style={ styles.container}>
  {this.renderAlbums()}
  </ScrollView>
);
}
}

const styles = {
  container: {
    flex: 1,
},
}

export default AlbumList;
