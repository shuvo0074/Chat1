import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
class Home extends React.Component{
    render(){
        return (
            <View style={styles.container}>
              <Text style={styles.title}>
              Enter your name:
              </Text>
              <TextInput
              style={styles.nameInput}
              />
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
        
    }
  });