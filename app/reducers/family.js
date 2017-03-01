import oauth2 from 'simple-oauth2';

const credentials = {
  client: {
    id: 'OliveTest',
    secret: 'D9823KF73BC9REM38A12O03E5'
  },
  auth: {
    tokenHost: 'https://mp.olivebaptist.org/ministryplatformSandbox'
  }
};

const auth = oauth2.create(credentials);
const tokenConfig = {};

export default function getToken() {
  auth.clientCredentials
    .getToken(tokenConfig)
    .then((result) => {
      const token = oauth2.accessToken.create(result);
      return token;
    })
    .catch((error) => {
      console.log('Access Token error', error.message);
    });
}
