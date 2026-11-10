import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CheckCircle2, AlertTriangle } from "lucide-react-native";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { ConfidenceBadge } from "@/src/components/ConfidenceBadge";
import { SectionHeader } from "@/src/components/SectionHeader";
import { colors, radius, spacing } from "@/src/theme/tokens";

const checks=[
  {ok:true,label:"Exposure"},
  {ok:true,label:"Face detected"},
  {ok:true,label:"No strong filter detected"},
  {ok:false,label:"Lighting slightly warm"},
];

export default function ColorQualityScreen(){
  return <SafeAreaView style={styles.safe}><View style={styles.page}>
    <SectionHeader step="COLOR · QUALITY CHECK" title="Before we interpret the result" description="Capture quality changes how much confidence GlowMeUp should place in color analysis."/>
    <View style={styles.card}>
      {checks.map(c=><View key={c.label} style={styles.row}>
        {c.ok?<CheckCircle2 size={20} color={colors.success}/>:<AlertTriangle size={20} color={colors.warning}/>}
        <Text style={styles.rowText}>{c.label}</Text>
      </View>)}
    </View>
    <View style={styles.confidence}>
      <Text style={styles.confLabel}>ANALYSIS CONFIDENCE</Text>
      <ConfidenceBadge level="MEDIUM"/>
      <Text style={styles.confCopy}>Good enough for an initial profile, but not strong enough for high-certainty claims.</Text>
    </View>
    <View style={styles.spacer}/>
    <PrimaryButton label="Continue With This Capture" onPress={()=>router.push("/color-profile")}/>
  </View></SafeAreaView>
}

const styles=StyleSheet.create({
  safe:{flex:1,backgroundColor:colors.ivory},page:{flex:1,padding:spacing.xl},
  card:{marginTop:spacing.xl,backgroundColor:colors.white,borderRadius:radius.lg,padding:spacing.lg,gap:14,borderWidth:1,borderColor:"#EEE6EB"},
  row:{flexDirection:"row",alignItems:"center",gap:10},rowText:{color:colors.graphite,fontSize:14,fontWeight:"600"},
  confidence:{marginTop:spacing.xl,backgroundColor:"#FFF4E8",borderRadius:radius.lg,padding:spacing.lg,gap:8},
  confLabel:{color:colors.warning,fontSize:11,fontWeight:"800",letterSpacing:1.1},confCopy:{color:colors.graphite,fontSize:13,lineHeight:19},
  spacer:{flex:1}
});
