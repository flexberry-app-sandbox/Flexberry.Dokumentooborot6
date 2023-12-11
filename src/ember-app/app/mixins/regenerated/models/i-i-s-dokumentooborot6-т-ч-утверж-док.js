import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  утверждениеДок: DS.belongsTo('i-i-s-dokumentooborot6-утверждение-док', { inverse: null, async: false }),
  документНеУт: DS.belongsTo('i-i-s-dokumentooborot6-документ-не-ут', { inverse: 'тЧУтвержДок', async: false })
});

export let ValidationRules = {
  утверждениеДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot6-т-ч-утверж-док.validations.утверждениеДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  документНеУт: {
    descriptionKey: 'models.i-i-s-dokumentooborot6-т-ч-утверж-док.validations.документНеУт.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧУтвержДокE', 'i-i-s-dokumentooborot6-т-ч-утверж-док', {
    утверждениеДок: belongsTo('i-i-s-dokumentooborot6-утверждение-док', 'Утверждение док', {
      дата: attr('Дата', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'дата' })
  });
};
