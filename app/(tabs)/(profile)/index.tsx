import React from "react";
import { StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";

const ProfileScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingHorizontal: 16,
            position: "absolute",
            bottom: 16,
            left: 16,
          }}
        >
          {/* <IconSymbol size={60} color="#808080" name="person.fill" /> */}
          <ThemedText
            type="title"
            style={{
              fontWeight: "bold",
            }}
          >
            Profile
          </ThemedText>
        </View>
      }
    >
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default ProfileScreen;
