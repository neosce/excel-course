// Pure functions

/**
 * Capitalize for string
 * @return {string}
 * @param {string} string
 */
export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}
