import { router } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { InsightCard } from "@/src/components/InsightCard";
import { SectionHeader } from "@/src/components/SectionHeader";
import { colors, radius, spacing } from "@/src/theme/tokens";

export default function ColorProfileScreen(){
  return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.page}>
    <SectionHeader step="COLOR PROFILE" title="Continuous characteristics first." description="Seasonal labels are only a familiar interpretation of the underlying color dimensions."/>
    <View style={styles.list}>
      <InsightCard label="TEMPERATURE" value="Cool-leaning" confidence="MEDIUM"/>
      <InsightCard label="VALUE" value="Medium-light" confidence="MEDIUM"/>
      <InsightCard label="CHROMA" value="Soft / muted" confidence="MEDIUM"/>
      <InsightCard label="NATURAL CONTRAST" value="Medium" confidence="MEDIUM"/>
    </View>
    <View style={styles.interpretation}>
      <Text style={styles.label}>CLOSEST CONVENTIONAL INTERPRETATION</Text>
      <Text style={styles.value}>Summer</Text>
      <Text style={styles.copy}>This is not treated as scientific ground truth. It is a user-friendly mapping from your current color characteristics.</Text>
    </View>
    <PrimaryButton label="Continue to Aesthetic Profile" onPress={()=>router.push("/aesthetic-profile")}/>
  </ScrollView></SafeAreaView>
}

const styles=StyleSheet.create({
  safe:{flex:1,backgroundColor:colors.ivory},page:{padding:spacing.xl,paddingBottom:spacing["2xl"]},
  list:{gap:spacing.md,marginTop:spacing.xl},
  interpretation:{marginVertical:spacing.xl,backgroundColor:"#F1EEFF",padding:spacing.lg,borderRadius:radius.lg},
  label:{color:colors.iris,fontSize:11,fontWeight:"800",letterSpacing:1.1},value:{color:colors.graphite,fontSize:23,fontWeight:"800",marginTop:5},
  copy:{color:"#696269",fontSize:13,lineHeight:19,marginTop:5}
});
