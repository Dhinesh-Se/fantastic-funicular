import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ExpenseList from '../components/ExpenseList';

const HomeScreen = ({ navigation, expenses }) => {
  const handleAddExpense = () => {
    navigation.navigate('AddExpense');
  };

  return (
    <View style={styles.container}>
      <ExpenseList expenses={expenses} />
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
