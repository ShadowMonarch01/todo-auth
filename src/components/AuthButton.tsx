import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/theme'

type Props={
  onPress?: ((event: GestureResponderEvent) => void) | undefined,
  text:string
}

const AuthButton = ({onPress, text}:Props) => {
    const theme = Colors["light"]
    
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,{backgroundColor:theme.btnColor}]}>
      <Text style={[styles.txt,{color:theme.txt}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default AuthButton

const styles = StyleSheet.create({
    container:{
        borderColor:"green",
        // borderWidth:1,
        height:50, justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    txt:{
        fontSize:18,
        fontWeight:"500"
    }
})