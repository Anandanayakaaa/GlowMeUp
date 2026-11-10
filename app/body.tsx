import React, { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, radius, spacing, type } from "@/src/theme/tokens";
import { PrimaryButton } from "@/src/components/PrimaryButton";

export default function BodyStart() {
  const [height, setHeight] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <Text style={styles.step}>KNOW ME · BODY</Text>
        <Text style={styles.title}>Let&apos;s understand your proportions.</Text>
        <Text style={styles.copy}>
          We&apos;ll use guided capture plus measurements. Your body-shape label is only
          a simplified description; the underlying profile stays measurement-based.
        </Text>

        <View style={styles.panel}>
          <Text style={styles.label}>First, enter your actual height</Text>
          <View style={styles.inputRow}>
            <TextInput
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
              placeholder="168"
              placeholderTextColor="#A9A2A8"
              style={styles.input}
            />
            <Text style={styles.unit}>cm</Text>
          </View>
          <Text style={styles.note}>
            This gives us a real-world scale reference before image-assisted estimation.
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Next</Text>
          <Text style={styles.infoCopy}>
            Guided front & side capture → measurement review → Body Profile.
          </Text>
        </View>

        <View style={styles.spacer} />
        <PrimaryButton label="Continue to Guided Capture" onPress={() => router.push("/body-capture")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ivory },
  page: { flex: 1, padding: spacing.xl },
  step: {
    color: colors.iris,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.4,
    marginTop: spacing.lg,
  },
  title: {
    color: colors.graphite,
    fontSize: type.h1,
    lineHeight: 40,
    fontWeight: "800",
    marginTop: spacing.sm,
  },
  copy: {
    color: "#615B62",
    fontSize: 16,
    lineHeight: 24,
    marginTop: spacing.md,
  },
  panel: {
    marginTop: spacing["2xl"],
    backgroundColor: colors.white,
    padding: spacing.xl,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: "#F0E8EC",
  },
  label: { color: colors.graphite, fontSize: 15, fontWeight: "700" },
  inputRow: {
    marginTop: spacing.lg,
    flexDirection: "row",
    alignItems: "flex-end",
    borderBottomWidth: 1.5,
    borderBottomColor: colors.plum,
  },
  input: {
    flex: 1,
    color: colors.graphite,
    fontSize: 42,
    fontWeight: "700",
    paddingVertical: spacing.sm,
  },
  unit: { color: colors.plum, fontSize: 18, fontWeight: "700", paddingBottom: 14 },
  note: { color: "#777078", fontSize: 13, lineHeight: 19, marginTop: spacing.md },
  info: {
    marginTop: spacing.lg,
    backgroundColor: "#F1EEFF",
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  infoTitle: { color: colors.iris, fontSize: 14, fontWeight: "800" },
  infoCopy: { color: colors.graphite, marginTop: 4, lineHeight: 20 },
  spacer: { flex: 1 },
});
