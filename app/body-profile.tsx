import { router } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { InsightCard } from "@/src/components/InsightCard";
import { SectionHeader } from "@/src/components/SectionHeader";
import { colors, radius, spacing } from "@/src/theme/tokens";

export default function BodyProfileScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.page}>
        <SectionHeader
          step="BODY PROFILE"
          title="Your proportions, not just a label."
          description="GlowMeUp keeps the underlying measurements and relationships. Common body-shape labels are only a simplified explanation layer."
        />

        <View style={styles.list}>
          <InsightCard label="VERTICAL FRAME" value="Petite" detail="Your overall stature sits in a shorter vertical range." confidence="HIGH" />
          <InsightCard label="SHOULDER ↔ HIP" value="Shoulder-dominant" detail="Your shoulder span is more visually dominant than your hip line." confidence="MEDIUM" />
          <InsightCard label="WAIST DEFINITION" value="Moderate" detail="Your waist creates visible definition without a high waist-to-hip contrast." confidence="HIGH" />
          <InsightCard label="TORSO ↔ LEG" value="Shorter vertical frame" detail="This dimension will be refined as the capture model improves." confidence="MEDIUM" />
        </View>

        <View style={styles.interpretation}>
          <Text style={styles.interpretationLabel}>CLOSEST COMMON DESCRIPTION</Text>
          <Text style={styles.interpretationValue}>Inverted Triangle tendency</Text>
          <Text style={styles.interpretationCopy}>This is a human-readable approximation, not your full Body Profile.</Text>
        </View>

        <PrimaryButton label="Continue to Face Discovery" onPress={() => router.push("/face")} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ivory },
  page: { padding: spacing.xl, paddingBottom: spacing["2xl"] },
  list: { gap: spacing.md, marginTop: spacing.xl },
  interpretation: {
    marginVertical: spacing.xl, padding: spacing.lg, borderRadius: radius.lg,
    backgroundColor: "#F8ECF0", borderWidth: 1, borderColor: "#F0DDE4",
  },
  interpretationLabel: { color: colors.coral, fontSize: 11, fontWeight: "800", letterSpacing: 1.1 },
  interpretationValue: { color: colors.graphite, fontSize: 19, fontWeight: "800", marginTop: 5 },
  interpretationCopy: { color: "#6B646A", fontSize: 13, lineHeight: 19, marginTop: 5 },
});
