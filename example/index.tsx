import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Replacable, ReplacesProvider } from '../.';

const Title = Replacable(() => (
  <h2>Title</h2>
))

const Body = Replacable(({text}: { text?: string }) => (
  <div>{text ?? 'Body'}</div>
))

const Block = Replacable(({ bodyText }: { bodyText?: string }) => (
  <div>
    <Title />
    <Body text={bodyText} />
  </div>
))

const ReplacedTitle = () => (<h2>Replaced</h2>);

const ReplacedBody = ({text}: { text?: string }) => (
  <div>Replaced: {text ?? 'Body'}</div>
)

const App = () => {
  return (
    <div>
      <h1>Without Replacement</h1>
      <Block />

      <h1>Replace Title</h1>
      <ReplacesProvider value={{ [Title.key]: ReplacedTitle }}>
        <Block />
      </ReplacesProvider>

      <h1>Hide Title</h1>
      <ReplacesProvider value={{ [Title.key]: null }}>
        <Block />
      </ReplacesProvider>

      <h1>With Props forwarding</h1>
      <ReplacesProvider value={{ [Body.key]: ReplacedBody }}>
        <Block bodyText="Uwwwa!!!" />
      </ReplacesProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
