import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AdaptiveMark } from "@/src/components/AdaptiveMark";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { colors, spacing, type } from "@/src/theme/tokens";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <View style={styles.brandRow}>
          <AdaptiveMark size={40} />
          <Text style={styles.brand}>GlowMeUp</Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>PERSONAL FASHION INTELLIGENCE</Text>
          <Text style={styles.title}>
            Know yourself.{"\n"}
            <Text style={styles.accent}>Find what suits you.</Text>
          </Text>
          <Text style={styles.copy}>
            GlowMeUp helps you understand your unique characteristics, then turns them
            into personal fashion, beauty, and self-expression intelligence.
          </Text>
        </View>

        <View style={styles.art}>
          <View style={[styles.blob, styles.blobCoral]} />
          <View style={[styles.blob, styles.blobIris]} />
          <View style={styles.artCore}>
            <AdaptiveMark size={72} color={colors.white} />
          </View>
        </View>

        <View style={styles.actions}>
          <PrimaryButton
            label="Discover Myself"
            onPress={() => router.push("/know-me")}
          />
          <Text style={styles.secondary}>I already have an account</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ivory },
  page: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  brandRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  brand: { color: colors.graphite, fontSize: 24, fontWeight: "800" },
  hero: { marginTop: 48 },
  eyebrow: {
    color: colors.iris,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  title: {
    marginTop: 12,
    color: colors.graphite,
    fontSize: type.display,
    lineHeight: 50,
    fontWeight: "800",
    letterSpacing: -1.5,
  },
  accent: { color: colors.coral },
  copy: {
    marginTop: spacing.lg,
    color: "#5E5860",
    fontSize: type.body,
    lineHeight: 24,
    maxWidth: 360,
  },
  art: {
    flex: 1,
    minHeight: 220,
    marginVertical: spacing.xl,
    alignItems: "center",
    justifyContent: "center",
  },
  blob: {
    position: "absolute",
    width: 220,
    height: 170,
    borderRadius: 90,
  },
  blobCoral: {
    backgroundColor: "#F7A1AE",
    transform: [{ rotate: "18deg" }, { translateX: -28 }],
  },
  blobIris: {
    backgroundColor: "#B5A8F3",
    transform: [{ rotate: "-16deg" }, { translateX: 28 }],
  },
  artCore: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: colors.plum,
    alignItems: "center",
    justifyContent: "center",
  },
  actions: { gap: spacing.lg },
  secondary: {
    textAlign: "center",
    color: colors.plum,
    fontSize: 14,
    fontWeight: "600",
  },
});
