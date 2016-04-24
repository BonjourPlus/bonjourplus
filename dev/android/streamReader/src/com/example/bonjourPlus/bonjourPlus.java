package com.example.bonjourPlus;

import android.app.Activity;
import android.os.Bundle;
import android.net.Uri;
import android.widget.MediaController;
import android.widget.VideoView;
import com.example.bonjourPlus2.R;

public class bonjourPlus extends Activity {
    /**
     * Called when the activity is first created.
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        VideoView vidView = (VideoView)findViewById(R.id.myVideo);
        String vidAddress = "https://archive.org/download/ksnn_compilation_master_the_internet/ksnn_compilation_master_the_internet_512kb.mp4";
        //String vidAddress = "http://172.30.136.82:8081";
        //String vidAddress = "http://192.168.0.101:8080/flash.html";
        //String vidAddress = "http://172.30.136.97:8081/";
        Uri vidUri = Uri.parse(vidAddress);
        vidView.setVideoURI(vidUri);

        MediaController vidControl = new MediaController(this);
        vidControl.setAnchorView(vidView);

        vidView.setMediaController(vidControl);
        vidView.start();
    }
}
