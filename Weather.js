import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'thunderstorm-outline',
    gradient: ['#bdc3c7', '#2c3e50'],
  },
  Drizzle: {
    iconName: 'rainy-outline',
    gradient: ['#2980B9', '#6DD5FA'],
  },
  Rain: {
    iconName: 'rainy',
    gradient: ['#373B44', '#4286f4'],
  },
  Snow: {
    iconName: 'snow-outline',
    gradient: ['#FFEFBA', '#FFFFFF'],
  },
  Mist: {
    iconName: 'water-outline',
    gradient: ['#373B44', '#4286f4'],
  },
  Clouds: {
    iconName: 'cloud-outline',
    gradient: ['#0F2027', '#2C5364'],
  },
  Clear: {
    iconName: 'sunny-outline',
    gradient: ['#CAC531', '#F3F9A7'],
  },
  Smoke: {
    iconName: 'cloud',
    gradient: ['#0F2027', '#2C5364'],
  },
  Haze: {
    iconName: 'cloud-sharp',
    gradient: ['#373B44', '#4286f4'],
  },
  Dust: {
    iconName: 'cloud',
    gradient: ['#0F2027', '#2C5364'],
  },
  Fog: {
    iconName: 'cloud',
    gradient: ['#0F2027', '#2C5364'],
  },
  Sand: {
    iconName: 'cloud',
    gradient: ['#0F2027', '#2C5364'],
  },
  Ash: {
    iconName: 'water',
    gradient: ['#373B44', '#4286f4'],
  },
  Squall: {
    iconName: 'rainy',
    gradient: ['#373B44', '#4286f4'],
  },
  Tornado: {
    iconName: 'cloud-outline',
    gradient: ['#0F2027', '#203A43'],
  },
};
export default function Weather({ temp, condition, description }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Ionicons
          name={weatherOptions[condition].iconName}
          size={95}
          color="white"
        />
        <Text style={styles.temp}>{Math.round(temp)}℃</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Mist',
    'Clouds',
    'Clear',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Ash',
    'Squall',
    'Tornado',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 20,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 65,
    marginBottom: 29,
    fontWeight: "800"
  },
  subtitle: {
    color: 'white',
    fontSize: 42,
    fontWeight: '100'
  },
});
