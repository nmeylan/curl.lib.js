const HASH_LENGTH = 243;
const INT_LENGTH = 27;
const NONCE_LENGTH = HASH_LENGTH / 3;
const TIMESTAMP_START = NONCE_LENGTH;
const TIMESTAMP_LOWER_BOUND_START= TIMESTAMP_START + INT_LENGTH;
const TIMESTAMP_UPPER_BOUND_START = TIMESTAMP_LOWER_BOUND_START + INT_LENGTH;
const NONCE_START = HASH_LENGTH - NONCE_LENGTH; 

module.exports = {
  HASH_LENGTH,
  STATE_LENGTH: HASH_LENGTH * 3,
  TIMESTAMP_START,
  TIMESTAMP_LOWER_BOUND_START,
  TIMESTAMP_UPPER_BOUND_START,
  NONCE_START,
  NONCE_LENGTH,
  INT_LENGTH,
  NUMBER_OF_ROUNDS: 81,
  TRANSACTION_LENGTH: HASH_LENGTH * 33
};
