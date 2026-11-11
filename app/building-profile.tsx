import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AdaptiveMark } from "@/src/components/AdaptiveMark";
import { colors, spacing } from "@/src/theme/tokens";

const stages=[
  "Connecting body proportions…",
  "Mapping facial geometry…",
  "Combining color characteristics…",
  "Separating measured and interpreted evidence…",
  "Building your GlowProfile…",
];

export default function BuildingProfileScreen(){
  const [index,setIndex]=useState(0);
  useEffect(()=>{
    const id=setInterval(()=>setIndex(i=>Math.min(i+1,stages.length-1)),650);
    const done=setTimeout(()=>router.replace("/glow-profile"),3600);
    return ()=>{clearInterval(id);clearTimeout(done)};
  },[]);
  const width = (20 + index * 20) + "%";
  return <SafeAreaView style={styles.safe}><View style={styles.page}>
    <View style={styles.markWrap}><AdaptiveMark size={96} color={colors.white}/></View>
    <Text style={styles.kicker}>BUILDING YOUR GLOWPROFILE</Text>
    <Text style={styles.stage}>{stages[index]}</Text>
    <View style={styles.bar}><View style={[styles.fill,{width: width as any}]} /></View>
    <Text style={styles.note}>Measured, inferred, and interpretive evidence stay distinct.</Text>
  </View></SafeAreaView>
}

const styles=StyleSheet.create({
  safe:{flex:1,backgroundColor:colors.plum},page:{flex:1,alignItems:"center",justifyContent:"center",padding:spacing.xl},
  markWrap:{width:160,height:160,borderRadius:80,backgroundColor:"#4A2045",alignItems:"center",justifyContent:"center"},
  kicker:{color:"#DCCFE8",fontSize:12,fontWeight:"800",letterSpacing:1.5,marginTop:spacing.xl},
  stage:{color:colors.white,fontSize:22,fontWeight:"800",textAlign:"center",marginTop:spacing.md},
  bar:{width:"100%",height:8,borderRadius:999,backgroundColor:"#56314F",overflow:"hidden",marginTop:spacing["2xl"]},
  fill:{height:"100%",backgroundColor:colors.coral,borderRadius:999},
  note:{color:"#D6C7D3",fontSize:13,lineHeight:19,textAlign:"center",marginTop:spacing.lg}
});
