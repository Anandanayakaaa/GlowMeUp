import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { ConfidenceBadge } from "@/src/components/ConfidenceBadge";
import { SectionHeader } from "@/src/components/SectionHeader";
import { colors, radius, spacing } from "@/src/theme/tokens";

const initial = [
  { key: "height", label: "Height", value: "149", confidence: "HIGH" as const },
  { key: "shoulder", label: "Shoulder", value: "38", confidence: "MEDIUM" as const },
  { key: "chest", label: "Chest / Bust", value: "82", confidence: "MEDIUM" as const },
  { key: "waist", label: "Waist", value: "66", confidence: "HIGH" as const },
  { key: "hip", label: "Hip", value: "86", confidence: "MEDIUM" as const },
];

export default function BodyReviewScreen() {
  const [measurements, setMeasurements] = useState(initial);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
        <SectionHeader
          step="KNOW ME · BODY · 3/3"
          title="Review what we estimated"
          description="These are estimates, not ground truth. Correct anything you know is wrong before GlowMeUp derives your Body Profile."
        />

        <View style={styles.list}>
          {measurements.map((item, index) => (
            <View key={item.key} style={styles.row}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>{item.label}</Text>
                <View style={styles.valueRow}>
                  <TextInput
                    value={item.value}
                    keyboardType="numeric"
                    onChangeText={(value) => {
                      const next = [...measurements];
                      next[index] = { ...item, value };
                      setMeasurements(next);
                    }}
                    style={styles.input}
                  />
                  <Text style={styles.unit}>cm</Text>
                </View>
              </View>
              <ConfidenceBadge level={item.confidence} />
            </View>
          ))}
        </View>

        <View style={styles.provenance}>
          <Text style={styles.provenanceTitle}>Evidence source</Text>
          <Text style={styles.provenanceCopy}>Height: user-entered · Other measurements: image-assisted estimate · All values remain editable.</Text>
        </View>

        <PrimaryButton label="Build My Body Profile" onPress={() => router.push("/body-profile")} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ivory },
  page: { padding: spacing.xl, paddingBottom: spacing["2xl"] },
  list: { gap: spacing.md, marginTop: spacing.xl },
  row: {
    flexDirection: "row", alignItems: "center", gap: spacing.md, backgroundColor: colors.white,
    borderWidth: 1, borderColor: "#EEE6EB", borderRadius: radius.lg, padding: spacing.lg,
  },
  label: { color: "#7C747B", fontSize: 12, fontWeight: "700" },
  valueRow: { flexDirection: "row", alignItems: "baseline", gap: 5, marginTop: 3 },
  input: { color: colors.graphite, fontSize: 24, fontWeight: "800", minWidth: 58, paddingVertical: 0 },
  unit: { color: "#7A7279", fontSize: 14, fontWeight: "700" },
  provenance: { backgroundColor: "#F1EEFF", borderRadius: radius.lg, padding: spacing.lg, marginVertical: spacing.xl },
  provenanceTitle: { color: colors.iris, fontSize: 13, fontWeight: "800" },
  provenanceCopy: { color: colors.graphite, fontSize: 13, lineHeight: 19, marginTop: 4 },
});
