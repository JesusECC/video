import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo-autonoma.png')}
            style={styles.logo}
          />
          <View style={styles.right}>
            {props.children}
          </View>
          <View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  logo:{
    width: 300,
    height:60,
    resizeMode: 'contain',
  },
  container:{
    backgroundColor: '#ff801c',
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
  },
  right:{
    //backgroundColor:'green',
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end'

  }
})

export default Header;
