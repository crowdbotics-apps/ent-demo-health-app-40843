import { ImageBackground } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        
      <ImageBackground style={styles.CEsGsyIs} source={require("./crowdbotics-tr-bg.png")} resizeMode="cover"></ImageBackground></ScrollView>
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