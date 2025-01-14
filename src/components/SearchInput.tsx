import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/theme'

type Props=TextInputProps
const SearchInput = ({...rest}:Props) => {

    const Theme = Colors["light"]
  return (
    <View style={[styles.container,{borderColor:Theme.txt}]}>
      <TextInput
        style={[styles.input,{color:Theme.txt}]}
        placeholder='Search...'
        placeholderTextColor={"gray"}
        cursorColor={Theme.txt}
        {...rest}
      />
      <Ionicons name='search' size={24} color={Theme.txt} />
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        // backgroundColor:"green",
        flex:1, gap:4, alignItems:"center",
        borderWidth:1, paddingHorizontal:10,
        paddingVertical:6, borderRadius:16
    },
    input:{
        // borderWidth:1,
        flex:1, fontSize:18
    }
})