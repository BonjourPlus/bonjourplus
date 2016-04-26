package bonjourPlus.BonjourPlus;

import android.app.Activity;
import android.content.Intent;
import android.net.http.SslError;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.webkit.SslErrorHandler;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;

/**
 * Created by amaddah on 24/04/16.
 */
public class WebPlus extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.webplus);

        Button button = (Button) findViewById(R.id.button);

        WebView myWebView = (WebView) findViewById(R.id.webView);
        WebSettings settings = myWebView.getSettings();

        myWebView.setWebViewClient(new SSLPlus()); // Webview supportant le HTTPS
        settings.setJavaScriptEnabled(true); // Activation du Javascript
        myWebView.loadUrl(QRPlus.url); // Affichage de l'url lu sur le QR Code

        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v)
            {
                myWebView.loadUrl(QRPlus.url); // Actualisation
            }
        });
    }

    private class SSLPlus extends WebViewClient {

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }

        @Override
        public void onReceivedSslError(WebView view, SslErrorHandler handler,
                                       SslError error) {
            handler.proceed();
        }

    }

}
