import { sharedUtility, calculateSum, createConfig } from '@moon-test/lib1';

console.log('App3 starting...');

// Use shared utility function
const message = sharedUtility('Hello from App3!');
console.log(message);

// Use shared calculation function
const result = calculateSum(100, 200);
console.log(`Sum: ${result}`);

// Use shared config function
const config = createConfig({ name: 'App3', version: '3.0.0', enabled: true });
console.log('Config:', config);

console.log('App3 finished!');
