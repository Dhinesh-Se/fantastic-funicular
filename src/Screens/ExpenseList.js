import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  const renderExpenseItem = ({ item }) => {
    return <ExpenseItem amount={item.amount} category={item.category} description={item.description} />;
  };

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No expenses to display</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

export default ExpenseList;
