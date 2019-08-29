# react-boilerplate
A boilerplate with Webpack, Babel, React, Router, Redux, Jest, Enzyme, Heroku and Firebase integration.




## How to use
### Setup your repository
#### Clone the project
```bash
git clone https://github.com/Johnzy916/react-boilerplate.git
```

#### Change the remote to your repo
```bash
git remote set-url origin http://github.com/your-name/your-repo
```

#### Push local repository to your repository on GitHub
```bash
git push --set-upstream origin master
```




### Install dependencies
```bash
npm install
```




### Setup Firebase
[Create a Firebase project for development and testing](https://console.firebase.google.com "Google Firebase Console").

Fill in the **.env.test** and **.env.development** files with information from your `firebaseConfig`.
```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```
Add those files to your **.gitignore** to avoid exposure.
```
node_modules/
public/dist/
.env.test
.env.development
```




### Setup Heroku
[Create a Heroku account](https://www.heroku.com/ "Heroku").

[Install the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli "Heroku's DevCenter").
#### Login to Heroku
```bash
heroku login
```

#### Create a named app
```bash
heroku create your-app-name
```

#### Set the Firebase env config vars in Heroku
_One at a time_
```bash
heroku config:set FIREBASE_API_KEY=your-value-here
```
_All at the same time (separated by spaces)_
```bash
heroku config:set FIREBASE_API_KEY=your-value-here FIREBASE_AUTH_DOMAIN=your-value-here 
FIREBASE_DATABASE_URL=your-value-here FIREBASE_PROJECT_ID=your-value-here 
FIREBASE_STORAGE_BUCKET=your-value-here FIREBASE_MESSAGING_SENDER_ID=your-value-here 
FIREBASE_APP_ID=your-value-here
```

#### Push your project to Heroku when ready
```bash
git push heroku master
```