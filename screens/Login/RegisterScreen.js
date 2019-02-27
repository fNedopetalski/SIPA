import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, StatusBar, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from '@firebase/app';

export default class RegisterScreen extends Component {
    state = {
        email: "",
        password: "",
        passwordConfirm: "",
      };
    
      onRegisterPress = async () => {
        const { email, password, passwordConfirm } = this.state;
    
        try {
            if (this.state.password !== this.state.passwordConfirm) {
                Alert.alert("As senhas não são compatíveis");
                return;
            }
          const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
          this.props.navigation.navigate('LoginScreen');
        } catch (error) {
          Alert.alert(error.message);
        }
      }

    render() {
        return (
            <ScrollView>
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
                        <View style={{ paddingTop: 35, alignItems: "center" }}>
                            <TextInput
                                style={styles.inputText}
                                value={this.state.email}
                                onChangeText={(text) => { this.setState({ email: text }) }}
                                underlineColorAndroid="rgba(0,0,0,0)"
                                placeholder="E-mail (gmail only)"
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                            <View style={{ padding: 10 }} />
                            <TextInput
                                style={styles.inputText}
                                value={this.state.password}
                                onChangeText={(text) => { this.setState({ password: text }) }}
                                underlineColorAndroid="rgba(0,0,0,0)"
                                placeholder="Senha (6 characters)"
                                autoCapitalize="none"
                                secureTextEntry={true}
                            />
                            <View style={{ padding: 10 }} />
                            <TextInput
                                style={styles.inputText}
                                value={this.state.passwordConfirm}
                                onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                                underlineColorAndroid="rgba(0,0,0,0)"
                                placeholder="Repita sua senha"
                                autoCapitalize="none"
                                secureTextEntry={true}
                            />
                            <View style={{ padding: 10 }} />
                            <View style={styles.backgroundButton}>
                                <TouchableOpacity style={styles.registerButton} onPress={this.onRegisterPress}>
                                    <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>CADASTRAR</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ padding: 10 }} />
                            <View style={styles.backgroundButton}>
                                <TouchableOpacity style={styles.backButton} onPress={() => {this.props.navigation.navigate('LoginScreen')}} >
                                    <Text style={{ color: "#166791", fontWeight: "bold", fontSize: 17 }}>VOLTAR</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingTop: 30, alignItems: "center" }}>
                                <Text style={styles.TextSec}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                <Text style={styles.TextSec}>Fusce convallis suscipit urna at porttitor. Curabitur et nisi</Text>
                                <Text style={styles.TextSec}>non nunc egestas sodales ut ac lorem. Suspendisse id iaculis augue.</Text>
                            </View>
                        </View>
                    </View>

                </ImageBackground>
            </ScrollView>
        )
    };
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
        alignItems: "center",
        justifyContent: "center",
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