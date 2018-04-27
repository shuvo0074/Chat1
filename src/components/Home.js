import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
class Home extends React.Component{
    state = {
        name: ''
    }
    render(){
        return (
            <View style={styles.container}>

              <Text style={styles.title}>
              Enter your name:
              </Text>
              <TextInput
              style={styles.nameInput}
              onChangeText={(txt)=>{
                  this.setState({
                    name: txt
                  })
              }}
              value={this.state.name}
              />
              <TouchableOpacity
              style={styles.buttonStyle}
              onPress={()=>{
                  alert(this.state.name)
              }} >
                  <Text>
                      Start chatting
                      </Text>
                  </TouchableOpacity>

            </View>
          );
    }
}
export default Home
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: 10
      },
    nameInput: {
        height: 50,
        width: 300,
        borderWidth: 1,
        margin: 10
    },
    buttonStyle: {
        margin: 10,
        borderWidth: 1,
        padding: 5,
    }
  });