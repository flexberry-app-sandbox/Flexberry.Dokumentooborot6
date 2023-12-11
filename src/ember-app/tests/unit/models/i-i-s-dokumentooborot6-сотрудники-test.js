import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot6-сотрудники', 'Unit | Model | i-i-s-dokumentooborot6-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-dokumentooborot6-ав-пользователи',
    'model:i-i-s-dokumentooborot6-вход-в-систему',
    'model:i-i-s-dokumentooborot6-документ-не-ут',
    'model:i-i-s-dokumentooborot6-должность',
    'model:i-i-s-dokumentooborot6-сотрудники',
    'model:i-i-s-dokumentooborot6-т-ч-пользователь',
    'model:i-i-s-dokumentooborot6-т-ч-права',
    'model:i-i-s-dokumentooborot6-т-ч-созд-док',
    'model:i-i-s-dokumentooborot6-т-ч-утверж-док',
    'model:i-i-s-dokumentooborot6-утверждение-док',
    'model:i-i-s-dokumentooborot6-форма-документа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
