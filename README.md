# IPA-Keyboard

### IPA Keyboard prototype built with vue.js, gulp and nw.js. International Phonetic Alphabet Symbols Keyboard -  Responsive Web Application and standalone Desktop Application for Mac OSX, Windows and Linux.

*This is still a work in progress. No binaries released yet.*<br />Copyright © 2016 Jorge Moreno ( [@alterebro](https://twitter.com/alterebro) )

![IPA Keyboard](src/frontend/images/ipa-keyboard-screenshot.png)

### Project Build

**Requirements** : **[Node.js](https://nodejs.org/en/)** and **[gulp](http://gulpjs.com/)**. Download and Install Node.js if you don't have it installed already on your computer from the [node website](https://nodejs.org/en/), install **gulp** globally. In case you have a previous gulp version run `npm rm --global gulp` in order to avoid collision with the *gulp-cli*.

```bash
# Install gulp globally
$ npm install --global gulp-cli  # ( with sudo on OSX )

# Clone the ipa keyboard repository
$ git clone https://github.com/alterebro/IPA-Keyboard

# Install development dependencies
$ npm install

# Build the www distributable folder
$ gulp build

# Build the nwjs app
$ gulp nw
```



