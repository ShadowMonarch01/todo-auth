import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackScreenProps } from '../../App'
import FrameBox from '../components/Frame'
import { useForm } from 'react-hook-form'
import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'
import { Colors } from '../constants/theme'

type Props = NativeStackScreenProps<StackScreenProps,"ForgotPassword">

type FormValues={
    email:string,
}

const ForgotPassword = ({navigation}:Props) => {

    const theme = Colors["light"]

    const {control, handleSubmit}= useForm<FormValues| any>()

  return (
    <FrameBox boxHorizontal={0.1} bgColor={theme.bgColor}>
        <View style={styles.container}>

            <Text style={{fontSize:30, fontWeight:"500", color:theme.txt}}>Enter your email</Text>

            <AuthInput
                control={control}
                name="email"
                placeholder='Enter email...'
                Icon="mail-outline"
            />
            
            <AuthButton
                text='Reset Password'
                onPress={()=>navigation.navigate("Home")}
            />
        </View>
    </FrameBox>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"#c0c0c0",
        paddingHorizontal:20,
        paddingVertical:30,
        // justifyContent:"space-around"
        gap:60
    }
})