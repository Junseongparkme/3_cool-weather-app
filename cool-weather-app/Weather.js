import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types'

// export default class Weather extends React.Component {
//     render() {
//         return (
//             <LinearGradient colors={["blue", "white"]} style={styles.container}>
//                 <View style={styles.upperView}>
//                     <Ionicons color='white' size={144} name= 'ios-rainy' />
//                     <Text>Icon</Text>
//                     <Text>Temperature</Text>
//                 </View>

//                 <View style={styles.lowerView}>
//                     <Text>Raining like a MF</Text>
//                     <Text>For more info look outside.</Text>
//                 </View>
//             </LinearGradient>
//         )
//     }
// }

function Weather({temp}) {
  return (
    <LinearGradient colors={["blue", "white"]} style={styles.container}>
      <View style={styles.upperView}>
        <Ionicons color="white" size={144} name="ios-rainy" />
        <Text>Icon</Text>
        <Text>{temp}</Text>
      </View>

      <View style={styles.lowerView}>
        <Text>Raining like a MF</Text>
        <Text>For more info look outside.</Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lowerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Weather
