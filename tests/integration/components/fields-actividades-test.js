import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fields-actividades', 'Integration | Component | fields actividades', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fields-actividades}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fields-actividades}}
      template block text
    {{/fields-actividades}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
