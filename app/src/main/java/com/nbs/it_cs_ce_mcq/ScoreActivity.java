package com.nbs.it_cs_ce_mcq;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import java.io.File;
import java.util.concurrent.TimeUnit;

import androidx.appcompat.widget.Toolbar;

import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.OnUserEarnedRewardListener;
import com.google.android.gms.ads.initialization.InitializationStatus;
import com.google.android.gms.ads.initialization.OnInitializationCompleteListener;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;
import com.google.android.gms.ads.rewarded.RewardItem;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;
import com.nbs.it_cs_ce_mcq.Adapters.AnswerAdapter;
import com.nbs.it_cs_ce_mcq.ui.CertificateActivity;

import java.util.Objects;

public class ScoreActivity extends AppCompatActivity {

    private TextView scoreTV, timeTV, totalQTV, correctQTV, wrongQTV, unattemptedQTV, dialogText;
    private Button genCertiB, reAttemptB, viewAnsB, openpdfB;
    private long timeTaken;
    private Dialog progressDialog;
    private static int finalscore;
    static String testname1;
    static String testname2;
    static int count;
    int correctQ=0, wrongQ=0, unattemptQ=0;
    private static final String TAG = "ScoreActivity";
    private static final String AD_UNIT_ID = "ca-app-pub-3940256099942544/1033173712"; //interstrialads
    private static final String AD_UNIT_ID_1= "ca-app-pub-3940256099942544/1033173712"; //interstrialads
    private InterstitialAd interstitialAd;
    private RewardedAd mRewardedAd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_score);

        testname1=getIntent().getStringExtra("TEST_NAME");
        testname2=getIntent().getStringExtra("TEST_SUB");

        Toolbar toolbar=findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        Objects.requireNonNull(getSupportActionBar()).setDisplayShowTitleEnabled(true);
        if (testname1 != null)
        {
            getSupportActionBar().setTitle("  " + testname1 + " RESULT");
        }
        if (testname2 != null)
        {
            getSupportActionBar().setTitle("  " + testname2 + " RESULT");
        }

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        progressDialog = new Dialog(ScoreActivity.this);
        progressDialog.setContentView(R.layout.dialog_layout);
        progressDialog.setCancelable(false);
        progressDialog.getWindow().setLayout(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        dialogText = progressDialog.findViewById(R.id.dialog_text);
        dialogText.setText("Loading....");
        progressDialog.show();

        /** ads code **/
        MobileAds.initialize(this, new OnInitializationCompleteListener() {
            @Override
            public void onInitializationComplete(InitializationStatus initializationStatus) {}
        });

//        loadAd();
        loadAd1();


        /** rewarded ads code **/
        AdRequest adRequest = new AdRequest.Builder().build();

        RewardedAd.load(this, "ca-app-pub-3940256099942544/5224354917",
                adRequest, new RewardedAdLoadCallback()
                {
                    @Override
                    public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                        // Handle the error.
                        Log.d(TAG, loadAdError.getMessage());
                        mRewardedAd = null;
                    }

                    @Override
                    public void onAdLoaded(@NonNull RewardedAd rewardedAd) {
                        mRewardedAd = rewardedAd;
                        Log.d(TAG, "Ad was loaded.");
                    }
                });



        init();

        loadData();

        count=getIntent().getIntExtra("COUNT", count);

        if (count==0) {
            count++;
            enable1();
        }
        else if(count==1){
            count++;
            enable2();
        }
        else {
            openpdfB.setVisibility(View.GONE);
            genCertiB.setVisibility(View.GONE);
        }

        genCertiB.setOnClickListener(new View.OnClickListener() {

            public void onClick(View v) {
                if (correctQ>=7) {
                    Intent intent = new Intent(ScoreActivity.this, CertificateActivity.class).putExtra("TEST_NAME1", testname1).putExtra("SCORE", finalscore);
                    startActivity(intent);
                    finish();

                    if (mRewardedAd != null) {
                        Activity activityContext = ScoreActivity.this;
                        mRewardedAd.show(activityContext, new OnUserEarnedRewardListener() {
                            @Override
                            public void onUserEarnedReward(@NonNull RewardItem rewardItem) {
                                // Handle the reward.
                                Log.d(TAG, "The user earned the reward.");
                                int rewardAmount = rewardItem.getAmount();
                                String rewardType = rewardItem.getType();
                            }
                        });
                    }
                    else {
                        Log.d(TAG, "The rewarded ad wasn't ready yet.");
                    }

                }
                else
                {
                    AlertDialog.Builder builder=new AlertDialog.Builder(ScoreActivity.this);
                    builder.setCancelable(true);

                    View view=getLayoutInflater().inflate(R.layout.alert_dialog_layout2,null);
                    Button cancelB=view.findViewById(R.id.cancelB);
                    TextView content=view.findViewById(R.id.content);
                    TextView title=view.findViewById(R.id.title);
                    title.setText("Generate Certificate");
                    content.setText("Correct Answer Should Be More Than 7 To Get Certificate.");

                    builder.setView(view);

                    AlertDialog alertDialog=builder.create();

                    cancelB.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            alertDialog.dismiss();

                          //  loadAd1();
                            showInterstitial();

                        }
                    });
                    alertDialog.show();

                   // loadAd1();
                    showInterstitial();


                }
            }
        });

        viewAnsB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ScoreActivity.this, AnswerActivity.class);
                startActivity(intent);

                loadAd();
                showInterstitial();

            }
        });

        reAttemptB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                reAttempt();

                //loadAd1();
                showInterstitial();

            }
        });

        saveResult();

    }

    private void init()
    {

        scoreTV=findViewById(R.id.score);
        timeTV=findViewById(R.id.time);
        totalQTV=findViewById(R.id.totalQ);
        correctQTV=findViewById(R.id.correctQ);
        wrongQTV=findViewById(R.id.wrongQ);
        genCertiB=findViewById(R.id.genCertificateB);
        reAttemptB=findViewById(R.id.reattemptB);
        viewAnsB=findViewById(R.id.view_answerB);
        openpdfB=findViewById(R.id.appCompatButton2);

    }

    private void enable1()
    {

        genCertiB.setEnabled(true);
        openpdfB.setEnabled(false);
        openpdfB.setVisibility(View.GONE);

    }

    private void enable2()
    {

        genCertiB.setEnabled(false);
        openpdfB.setEnabled(true);
        genCertiB.setVisibility(View.GONE);


    }

    private void loadData()
    {

        for (int i=0; i<DbQuery.g_quesList.size(); i++)
        {
            if (DbQuery.g_quesList.get(i).getSelectedAns() == -1)
            {
                unattemptQ ++;
            }
            else
            {
                if (DbQuery.g_quesList.get(i).getSelectedAns() == DbQuery.g_quesList.get(i).getCorrectAns())
                {
                    correctQ++;
                }
                else
                {
                    wrongQ++;
                }
            }
        }

        correctQTV.setText(String.valueOf(correctQ));
        wrongQTV.setText(String.valueOf(wrongQ));

        totalQTV.setText(String.valueOf(DbQuery.g_quesList.size()));

        finalscore = (correctQ*100)/DbQuery.g_quesList.size();
        scoreTV.setText(String.valueOf(finalscore));

        timeTaken=getIntent().getLongExtra("TIME_TAKEN", 0);

        String time=String.format("%02d:%02d min",
                TimeUnit.MILLISECONDS.toMinutes(timeTaken),
                TimeUnit.MILLISECONDS.toSeconds(timeTaken) -
                        TimeUnit.MINUTES.toSeconds(TimeUnit.MILLISECONDS.toMinutes(timeTaken))
        );

        timeTV.setText(time);

    }

    private void reAttempt()
    {

        for (int i=0; i < DbQuery.g_quesList.size(); i++)
        {
            DbQuery.g_quesList.get(i).setSelectedAns(-1);
            DbQuery.g_quesList.get(i).setStatus(DbQuery.NOT_VISITED);
        }

        Intent intent=new Intent(ScoreActivity.this, StartTestActivity.class);
        startActivity(intent);
        finish();
    }

    private void saveResult()
    {
           DbQuery.saveResult(finalscore, new MyCompleteListener() {
               @Override
               public void onSuccess() {
                   progressDialog.dismiss();
               }

               @Override
               public void onFailure() {
                   Toast.makeText(ScoreActivity.this, "Something went wrong ! Please try again later !", Toast.LENGTH_SHORT);
                    progressDialog.dismiss();
               }
           });
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item)
    {
        if (item.getItemId() == android.R.id.home)
        {
            ScoreActivity.this.finish();

            loadAd1();
            showInterstitial();
        }

        return super.onOptionsItemSelected(item);

    }

    public void openPDF(View view)
    {
      //  loadAd();
      //  showInterstitial();

        new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
                    try {
                        Context mContext;
                        String dest;
                        mContext = getApplicationContext();
                        dest = FileUtils.getAppPath(mContext) + "Certificate.pdf";

                        FileUtils.openFile(mContext, new File(dest));
                    } catch (Exception e) {
                        Log.d("TAG", "run: ERror");
                    }
                }
            }, 1000);
        }


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
                        ScoreActivity.this.interstitialAd = interstitialAd;
                        Log.i(TAG, "onAdLoaded");
                        interstitialAd.setFullScreenContentCallback(
                                new FullScreenContentCallback() {
                                    @Override
                                    public void onAdDismissedFullScreenContent() {
                                        // Called when fullscreen content is dismissed.
                                        // Make sure to set your reference to null so you don't
                                        // show it a second time.
                                        ScoreActivity.this.interstitialAd = null;
                                        Log.d("TAG", "The ad was dismissed.");
                                    }

                                    @Override
                                    public void onAdFailedToShowFullScreenContent(AdError adError) {
                                        // Called when fullscreen content failed to show.
                                        // Make sure to set your reference to null so you don't
                                        // show it a second time.
                                        ScoreActivity.this.interstitialAd = null;
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
                    }
                });
    }


    public void loadAd1() {
        AdRequest adRequest1 = new AdRequest.Builder().build();
        InterstitialAd.load(
                this,
                AD_UNIT_ID_1,
                adRequest1,
                new InterstitialAdLoadCallback() {
                    @Override
                    public void onAdLoaded(@NonNull InterstitialAd interstitialAd) {
                        // The mInterstitialAd reference will be null until
                        // an ad is loaded.
                        ScoreActivity.this.interstitialAd = interstitialAd;
                        Log.i(TAG, "onAdLoaded");
                        interstitialAd.setFullScreenContentCallback(
                                new FullScreenContentCallback() {
                                    @Override
                                    public void onAdDismissedFullScreenContent() {
                                        // Called when fullscreen content is dismissed.
                                        // Make sure to set your reference to null so you don't
                                        // show it a second time.
                                        ScoreActivity.this.interstitialAd = null;
                                        Log.d("TAG", "The ad was dismissed.");
                                    }

                                    @Override
                                    public void onAdFailedToShowFullScreenContent(AdError adError) {
                                        // Called when fullscreen content failed to show.
                                        // Make sure to set your reference to null so you don't
                                        // show it a second time.
                                        ScoreActivity.this.interstitialAd = null;
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

        ScoreActivity.this.finish();
      //  loadAd1();
        showInterstitial();

    }


}