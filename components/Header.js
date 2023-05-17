import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const Header = ({
  rightIconShown,
  leftIconShown,
  onPressRightIcon,
  onPressLeftIcon,
}) => {
  return (
    <View
      style={{
        height: 50,
        backgroundColor: colors.main,
        display: "flex",
        justifyContent: "space-between",
        marginTop: 35,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
      }}
    >
      {leftIconShown && (
        <TouchableOpacity onPress={onPressLeftIcon}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      )}
      {rightIconShown && (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Entypo name="menu" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
