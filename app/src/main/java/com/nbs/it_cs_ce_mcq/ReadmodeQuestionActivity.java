package com.nbs.it_cs_ce_mcq;

        import androidx.annotation.NonNull;
        import androidx.appcompat.app.AppCompatActivity;
        import androidx.recyclerview.widget.LinearLayoutManager;
        import androidx.recyclerview.widget.PagerSnapHelper;
        import androidx.recyclerview.widget.RecyclerView;
        import androidx.recyclerview.widget.SnapHelper;

        import android.os.Bundle;
        import android.os.CountDownTimer;
        import android.view.View;
        import android.widget.Button;
        import android.widget.ImageButton;
        import android.widget.ImageView;
        import android.widget.LinearLayout;
        import android.widget.TextView;

        import java.io.ByteArrayOutputStream;
        import java.util.concurrent.TimeUnit;

        import static com.nbs.it_cs_ce_mcq.DbQuery.g_catList;
        import static com.nbs.it_cs_ce_mcq.DbQuery.g_quesList;
        import static com.nbs.it_cs_ce_mcq.DbQuery.g_selected_cat_index;
        import static com.nbs.it_cs_ce_mcq.DbQuery.g_selected_test_index;
        import static com.nbs.it_cs_ce_mcq.DbQuery.g_testList;

public class ReadmodeQuestionActivity extends AppCompatActivity {

    private RecyclerView questionsView;
    private TextView tvQuesID, timerTV, catNameTV, correctAnswer, qa_topicName;
    private Button markB, clearSelB, showAnswer;
    private ImageButton prevQuesB, nextQuesB;
    private ImageView quesListB;
    private int quesID;
    ReadmodeQuestionAdapter quesAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_start_readmode_questions);

        init();

        quesAdapter=new ReadmodeQuestionAdapter(DbQuery.g_quesList);
        questionsView.setAdapter(quesAdapter);

        LinearLayoutManager layoutManager=new LinearLayoutManager(this);
        layoutManager.setOrientation(LinearLayoutManager.HORIZONTAL);
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
        quesListB=findViewById(R.id.ques_list_gridB);
        qa_topicName=findViewById(R.id.qa_topicName);
        showAnswer=findViewById(R.id.showAnswer);


        quesID=0;
        tvQuesID.setText("1/" + String.valueOf(g_quesList.size()));
        catNameTV.setText(g_catList.get(g_selected_cat_index).getName());
        qa_topicName.setText(g_catList.get(g_selected_cat_index).getName());

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

        clearSelB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                g_quesList.get(quesID).setSelectedAns(-1);
                quesAdapter.notifyDataSetChanged();
            }
        });

    }


}