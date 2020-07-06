var Assert = require('assert')
var Util = require('util')
var isObj = require('is-object')
var isUndef = require('amp-is-undefined')

var packagejson = require('../')

var start8 = 'test/fixtures/0/1/2/3/4/5/6/7/8'
var fakeStart8 = 'test/fixtures/fake/0/1/2/3/4/5/6/7/8'

function checkNameAndURL(pkg) {
  Assert.ok(pkg.name === 'packagejson')
  Assert.ok(pkg.repository.url === 'https://github.com/jameswomack/packagejson.git')
}

describe('packagejson', () => {
  it('should recursively cd .. until getting a package.json', (done) => {
    packagejson(start8, (error, pkg) => {
      Assert.ok(!Util.isError(error))
      Assert.ok(isObj(pkg))
      done()
    })
  })

  it('should pass back a req\'d package.json if cwd is manual', (done) => {
    var start = process.cwd()
    packagejson(start, (error, pkg) => {
      checkNameAndURL(pkg)
      done()
    })
  })

  it('should pass back a req\'d package.json [1]', (done) => {
    packagejson(start8, (error, pkg) => {
      checkNameAndURL(pkg)
      done()
    })
  })

  it('should pass back a req\'d package.json [2]', (done) => {
    packagejson(fakeStart8, (error, pkg) => {
      Assert.equal(pkg.name, 'fake-packagejson')
      Assert.equal(pkg.repository.url, 'https://github.com/jameswomack/fake-packagejson.git')
      done()
    })
  })

  it('should pass back a req\'d package.json if cwd is manual', (done) => {
    var start = process.cwd()
    packagejson(start, (error, pkg) => {
      checkNameAndURL(pkg)
      done()
    })
  })

  it('should use CWD if the first arg is falsy', (done) => {
    packagejson(null, (error, pkg) => {
      checkNameAndURL(pkg)
      done()
    })
  })

  it('should use CWD if the first arg is the callback', (done) => {
    packagejson((error, pkg) => {
      checkNameAndURL(pkg)
      done()
    })
  })

  it('should return an error if no callback was passed [1]', () => {
    var start = '/'
    Assert.ok(Util.isError(packagejson(start)))
  })

  it('should return an error if no callback was passed [2]', () => {
    Assert.ok(Util.isError(packagejson()))
  })

  it('should pass back an error if nothing was found', (done) => {
    var start = '/'
    packagejson(start, (error, pkg) => {
      Assert.ok(Util.isError(error))
      Assert.ok(isUndef(pkg))
      done()
    })
  })
})
