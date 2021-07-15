package com.nbs.it_cs_ce_mcq;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Dialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.List;

import static com.nbs.it_cs_ce_mcq.DbQuery.g_catList;
import static com.nbs.it_cs_ce_mcq.DbQuery.loadquestions;

public class StartTopicActivity extends AppCompatActivity {

    private TextView catName, testNo, totalQ, testName;
    private Button startTestB;
    private ImageView backB;
    private Dialog progressDialog;
    private TextView dialogText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_read_topic_question);

        init();


        progressDialog = new Dialog(StartTopicActivity.this);
        progressDialog.setContentView(R.layout.dialog_layout);
        progressDialog.setCancelable(false);
        progressDialog.getWindow().setLayout(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);

        dialogText = progressDialog.findViewById(R.id.dialog_text);
        dialogText.setText("Loading...");

        progressDialog.show();



        loadquestions(new MyCompleteListener() {
            @Override
            public void onSuccess() {

                setData();
                progressDialog.dismiss();

            }

            @Override
            public void onFailure() {

                progressDialog.dismiss();
                Toast.makeText(StartTopicActivity.this, "Something went wrong ! Please try again.", Toast.LENGTH_SHORT).show();

            }
        });

    }

    private void init()
    {

        catName=findViewById(R.id.st_cat_name);
        testNo=findViewById(R.id.st_test_no);
        totalQ=findViewById(R.id.st_total_ques);
        startTestB=findViewById(R.id.start_testB);
        backB=findViewById(R.id.st_backB);
        testName=findViewById(R.id.st_test_name);

        backB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                StartTopicActivity.this.finish();
            }
        });

        startTestB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(StartTopicActivity.this, ReadmodeQuestionActivity.class);
                startActivity(intent);
                finish();
            }
        });

    }

    private void setData()
    {
        catName.setText(g_catList.get(DbQuery.g_selected_cat_index).getName());
        testNo.setText("Topic No : " + String.valueOf(DbQuery.g_selected_test_index + 1));
        totalQ.setText(String.valueOf(DbQuery.g_quesList.size()));
        //  testName.setText("Topic Name : " + String.valueOf(DbQuery.g_selected_test_index).getTopicName());
    }

}