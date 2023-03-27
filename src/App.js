import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    retrieveExpenses();
  }, []);

  const retrieveExpenses = async () => {
    try {
      const storedExpenses = await AsyncStorage.getItem('expenses');
      if (storedExpenses !== null) {
        setExpenses(JSON.parse(storedExpenses));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addExpense = async (newExpense) => {
    try {
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Expense Buddy' }}>
          {(props) => <HomeScreen {...props} expenses={expenses} />}
        </Stack.Screen>
        <Stack.Screen name="AddExpense" options={{ title: 'Add Expense' }}>
          {(props) => <AddExpenseScreen {...props} addExpense={addExpense} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
