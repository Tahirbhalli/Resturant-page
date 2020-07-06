function stringIsEmpty(aString) {
  if (String.prototype.isPrototypeOf(aString)) {
    return stringIsEmpty(aString.toString())
  }

  if (typeof aString !== 'string') {
    return false
  } else if (!aString.trim()) {
    return true
  } else {
    return false
  }
}

module.exports = stringIsEmpty
