/**
 * Get a random floating point number between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random floating point number
 */
let randomFloat = (min, max) => Math.random() * (max - min) + min;

/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Get a random boolean value.
 *
 * @return {boolean} a random true/false
 */
let randomBool = () => Math.random() >= 0.5;

/**
 * Get a random boolean value.
 *
 * @return {string} a random hex number
 */
let randomHex = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
