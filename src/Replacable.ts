import { createReplacement } from './CreateReplacement';
import { ReplacesProvider } from './ReplacesContext';

export const Replacable = Object.assign(createReplacement, {
  Provider: ReplacesProvider,
});

export { ReplacableComponent } from './ReplacableComponentType';
export default Replacable;
