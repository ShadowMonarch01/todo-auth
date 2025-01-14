import { Dimensions, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/theme'

const { width, height }= Dimensions.get("screen")

type Props={
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title?:string;
  detail?:string;
}

const GridCard = ({onPress, title, detail}:Props) => {

  const theme = Colors["light"]
  return (
    <View style={[styles.container,{borderColor:theme.txt, backgroundColor:theme.card}]}>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <Text style={[styles.title,{color:theme.txt}]} numberOfLines={1}>GridCardjsdihfiohwihfi</Text>
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="trash-outline" size={24} color={theme.icnBlk} />
        </TouchableOpacity>
      </View>

      <Text style={[styles.detail,{color:theme.txt}]} ellipsizeMode="tail" numberOfLines={5}>
        Lorem ipsum kudgi jsdbif nsdfbia hbfijabk iahfj jagwegiw 
        jweihazibu isudgh sjbou0d9szhhi sjdfowhef usehfij iuhefi nesijf 
        ishozfi sijefewkmn sehfi9wfoejo ihfsoek GridCard</Text>
    </View>
  )
}

export default GridCard

const styles = StyleSheet.create({
    container:{
        width: (width-46)/2,
        height:(width-46)/2,
        borderWidth:0,borderRadius:10,
        padding:6, gap:4
    },
    title:{
        fontSize:24,
        fontWeight:"600",
        width:"86%"
    },
    detail:{

    }
})