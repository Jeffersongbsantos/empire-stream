import React from "react";
import { StyleSheet, View, Image } from "react-native";
import logoImage from "../../../assets/LogoEmpire.png";

export const logo = () => {
  return ( 
     <Image style={styles.Logo} source={logoImage}/>
  )
};

const styles = StyleSheet.create({
  logo: {
    height: 64,
    width: 64,
  },
});
