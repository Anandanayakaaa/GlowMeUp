import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "@/src/theme/tokens";
import { ConfidenceBadge } from "./ConfidenceBadge";

type Props = {
  label: string;
  value: string;
  detail?: string;
  confidence?: "HIGH" | "MEDIUM" | "LOW" | "INTERPRETIVE";
};

export function InsightCard({ label, value, detail, confidence }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
        {confidence ? <ConfidenceBadge level={confidence} /> : null}
      </View>
      {detail ? <Text style={styles.detail}>{detail}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#EEE6EB",
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  top: { flexDirection: "row", gap: spacing.md, alignItems: "flex-start" },
  label: { color: "#817980", fontSize: 12, fontWeight: "700", letterSpacing: 0.5 },
  value: { color: colors.graphite, fontSize: 18, fontWeight: "800", marginTop: 4 },
  detail: { color: "#696269", fontSize: 13, lineHeight: 19, marginTop: spacing.sm },
});
