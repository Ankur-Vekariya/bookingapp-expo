import React, { useState } from "react";
import { Text, View } from "react-native";
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

  return (
    <View>
      {hotelByType.length > 0 &&
        hotelByType.map((item) => {
          return <View>
            <Text>{item.type}</Text>
          </View>;
        })}
    </View>
  );
};

export default Home;
