'use strict'

angular.module('angularParse.query', [])
.service 'parseQuery', ['$q', '$timeout', ($q, $timeout) ->
  result =
    new: (name) ->
      Obj = Parse.Object.extend(name)
      return new Parse.Query(Obj);

    query: (query, options = {}, fnc = 'find') ->

      defered = $q.defer()

      query[fnc].call(query, options)
      .then (results) ->
        $timeout () ->
          defered.resolve results
        , 0
      , (error) ->
        $timeout () ->
          defered.reject error
        , 0
      return defered.promise

  angular.forEach ['find', 'count', 'get'], (fnc) ->
    result[fnc] = (query, options) ->
      return result.query query, options, fnc

  return result
]
