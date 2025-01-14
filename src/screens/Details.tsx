import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackScreenProps } from '../../App'
import FrameBox from '../components/Frame'
import { Colors } from '../constants/theme'
import { Ionicons } from '@expo/vector-icons'

type Props = NativeStackScreenProps<StackScreenProps,"Details">

const Details = ({navigation}:Props) => {

    const theme = Colors["light"];
  return (
    <FrameBox bgColor={theme.bgColor}>

      {/* Top nav */}
      <View style={styles.topNav}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.txt} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name="checkmark" size={26} color={theme.txt} />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder='Title'
        placeholderTextColor={"gray"}
        cursorColor={theme.txt}
        style={[styles.titleStyle,{borderBottomColor:theme.txt}]}
        numberOfLines={1}
      />
      <TextInput
        placeholder='Details'
        placeholderTextColor={"gray"} 
        cursorColor={theme.txt}
        multiline={true} textAlignVertical="top"
        style={styles.detailsStyle}
      />

      <TouchableOpacity style={styles.circleBtn} onPress={()=>{}}>
            <Ionicons name="save" size={24} color={"white"} />
        </TouchableOpacity>

    </FrameBox>
  )
}

export default Details

const styles = StyleSheet.create({
  topNav:{
    marginVertical:20, 
    flexDirection:'row', 
    justifyContent:"space-between"
  },
  titleStyle:{
    fontSize:24,
    borderBottomWidth:1,
    paddingVertical:4
  },
  detailsStyle:{
    marginTop:6,
    fontSize:18,
    height:"76%",
    paddingVertical:6
  },
  circleBtn:{
    backgroundColor:"black",
    width:50, height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:40,
    position:"absolute",
    bottom:10, right:10
}
})