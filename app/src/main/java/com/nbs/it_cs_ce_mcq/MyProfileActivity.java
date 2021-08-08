package com.nbs.it_cs_ce_mcq;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Dialog;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.widget.Toolbar;

import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.initialization.InitializationStatus;
import com.google.android.gms.ads.initialization.OnInitializationCompleteListener;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;

import java.util.Objects;

public class MyProfileActivity extends AppCompatActivity {

    private EditText name, email;
    private LinearLayout editB;
    private Button cancelB, saveB;
    private TextView profileText, dialogText;
    private LinearLayout buttonLayout;
    private String nameStr;
    private Dialog progressDialog;
 //   private AdView mAdView;
   // private static final String TAG = "MyProfileActivity";
    //private static final String AD_UNIT_ID = "ca-app-pub-3940256099942544/1033173712"; //interstrialads
    //private InterstitialAd interstitialAd;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_profile);
/**
        MobileAds.initialize(this, new OnInitializationCompleteListener() {
            @Override
            public void onInitializationComplete(InitializationStatus initializationStatus) {}
        });

        loadAd();
**/

        Toolbar toolbar=findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        Objects.requireNonNull(getSupportActionBar()).setDisplayShowTitleEnabled(true);
        getSupportActionBar().setTitle("My Profile");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        name=findViewById(R.id.mp_name);
        email=findViewById(R.id.mp_email);
        profileText=findViewById(R.id.profile_Text);
        saveB=findViewById(R.id.saveB);
        editB=findViewById(R.id.editB);
        cancelB=findViewById(R.id.cancelB);
        buttonLayout=findViewById(R.id.button_layout);

        /** ad unit
        mAdView = findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder().build();
        mAdView.loadAd(adRequest);
         **/

        progressDialog = new Dialog(MyProfileActivity.this);
        progressDialog.setContentView(R.layout.dialog_layout);
        progressDialog.setCancelable(false);
        progressDialog.getWindow().setLayout(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        dialogText = progressDialog.findViewById(R.id.dialog_text);
        dialogText.setText("Updating Data...");

        disableEditing();

        editB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                enableEditing();
            }
        });

        cancelB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                disableEditing();
            }
        });

        saveB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (validate())
                {
                    saveData();
                }
            }
        });

    }

    private void disableEditing()
    {

        name.setEnabled(false);
        email.setEnabled(false);
        buttonLayout.setVisibility(View.GONE);

        name.setText(DbQuery.myProfile.getName());
        email.setText(DbQuery.myProfile.getEmail());

        String profileName=DbQuery.myProfile.getName();
        profileText.setText(profileName.toUpperCase().substring(0,1));

    }

    private void enableEditing()
    {

        name.setEnabled(true);
        buttonLayout.setVisibility(View.VISIBLE);

    }

    private boolean validate()
    {

        nameStr=name.getText().toString();

        if (nameStr.isEmpty())
        {
            name.setError("NAME CANNOT BE EMPTY !");
            return false;
        }

        return true;

    }

    private void saveData()
    {

        progressDialog.show();

        DbQuery.saveProfileData(nameStr, new MyCompleteListener() {
            @Override
            public void onSuccess() {
                Toast.makeText(MyProfileActivity.this, "Profile Updated Succesfully ", Toast.LENGTH_SHORT).show();
                disableEditing();
                progressDialog.dismiss();
            }

            @Override
            public void onFailure() {
                Toast.makeText(MyProfileActivity.this, "Something went wrong ! Please try again later ", Toast.LENGTH_SHORT).show();
                progressDialog.dismiss();
            }
        });

    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item)
    {
        if (item.getItemId() == android.R.id.home)
        {
            MyProfileActivity.this.finish();
        }

        return super.onOptionsItemSelected(item);

    }

/**
    public void loadAd() {
        AdRequest adRequest = new AdRequest.Builder().build();
        InterstitialAd.load(
                this,
                AD_UNIT_ID,
                adRequest,
                new InterstitialAdLoadCallback() {
                    @Override
                    public void onAdLoaded(@NonNull InterstitialAd interstitialAd) {
                        // The mInterstitialAd reference will be null until
                        // an ad is loaded.
                        MyProfileActivity.this.interstitialAd = interstitialAd;
                        Log.i(TAG, "onAdLoaded");
                        interstitialAd.setFullScreenContentCallback(
                                new FullScreenContentCallback() {
                                    @Override
                                    public void onAdDismissedFullScreenContent() {
                                        // Called when fullscreen content is dismissed.
                                        // Make sure to set your reference to null so you don't
                                        // show it a second time.
                                        MyProfileActivity.this.interstitialAd = null;
                                        Log.d("TAG", "The ad was dismissed.");
                                    }

                                    @Override
                                    public void onAdFailedToShowFullScreenContent(AdError adError) {
                                        // Called when fullscreen content failed to show.
                                        // Make sure to set your reference to null so you don't
                                        // show it a second time.
                                        MyProfileActivity.this.interstitialAd = null;
                                        Log.d("TAG", "The ad failed to show.");
                                    }

                                    @Override
                                    public void onAdShowedFullScreenContent() {
                                        // Called when fullscreen content is shown.
                                        Log.d("TAG", "The ad was shown.");
                                    }
                                });
                    }

                    @Override
                    public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                        // Handle the error
                        Log.i(TAG, loadAdError.getMessage());
                        interstitialAd = null;

                        String error =
                                String.format(
                                        "domain: %s, code: %d, message: %s",
                                        loadAdError.getDomain(), loadAdError.getCode(), loadAdError.getMessage());
                        Toast.makeText(
                                MyProfileActivity.this, "onAdFailedToLoad() with error: " + error, Toast.LENGTH_SHORT)
                                .show();
                    }
                });
    }


    private void showInterstitial() {
        // Show the ad if it's ready. Otherwise toast and restart the game.
        if (interstitialAd != null) {
            interstitialAd.show(this);
        }
        else {
            Log.d("TAG", "The interstitial ad wasn't ready yet.");
        }
    }


    @Override
    public void onBackPressed()
    {
        MyProfileActivity.this.finish();

        loadAd();
        showInterstitial();

    }
**/
}