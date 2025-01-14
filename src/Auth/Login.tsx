import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackScreenProps } from '../../App'
import FrameBox from '../components/Frame'
import { useForm } from 'react-hook-form'
import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'
import { Colors } from '../constants/theme'

type Props = NativeStackScreenProps<StackScreenProps,"Login">

type FormValues={
    email:string,
    password:string
}

const Login = ({navigation}:Props) => {

    const theme = Colors["light"]

    const {control, handleSubmit}= useForm<FormValues| any>()

  return (
    <FrameBox boxHorizontal={0.1} bgColor={theme.bgColor}>
        <View style={styles.container}>

            <Text style={{fontSize:30, fontWeight:"500", color:theme.txt}}>Login</Text>

            <View style={{gap:20}}>
                <AuthInput
                    control={control}
                    name="email"
                    placeholder='Enter email...'
                    Icon="mail-outline"
                />

                <AuthInput
                    control={control}
                    name="password" isPsw
                    placeholder='Enter password'
                    Icon="lock-closed-outline"
                />

                <TouchableOpacity style={{alignSelf:"flex-end"}} onPress={()=>navigation.navigate("ForgotPassword")}>
                    <Text style={{color:"red"}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            
            <AuthButton
                text='LOGIN'
                onPress={()=>navigation.navigate("Register")}
            />
        </View>
    </FrameBox>
  )
}

export default Login

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