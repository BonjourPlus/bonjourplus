package bonjourPlus.BonjourPlus;

import android.app.Activity;
import android.net.http.SslError;
import android.os.Bundle;
import android.util.Log;
import android.webkit.SslErrorHandler;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Created by amaddah on 24/04/16.
 */
public class WebPlus extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.webplus);
        WebView myWebView = (WebView) findViewById(R.id.webView);
        myWebView.setWebViewClient(new SSLPlus());
        myWebView.loadUrl(QRPlus.url);
        //Log.e("",QRPlus.url);
        this.onDestroy();
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
            //super.onReceivedSslError(view, handler, error);
            handler.proceed();
        }

    }

}
