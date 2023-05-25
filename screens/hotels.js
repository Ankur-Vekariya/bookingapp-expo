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
import Header from "../components/Header";
import { colors } from "../constants/colors";

const Hotels = ({ navigation }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/hotels/`)
      .then(function (response) {
        // handle success
        setHotels(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  console.log("hotels", hotels);

  return (
    <View>
      <Header
        rightIconShown={true}
        leftIconShown={true}
        onPressLeftIcon={() => {
          navigation.goBack();
        }}
      />
      {hotels.length > 0 && (
        <FlatList
          data={hotels}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={(item, index) => {
            return (
              <TouchableOpacity
                style={styles.hotelTypeCard}
                onPress={() => navigation.navigate("hotel-detail")}
              >
                <Image
                  source={require("../assets/hotel.jpg")}
                  style={{ height: 200, width: "100%", borderRadius: 20 }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        paddingLeft: 5,
                        fontSize: 20,
                        fontWeight: "400",
                      }}
                    >
                      {item?.item?.name}
                    </Text>
                    <Text
                      style={{
                        paddingLeft: 5,
                        fontSize: 18,
                        fontWeight: "400",
                      }}
                    >
                      {item?.item?.title}
                    </Text>
                    <Text
                      style={{
                        paddingLeft: 5,
                        fontSize: 14,
                        fontWeight: "400",
                      }}
                    >
                      {item?.item?.desc}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: colors.accent,
                      width: "20%",
                      height: "60%",
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        alignContent: "center",
                        // paddingLeft: 5,
                        // fontSize: 14,
                        // fontWeight: "400",
                      }}
                    >
                      {"Book"}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default Hotels;

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
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignContent: "center",
    marginVertical: 5,
  },
});
