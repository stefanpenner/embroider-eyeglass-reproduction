import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | app', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    assert.equal(getComputedStyle(document.getElementById('from-app-styles')).color, 'rgb(0, 0, 0)');
    assert.equal(getComputedStyle(document.getElementById('from-addon-styles')).color, 'rgb(0, 0, 255)');
  });
});
