import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius } from "@/src/theme/tokens";

type Level = "HIGH" | "MEDIUM" | "LOW" | "INTERPRETIVE";

const palette: Record<Level, { bg: string; fg: string }> = {
  HIGH: { bg: "#E8F4ED", fg: colors.success },
  MEDIUM: { bg: "#FFF2DE", fg: colors.warning },
  LOW: { bg: "#FCE9E9", fg: colors.danger },
  INTERPRETIVE: { bg: "#EEEAFB", fg: colors.iris },
};

export function ConfidenceBadge({ level }: { level: Level }) {
  return (
    <View style={[styles.badge, { backgroundColor: palette[level].bg }]}>
      <Text style={[styles.text, { color: palette[level].fg }]}>{level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: { fontSize: 11, fontWeight: "800", letterSpacing: 0.8 },
});
