import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form'
import { Colors } from '../constants/theme'


type InputType={
    control?: Control<FieldValues> | undefined;
    rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined;
    name:string;
    Icon: keyof typeof Ionicons.glyphMap; // Restricts to valid Ionicons names
    isPsw?:boolean;
} & TextInputProps

const AuthInput = ({ control, rules, name, Icon, isPsw=false, ...rest}:InputType) => {

    const [showPsw, setShowPsw]=useState(false);

    const theme = Colors["light"]
    

  return (
    <Controller
        control={control}
        rules={rules}
        name={name}
        render={({ field: { onChange, onBlur, value }, fieldState:{error} }) => (
            <View style={[styles.container,{borderColor:theme.icnBlk}]}>
              <Ionicons name={Icon} color={theme.icnBlk} size={24} />
              <TextInput
                style={[styles.inputStyle,{color:theme.txt}]}
                placeholderTextColor={"gray"}
                value={value} onBlur={onBlur} onChange={onChange}
                {...rest}
              />
            {
              isPsw &&
              <TouchableOpacity style={styles.pswIcn} onPress={()=>setShowPsw(!showPsw)}>
                <Ionicons name={showPsw?"eye":"eye-off"} color={theme.icnBlk} size={24} />
              </TouchableOpacity>}
            </View>
          )}
    />
    
  )
}

export default AuthInput

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        gap:4, borderWidth:1,
        padding:4, paddingHorizontal:8,
        borderRadius:10
    },
    inputStyle:{
        flex:1,
        // borderWidth:1,
        height:40, fontSize:18
    },
    pswIcn:{
        marginLeft:2
    }
})