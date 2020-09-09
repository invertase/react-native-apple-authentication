package com.RNAppleAuthentication.webview

import android.os.Handler
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import java.lang.Exception
import com.RNAppleAuthentication.SignInWithAppleService

internal class SignInWebViewClient(
  private val attempt: SignInWithAppleService.AuthenticationAttempt,
  private val javascriptToInject: String
) : WebViewClient() {
  var mainHandler = Handler()

  /**
   * Catch the webview redirect using the state value so we can intercept the POST data.
   */
  override fun shouldInterceptRequest(
    view: WebView?,
    request: WebResourceRequest?
  ): WebResourceResponse? {
    if (request?.method == "POST" && request.url.toString().contains(attempt.redirectUri)) {
      try {
        Thread.currentThread().interrupt()
      } catch (ex: Exception) {}

      mainHandler.post {
        view?.stopLoading()
        view?.loadUrl("javascript:$javascriptToInject")
      }
    }
    return super.shouldInterceptRequest(view, request)
  }
}
