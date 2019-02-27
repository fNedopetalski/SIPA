import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';

export default class AddSala extends Component {

  state = {
    nameClass: '',
    descriptionClass: '',
    codeClass: '',
  };

  render() {
    return (
      <Modal animationType="fade" transparent={true} visible={this.props.visible} onRequestClose={() => null}>
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            <Text style={styles.textEnter}>Entrar na Sala</Text>
            <View style={styles.enterContainer}>
              <TextInput
                style={styles.boxInputCod}
                underlineColorAndroid='rgba(0, 0, 0, 0)'
                placeholder="Codigo da Sala"
                //value={this.state.codeClass}
                onChangeText={codeClass => this.setState({ codeClass: codeClass })}
              />
              <TouchableOpacity
                style={styles.enterButton}>
                <Text style={styles.textButton}>-></Text>
              </TouchableOpacity>
            </View>
            <View style={styles.createContainer}>
              <Text style={styles.textEnter}>Criar Sala</Text>
              <TextInput
                style={styles.boxInput}
                underlineColorAndroid='rgba(0, 0, 0, 0)'
                placeholder="Nome da Sala"
                //value={this.state.nameClass}
                onChangeText={nameClass => this.setState({ nameClass: nameClass })}
              />
              <TextInput
                style={styles.boxInput}
                underlineColorAndroid='rgba(0, 0, 0, 0)'
                placeholder="Descricao da Sala"
                //value={this.state.descriptionClass}
                onChangeText={descriptionClass => this.setState({ descriptionClass: descriptionClass })}
              />
              <View style={styles.createButtons}>
                <TouchableOpacity
                  style={styles.createButton}>
                  <Text style={styles.textButton}>Criar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => { this.props.onCancel }}>
                  <Text style={styles.textButton}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({

  createButtons: {
    flexDirection: 'row',
  },

  enterButton: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: '#FFF',
    margin: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#166791',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    flex: 1,
  },

  enterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  createContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxInput: {
    width: 230,
    height: 40,
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
  },

  boxInputCod: {
    width: 190,
    height: 40,
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
  }
})