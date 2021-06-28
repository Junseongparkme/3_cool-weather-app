import React from 'react';
import * as Location from 'expo-location';
import Loading from './Loading';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';
import API_KEY from './config';

const API_KEY = config.API_KEY;

export default class extends React.Component {
  state = {
    isLoading: true,
    temp: 0,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main,
      description: weather[0].description,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Cannot find you.');
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, description } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={temp} condition={condition} description={description} />
    );
  }
}
