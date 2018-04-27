import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class chat extends React.Component{
    render(){
        return (
            <View style={styles.container}>
              
              <Text>Hello {this.props.name}</Text>
            </View>
          );
    }
}
export default chat
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        
      },
  });