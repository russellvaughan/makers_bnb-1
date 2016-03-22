'use strict';

angular.module('makersbnb.version', [
  'makersbnb.version.interpolate-filter',
  'makersbnb.version.version-directive'
])

.value('version', '0.1');
