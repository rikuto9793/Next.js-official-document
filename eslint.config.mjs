// eslint.config.mjs
import next from 'eslint-config-next';

export default [
  // ← 関数呼び出しではなく「...next」と配列を展開する
  ...next,
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**']
  }
];

