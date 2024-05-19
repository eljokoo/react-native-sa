import React from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This app was written in React-Native.
      </Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 100,
  },
  image: {
    width: 400,
    height: 300,
  },
  text: {
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    fontSize: '20px',
  },
});

export default About;
