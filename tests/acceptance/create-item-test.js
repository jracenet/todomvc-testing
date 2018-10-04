import {module, test} from 'qunit';
import {visit, fillIn, triggerKeyEvent, pauseTest} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | create item', function (hooks) {
    setupApplicationTest(hooks);

    hooks.beforeEach(function(assert) {
        window.localStorage.clear();
    });

    test('If no items are created, no list are displayed', async function (assert) {
        await visit('/');

        assert.equal($('section#main').length, 0);
    });

    test('When the first item is created, the list appears', async function (assert) {
        let itemTitle = 'first element'

        await visit('/');

        assert.equal($('ul#todo-list li').length, 0);

        await fillIn('input#new-todo', itemTitle);
        await triggerKeyEvent('input#new-todo', "keydown", 13);
        await triggerKeyEvent('input#new-todo', "keyup", 13);

        assert.equal($('ul#todo-list li').length, 1);
        assert.equal($($('ul#todo-list li').get(0)).find('label').text(), itemTitle);
    });

    test('When a new item is created, it appears at the bottom of the list', async function (assert) {
        let item1 = {id: 1, title: "first element", completed: false};
        let item2 = {id: 2, title: "second element", completed: false};
        let item3Title = "third element";

        let initialTodos = [];
        initialTodos.pushObject(item1);
        initialTodos.pushObject(item2);
        window.localStorage.setItem('todos', JSON.stringify(initialTodos));

        await visit('/');

        assert.equal($('ul#todo-list li').length, 2);

        await fillIn('input#new-todo', item3Title);
        await triggerKeyEvent('input#new-todo', "keydown", 13);
        await triggerKeyEvent('input#new-todo', "keyup", 13);

        assert.equal($('ul#todo-list li').length, 3);
        assert.equal($($('ul#todo-list li').get(2)).find('label').text(), item3Title);
    });
});
