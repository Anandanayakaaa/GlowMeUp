import { router } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { InsightCard } from "@/src/components/InsightCard";
import { SectionHeader } from "@/src/components/SectionHeader";
import { colors, radius, spacing } from "@/src/theme/tokens";

export default function FaceProfileScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.page}>
        <SectionHeader
          step="FACE PROFILE"
          title="Geometry first. Labels second."
          description="These descriptors summarize measurable visual relationships. They do not define your attractiveness or identity."
        />

        <View style={styles.list}>
          <InsightCard label="LENGTH ↔ WIDTH" value="Balanced" detail="Your face length-to-width relationship sits near the middle range." confidence="HIGH" />
          <InsightCard label="JAW STRUCTURE" value="Soft angular" detail="Your jawline combines visible structure with softer transitions." confidence="MEDIUM" />
          <InsightCard label="FEATURE SCALE" value="Medium" detail="Major feature proportions sit in a moderate visual scale." confidence="MEDIUM" />
          <InsightCard label="NATURAL CONTRAST" value="Medium-high" detail="Contrast will later be combined with calibrated color analysis." confidence="MEDIUM" />
        </View>

        <View style={styles.note}>
          <Text style={styles.noteLabel}>OPTIONAL HUMAN-READABLE LABEL</Text>
          <Text style={styles.noteValue}>Oval tendency</Text>
          <Text style={styles.noteCopy}>Useful as shorthand, but GlowMeUp keeps the geometric descriptors underneath.</Text>
        </View>

        <PrimaryButton label="Continue to Color Discovery" onPress={() => router.push("/color")} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ivory },
  page: { padding: spacing.xl, paddingBottom: spacing["2xl"] },
  list: { gap: spacing.md, marginTop: spacing.xl },
  note: {
    marginVertical: spacing.xl, padding: spacing.lg, borderRadius: radius.lg,
    backgroundColor: "#F1EEFF",
  },
  noteLabel: { color: colors.iris, fontSize: 11, fontWeight: "800", letterSpacing: 1.1 },
  noteValue: { color: colors.graphite, fontSize: 19, fontWeight: "800", marginTop: 5 },
  noteCopy: { color: "#6A6369", fontSize: 13, lineHeight: 19, marginTop: 5 },
});
