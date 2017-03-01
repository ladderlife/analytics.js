/* eslint quote-props: off */
'use strict';

/*
 Add all integrations you want registered here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure the integrations added are also installed and saved in the package.json
 */
module.exports = {
  'adroll': require('@segment/analytics.js-integration-adroll'),
  'adwords': require('@segment/analytics.js-integration-adwords'),
  'bing-ads': require('@segment/analytics.js-integration-bing-ads'),
  'crazy-egg': require('@segment/analytics.js-integration-crazy-egg'),
  'facebook-pixel': require('@segment/analytics.js-integration-facebook-pixel'),
  'fullstory': require('./fullstory'),
  'google-analytics': require('@segment/analytics.js-integration-google-analytics'),
  'intercom': require('@segment/analytics.js-integration-intercom'),
  'segmentio': require('@segment/analytics.js-integration-segmentio'),
  'zopim': require('./zopim')
};
