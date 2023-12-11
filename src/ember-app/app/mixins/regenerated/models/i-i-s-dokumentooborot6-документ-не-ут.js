import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСохранения: DS.attr('date', { defaultValue() { return new Date(); } }),
  тЧСоздДок: DS.hasMany('i-i-s-dokumentooborot6-т-ч-созд-док', { inverse: 'документНеУт', async: false }),
  тЧУтвержДок: DS.hasMany('i-i-s-dokumentooborot6-т-ч-утверж-док', { inverse: 'документНеУт', async: false })
});

export let ValidationRules = {
  датаСохранения: {
    descriptionKey: 'models.i-i-s-dokumentooborot6-документ-не-ут.validations.датаСохранения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тЧСоздДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot6-документ-не-ут.validations.тЧСоздДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧУтвержДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot6-документ-не-ут.validations.тЧУтвержДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокументНеУтE', 'i-i-s-dokumentooborot6-документ-не-ут', {
    датаСохранения: attr('Дата сохранения', { index: 0 }),
    тЧСоздДок: hasMany('i-i-s-dokumentooborot6-т-ч-созд-док', 'Т ч созд док', {
      формаДокумента: belongsTo('i-i-s-dokumentooborot6-форма-документа', 'Форма документа', {
        наименование: attr('Наименование', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' })
    }),
    тЧУтвержДок: hasMany('i-i-s-dokumentooborot6-т-ч-утверж-док', 'Т ч утверж док', {
      утверждениеДок: belongsTo('i-i-s-dokumentooborot6-утверждение-док', 'Утверждение док', {
        дата: attr('Дата', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'дата' })
    })
  });

  modelClass.defineProjection('ДокументНеУтL', 'i-i-s-dokumentooborot6-документ-не-ут', {
    датаСохранения: attr('Дата сохранения', { index: 0 })
  });
};
