import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScanFace } from "lucide-react-native";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { SectionHeader } from "@/src/components/SectionHeader";
import { colors, radius, spacing } from "@/src/theme/tokens";

export default function FaceCaptureScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <SectionHeader
          step="KNOW ME · FACE"
          title="Let's understand your facial geometry."
          description="We measure geometry and visual characteristics—not attractiveness, personality, or a beauty score."
        />

        <View style={styles.capture}>
          <View style={styles.faceOval}>
            <ScanFace size={78} color={colors.iris} strokeWidth={1.4} />
          </View>
          <Text style={styles.captureTitle}>Neutral, front-facing photo</Text>
          <Text style={styles.captureCopy}>Use even lighting, remove strong filters, and keep your face centered.</Text>
        </View>

        <View style={styles.rules}>
          <Text style={styles.rule}>✓ Natural or neutral light</Text>
          <Text style={styles.rule}>✓ Neutral expression</Text>
          <Text style={styles.rule}>✓ Face directly toward camera</Text>
          <Text style={styles.rule}>× No strong beauty filters</Text>
        </View>

        <View style={styles.spacer} />
        <PrimaryButton label="Simulate Face Capture" onPress={() => router.push("/face-profile")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ivory },
  page: { flex: 1, padding: spacing.xl },
  capture: { alignItems: "center", marginTop: spacing["2xl"] },
  faceOval: {
    width: 200, height: 250, borderRadius: 100, borderWidth: 1.5, borderColor: "#D9CFD7",
    backgroundColor: "#FFFDFC", alignItems: "center", justifyContent: "center",
  },
  captureTitle: { color: colors.graphite, fontSize: 17, fontWeight: "800", marginTop: spacing.lg },
  captureCopy: { color: "#6A6369", textAlign: "center", fontSize: 13, lineHeight: 19, marginTop: 5, maxWidth: 300 },
  rules: {
    backgroundColor: colors.white, borderRadius: radius.lg, padding: spacing.lg,
    borderWidth: 1, borderColor: "#EEE6EB", gap: 8, marginTop: spacing.xl,
  },
  rule: { color: colors.graphite, fontSize: 13, lineHeight: 19 },
  spacer: { flex: 1 },
});
