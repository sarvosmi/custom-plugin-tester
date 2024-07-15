package io.ionic.starter;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.techbinomial.plugins.mycustomplugin.MyCustomPluginPlugin;


public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {

        registerPlugin(MyCustomPluginPlugin.class);  
        super.onCreate(savedInstanceState);   
    }
}
