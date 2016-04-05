# IPA Keyboard: [git.io/ipa](http://git.io/ipa)

**International Phonetic Alphabet Symbols** Web and Desktop Application built using Vue.js, Gulp and Node-Webkit (nw.js). Responsive Cross-Browser Web Application and standalone Desktop Cross-Plattform Application for Mac OSX, Windows and Linux.

- **Web App** : [http://alterebro.github.io/IPA-Keyboard/](http://alterebro.github.io/IPA-Keyboard/)

*This is still a work in progress. No binaries released yet. Packages can be built using instructions below.*

[![IPA Keyboard](src/frontend/images/ipa-keyboard-screenshot.png)](http://alterebro.github.io/IPA-Keyboard/)

## Build

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

## Publish

Public website is generated on the `www/` folder and located on the gh-pages branch ( [http://alterebro.github.io/IPA-Keyboard/](http://alterebro.github.io/IPA-Keyboard/) ).
Build it with gulp and push only that folder to gh-pages.

```bash
# ... do your changes
# Build the www distributable folder
$ gulp build

# ... pushing master
$ git status
$ git add .
$ git commit -m 'commit message'
$ git push origin master

# push www/ to gh-pages
$ git subtree push --prefix www/ origin gh-pages
```

## Credits

**IPA Keyboard** by Jorge Moreno aka moro ([moro.es](http://moro.es), [@alterebro](https://twitter.com/alterebro))

- Built using :
    - **[NW.js (node-webkit)](http://nwjs.io/)** lets you call all Node.js modules directly from DOM and enables writing native applications with Web technologies.
    - **[Gulp](http://gulpjs.com/)** Task runner, streaming build system.
    - **[Vue.js](http://gulpjs.com/)** Reactive Components for Modern Web Interfaces.

---
Copyright © 2016 Jorge Moreno
