import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { baseUrl } from "../constants/urls";
import axios from "axios";

const Hotels = () => {
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
    <View>
      {hotelByType.length > 0 &&
        hotelByType.map((item) => {
          return (
            <View style={styles.profileCard}>
              {/* <Image
                style={{ height: 50, width: 50 }}
                source={require("../../../assets/profile.png")}
              /> */}
              <Text>+917228821212</Text>
              <Text>ankurvekariya2001@gmail.com</Text>
            </View>
          );
        })}
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  profileCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    alignItems: "center",
    backgroundColor: "#8CC8FF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3E83BE",
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
    height: 150,
    marginBottom: 5,
  },
});
