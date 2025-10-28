import { sharedUtility, calculateSum, createConfig, SharedConfig } from '@moon-test/lib1';

console.log('App2 starting...');

// Use shared utility function
const message = sharedUtility('Hello from App2!');
console.log(message);

// Use shared calculation function
const result = calculateSum(5, 15);
console.log(`Sum: ${result}`);

// Use shared config function with different values
const config: SharedConfig = createConfig({ 
  name: 'App2', 
  version: '2.0.0',
  enabled: true,
  new_field: 'test'
});
console.log('Config:', config);

console.log('App2 finished!');
