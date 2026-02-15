import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from '../store/slices/counterSlice';

const CounterScreen = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Counter</Text>

      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.wideButton]}
        onPress={() => dispatch(incrementByAmount(5))}
      >
        <Text style={styles.buttonText}>Add 5</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={() => dispatch(reset())}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  counter: {
    fontSize: 72,
    fontWeight: 'bold',
    marginVertical: 30,
    color: '#007AFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  wideButton: {
    width: '80%',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  fullWidth: {
    width: '80%',
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CounterScreen;
