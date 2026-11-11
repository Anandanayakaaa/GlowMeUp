import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing, type } from "@/src/theme/tokens";

export default function SuitsMePlaceholder(){
  return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.page}>
    <Text style={styles.kicker}>SUITS ME</Text>
    <Text style={styles.title}>Your discovery feed starts with suitability.</Text>
    <Text style={styles.copy}>Next build: product cards will keep Suitability, Your Taste, and Trend as separate signals instead of blending them into one magic score.</Text>
    <View style={styles.card}>
      <View style={styles.productMock}/>
      <Text style={styles.productTitle}>Structured Blue Blouse</Text>
      <View style={styles.signal}><Text style={styles.label}>SUITS YOU</Text><Text style={styles.good}>EXCELLENT</Text></View>
      <View style={styles.signal}><Text style={styles.label}>YOUR TASTE</Text><Text style={styles.value}>HIGH</Text></View>
      <View style={styles.signal}><Text style={styles.label}>TREND</Text><Text style={styles.value}>RISING ↑</Text></View>
      <Text style={styles.why}>Why this suits you →</Text>
    </View>
  </ScrollView></SafeAreaView>
}

const styles=StyleSheet.create({
  safe:{flex:1,backgroundColor:colors.ivory},page:{padding:spacing.xl},
  kicker:{color:colors.coral,fontSize:12,fontWeight:"800",letterSpacing:1.4,marginTop:spacing.lg},
  title:{color:colors.graphite,fontSize:type.h1,lineHeight:40,fontWeight:"800",marginTop:spacing.sm},
  copy:{color:"#625B62",fontSize:15,lineHeight:23,marginTop:spacing.md},
  card:{marginTop:spacing.xl,backgroundColor:colors.white,borderRadius:radius.xl,padding:spacing.lg,borderWidth:1,borderColor:"#EEE6EB"},
  productMock:{height:260,borderRadius:radius.lg,backgroundColor:"#B9C7D8"},
  productTitle:{color:colors.graphite,fontSize:18,fontWeight:"800",marginTop:spacing.lg},
  signal:{flexDirection:"row",justifyContent:"space-between",marginTop:12},
  label:{color:"#817980",fontSize:11,fontWeight:"800",letterSpacing:1},good:{color:colors.success,fontSize:13,fontWeight:"800"},value:{color:colors.graphite,fontSize:13,fontWeight:"800"},
  why:{color:colors.iris,fontSize:13,fontWeight:"800",marginTop:spacing.lg}
});
