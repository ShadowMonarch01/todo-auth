import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FrameBox from '../components/Frame'

import { Colors } from '../constants/theme'
import SearchInput from '../components/SearchInput'
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import GridCard from '../components/GridCard'
import ColumnCard from '../components/ColumnCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackScreenProps } from '../../App'

type Props = NativeStackScreenProps<StackScreenProps,"Home">

const Home = ({navigation}:Props) => {

    const theme = Colors["light"];

    const [disPlay, setDisPlay]=useState(true);

    const [order, setOrder]=useState(true);

    const [isSearching, setIsSearching]=useState(false);

    const AllArr = new Array(10).fill(10);

    const deleteNote=()=>{
        
        Alert.alert(
            "Delete Note",'Are you sure you want to delete this note?',
            [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'Yes', onPress: () => console.log('OK Pressed')},
              ]
        )
    }

  return (
    <FrameBox barStyle="dark" bgColor={theme.bgColor}>
    
      <View style={{marginTop:16, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <Text style={{fontSize:24,fontWeight:"600", color:theme.txt}}>React Native Todos</Text>

        <TouchableOpacity onPress={()=>navigation.navigate("Settings")}>
            <Ionicons name="settings" color={theme.icnBlk} size={24} />
        </TouchableOpacity>
      </View>
      
      {/* Top Nav */}
      <View style={styles.topNav}>
        <SearchInput
            onFocus={()=>setIsSearching(true)}
            onBlur={()=>setIsSearching(false)}
        />

        <View style={{flexDirection:"row", gap:4}}>
            <TouchableOpacity style={[styles.displayBtn,{borderColor:theme.icnBlk}]} onPress={()=>setDisPlay(!disPlay)}>
                {
                    disPlay?
                    <MaterialCommunityIcons name="order-bool-descending" size={24} color={theme.icnBlk} />
                    :<Ionicons name="grid" color={theme.icnBlk} size={24} />
                }
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.displayBtn,{borderColor:theme.icnBlk}]} onPress={()=>setOrder(!order)}>
                {
                    order?
                    <Octicons name="sort-desc" size={24} color={theme.icnBlk} />
                    :<MaterialCommunityIcons name="sort-descending" size={24} color={theme.icnBlk} />
                }
            </TouchableOpacity>
        </View>
      </View>

      {/* Items */}
      <ScrollView showsVerticalScrollIndicator={false}>
       { 
            disPlay?
            <View style={styles.gridContainer}>
                {
                    AllArr.map((item, idx)=>(
                        <GridCard key={idx} onPress={deleteNote}/>
                    ))
                }
            </View>
            :
            <View>
                {
                    AllArr.map((item, idx)=>(
                        <ColumnCard key={idx} onPress={deleteNote}/>
                    ))
                }
            </View>
        }

      </ScrollView>

      {/* Floating Action button */}

      {
        !isSearching &&
        <TouchableOpacity style={[styles.circleBtn,{backgroundColor:theme.icnBlk,}]} onPress={()=>navigation.navigate("Details")}>
            <Ionicons name="add" size={24} color={theme.icnWte} />
        </TouchableOpacity>
      }
      
    </FrameBox>
  )
}

export default Home

const styles = StyleSheet.create({
    topNav:{
        marginVertical:20, 
        flexDirection:"row",
        alignItems:"center",
        gap:6
    },
    displayBtn:{
        borderWidth:1,
        padding:4, borderRadius:6
    },
    gridContainer:{
        flexDirection:"row",
        flexWrap:"wrap", gap:4,
        paddingBottom:20
    },
    circleBtn:{
        width:50, height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:40,
        position:"absolute",
        bottom:10, right:10
    }
})