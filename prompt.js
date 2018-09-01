const prompt = require('prompt');
const validator = require('validator');

// Start the prompt
prompt.start();

// Get two properties from the user: username and email
prompt.get(['username', 'email'], function (err, result) {
  if (err) {
    console.log(err);
  }

  if (!validator.isEmail(result.email)) {
    console.log('¡Hey! pusiste un email inválido.');
  } else {
    // Log the results.
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  }
});
