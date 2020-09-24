// Stores the active TCP connection object.
let connection;
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
    } else if (key === '\u0077') {
      conn.write('Move: up');
    } else if (key === '\u0061') {
      conn.write('Move: left');
    } else if (key === '\u0073') {
      conn.write('Move: down');
    } else if (key === '\u0064') {
      conn.write('Move: right');
    } else if (key === '\u0068') {
      conn.write('Say: Hello');
    }
  });
  return stdin;
}
module.exports = {setupInput};