package bonjourPlus.BonjourPlus;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.SystemClock;

import static java.lang.Thread.sleep;

public class BonjourPlus extends Activity {
    /**
     * Called when the activity is first created.
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        final Handler handle = new Handler();
        Runnable delay = new Runnable() {
            public void run() {

                Intent intent = new Intent(BonjourPlus.this, QRPlus.class);
                startActivity(intent);
            }
        };
        handle.postDelayed(delay,3000);
        this.onDestroy();
    }
}
