import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AdaptiveMark } from "@/src/components/AdaptiveMark";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { colors, radius, spacing, type } from "@/src/theme/tokens";

const dimensions = [
  ["Body", "Measurements & proportions"],
  ["Face", "Geometry & visual characteristics"],
  ["Color", "Continuous color characteristics"],
  ["Aesthetic", "Interpretive profile"],
];

export default function KnowMeIntro() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <Text style={styles.kicker}>KNOW ME</Text>
        <Text style={styles.title}>Let&apos;s discover you.</Text>
        <Text style={styles.copy}>
          You don&apos;t need to know your body shape, personal color, or face type
          beforehand. That&apos;s what we&apos;re here to help you discover.
        </Text>

        <View style={styles.coreWrap}>
          <View style={styles.core}>
            <AdaptiveMark size={36} color={colors.white} />
            <Text style={styles.coreLabel}>YOU</Text>
          </View>
        </View>

        <View style={styles.list}>
          {dimensions.map(([title, subtitle]) => (
            <View key={title} style={styles.card}>
              <View style={styles.dot} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardCopy}>{subtitle}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.spacer} />
        <PrimaryButton
          label="Start My Analysis"
          onPress={() => router.push("/body")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ivory },
  page: { flex: 1, padding: spacing.xl },
  kicker: {
    color: colors.coral,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.6,
    marginTop: spacing.lg,
  },
  title: {
    marginTop: spacing.sm,
    color: colors.graphite,
    fontSize: type.h1,
    lineHeight: 40,
    fontWeight: "800",
  },
  copy: {
    marginTop: spacing.md,
    color: "#615B62",
    fontSize: 16,
    lineHeight: 24,
  },
  coreWrap: { alignItems: "center", marginVertical: spacing.xl },
  core: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: colors.plum,
    alignItems: "center",
    justifyContent: "center",
  },
  coreLabel: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1.4,
    marginTop: 4,
  },
  list: { gap: spacing.md },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    borderRadius: radius.lg,
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#F0E8EC",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.iris,
  },
  cardTitle: { color: colors.graphite, fontSize: 16, fontWeight: "700" },
  cardCopy: { color: "#6B646B", marginTop: 2, fontSize: 13 },
  spacer: { flex: 1 },
});
