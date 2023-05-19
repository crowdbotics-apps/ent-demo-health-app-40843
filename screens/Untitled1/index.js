import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled3");
      }}>
          <ImageBackground style={styles.CEsGsyIs} source={require("./crowdbotics-tr-bg.png")} resizeMode="cover"></ImageBackground>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  CEsGsyIs: {
    width: 526,
    height: 342,
    position: "absolute",
    left: 455,
    top: 245
  }
});
export default Untitled1;