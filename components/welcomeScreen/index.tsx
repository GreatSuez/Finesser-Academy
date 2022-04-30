import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../Themed';
import * as React from 'react';
import { StyleSheet, TouchableOpacity,Image,StatusBar } from 'react-native';
import StyledButton from '../StyledButton';
import academyLogo from '../../assets/images/academy-white.png';

const Index = ({ navigation }:{navigation:any}) => {
  return (
    <View>
       <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View>
        <TouchableOpacity onPress={() =>navigation.replace('Root')} style={styles.link}>
          <Text style={styles.linkText}>Skip SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cont}>
        <View style={{width:300, height:300}}>
          <Image source={academyLogo}  style={{ width: 300, height: 300 }} />
        </View>
        <StyledButton 
          btn_style={styles.btnStyle} 
          btn_action={() => navigation.replace('Root')} btn_text='SignUp with Google' />
        <StyledButton 
          btn_style={styles.btnStyle} 
          btn_action={() => navigation.navigate('Root')} btn_text='SignUp with Facebook' />
        <StyledButton 
          btn_style={styles.btnStyle} 
          btn_action={() => navigation.navigate('Root')} 
          btn_text='SignUp with Email' />
        <View style={styles.fill} />
        <TouchableOpacity onPress={() => navigation.navigate('Root')} style={styles.link}>
          <Text style={styles.linkText}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  cont:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  linkText: {
    fontSize: 15,
    color: '#f57f17',
  },
  btnStyle:{
    backgroundColor:'transparent',
    borderRadius:10,
    padding:17,
    height:60,
    borderColor:'#f57f17', 
    borderWidth:3,
    marginVertical:10
  },
  headingText: {
    fontWeight: '700',
    color: 'black',
    fontSize: 50,
  },
header: { marginBottom: 30 },
fill: { flex: 1 / 6 },
  button: {
    backgroundColor: '#F7FFDF',
    borderRadius: 10,
    padding: 6,
  },
  buttonSecondary: {
    backgroundColor: '#D9F6FF',
    borderRadius: 10,
    padding: 8,
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Index