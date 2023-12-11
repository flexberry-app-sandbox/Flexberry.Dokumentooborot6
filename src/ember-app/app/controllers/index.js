import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.dokumentooborot6.caption'),
          title: i18n.t('forms.application.sitemap.dokumentooborot6.title'),
          children: [{
            link: 'i-i-s-dokumentooborot6-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-сотрудники-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot6-вход-в-систему-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-вход-в-систему-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-вход-в-систему-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot6-форма-документа-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-форма-документа-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-форма-документа-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot6-ав-пользователи-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-ав-пользователи-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-ав-пользователи-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot6-документ-не-ут-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-документ-не-ут-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-документ-не-ут-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot6-утверждение-док-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-утверждение-док-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-утверждение-док-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot6-должность-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot6.i-i-s-dokumentooborot6-должность-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})