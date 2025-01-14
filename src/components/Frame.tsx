import { StyleSheet,SafeAreaView,Platform, StatusBar as StatusBar1, ColorValue, DimensionValue } from 'react-native'
import React from 'react'
import { StatusBar, StatusBarStyle } from 'expo-status-bar'

type FrameBoxProps={
    children:React.ReactNode;
    barStyle?: StatusBarStyle | undefined;
    bgColor?: ColorValue | undefined;
    boxHorizontal?: DimensionValue | undefined
}

const FrameBox = ({children, barStyle, bgColor,boxHorizontal}:FrameBoxProps) => {
  return (
    <SafeAreaView style={[styles.container,{backgroundColor: bgColor ||"white", paddingHorizontal: boxHorizontal || 20}]}>
        {children}
        <StatusBar style={barStyle || "dark" } />
    </SafeAreaView>
  )
}

export default FrameBox;

const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingHorizontal:20,
        paddingTop: Platform.OS ==="android"?
        StatusBar1.currentHeight : 5
    }
})