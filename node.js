const fs = require('fs');

const path = 'C:/Users/edyma/Desktop';

fs.readdir(path, (err, files) => {
  if (err) {
    console.log(err);
  }

  console.log(files.map((file) => {
    try {
      return [
        file,
        ...fs.readdirSync(`${path}/${file}`),
      ];
    } catch (error) {
      return file;
    }
  }));
});
