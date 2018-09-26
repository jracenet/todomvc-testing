import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | update item', function(hooks) {
  setupApplicationTest(hooks);

  test('We can update an item by double-clicking on it', async function(assert) {});
  test('An item can be marked as done and will appear in "completed section"', async function(assert) {});
  test('An item can be undone and will appear in "active" section', async function(assert) {});
  test('An item can be deleted', async function(assert) {});
});
