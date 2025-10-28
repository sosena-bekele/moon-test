import { sharedUtility, calculateSum, createConfig } from '@moon-test/lib1';

console.log('App1 starting...');

// Use shared utility function
const message = sharedUtility('Hello from App1!');
console.log(message);

// Use shared calculation function
const result = calculateSum(10, 20);
console.log(`Sum: ${result}`);

// Use shared config function
const config = createConfig({ name: 'App1', version: '1.0.0' });
console.log('Config:', config);

console.log('App1 finished!');
