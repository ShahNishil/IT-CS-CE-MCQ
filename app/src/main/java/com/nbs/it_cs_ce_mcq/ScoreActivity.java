package com.nbs.it_cs_ce_mcq;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
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

import com.nbs.it_cs_ce_mcq.Adapters.AnswerAdapter;
import com.nbs.it_cs_ce_mcq.ui.CertificateActivity;

import java.util.Objects;

public class ScoreActivity extends AppCompatActivity {

    private TextView scoreTV, timeTV, totalQTV, correctQTV, wrongQTV, unattemptedQTV, dialogText;
    private Button genCertiB, reAttemptB, viewAnsB, openpdfB;
    private long timeTaken;
    private Dialog progressDialog;
    private int finalscore;
    String testname1;
    static int count=0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_score);

        Toolbar toolbar=findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        Objects.requireNonNull(getSupportActionBar()).setDisplayShowTitleEnabled(true);
        getSupportActionBar().setTitle("Result");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        progressDialog = new Dialog(ScoreActivity.this);
        progressDialog.setContentView(R.layout.dialog_layout);
        progressDialog.setCancelable(false);
        progressDialog.getWindow().setLayout(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        dialogText = progressDialog.findViewById(R.id.dialog_text);
        dialogText.setText("Loading...");
        progressDialog.show();

        init();

        loadData();

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
                testname1=getIntent().getStringExtra("TEST_NAME");
                Intent intent = new Intent(ScoreActivity.this, CertificateActivity.class).putExtra("TEST_NAME1", testname1);
                startActivity(intent);
            }
        });

        viewAnsB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ScoreActivity.this, AnswerActivity.class);
                startActivity(intent);
            }
        });

        reAttemptB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                reAttempt();

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

        int correctQ=0, wrongQ=0, unattemptQ=0;

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
        }

        return super.onOptionsItemSelected(item);

    }

    public void openPDF(View view)
    {
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

}