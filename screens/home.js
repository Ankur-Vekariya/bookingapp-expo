import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { baseUrl } from "../constants/urls";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../components/Header";
import { colors } from "../constants/colors";

const Home = ({ navigation }) => {
  const [hotelByType, setHotelByType] = useState([]);
  const [navigationType, setNavigationType] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/hotels/countByType`)
      .then(function (response) {
        // handle success
        setHotelByType(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  console.log("hotelByType", hotelByType);

  return (
    <View>
      <Header
        rightIconShown={true}
        leftIconShown={true}
        onPressRightIcon={() => {
          navigation.openDrawer();
        }}
      />
      <Text style={{ paddingLeft: 5, fontSize: 16, fontWeight: "600" }}>
        Hotel By City
      </Text>

      {hotelByType.length > 0 && (
        <FlatList
          horizontal={true}
          data={hotelByType}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={(item, index) => {
            return (
              <View style={styles.hotelTypeCard} key={index}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/hotel.jpg")}
                    style={{ height: 40, width: 40, borderRadius: 20 }}
                  />
                  <Text
                    style={{ paddingLeft: 5, fontSize: 18, fontWeight: "400" }}
                  >
                    {item.item.type}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      )}
      <View
        style={{
          paddingHorizontal: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ paddingLeft: 5, fontSize: 16, fontWeight: "600" }}>
          Hotels
        </Text>
        <Text
          style={{
            paddingLeft: 5,
            fontSize: 16,
            fontWeight: "600",
            color: colors.main,
          }}
        >
          View All
        </Text>
      </View>
      {hotelByType.length > 0 && (
        <FlatList
          horizontal={true}
          data={hotelByType}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={(item, index) => {
            return (
              <View style={styles.featured} key={index}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/hotel.jpg")}
                    style={{ height: 40, width: 40, borderRadius: 20 }}
                  />
                  <Text
                    style={{ paddingLeft: 5, fontSize: 18, fontWeight: "400" }}
                  >
                    {item.item.type}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      )}

      {/* <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.button}>
          <Entypo name="home" size={20} color="black" />
          <Text style={{ paddingLeft: 5, fontSize: 16, fontWeight: "600" }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("hotels");
            setNavigationType("hotels");
          }}
        >
          <FontAwesome5 name="hotel" size={20} color="black" />
          <Text style={{ paddingLeft: 5, fontSize: 16, fontWeight: "600" }}>
            Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("maps");
          }}
        >
          <FontAwesome name="map-marker" size={20} color="black" />
          <Text style={{ paddingLeft: 5, fontSize: 16, fontWeight: "600" }}>
            Map
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="user" size={20} color="black" />
          <Text style={{ paddingLeft: 5, fontSize: 16, fontWeight: "600" }}>
            Profile
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  hotelTypeCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 5,
    paddingHorizontal: 5,
    minWidth: 120,
    height: 50,
    backgroundColor: "white",
    marginRight: 10,
    borderRadius: 25,
    paddingVertical: 5,
    alignContent: "center",
    marginVertical: 10,
  },
  featured: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 5,
    paddingHorizontal: 5,
    minWidth: 240,
    height: 200,
    backgroundColor: "white",
    marginRight: 10,
    borderRadius: 25,
    paddingVertical: 5,
    alignContent: "center",
    marginVertical: 10,
  },
  bottomTabBar: {
    backgroundColor: "white",
    alignContent: "center",
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 675,
  },
  button: {
    height: 50,
    width: "25%",
    // backgroundColor: "#8CC8FF",
    alignItems: "center",
    // borderTopRightRadius: 25,
    // borderBottomLeftRadius: 25,
  },
});
