import { sharedUtility, calculateSum, createConfig, SharedConfig } from '@moon-test/test-lib';

console.log('App4 starting...');

// Use shared utility function
const message = sharedUtility('Hello from App4!');
console.log(message);

// Use shared calculation function
const result = calculateSum(1, 2);
console.log(`Sum: ${result}`);

// Use shared config function
const config: SharedConfig = createConfig({ 
  name: 'App4', 
  version: '4.0.0',
  enabled: false 
});
console.log('Config:', config);

console.log('App4 finished!');
