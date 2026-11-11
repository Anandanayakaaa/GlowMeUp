import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing, type } from "@/src/theme/tokens";

type Props = {
  step: string;
  title: string;
  description?: string;
};

export function SectionHeader({ step, title, description }: Props) {
  return (
    <View>
      <Text style={styles.step}>{step}</Text>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  step: {
    color: colors.iris,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.35,
  },
  title: {
    color: colors.graphite,
    fontSize: type.h1,
    lineHeight: 40,
    fontWeight: "800",
    marginTop: spacing.sm,
    letterSpacing: -0.6,
  },
  description: {
    color: "#625B62",
    fontSize: 16,
    lineHeight: 24,
    marginTop: spacing.md,
  },
});
