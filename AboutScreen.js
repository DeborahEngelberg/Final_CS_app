import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from './UserContext';

function AboutScreen() {
  const { userName } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.aboutTitle}>About Daily Highlights</Text>
      <Text style={styles.aboutText}>
        Welcome to Daily Highlights, {userName ? userName : 'Guest'}! 🌟
      </Text>
      <Text style={styles.aboutText}>
        This app is your personal diary where you can jot down the best part of your day
        and watch your happy moments stack up!
      </Text>
      <Text style={styles.aboutText}>
        Keep track of your highlights and indulge in the memories of a year well-lived. Congrats!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#00796b',
  },
  aboutText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#666',
  },
});

export default AboutScreen;
