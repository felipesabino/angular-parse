'use strict'

angular.module('angularParse.persistence', [])
.service 'parsePersistence', ['$q', '$timeout', ($q, $timeout) ->
  result =
    new: (name) ->
      Obj = Parse.Object.extend(name)
      return new Obj()

    persist: (obj, data = {}, fnc = 'save') ->
      defered = $q.defer()

      obj[fnc].call(obj, data)
      .then (results) ->
        $timeout () ->
          defered.resolve results
        , 0
      , (error) ->
        $timeout () ->
          defered.reject error
        , 0

      return defered.promise

  angular.forEach ['save', 'destroy'], (fnc) ->
    result[fnc] = (obj, data) ->
      return result.persist obj, data, fnc

  return result
]
