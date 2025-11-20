"use strict";
const server = require("@kottster/server");
const id = "5ca1b72c-b9ff-4908-9066-58b72b01a155";
const meta = { "name": "Admin Panel", "icon": "https://web.kottster.app/icon.png" };
const schema = {
  id,
  meta
};
const app = server.createApp({
  schema,
  secretKey: "4cf_iM4uMyYlF2Qp0q0o0Sxg6VYToPgK",
  kottsterApiToken: "L25JShziXLDujHYSDkSzvcj7BuTAPhVa",
  /*
   * The identity provider configuration.
   * See https://kottster.app/docs/app-configuration/identity-provider
   */
  identityProvider: server.createIdentityProvider("sqlite", {
    fileName: "app.db",
    passwordHashAlgorithm: "bcrypt",
    jwtSecretSalt: "wlzXPCReiFa66f3f",
    /* The root admin user credentials */
    rootUsername: "ZXY",
    rootPassword: "YINGying1109"
  })
});
async function bootstrap() {
  await app.listen();
}
bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
