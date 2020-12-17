import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

export function getAppleAuthConfig() {

  // Generate secure, random values for state and nonce
  const nonce = uuid();
  const state = uuid();

  // https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/incorporating_sign_in_with_apple_into_other_platforms
  const appleAuthConfig = {
    // The Service ID you registered with Apple
    clientId: "com.example.client-web",

    // Return URL added to your Apple dev console. It must still match the URL you provided to Apple.
    redirectUri: "https://example.com/auth/callback",

    // The type of response requested - code, id_token, or both.
    responseType: "code id_token",

    // [OPTIONAL]
    // The amount of user information requested from Apple - code id_token, code, id_token
    scope: "name email",

    // [OPTIONAL]
    // Random nonce value that will be SHA256 hashed before sending to Apple.
    nonce: nonce,

    // [OPTIONAL]
    // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
    state: state
  };

  return appleAuthConfig;
}

export function parseAppleAuthResponse(responseContent) {

  // Handle your server response (after login - apple redirects to your server url)
  console.log("parseAppleAuthResponse responseContent", responseContent);

  try {

    // We expecting json response from a server
    const serverResponse = JSON.parse(responseContent);

    // Next code depents what your server returns on error.
    // If it is json error pbject then check it.
    // On success my server return a json with {jwt: "some value"}
    const jwt = serverResponse.jwt;

    if (jwt) {
      console.log("parseAppleAuthResponse responseContent jwt", jwt);
    } else {
      console.error("parseAppleAuthResponse responseContent does not contain expected jwt");
    }
  } catch (error) {
    console.error("parseAppleAuthResponse responseContent is not a valid json", error);
  }
}
