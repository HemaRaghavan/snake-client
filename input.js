// Stores the active TCP connection object.
let connection;
const { IP, PORT, movements } = require('./constants');
const keys = Object.keys(movements);
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    } 
    for (let newKey of keys) {
      if (key === newKey) {
        conn.write(movements[key]);
      }
    }
  });
  return stdin;
}
module.exports = {setupInput};