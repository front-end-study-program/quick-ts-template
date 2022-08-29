import { test, expect } from 'vitest';
import { add } from '@/utils/add';
test('add.ts', () => {
    expect(add(1, 2)).toMatchSnapshot(3);
});
//# sourceMappingURL=index.test.js.map