package com.nbs.it_cs_ce_mcq.Adapters;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.nbs.it_cs_ce_mcq.DbQuery;
import com.nbs.it_cs_ce_mcq.Models.QuestionModel;
import com.nbs.it_cs_ce_mcq.R;

import java.util.List;

import static com.nbs.it_cs_ce_mcq.DbQuery.ANSWERED;
import static com.nbs.it_cs_ce_mcq.DbQuery.REVIEW;
import static com.nbs.it_cs_ce_mcq.DbQuery.UNANSWERED;
import static com.nbs.it_cs_ce_mcq.DbQuery.g_quesList;

public class AnswerAdapter extends RecyclerView.Adapter<AnswerAdapter.ViewHolder> {

    private List<QuestionModel> questionsList;

    public AnswerAdapter(List<QuestionModel> questionsList) {
        this.questionsList = questionsList;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        View view= LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.activity_answer_layout, viewGroup, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull AnswerAdapter.ViewHolder viewholder, int i) {
        viewholder.setData(i);
    }

    @Override
    public int getItemCount() {
        return questionsList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        private TextView ques;
        private TextView optionA, optionB, optionC, optionD, status, answer;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            ques=itemView.findViewById(R.id.quesName);
            optionA=itemView.findViewById(R.id.optionA);
            optionB=itemView.findViewById(R.id.optionB);
            optionC=itemView.findViewById(R.id.optionC);
            optionD=itemView.findViewById(R.id.optionD);
            answer=itemView.findViewById(R.id.answer);
            status=itemView.findViewById(R.id.status);

        }

        private void setData(final int pos)
        {

            ques.setText(questionsList.get(pos).getQuestion());
            optionA.setText(questionsList.get(pos).getOptionA());
            optionB.setText(questionsList.get(pos).getOptionB());
            optionC.setText(questionsList.get(pos).getOptionC());
            optionD.setText(questionsList.get(pos).getOptionD());
            answer.setText(questionsList.get(pos).getCorrectAns());
            status.setText(questionsList.get(pos).getStatus());

        }


    }
}
