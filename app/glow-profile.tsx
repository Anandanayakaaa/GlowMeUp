import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { ConfidenceBadge } from "@/src/components/ConfidenceBadge";
import { AdaptiveMark } from "@/src/components/AdaptiveMark";
import { colors, radius, spacing, type } from "@/src/theme/tokens";

const sections=[
  {title:"Body",value:"Petite · shoulder-dominant",confidence:"HIGH" as const,source:"Measurements + guided capture"},
  {title:"Face",value:"Soft-angular · medium scale",confidence:"MEDIUM" as const,source:"Facial geometry"},
  {title:"Color",value:"Cool-leaning · medium-light · muted",confidence:"MEDIUM" as const,source:"Controlled image analysis"},
  {title:"Aesthetic",value:"Refined · soft · classic tendency",confidence:"INTERPRETIVE" as const,source:"Interpretive mapping"},
];

export default function GlowProfileScreen(){
  return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.page}>
    <View style={styles.hero}>
      <View style={styles.mark}><AdaptiveMark size={52} color={colors.white}/></View>
      <Text style={styles.kicker}>YOUR GLOWPROFILE</Text>
      <Text style={styles.title}>This is what we understand about you—so far.</Text>
      <Text style={styles.copy}>Your profile is evidence-based, editable, and designed to evolve. Labels never replace the underlying characteristics.</Text>
    </View>
    <View style={styles.sections}>
      {sections.map(s=><View key={s.title} style={styles.card}>
        <View style={styles.cardTop}><Text style={styles.cardTitle}>{s.title}</Text><ConfidenceBadge level={s.confidence}/></View>
        <Text style={styles.cardValue}>{s.value}</Text>
        <Text style={styles.source}>Source: {s.source}</Text>
      </View>)}
    </View>
    <View style={styles.meaning}>
      <Text style={styles.meaningTitle}>WHAT THIS MEANS FOR YOU</Text>
      <Text style={styles.meaningItem}>Colors → strongest harmony directions</Text>
      <Text style={styles.meaningItem}>Silhouettes → proportion-aware guidance</Text>
      <Text style={styles.meaningItem}>Necklines → face + body interaction</Text>
      <Text style={styles.meaningItem}>Lengths → vertical proportion guidance</Text>
    </View>
    <PrimaryButton label="Show Me What Suits Me" onPress={()=>router.push("/suits-me")}/>
  </ScrollView></SafeAreaView>
}

const styles=StyleSheet.create({
  safe:{flex:1,backgroundColor:colors.ivory},page:{padding:spacing.xl,paddingBottom:spacing["2xl"]},
  hero:{alignItems:"flex-start"},mark:{width:84,height:84,borderRadius:42,backgroundColor:colors.plum,alignItems:"center",justifyContent:"center"},
  kicker:{color:colors.coral,fontSize:12,fontWeight:"800",letterSpacing:1.4,marginTop:spacing.lg},
  title:{color:colors.graphite,fontSize:type.h1,lineHeight:40,fontWeight:"800",marginTop:spacing.sm},
  copy:{color:"#625B62",fontSize:15,lineHeight:23,marginTop:spacing.md},
  sections:{gap:spacing.md,marginTop:spacing.xl},
  card:{backgroundColor:colors.white,borderRadius:radius.lg,padding:spacing.lg,borderWidth:1,borderColor:"#EEE6EB"},
  cardTop:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:12},
  cardTitle:{color:colors.graphite,fontSize:16,fontWeight:"800"},cardValue:{color:"#5E565D",fontSize:14,lineHeight:20,marginTop:8},
  source:{color:"#948B92",fontSize:11,marginTop:6},
  meaning:{marginVertical:spacing.xl,backgroundColor:"#F1EEFF",borderRadius:radius.lg,padding:spacing.lg,gap:8},
  meaningTitle:{color:colors.iris,fontSize:11,fontWeight:"800",letterSpacing:1.1},
  meaningItem:{color:colors.graphite,fontSize:13,lineHeight:19}
});
