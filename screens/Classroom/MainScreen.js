import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import AddSala from '../AddSala';

export default class MainScreen extends Component {

  state = {
    modalVisible: false,
  };
render() {
  return (
    <View>
      <ImageBackground source={require('../Images/patternCinza.png')} style={{ width: 360, height: 720 }}>
        <View>
          <StatusBar
            hidden={true}
          />
        </View>
      </ImageBackground>
      <AddSala
        onCancel={() => { this.setState({ modalVisible: false }) }}
        visible={this.state.modalVisible}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  header: {
    height: 80,
    paddingTop: 15,
    backgroundColor: "#166791",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,

  },

  headerText: {
    color: '#FFF',
    fontFamily: 'Quicksand-Bold',
    fontSize: 30,
  },

  headerButton: {
    color: '#FFF',
    fontFamily: 'Quicksand-Bold',
    fontSize: 40,
  },

  iconLeft: {
    paddingTop: 3,
    height: 4,
    width: 25,
    borderRadius: 5,
    backgroundColor: '#054261',
    marginTop: 4,
  },

})