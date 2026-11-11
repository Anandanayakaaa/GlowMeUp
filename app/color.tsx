import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SunMedium } from "lucide-react-native";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { SectionHeader } from "@/src/components/SectionHeader";
import { colors, radius, spacing } from "@/src/theme/tokens";

export default function ColorScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <SectionHeader
          step="KNOW ME · COLOR"
          title="Let's measure color characteristics carefully."
          description="Personal color is sensitive to lighting and camera processing, so GlowMeUp checks capture quality before interpreting the result."
        />
        <View style={styles.visual}>
          <SunMedium size={72} color={colors.coral} />
          <Text style={styles.visualTitle}>Use neutral, even light</Text>
          <Text style={styles.visualCopy}>Avoid colored lamps, strong shadows, filters, and heavy color-altering makeup.</Text>
        </View>
        <View style={styles.rules}>
          <Text style={styles.rule}>✓ Face fully visible</Text>
          <Text style={styles.rule}>✓ Neutral background when possible</Text>
          <Text style={styles.rule}>✓ White balance should look natural</Text>
          <Text style={styles.rule}>× No strong filter or colored light</Text>
        </View>
        <View style={styles.spacer} />
        <PrimaryButton label="Simulate Color Capture" onPress={() => router.push("/color-quality")} />
      </View>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  safe:{flex:1,backgroundColor:colors.ivory},page:{flex:1,padding:spacing.xl},
  visual:{alignItems:"center",marginTop:spacing["2xl"],padding:spacing.xl,borderRadius:radius.xl,backgroundColor:"#FFF3EF"},
  visualTitle:{color:colors.graphite,fontSize:18,fontWeight:"800",marginTop:spacing.md},
  visualCopy:{color:"#6A6369",fontSize:13,lineHeight:19,textAlign:"center",marginTop:5},
  rules:{marginTop:spacing.xl,backgroundColor:colors.white,borderRadius:radius.lg,padding:spacing.lg,gap:8,borderWidth:1,borderColor:"#EEE6EB"},
  rule:{color:colors.graphite,fontSize:13,lineHeight:19},spacer:{flex:1}
});
