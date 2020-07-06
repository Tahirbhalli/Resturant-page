/*jshint -W053 */

var Assert = require('assert')

var stringIsEmpty = require('../')

describe('stringIsEmpty', () => {
  it('should return true for empty', () => {
    Assert.ok(stringIsEmpty(''))
    Assert.ok(stringIsEmpty('    '))
    Assert.ok(stringIsEmpty(new String('')))
    Assert.ok(stringIsEmpty(new String(' ')))
  })
  it('should return false for !empty', () => {
    Assert.ok(!stringIsEmpty('notEmpty'))
    Assert.ok(!stringIsEmpty(' notEmpty '))
    Assert.ok(!stringIsEmpty(new String('noEmpty')))
    Assert.ok(!stringIsEmpty(new String(' notEmpty ')))
  })
  it('should return false for non-string', () => {
    Assert.ok(!stringIsEmpty({}))
    Assert.ok(!stringIsEmpty([]))
    Assert.ok(!stringIsEmpty(new Date()))
    Assert.ok(!stringIsEmpty(new RegExp()))
  })
})
