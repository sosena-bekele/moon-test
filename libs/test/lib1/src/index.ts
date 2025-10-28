/**
 * Shared utility function used by all apps
 */
export function sharedUtility(message: string): string {
  return `[SHARED] ${message}`;
}

/**
 * Another shared function
 */
export function calculateSum(a: number, b: number): number {
  return a + b;
}

/**
 * Type definitions
 */
export interface SharedConfig {
  name: string;
  version: string;
  enabled: boolean;
  new_field: string;
}

export function createConfig(config: SharedConfig): SharedConfig {
  return {
    name: config.name || 'default',
    version: config.version || '1.0.0',
    enabled: config.enabled ?? true,
    new_field: config.new_field,
  };
}
