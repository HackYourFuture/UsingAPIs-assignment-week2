import { simple } from 'acorn-walk';
import {
  beforeAllHelper,
  hasCommentedOutCode,
  testTodosRemoved,
} from 'assignment-utils';

describe('ex2', () => {
  const state = {};
  let exInfo;

  beforeAll(async () => {
    exInfo = await beforeAllHelper(__filename, { noImport: true });
    exInfo.rootNode &&
      simple(exInfo.rootNode, {
        CallExpression({ callee }) {
          if (callee.type === 'Identifier' && callee.name === 'fetch') {
            state.fetch = true;
          }
        },
        TryStatement({ handler }) {
          if (handler?.type === 'CatchClause') {
            state.tryCatch = true;
          }
        },
        AwaitExpression() {
          state.awaitFetch = true;
        },
      });
  });

  testTodosRemoved(() => exInfo.source);

  test('should not contain commented-out code', () => {
    expect(hasCommentedOutCode(exInfo.source)).toBeFalsy();
  });

  test('should use `fetch()`', () => {
    expect(state.fetch).toBeDefined();
  });
  test('should use `await fetch()`', () => {
    expect(state.awaitFetch).toBeDefined();
  });

  test('should use try/catch', () => {
    expect(state.tryCatch).toBeDefined();
  });
});
