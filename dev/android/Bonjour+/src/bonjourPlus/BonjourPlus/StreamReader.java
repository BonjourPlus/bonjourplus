package bonjourPlus.BonjourPlus;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.MediaController;
import android.widget.VideoView;

/**
 * Created by amaddah on 24/04/16.
 */
public class StreamReader extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.habit);
        Button button = (Button) findViewById(R.id.button); // Bouton pour éventuellement lire la vidéo intentionnellement

        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                setContentView(R.layout.streamreader);
                VideoView vidView = (VideoView)findViewById(R.id.myVideo);
                String vidAddress = "http://push.bonjourplus.com"; // Adresse de lecture du flux streaming (coté Habitant)
                Uri vidUri = Uri.parse(vidAddress);
                vidView.setVideoURI(vidUri);

                MediaController vidControl = new MediaController(StreamReader.this);
                vidControl.setAnchorView(vidView);
                vidView.setMediaController(vidControl);

                vidView.start();
            }
        });
    }
}
