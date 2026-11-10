import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { ConfidenceBadge } from "@/src/components/ConfidenceBadge";
import { SectionHeader } from "@/src/components/SectionHeader";
import { colors, radius, spacing } from "@/src/theme/tokens";

const traits=["Refined","Soft","Classic tendency"];

export default function AestheticProfileScreen(){
  return <SafeAreaView style={styles.safe}><View style={styles.page}>
    <SectionHeader step="AESTHETIC PROFILE" title="An interpretation, not a biological category." description="GlowMeUp can organize aesthetic language around observable dimensions, while keeping archetype-style labels explicitly interpretive."/>
    <View style={styles.dimensions}>
      <Text style={styles.dimension}>Soft ↔ Angular: <Text style={styles.bold}>Soft-angular</Text></Text>
      <Text style={styles.dimension}>Feature scale: <Text style={styles.bold}>Medium</Text></Text>
      <Text style={styles.dimension}>Contrast: <Text style={styles.bold}>Medium</Text></Text>
      <Text style={styles.dimension}>Line quality: <Text style={styles.bold}>Refined</Text></Text>
    </View>
    <View style={styles.result}>
      <View style={styles.resultHeader}><Text style={styles.resultLabel}>CURRENT INTERPRETATION</Text><ConfidenceBadge level="INTERPRETIVE"/></View>
      <View style={styles.chips}>{traits.map(t=><View key={t} style={styles.chip}><Text style={styles.chipText}>{t}</Text></View>)}</View>
      <Text style={styles.resultCopy}>This layer may evolve as GlowMeUp learns better validated aesthetic descriptors.</Text>
    </View>
    <View style={styles.spacer}/>
    <PrimaryButton label="Build My GlowProfile" onPress={()=>router.push("/building-profile")}/>
  </View></SafeAreaView>
}

const styles=StyleSheet.create({
  safe:{flex:1,backgroundColor:colors.ivory},page:{flex:1,padding:spacing.xl},
  dimensions:{marginTop:spacing.xl,backgroundColor:colors.white,borderRadius:radius.lg,padding:spacing.lg,gap:12,borderWidth:1,borderColor:"#EEE6EB"},
  dimension:{color:"#6A6369",fontSize:14},bold:{color:colors.graphite,fontWeight:"800"},
  result:{marginTop:spacing.xl,backgroundColor:"#F8ECF0",borderRadius:radius.lg,padding:spacing.lg},
  resultHeader:{flexDirection:"row",justifyContent:"space-between",gap:12,alignItems:"center"},
  resultLabel:{color:colors.coral,fontSize:11,fontWeight:"800",letterSpacing:1.1},
  chips:{flexDirection:"row",flexWrap:"wrap",gap:8,marginTop:spacing.md},
  chip:{backgroundColor:colors.white,borderRadius:radius.pill,paddingHorizontal:12,paddingVertical:8},
  chipText:{color:colors.graphite,fontSize:13,fontWeight:"700"},
  resultCopy:{color:"#696269",fontSize:13,lineHeight:19,marginTop:spacing.md},spacer:{flex:1}
});
