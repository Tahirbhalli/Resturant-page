'use strict';

var FS = require('fs')
var Path = require('path')
var stringIsEmpty = require('string-is-empty')
var isFunc = require('is-function')

var CWD = process.cwd()
var SEP = Path.sep
var NAME = 'package.json'

function split(path) {
  return path.split(SEP)
}

function joined(cmp) {
  return cmp.join(SEP)
}

function popped(cmp) {
  return cmp.slice(0, cmp.length - 1)
}

function dropped(path) {
  return joined(popped(split(path)))
}

function existsAtPath(path, done) {
  if (stringIsEmpty(path)) {
    return done(new Error('package not found'))
  }

  var resolvedPath = Path.resolve(path)

  var resolvedPathWithPkg = Path.join(resolvedPath, NAME)

  return FS.exists(resolvedPathWithPkg, function (exists) {
    if (!exists) {
      return existsAtPath(dropped(resolvedPath), done)
    } else {
      return done(null, require(resolvedPathWithPkg))
    }
  })
}

function badSig() {
  return new Error('packagejson\'s signature is ([path], callback)')
}

module.exports = function (path, done) {
  if (!path && !isFunc(done)) {
    return badSig()
  } else if (!path && isFunc(done)) {
    return existsAtPath(CWD, done)
  } else if (isFunc(path)) {
    return existsAtPath(CWD, path)
  } else if (!isFunc(done)) {
    return badSig()
  } else {
    return existsAtPath(path, done)
  }
}
