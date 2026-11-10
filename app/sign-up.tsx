import { router } from "expo-router";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AdaptiveMark } from "@/src/components/AdaptiveMark";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { colors, radius, spacing, type } from "@/src/theme/tokens";

const providers = ["Continue with Google", "Continue with Apple"];

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <View style={styles.brandRow}>
          <AdaptiveMark size={36} />
          <Text style={styles.brand}>GlowMeUp</Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.kicker}>CREATE YOUR GLOWPROFILE</Text>
          <Text style={styles.title}>Start with an account that belongs to you.</Text>
          <Text style={styles.copy}>
            Your GlowProfile can evolve over time, so we keep it tied to your account
            and under your control.
          </Text>
        </View>

        <View style={styles.providers}>
          {providers.map((provider) => (
            <Pressable key={provider} style={styles.provider} onPress={() => router.push("/privacy")}>
              <Text style={styles.providerText}>{provider}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.dividerRow}>
          <View style={styles.divider} />
          <Text style={styles.or}>or</Text>
          <View style={styles.divider} />
        </View>

        <PrimaryButton label="Continue with Email" onPress={() => router.push("/privacy")} />
        <Text style={styles.terms}>
          By continuing, you agree to create a private GlowProfile. Detailed consent for
          photos and measurements comes next.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ivory },
  page: { flex: 1, padding: spacing.xl },
  brandRow: { marginTop: spacing.lg, flexDirection: "row", alignItems: "center", gap: 8 },
  brand: { color: colors.graphite, fontSize: 22, fontWeight: "800" },
  hero: { marginTop: 56 },
  kicker: { color: colors.iris, fontSize: 12, fontWeight: "800", letterSpacing: 1.4 },
  title: { color: colors.graphite, fontSize: type.h1, lineHeight: 40, fontWeight: "800", marginTop: spacing.sm },
  copy: { color: "#615B62", fontSize: 16, lineHeight: 24, marginTop: spacing.md },
  providers: { gap: spacing.md, marginTop: spacing["2xl"] },
  provider: {
    minHeight: 54, borderRadius: radius.pill, borderWidth: 1, borderColor: "#DDD4DA",
    backgroundColor: colors.white, alignItems: "center", justifyContent: "center",
  },
  providerText: { color: colors.graphite, fontSize: 15, fontWeight: "700" },
  dividerRow: { flexDirection: "row", alignItems: "center", gap: 12, marginVertical: spacing.xl },
  divider: { flex: 1, height: 1, backgroundColor: "#E6DDE2" },
  or: { color: "#8B848A", fontSize: 13 },
  terms: { color: "#7A7279", fontSize: 12, lineHeight: 18, textAlign: "center", marginTop: spacing.lg },
});
