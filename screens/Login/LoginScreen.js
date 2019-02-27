import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
//import * as firebase from 'firebase';  
import firebase from '@firebase/app';
import auth from '@firebase/auth';

export default class LoginScreen extends Component {

  state = {
    email: "",
    password: "",
    isAuthenticated: false,
  };

  onLoginPress = async () => {
    const { email, password } = this.state;

    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      this.setState({ isAuthenticated: true });
    } catch (error) {
      Alert.alert(error.message);
    }
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
            keyboardType="email-address"
          />
          <View style={{ padding: 10 }} />
          <TextInput
            style={styles.inputText}
            underlineColorAndroid="rgba(0,0,0,0)"
            value={this.state.password}
            onChangeText={(text) => { this.setState({ password: text }) }}
            placeholder="Senha"
            autoCapitalize="none"
            secureTextEntry={true}
          />

          <View style={{ paddingLeft: 150 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgetPassword') }}>
              <Text style={styles.TextSec}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10 }} />
          <View style={styles.backgroundButton}>
            <TouchableOpacity style={styles.loginButton} onPress={this.onLoginPress} >
              <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{ paddingTop: 10 }} />
            <TouchableOpacity style={styles.loginButton} onPress={() => { this.props.navigation.navigate('AddSala') }} >
              <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>Sala 2</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 20, alignItems: "center" }}>
            <Text style={styles.TextSec}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Text style={styles.TextSec}>Fusce convallis suscipit urna at porttitor. Curabitur et nisi</Text>
            <Text style={styles.TextSec}>non nunc egestas sodales ut ac lorem. Suspendisse id iaculis augue.</Text>
          </View>
          <View style={styles.backgroundButton}>
            <TouchableOpacity style={styles.registerButton} onPress={() => { this.props.navigation.navigate('RegisterScreen') }}>
              <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    {this.state.isAuthenticated ? this.props.navigation.navigate('MainScreen') : null}
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

  loginButton: {
    alignItems: "center",
    width: 100,
    height: 38,
    padding: 2,
    borderRadius: 10,
    borderColor: "#FFF",
    borderStyle: "solid",
    backgroundColor: "#0c5b84",
    borderWidth: 2,
  },

  registerButton: {
    alignItems: "center",
    width: 165,
    height: 38,
    padding: 2,
    borderRadius: 10,
    borderColor: "#FFF",
    borderStyle: "solid",
    backgroundColor: "#0c5b84",
    borderWidth: 2,
  },
});