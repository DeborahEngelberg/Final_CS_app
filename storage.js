import AsyncStorage from '@react-native-community/async-storage';

const storage = {
  // Define functions to save and load highlights
  async saveHighlight(highlight) {
    try {
      let existingHighlights = await AsyncStorage.getItem('highlights');
      existingHighlights = existingHighlights ? JSON.parse(existingHighlights) : [];
      existingHighlights.push(highlight);
      await AsyncStorage.setItem('highlights', JSON.stringify(existingHighlights));
    } catch (error) {
      throw new Error('Failed to save highlight');
    }
  },

  async loadHighlights() {
    try {
      const highlights = await AsyncStorage.getItem('highlights');
      return highlights ? JSON.parse(highlights) : [];
    } catch (error) {
      throw new Error('Failed to load highlights');
    }
  },
};

export default storage;
