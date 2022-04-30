import { Text, View } from './Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';

import * as React from 'react'

const StyledButton = ({btn_text,btn_style,btn_action}:{btn_text:string,btn_style:any,btn_action:any}) => {
  return (
    <TouchableOpacity onPress={btn_action} style={btn_style}>
      <Text>{btn_text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btnStyle:{
      backgroundColor:'transparent',
      borderRadius:30,
      padding:17,
      height:60,
      borderColor:'#f57f17', 
      borderWidth:3
    }
})

export default StyledButton;