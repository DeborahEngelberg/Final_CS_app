import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from './UserContext';

function HomeScreen({ navigation }) {
  const { userName } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Daily Highlights, {userName ? userName : 'Guest'}!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WriteTodaysHighlight')}>
        <Text style={styles.buttonText}>Write Today's Highlight</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UpdateUserName')}>
        <Text style={styles.buttonText}>Set Your Name</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#00796b',
  },
  button: {
    backgroundColor: '#80deea',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#004d40',
  },
});

export default HomeScreen;
