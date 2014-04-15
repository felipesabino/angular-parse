/*! angularparse - v0.1.0 - 2014-04-15
* https://github.com/felipesabino/angular-parse
* Copyright (c) 2014 Felipe Sabino
* Licensed MIT */
(function() {
  'use strict';
  angular.module('angularParse.persistence', []).service('parsePersistence', [
    '$q', '$timeout', function($q, $timeout) {
      var result;
      result = {
        "new": function(name) {
          var Obj;
          Obj = Parse.Object.extend(name);
          return new Obj();
        },
        persist: function(obj, data, fnc) {
          var defered;
          if (data == null) {
            data = {};
          }
          if (fnc == null) {
            fnc = 'save';
          }
          defered = $q.defer();
          obj[fnc].call(obj, data).then(function(results) {
            return $timeout(function() {
              return defered.resolve(results);
            }, 0);
          }, function(error) {
            return $timeout(function() {
              return defered.reject(error);
            }, 0);
          });
          return defered.promise;
        }
      };
      angular.forEach(['save', 'destroy'], function(fnc) {
        return result[fnc] = function(obj, data) {
          return result.persist(obj, data, fnc);
        };
      });
      return result;
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('angularParse.query', []).service('parseQuery', [
    '$q', '$timeout', function($q, $timeout) {
      var result;
      result = {
        "new": function(name) {
          var Obj;
          Obj = Parse.Object.extend(name);
          return new Parse.Query(Obj);
        },
        query: function(query, options, fnc) {
          var defered;
          if (options == null) {
            options = {};
          }
          if (fnc == null) {
            fnc = 'find';
          }
          defered = $q.defer();
          query[fnc].call(query, options).then(function(results) {
            return $timeout(function() {
              return defered.resolve(results);
            }, 0);
          }, function(error) {
            return $timeout(function() {
              return defered.reject(error);
            }, 0);
          });
          return defered.promise;
        }
      };
      angular.forEach(['find', 'count', 'get'], function(fnc) {
        return result[fnc] = function(query, options) {
          return result.query(query, options, fnc);
        };
      });
      return result;
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('angularParse', ['angularParse.persistence', 'angularParse.query']);

}).call(this);
