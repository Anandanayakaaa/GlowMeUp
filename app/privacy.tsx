import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Lock, PencilLine, ShieldCheck, EyeOff } from "lucide-react-native";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { colors, radius, spacing, type } from "@/src/theme/tokens";

const principles = [
  { Icon: Lock, title: "Private by default", copy: "Measurements and analysis stay private unless you choose otherwise." },
  { Icon: EyeOff, title: "Photos aren't social posts", copy: "Capture images are used for analysis, not published to Connect Me." },
  { Icon: PencilLine, title: "You can correct us", copy: "Estimated measurements and interpretations can be reviewed and edited." },
  { Icon: ShieldCheck, title: "Consent by modality", copy: "Camera, measurements, and future data sources should each be permissioned clearly." },
];

export default function PrivacyScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <Text style={styles.kicker}>PRIVACY BEFORE PERSONALIZATION</Text>
        <Text style={styles.title}>Your data. Your GlowProfile.</Text>
        <Text style={styles.copy}>
          GlowMeUp needs personal evidence to understand you. That only works if you can
          see what we use, why we use it, and change it.
        </Text>

        <View style={styles.list}>
          {principles.map(({ Icon, title, copy }) => (
            <View key={title} style={styles.row}>
              <View style={styles.iconWrap}><Icon size={20} color={colors.plum} /></View>
              <View style={{ flex: 1 }}>
                <Text style={styles.rowTitle}>{title}</Text>
                <Text style={styles.rowCopy}>{copy}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.spacer} />
        <PrimaryButton label="I Understand — Continue" onPress={() => router.push("/know-me")} />
        <Text style={styles.link}>How GlowMeUp uses my data</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ivory },
  page: { flex: 1, padding: spacing.xl },
  kicker: { color: colors.coral, fontSize: 12, fontWeight: "800", letterSpacing: 1.4, marginTop: spacing.lg },
  title: { color: colors.graphite, fontSize: type.h1, lineHeight: 40, fontWeight: "800", marginTop: spacing.sm },
  copy: { color: "#615B62", fontSize: 16, lineHeight: 24, marginTop: spacing.md },
  list: { gap: spacing.md, marginTop: spacing["2xl"] },
  row: {
    flexDirection: "row", gap: spacing.md, backgroundColor: colors.white,
    borderRadius: radius.lg, padding: spacing.lg, borderWidth: 1, borderColor: "#EFE6EB",
  },
  iconWrap: {
    width: 42, height: 42, borderRadius: 21, backgroundColor: "#F7EEF4",
    alignItems: "center", justifyContent: "center",
  },
  rowTitle: { color: colors.graphite, fontWeight: "800", fontSize: 15 },
  rowCopy: { color: "#6D666D", fontSize: 13, lineHeight: 19, marginTop: 3 },
  spacer: { flex: 1 },
  link: { color: colors.plum, textAlign: "center", fontSize: 13, fontWeight: "600", marginTop: spacing.lg },
});
