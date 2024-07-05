import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from './UserContext';

function UpdateUserNameScreen({ navigation }) {
  const { userName, setUserName } = useContext(UserContext);
  const [newUserName, setNewUserName] = useState(userName);

  const handleSave = () => {
    setUserName(newUserName);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={newUserName}
        onChangeText={setNewUserName}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
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
    marginBottom: 20,
    textAlign: 'center',
    color: '#00796b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00796b',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#ffffff',
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

export default UpdateUserNameScreen;
