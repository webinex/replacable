import React, { FC } from 'react';
import { createKey } from '../src/CreateKey';

describe('CreateKey', () => {
  let subject: FC = null!;

  beforeEach(() => {
    subject = () => <></>;
    subject.displayName = 'COMPONENT';
  });

  test('Should throw when component null.', () => {
    expect(() => createKey(null!)).toThrowError('`component`');
  })

  test('Should throw when length null.', () => {
    expect(() => createKey(subject, null!)).toThrowError('`length`');
  })

  test('Should throw when length < 0', () => {
    expect(() => createKey(subject, -1)).toThrowError('`length`');
  })

  test('Should throw when length = 0', () => {
    expect(() => createKey(subject, 0)).toThrowError('`length`');
  })

  test('Should generate unique', () => {
    const results = new Set<string>();
    for (let i = 0; i < 20; i++) {
      const result = createKey(subject);
      expect(results.has(result)).toBe(false);
      results.add(result);
    }
  });

  test('Should prefix with Replacable when display name unset', () => {
    subject.displayName = undefined;

    const result = createKey(subject);
    expect(result.startsWith('Replacable_')).toBe(true);
  });

  test('Should prefix with displayName when displayName set', () => {
    const result = createKey(subject);
    expect(result.startsWith(subject.displayName + '_')).toBe(true);
  });

  test('Should generate specified length suffix', () => {
    const result = createKey(subject, 10).substr(subject.displayName!.length + 1);
    expect(result.length).toBe(10);
  });
});
