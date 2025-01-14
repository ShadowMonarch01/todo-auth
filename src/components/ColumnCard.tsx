import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/theme'

type Props={
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title?:string;
  detail?:string;
}

const ColumnCard = ({onPress, title, detail}:Props) => {

    const theme = Colors["light"]

  return (
    <View style={[styles.container,{borderColor:theme.txt, backgroundColor:theme.card}]}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={[styles.title,{color:theme.txt}]} numberOfLines={1}>GridCard</Text>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name="trash-outline" size={24} color={theme.icnBlk} />
            </TouchableOpacity>
        </View>
        
        <Text style={[styles.detail, {color:theme.txt}]} ellipsizeMode="tail" numberOfLines={4}>
            Lorem ipsum kudgi jsdbif nsdfbia hbfijabk iahfj jagwegiw 
            jweihazibu isudgh sjbou0d9szhhi sjdfowhef usehfij iuhefi nesijf 
            ishozfi sijefewkmn sehfi9wfoejo ihfsoek GridCard</Text>
    </View>
  )
}

export default ColumnCard

const styles = StyleSheet.create({
    container:{
        borderWidth:0,padding:6,
        marginBottom:10,
        borderRadius:10
    },
    title:{
        fontSize:24,
        fontWeight:"600",
        width:"86%"
    },
    detail:{

    }
})