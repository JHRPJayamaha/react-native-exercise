import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  Image,
  Text,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoCon}>
        <Image style={styles.logo} source={require("../assets/git.png")} />
        <Text style={styles.titleText}>RASIKA</Text>
      </View>

      <Button title="LOGIN" onPress={() => console.log("Button tapped")} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  logoCon: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
});

export default WelcomeScreen;
