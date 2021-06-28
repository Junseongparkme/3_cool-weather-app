import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <View style={style.container}>
      <Text>Loading...</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
