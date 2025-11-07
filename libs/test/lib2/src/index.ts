import { sharedUtility, calculateSum, createConfig, SharedConfig } from '@moon-test/lib1';

export interface Config2 {
  name: string;
  version: string;
  enabled: boolean;
}

export function createConfig2(config: Config2) {
  // Use shared utility from lib1
  const message = sharedUtility('Creating config from lib2');
  console.log(message);
  
  // Use shared calculation function
  const sum = calculateSum(10, 20);
  console.log(`Sum calculated: ${sum}`);
  
  // Use shared config function
  const sharedConfig: SharedConfig = createConfig({
    name: config.name,
    version: config.version,
    enabled: config.enabled,
  });
  
  console.log('Config:', config);
  console.log('Shared config:', sharedConfig);
  console.log('createConfig2 finished!');
}