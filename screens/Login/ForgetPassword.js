import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from '@firebase/app';

export default class ForgetPassword extends Component {

  state = {
    email: "",
  };


  onRedefinePress = () => {
    try {
      firebase.auth().useDeviceLanguage();
      firebase.auth().sendPasswordResetEmail(this.state.email);
      Alert.alert("Uma mensagem foi enviada para seu email!");
      this.props.navigation.navigate('LoginScreen');
    } catch (error) {
      Alert.alert(error.message);
    };
  }



  render() {
    return (
      <ImageBackground source={require('../Images/fundo.png')} style={{ width: 360, height: 720 }}>
        <View>
          <StatusBar
            hidden={true}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.TextSIPA}>SIPA</Text>
          <Text style={styles.TextSec}>SISTEMA DE INTEGRALIZAÇÃO</Text>
          <Text style={styles.TextSec}>PROFESSOR/ALUNO</Text>
          <View style={{ paddingTop: 60, alignItems: "center" }}>
            <TextInput
              style={styles.inputText}
              value={this.state.email}
              onChangeText={(text) => { this.setState({ email: text }) }}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="E-mail"
              autoCapitalize="none"
              keyboardType="email-address">
            </TextInput>
            <View style={{ padding: 10 }} />
            <View style={styles.backgroundBottun}>
              <TouchableOpacity style={styles.redefineButton} onPress={ this.onRedefinePress}>
                <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>REDEFINIR SENHA</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.backgroundButton}>
              <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('LoginScreen')} >
                <Text style={{ color: "#166791", fontWeight: "bold", fontSize: 17 }}>VOLTAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  TextSIPA: {
    marginTop: 60,
    color: "#FFF",
    fontSize: 70,
  },

  TextSec: {
    color: "#FFF",
    fontSize: 10,
  },

  inputText: {
    marginTop: 5,
    paddingHorizontal: 15,
    height: 40,
    width: 275,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },

  backgroundButton: {
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  redefineButton: {
    alignItems: "center",
    width: 200,
    height: 38,
    padding: 2,
    borderRadius: 10,
    borderColor: "#FFF",
    borderStyle: "solid",
    backgroundColor: "#0c5b84",
    borderWidth: 2,
  },

  backButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 97,
    height: 36,
    padding: 2,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },

});