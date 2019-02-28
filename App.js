import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from './screens/Login/RegisterScreen';
import ForgetPassword from './screens/Login/ForgetPassword';
import MainScreen from './screens/Classroom/MainScreen';
import AddSala from './screens/AddSala';
import firebase from '@firebase/app';
import ApiKey from './assets/APIKeys';

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticaded: false,
    };

    //Inicialização do Firebase
    if (!firebase.apps.length) { ApiKey; }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }



  onAuthStateChanged = (user) => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticaded: !!user });
  }

  render() {
    return (this.state.isAuthenticaded ? <AppLogged /> : <AppContainer />);
  }
}

const MainScreenStackNavigator = createStackNavigator({
  MainScreen: MainScreen,
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#166791',
        },
        headerLeft: (
          <TouchableOpacity style={{ paddingLeft: 7 }} onPress={() => navigation.openDrawer()}>
            <Image
              source={require('./screens/Images/icon3bar.png')}
              style={{ width: 35, height: 25 }}
            />
          </TouchableOpacity>
        ),
        headerTitle: "SIPA",
        headerTitleStyle: {
          paddingLeft: 77,
          fontSize: 30,
        },
        headerRight: (
          <TouchableOpacity style={{ paddingRight: 7 }}
          onPress={() =>  navigation.navigate('AddSala') }>
            <Text style={{
              color: '#FFF',
              fontFamily: 'Quicksand-Bold',
              fontSize: 40,
            }}>+</Text>
          </TouchableOpacity>

        )
      };
    }
  });

const AppDrawerNavigator = createDrawerNavigator({
  SIPA: {
    screen: MainScreenStackNavigator,
  },
  'Adicionar Sala': {
    screen: AddSala,
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  MainScreen: { screen: AppDrawerNavigator },
  AddSala: { screen: AddSala },
  ForgetPassword: { screen: ForgetPassword },
  RegisterScreen: { screen: RegisterScreen }
})

const AppContainer = createAppContainer(AppSwitchNavigator);
const AppLogged = createAppContainer(AppDrawerNavigator);
