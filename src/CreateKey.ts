import { guard } from './Guard';

const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const CHARACTERS_LENGTH = CHARACTERS.length;

export function createKey(
  component: React.ComponentType<any>,
  length: number = 6
) {
  guard.notNull(component, 'component');
  guard.notNull(length, 'length');

  if (length <= 0) {
    throw new Error('`length` might be > 0');
  }

  const prefix = component.displayName ?? 'Replacable';

  const chars = [];
  for (var i = 0; i < length; i++) {
    const position = Math.floor(Math.random() * CHARACTERS_LENGTH);
    const char = CHARACTERS.charAt(position);
    chars.push(char);
  }
  return prefix + '_' + chars.join('');
}
