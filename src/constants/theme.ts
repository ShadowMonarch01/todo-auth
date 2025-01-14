import { ColorValue } from "react-native"

type colorTypes={
    light:{
        bgColor:ColorValue | undefined,
        txt:ColorValue | undefined,
        btnColor:ColorValue | undefined,
        icnBlk:ColorValue | undefined,
        icnWte:ColorValue | undefined,
        card:ColorValue | undefined,
    },
    dark:{
        bgColor:ColorValue | undefined,
        txt:ColorValue | undefined,
        btnColor:ColorValue | undefined,
        icnBlk:ColorValue | undefined,
        icnWte:ColorValue | undefined,
        card:ColorValue | undefined,
    },   
}

export const Colors:colorTypes={
    light:{
        bgColor:"#EDEDED",
        txt:"#000000",
        btnColor:"gray",
        icnBlk:"#000000",
        icnWte:"#ffffff",
        card:"#FFFFFF"
    },
    dark:{
        bgColor:"#171717",
        txt:"#ffffff",
        btnColor:"gray",
        icnBlk:"#ffffff",
        icnWte:"#000000",
        card:"#000000"
    }
}