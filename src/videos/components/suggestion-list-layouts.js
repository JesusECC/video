import React from 'react';
import{
  View,
  Text,
  StyleSheet
}from 'react-native';

function suggestionListLayouts(props){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    paddingVertical:30,
    flex:1,
  },
  title:{
    color:'#4c4c4c',
    fontSize: 20,
    marginBottom:10,
    fontWeight:'bold',
    marginLeft:8,
  }
})
export default suggestionListLayouts
