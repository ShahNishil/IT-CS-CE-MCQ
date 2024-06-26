package com.nbs.it_cs_ce_mcq;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.PagerSnapHelper;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.SnapHelper;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.nbs.it_cs_ce_mcq.Adapters.AnswerAdapter;
import com.nbs.it_cs_ce_mcq.Adapters.ReadmodeQuestionAdapter;

import static com.nbs.it_cs_ce_mcq.DbQuery.g_catList;
import static com.nbs.it_cs_ce_mcq.DbQuery.g_quesList;
import static com.nbs.it_cs_ce_mcq.DbQuery.g_selected_cat_index;

public class AnswerActivity extends AppCompatActivity {

    private RecyclerView questionsView;
    private TextView tvQuesID, catNameTV, qatopicname;
    private Button showAnswer;
    private ImageButton prevQuesB, nextQuesB;
    private ImageView quesListB;
    private int quesID;
    AnswerAdapter rmquesAdapter;
    private AdView mAdView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_answer);

        init();

        rmquesAdapter=new AnswerAdapter(DbQuery.g_quesList);
        questionsView.setAdapter(rmquesAdapter);

        LinearLayoutManager layoutManager=new LinearLayoutManager(this);
        layoutManager.setOrientation(LinearLayoutManager.VERTICAL);
        questionsView.setLayoutManager(layoutManager);

        setSnapHelper();

        setClickListeners();

    }

    private void init()
    {
        questionsView=findViewById(R.id.questions_view);
        tvQuesID=findViewById(R.id.tv_quesID);
        catNameTV=findViewById(R.id.qa_catName);
        prevQuesB=findViewById(R.id.prev_quesB);
        nextQuesB=findViewById(R.id.next_quesB);
        //quesListB=findViewById(R.id.ques_list_gridB);
        //qatopicname=findViewById(R.id.qa_topicName);

        /** ad unit **/
        mAdView = findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder().build();
        mAdView.loadAd(adRequest);


        quesID=0;
        tvQuesID.setText("1/" + String.valueOf(g_quesList.size()));
        catNameTV.setText(g_catList.get(g_selected_cat_index).getName() + " ANSWER SHEET");

        //String topicname;
        //topicname=getIntent().getStringExtra("TOPIC_NAME");
        //qatopicname.setText(topicname);
    }

    private void setSnapHelper()
    {

        SnapHelper snapHelper=new PagerSnapHelper();
        snapHelper.attachToRecyclerView(questionsView);

        questionsView.addOnScrollListener(new RecyclerView.OnScrollListener() {
            @Override
            public void onScrollStateChanged(@NonNull RecyclerView recyclerView, int newState) {
                super.onScrollStateChanged(recyclerView, newState);

                View view=snapHelper.findSnapView(recyclerView.getLayoutManager());
                quesID=recyclerView.getLayoutManager().getPosition(view);

                tvQuesID.setText(String.valueOf(quesID + 1) + "/" +String.valueOf(g_quesList.size()));

            }

            @Override
            public void onScrolled(@NonNull RecyclerView recyclerView, int dx, int dy) {
                super.onScrolled(recyclerView, dx, dy);
            }
        });

    }

    private void setClickListeners()
    {

        prevQuesB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (quesID > 0)
                {
                    questionsView.smoothScrollToPosition(quesID - 1);
                }

            }
        });

        nextQuesB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (quesID < g_quesList.size() - 1)
                {
                    questionsView.smoothScrollToPosition(quesID + 1);
                }

            }
        });

    }

}
