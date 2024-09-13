import React from "react";
import {
  View,
  ActivityIndicator
} from "react-native";
import {
  WebView
} from "react-native-webview";

export default class AppleAuthWebView extends React.PureComponent {
  constructor(props) {
    super(props);

    const me = this;
    const onResponse = props.onResponse;
    const config = props.config; // || (props.route && props.route.params && props.route.params.config);
    const loadingIndicator = props.loadingIndicator;
    const clientId = config.clientId;
    const redirectUri = config.redirectUri;
    const scope = config.scope;
    const responseType = config.responseType;
    const state = config.state;
    const rawNonce = config.rawNonce;
    const nonce = config.nonce;

    // Input data validating
    // https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/incorporating_sign_in_with_apple_into_other_platforms#3332113
    if (typeof onResponse !== "function") {
      throw new Error(
        "AppleAuthWebView.constructor 'onResponse' is required and must be a function."
      );
    }

    if (loadingIndicator && typeof loadingIndicator !== "function") {
      throw new Error(
        "AppleAuthWebView.constructor 'loadingIndicator' required as a function, if provided."
      );
    }

    if (typeof config !== "object") {
      throw new Error(
        "AppleAuthWebView.constructor 'config' is required and must be an object."
      );
    } else {
      if (typeof clientId !== "string") {
        throw new Error(
          "AppleAuthWebView.constructor 'clientId' is required and must be a string."
        );
      }

      if (typeof redirectUri !== "string") {
        throw new Error(
          "AppleAuthWebView.constructor 'redirectUri' is required and must be a string."
        );
      }

      if (typeof scope !== "string") {
        throw new Error(
          "AppleAuthWebView.constructor 'scope' is required and must be a string."
        );
      } else if (
        scope !== "name" &&
        scope !== "email" &&
        scope !== "name email"
      ) {
        throw new Error(
          "AppleAuthWebView.constructor 'scope' is invalid. Possible values 'name', 'email', 'name email'"
        );
      }

      if (responseType && typeof responseType !== "string") {
        throw new Error(
          "AppleAuthWebView.constructor 'responseType' required as a string, if provided."
        );
      }

      if (
        responseType &&
        responseType !== "code" &&
        responseType !== "id_token" &&
        responseType !== "code id_token"
      ) {
        throw new Error(
          "AppleAuthWebView.constructor 'responseType' is invalid. Possible values 'code', 'id_token', 'code id_token'"
        );
      }

      if (state && typeof state !== "string") {
        throw new Error(
          "AppleAuthWebView.constructor 'state' required as a string, if provided."
        );
      }

      if (rawNonce && typeof rawNonce !== "string") {
        throw new Error(
          "AppleAuthWebView.constructor 'rawNonce' required as a string, if provided."
        );
      }

      if (nonce && typeof nonce !== "string") {
        throw new Error(
          "AppleAuthWebView.constructor 'nonce' required as a string, if provided."
        );
      }
    }

    me.state = {
      config: config,
      isAppleInitialWebPageLoading: false,
      isRedirectResultContentLoading: false
    };

    me.appleDirectAuthorizationUrl = "https://appleid.apple.com/auth/authorize";
  }

  onNavigationStateChange = (navigationState) => {
    const me = this;
    const url = navigationState.url;
    const loading = navigationState.loading;
    const appleAuthUrl = me.appleDirectAuthorizationUrl;

    if (
      url.substr(0, appleAuthUrl.length) === appleAuthUrl &&
      loading !== me.state.isAppleInitialWebPageLoading
    ) {
      me.setState(
        {
          isAppleInitialWebPageLoading: loading
        }
      );

      return;
    }

    // Loading redirected page
    const redirectUri = me.state.config.redirectUri;

    if (
      url.substr(0, redirectUri.length) === redirectUri &&
      !me.state.isAppleInitialWebPageLoading
    ) {
      me.setState(
        {
          isRedirectResultContentLoading: true // To hide our server response
        }
      );

      me.webview.injectJavaScript(
        `
          function checkContent() {
            if (document && document.documentElement) {
              window.ReactNativeWebView.postMessage(
                JSON.stringify(
                  {
                    href: window.location.href,
                    pageContent: document.documentElement.innerText
                  }
                )
              );
            } else {
              setTimeout(
                function () {
                  checkContent();
                },
                300
              );
            }
          }

          checkContent();
          true;
        `
      );
    }
  }

  onMessageFromRedirectedPage = (event) => {
    const me = this;
    const message = event.nativeEvent.data;

    try {
      const data = JSON.parse(message);
      const redirectUri = me.state.config.redirectUri;

      if (data.href.substr(0, redirectUri.length) === redirectUri) {
        me.props.onResponse(data.pageContent);
      }
    } catch (error) {
      console.error("AppleAuthWebView.onMessageFromRedirectedPage Cannot parse web page message.", message);
    }
  }

  /**
   * Build an Apple URL that supports `form_post`
   * Incorporating Sign in with Apple into Other Platforms
   * https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/incorporating_sign_in_with_apple_into_other_platforms.
   */
  getDirectAuthorizationSourceUri = (config) => {
    const me = this;
    const scope = config.scope;
    const state = config.state;
    const nonce = config.nonce;

    return {
      uri: me.appleDirectAuthorizationUrl +
        "?client_id=" + encodeURIComponent(config.clientId) +
        "&redirect_uri=" + encodeURIComponent(config.redirectUri) +
        "&response_type=" + encodeURIComponent(config.responseType) +
        (scope ? "&scope=" + encodeURIComponent(scope) : "") +
        "&response_mode=form_post" +
        (state ? "&state=" + encodeURIComponent(state) : "") +
        (nonce ? "&nonce=" + encodeURIComponent(nonce) : "")
    };
  }

  onComponentRefenceReady = (ref) => {
    const me = this;

    me.webview = ref;
    // me.webview.stopLoading();
    // me.webview.injectJavaScript(redirectTo);
  }

  render() {
    const me = this;
    const state = me.state;
    const isLoading = state.isAppleInitialWebPageLoading || state.isRedirectResultContentLoading;

    return (
      <View style={{
        flex: 1
      }}>
        {
          (
            <WebView
              // Android 9: App crashes if hardware acceleration is enabled
              // https://github.com/react-native-webview/react-native-webview/issues/575
              androidHardwareAccelerationDisabled={true}
              ref={me.onComponentRefenceReady}
              source={me.getDirectAuthorizationSourceUri(state.config)}
              onNavigationStateChange={me.onNavigationStateChange}
              javaScriptEnabled={true}
              onMessage={me.onMessageFromRedirectedPage}
            />
          )
        }

        {
          isLoading && (
            me.props.loadingIndicator ? (
              <View style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              }}>
                {
                  me.props.loadingIndicator()
                }
              </View>
            ) : (
              <ActivityIndicator
                size="large"
                animating
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              />
            )
          )
        }
      </View>
    );
  }
}
