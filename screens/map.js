import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { colors } from "../constants/colors";
import MapView, { Marker } from "react-native-maps";

const tokyoRegion = {
  latitude: 21.196404,
  longitude: 72.806026,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const Maps = ({ navigation }) => {
  return (
    <View>
      <Header
        rightIconShown={true}
        leftIconShown={true}
        onPressLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <MapView style={styles.map}>
        <Marker coordinate={tokyoRegion} pinColor="#6b7db3" />
      </MapView>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
