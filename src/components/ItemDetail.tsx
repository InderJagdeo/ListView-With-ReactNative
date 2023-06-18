import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Item} from '../redux'

interface RenderItemProps {
  item: Item;
}

const RenderItem: React.FC<RenderItemProps> = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.key}</Text>
      <Text style={styles.value}>{item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    // Add styles for the item container
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  title: {
    // Add styles for the item title
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    // Add styles for the item value
    fontSize: 14,
    marginTop: 5,
  },
});

export default RenderItem;
