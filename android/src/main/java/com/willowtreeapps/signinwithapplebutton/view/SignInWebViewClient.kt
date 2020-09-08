package com.willowtreeapps.signinwithapplebutton.view

import android.os.Handler
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import com.willowtreeapps.signinwithapplebutton.SignInWithAppleService
import java.lang.Exception

internal class SignInWebViewClient(
    private val attempt: SignInWithAppleService.AuthenticationAttempt,
    private val javascriptToInject: String
) : WebViewClient() {
    var mainHandler= Handler()
    override fun shouldInterceptRequest(
        view: WebView?,
        request: WebResourceRequest?
    ): WebResourceResponse? {

        if(request?.method == "POST" && request.url.toString().contains(attempt.redirectUri)){
            try {
                Thread.currentThread().interrupt()
            }catch (ex: Exception){}

            mainHandler.post {
                view?.stopLoading()
                view?.loadUrl("javascript:$javascriptToInject")
            }
        }
        return super.shouldInterceptRequest(view, request)
    }
}
