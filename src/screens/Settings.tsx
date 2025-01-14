import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackScreenProps } from '../../App'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/theme'
import FrameBox from '../components/Frame'

type Props = NativeStackScreenProps<StackScreenProps,"Settings">

const Settings = ({navigation}:Props) => {

    const theme = Colors["light"];

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <FrameBox bgColor={theme.bgColor}>
      {/* Top nav */}
      <View style={styles.topNav}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.txt} />
        </TouchableOpacity>

        <Text style={{fontSize:24, color:theme.txt}}>Settings</Text>
      </View>

      {/* Settings Item */}
      <View style={[styles.itemsCard,{backgroundColor:theme.card}]}>
        <Text style={{color:theme.txt, fontSize:18,}}>Theme</Text>

        <Switch
          trackColor={{false: '#767577', true: '#c0c0c0'}}
          thumbColor={isEnabled ? theme.icnBlk : theme.icnWte}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </FrameBox>
  )
}

export default Settings

const styles = StyleSheet.create({
    topNav:{
        flexDirection:"row",
        gap:10, alignItems:"center"
    },
    itemsCard:{
        marginTop:10,
        paddingHorizontal:12,
        paddingVertical:6,
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:6,
        alignItems:"center"
    }
})