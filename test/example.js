const test = require('tape');

// Comment for test
test('-------------------------------', (t) => {
  t.comment('Running *Example* test.');
  t.comment('-------------------------------');
  t.pass('Tape is installed');
  t.end();
});
