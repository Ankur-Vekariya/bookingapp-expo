import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { baseUrl } from "../constants/urls";
import axios from "axios";

const Home = () => {
  const [hotelByType, setHotelByType] = useState([]);

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
    <View style={{ flex: 1, display: "flex" }}>
      {hotelByType.length > 0 && (
        <FlatList
          horizontal={true}
          data={hotelByType}
          keyExtractor={(item) => item.id}
          renderItem={(item, index) => {
            console.log("item", item);
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
                    style={{ paddingLeft: 5, fontSize: 18, fontWeight: "600" }}
                  >
                    {item.item.type}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      )}
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
    paddingHorizontal: 10,
    minWidth: 120,
    height: 50,
    backgroundColor: "white",
    marginRight: 10,
    borderRadius: 25,
    // alignItems:"center",
    paddingTop: 5,
    alignContent: "center",
    marginVertical: 10,
  },
  // profileCard: {
  //   alignItems: "center",
  //   backgroundColor: "#8CC8FF",
  //   borderRadius: 10,
  //   paddingVertical: 20,
  //   paddingHorizontal: 20,
  //   width: "100%",
  //   height: 50,
  //   marginBottom: 5,
  // },
});
