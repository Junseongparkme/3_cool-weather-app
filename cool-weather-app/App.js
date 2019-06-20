import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from './Weather'

const API_KEY = 'd6bacb6ddd9c4c37d1742f9e952757ce'

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => 
      this._getWeather(position.coords.latitude, position.coords.longitude),
      error => 
      this.setState({
        error : "Any error was occured."
      })
    )
  }

  _getWeather = (lat, long) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    })
  }
  render() {
    const { isLoaded, error } = this.state
    return (
      <View style={styles.container}>
        {isLoaded ? <Weather temp={Math.floor(temperature-273.15)}/> : 
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting Cool Weather.</Text>
          {error ? <Text>{error}</Text> : null}
          </View>
        }
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  loading: {
    flex: 1,
    backgroundColor: '#fef6a3',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});
