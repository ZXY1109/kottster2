import { createApp, createIdentityProvider } from '@kottster/server';
import schema from '../../kottster-app.json';

/* 
 * For security, consider moving the secret data to environment variables.
 * See https://kottster.app/docs/deploying#before-you-deploy
 */
export const app = createApp({
  schema,
  secretKey: '4cf_iM4uMyYlF2Qp0q0o0Sxg6VYToPgK',
  kottsterApiToken: 'L25JShziXLDujHYSDkSzvcj7BuTAPhVa',

  /*
   * The identity provider configuration.
   * See https://kottster.app/docs/app-configuration/identity-provider
   */
  identityProvider: createIdentityProvider('sqlite', {
    fileName: 'app.db',

    passwordHashAlgorithm: 'bcrypt',
    jwtSecretSalt: 'wlzXPCReiFa66f3f',
    
    /* The root admin user credentials */
    rootUsername: 'ZXY',
    rootPassword: 'YINGying1109',
  }),
});