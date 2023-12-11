import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISDokumentooborot6АвПользователиLForm from './forms/i-i-s-dokumentooborot6-ав-пользователи-l';
import IISDokumentooborot6ВходВСистемуLForm from './forms/i-i-s-dokumentooborot6-вход-в-систему-l';
import IISDokumentooborot6ДокументНеУтLForm from './forms/i-i-s-dokumentooborot6-документ-не-ут-l';
import IISDokumentooborot6ДолжностьLForm from './forms/i-i-s-dokumentooborot6-должность-l';
import IISDokumentooborot6СотрудникиLForm from './forms/i-i-s-dokumentooborot6-сотрудники-l';
import IISDokumentooborot6УтверждениеДокLForm from './forms/i-i-s-dokumentooborot6-утверждение-док-l';
import IISDokumentooborot6ФормаДокументаLForm from './forms/i-i-s-dokumentooborot6-форма-документа-l';
import IISDokumentooborot6АвПользователиEForm from './forms/i-i-s-dokumentooborot6-ав-пользователи-e';
import IISDokumentooborot6ВходВСистемуEForm from './forms/i-i-s-dokumentooborot6-вход-в-систему-e';
import IISDokumentooborot6ДокументНеУтEForm from './forms/i-i-s-dokumentooborot6-документ-не-ут-e';
import IISDokumentooborot6ДолжностьEForm from './forms/i-i-s-dokumentooborot6-должность-e';
import IISDokumentooborot6СотрудникиEForm from './forms/i-i-s-dokumentooborot6-сотрудники-e';
import IISDokumentooborot6УтверждениеДокEForm from './forms/i-i-s-dokumentooborot6-утверждение-док-e';
import IISDokumentooborot6ФормаДокументаEForm from './forms/i-i-s-dokumentooborot6-форма-документа-e';
import IISDokumentooborot6АвПользователиModel from './models/i-i-s-dokumentooborot6-ав-пользователи';
import IISDokumentooborot6ВходВСистемуModel from './models/i-i-s-dokumentooborot6-вход-в-систему';
import IISDokumentooborot6ДокументНеУтModel from './models/i-i-s-dokumentooborot6-документ-не-ут';
import IISDokumentooborot6ДолжностьModel from './models/i-i-s-dokumentooborot6-должность';
import IISDokumentooborot6СотрудникиModel from './models/i-i-s-dokumentooborot6-сотрудники';
import IISDokumentooborot6ТЧПользовательModel from './models/i-i-s-dokumentooborot6-т-ч-пользователь';
import IISDokumentooborot6ТЧПраваModel from './models/i-i-s-dokumentooborot6-т-ч-права';
import IISDokumentooborot6ТЧСоздДокModel from './models/i-i-s-dokumentooborot6-т-ч-созд-док';
import IISDokumentooborot6ТЧУтвержДокModel from './models/i-i-s-dokumentooborot6-т-ч-утверж-док';
import IISDokumentooborot6УтверждениеДокModel from './models/i-i-s-dokumentooborot6-утверждение-док';
import IISDokumentooborot6ФормаДокументаModel from './models/i-i-s-dokumentooborot6-форма-документа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dokumentooborot6-ав-пользователи': IISDokumentooborot6АвПользователиModel,
    'i-i-s-dokumentooborot6-вход-в-систему': IISDokumentooborot6ВходВСистемуModel,
    'i-i-s-dokumentooborot6-документ-не-ут': IISDokumentooborot6ДокументНеУтModel,
    'i-i-s-dokumentooborot6-должность': IISDokumentooborot6ДолжностьModel,
    'i-i-s-dokumentooborot6-сотрудники': IISDokumentooborot6СотрудникиModel,
    'i-i-s-dokumentooborot6-т-ч-пользователь': IISDokumentooborot6ТЧПользовательModel,
    'i-i-s-dokumentooborot6-т-ч-права': IISDokumentooborot6ТЧПраваModel,
    'i-i-s-dokumentooborot6-т-ч-созд-док': IISDokumentooborot6ТЧСоздДокModel,
    'i-i-s-dokumentooborot6-т-ч-утверж-док': IISDokumentooborot6ТЧУтвержДокModel,
    'i-i-s-dokumentooborot6-утверждение-док': IISDokumentooborot6УтверждениеДокModel,
    'i-i-s-dokumentooborot6-форма-документа': IISDokumentooborot6ФормаДокументаModel
  },

  'application-name': 'Dokumentooborot6',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Dokumentooborot6',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dokumentooborot6',
          title: 'Dokumentooborot6'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        dokumentooborot6: {
          caption: 'Dokumentooborot6',
          title: 'Dokumentooborot6',
          'i-i-s-dokumentooborot6-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-dokumentooborot6-вход-в-систему-l': {
            caption: 'Вход в систему',
            title: ''
          },
          'i-i-s-dokumentooborot6-форма-документа-l': {
            caption: 'Форма документа',
            title: ''
          },
          'i-i-s-dokumentooborot6-ав-пользователи-l': {
            caption: 'Ав пользователи',
            title: ''
          },
          'i-i-s-dokumentooborot6-документ-не-ут-l': {
            caption: 'Документ не ут',
            title: ''
          },
          'i-i-s-dokumentooborot6-утверждение-док-l': {
            caption: 'Утверждение док',
            title: ''
          },
          'i-i-s-dokumentooborot6-должность-l': {
            caption: 'Должность',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-dokumentooborot6-ав-пользователи-l': IISDokumentooborot6АвПользователиLForm,
    'i-i-s-dokumentooborot6-вход-в-систему-l': IISDokumentooborot6ВходВСистемуLForm,
    'i-i-s-dokumentooborot6-документ-не-ут-l': IISDokumentooborot6ДокументНеУтLForm,
    'i-i-s-dokumentooborot6-должность-l': IISDokumentooborot6ДолжностьLForm,
    'i-i-s-dokumentooborot6-сотрудники-l': IISDokumentooborot6СотрудникиLForm,
    'i-i-s-dokumentooborot6-утверждение-док-l': IISDokumentooborot6УтверждениеДокLForm,
    'i-i-s-dokumentooborot6-форма-документа-l': IISDokumentooborot6ФормаДокументаLForm,
    'i-i-s-dokumentooborot6-ав-пользователи-e': IISDokumentooborot6АвПользователиEForm,
    'i-i-s-dokumentooborot6-вход-в-систему-e': IISDokumentooborot6ВходВСистемуEForm,
    'i-i-s-dokumentooborot6-документ-не-ут-e': IISDokumentooborot6ДокументНеУтEForm,
    'i-i-s-dokumentooborot6-должность-e': IISDokumentooborot6ДолжностьEForm,
    'i-i-s-dokumentooborot6-сотрудники-e': IISDokumentooborot6СотрудникиEForm,
    'i-i-s-dokumentooborot6-утверждение-док-e': IISDokumentooborot6УтверждениеДокEForm,
    'i-i-s-dokumentooborot6-форма-документа-e': IISDokumentooborot6ФормаДокументаEForm
  },

});

export default translations;
