import { test } from 'jest-runtime/node_modules/@jest/globals';
import CreditScene from '../Scenes/CreditsScene';

jest.mock('../Scenes/CreditScene');

beforeEach(() => {
  CreditScene.mockClear();
});

test('Testing Credit Scenes', () => {
  expect(new (CreditScene)()).toBeInstanceOf(CreditScene);
});