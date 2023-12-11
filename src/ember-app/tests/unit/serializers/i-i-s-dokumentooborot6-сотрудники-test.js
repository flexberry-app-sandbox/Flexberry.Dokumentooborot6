import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot6-сотрудники', 'Unit | Serializer | i-i-s-dokumentooborot6-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dokumentooborot6-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dokumentooborot6-отделы',
    'transform:i-i-s-dokumentooborot6-пол',
    'transform:i-i-s-dokumentooborot6-права-пол',
    'transform:i-i-s-dokumentooborot6-утверждение',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
