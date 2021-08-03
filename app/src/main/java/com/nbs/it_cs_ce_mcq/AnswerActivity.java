package com.nbs.it_cs_ce_mcq;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.PagerSnapHelper;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.SnapHelper;

import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.View;
import android.widget.Button;
import android.widget.GridView;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import com.nbs.it_cs_ce_mcq.Adapters.AnswerAdapter;
import com.nbs.it_cs_ce_mcq.Adapters.QuestionGridAdapter;
import com.nbs.it_cs_ce_mcq.Adapters.QuestionsAdapter;

import java.util.concurrent.TimeUnit;

import static com.nbs.it_cs_ce_mcq.DbQuery.ANSWERED;
import static com.nbs.it_cs_ce_mcq.DbQuery.NOT_VISITED;
import static com.nbs.it_cs_ce_mcq.DbQuery.REVIEW;
import static com.nbs.it_cs_ce_mcq.DbQuery.UNANSWERED;
import static com.nbs.it_cs_ce_mcq.DbQuery.g_catList;
import static com.nbs.it_cs_ce_mcq.DbQuery.g_quesList;
import static com.nbs.it_cs_ce_mcq.DbQuery.g_selected_cat_index;
import static com.nbs.it_cs_ce_mcq.DbQuery.g_selected_test_index;
import static com.nbs.it_cs_ce_mcq.DbQuery.g_testList;

public class AnswerActivity extends AppCompatActivity {

    private RecyclerView questionsView;
    private TextView tvQuesID, timerTV, catNameTV;
    private Button submitB, markB, clearSelB;
    private ImageButton prevQuesB, nextQuesB, drawerCloseB;
    private ImageView quesListB, markImage;
    private int quesID;
    AnswerAdapter quesAdapter;
    private DrawerLayout drawer;
    private GridView queslistGV;
    private QuestionGridAdapter gridAdapter;
    private CountDownTimer timer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_answer);

        init();

        quesAdapter=new AnswerAdapter(DbQuery.g_quesList);
        questionsView.setAdapter(quesAdapter);

        LinearLayoutManager layoutManager = new LinearLayoutManager(this);
        layoutManager.setOrientation(LinearLayoutManager.HORIZONTAL);
        questionsView.setLayoutManager(layoutManager);

       // gridAdapter=new QuestionGridAdapter(this, g_quesList.size());
       // queslistGV.setAdapter(gridAdapter);

        setSnapHelper();

    }

    private void init()
    {

        questionsView=findViewById(R.id.ans_recycler_view);
        //tvQuesID=findViewById(R.id.tv_quesID);
        //catNameTV=findViewById(R.id.qa_catName);
       // quesListB=findViewById(R.id.ques_list_gridB);

        quesID=0;
        //tvQuesID.setText("1/" + String.valueOf(g_quesList.size()));
        //catNameTV.setText(g_catList.get(g_selected_cat_index).getName());

        //g_quesList.get(0).setStatus(UNANSWERED);
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

            }

            @Override
            public void onScrolled(@NonNull RecyclerView recyclerView, int dx, int dy)
            {
                super.onScrolled(recyclerView, dx, dy);
            }
        });

    }


}