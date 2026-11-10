import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Camera, Check, RotateCcw } from "lucide-react-native";
import { PrimaryButton } from "@/src/components/PrimaryButton";
import { SectionHeader } from "@/src/components/SectionHeader";
import { colors, radius, spacing } from "@/src/theme/tokens";

export default function BodyCaptureScreen() {
  const [frontDone, setFrontDone] = useState(false);
  const [sideDone, setSideDone] = useState(false);

  const nextCapture = () => {
    if (!frontDone) setFrontDone(true);
    else if (!sideDone) setSideDone(true);
  };

  const ready = frontDone && sideDone;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <SectionHeader
          step="KNOW ME · BODY · 2/3"
          title="Guided body capture"
          description="For this prototype, capture is simulated. The final version will use guided camera framing and quality checks before analysis."
        />

        <View style={styles.stage}>
          <View style={styles.frame}>
            <View style={styles.head} />
            <View style={styles.shoulders} />
            <View style={styles.torso} />
            <View style={styles.legs}>
              <View style={styles.leg} />
              <View style={styles.leg} />
            </View>
          </View>
          <Text style={styles.stageTitle}>{!frontDone ? "Front view" : !sideDone ? "Side view" : "Capture complete"}</Text>
          <Text style={styles.stageCopy}>
            {!frontDone
              ? "Stand naturally. Keep your full body visible."
              : !sideDone
              ? "Turn to the side while keeping the camera position fixed."
              : "We have both views needed for the next estimation step."}
          </Text>
        </View>

        <View style={styles.progressRow}>
          <View style={[styles.captureChip, frontDone && styles.captureChipDone]}>
            {frontDone ? <Check size={16} color={colors.success} /> : <Camera size={16} color={colors.plum} />}
            <Text style={styles.chipText}>Front</Text>
          </View>
          <View style={[styles.captureChip, sideDone && styles.captureChipDone]}>
            {sideDone ? <Check size={16} color={colors.success} /> : <RotateCcw size={16} color={colors.plum} />}
            <Text style={styles.chipText}>Side</Text>
          </View>
        </View>

        <View style={styles.tip}>
          <Text style={styles.tipTitle}>Capture quality matters</Text>
          <Text style={styles.tipCopy}>Loose clothing, camera tilt, pose, and distance can reduce measurement confidence.</Text>
        </View>

        <View style={styles.spacer} />
        {ready ? (
          <PrimaryButton label="Review Estimated Measurements" onPress={() => router.push("/body-review")} />
        ) : (
          <Pressable style={styles.captureButton} onPress={nextCapture}>
            <Camera size={20} color={colors.white} />
            <Text style={styles.captureButtonText}>Simulate Capture</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ivory },
  page: { flex: 1, padding: spacing.xl },
  stage: { alignItems: "center", marginTop: spacing.xl },
  frame: {
    width: 190, height: 310, borderWidth: 1.5, borderColor: "#D7CCD3", borderRadius: radius.xl,
    alignItems: "center", paddingTop: 24, backgroundColor: "#FFFDFC",
  },
  head: { width: 42, height: 42, borderRadius: 21, backgroundColor: "#C7BFD5" },
  shoulders: { width: 104, height: 22, borderRadius: 12, backgroundColor: "#B9ADCE", marginTop: 10 },
  torso: { width: 78, height: 112, borderRadius: 28, backgroundColor: "#DDD3E7", marginTop: 4 },
  legs: { flexDirection: "row", gap: 10, marginTop: 6 },
  leg: { width: 28, height: 82, borderRadius: 14, backgroundColor: "#D3CADC" },
  stageTitle: { color: colors.graphite, fontSize: 18, fontWeight: "800", marginTop: spacing.lg },
  stageCopy: { color: "#6A6369", fontSize: 13, lineHeight: 19, textAlign: "center", marginTop: 5, maxWidth: 290 },
  progressRow: { flexDirection: "row", gap: spacing.md, justifyContent: "center", marginTop: spacing.lg },
  captureChip: {
    flexDirection: "row", gap: 6, alignItems: "center", borderRadius: radius.pill, paddingHorizontal: 14, paddingVertical: 9,
    backgroundColor: "#F3EDF1",
  },
  captureChipDone: { backgroundColor: "#E9F4ED" },
  chipText: { color: colors.graphite, fontSize: 13, fontWeight: "700" },
  tip: { backgroundColor: "#F1EEFF", borderRadius: radius.lg, padding: spacing.lg, marginTop: spacing.xl },
  tipTitle: { color: colors.iris, fontSize: 14, fontWeight: "800" },
  tipCopy: { color: colors.graphite, fontSize: 13, lineHeight: 19, marginTop: 4 },
  spacer: { flex: 1 },
  captureButton: {
    minHeight: 54, borderRadius: radius.pill, backgroundColor: colors.plum, flexDirection: "row",
    gap: 8, alignItems: "center", justifyContent: "center",
  },
  captureButtonText: { color: colors.white, fontSize: 16, fontWeight: "800" },
});
