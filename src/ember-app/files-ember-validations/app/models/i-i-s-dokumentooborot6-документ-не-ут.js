import {
  defineNamespace,
  defineProjections,
  Model as ДокументНеУтMixin
} from '../mixins/regenerated/models/i-i-s-dokumentooborot6-документ-не-ут';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокументНеУтMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
