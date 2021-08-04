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

public class ReadmodeQuestionAdapter extends RecyclerView.Adapter<ReadmodeQuestionAdapter.ViewHolder> {

    private List<QuestionModel> questionsList;

    public ReadmodeQuestionAdapter(List<QuestionModel> questionsList) {
        this.questionsList = questionsList;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        View view= LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.readmode_question_item_layout, viewGroup, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ReadmodeQuestionAdapter.ViewHolder viewholder, int i) {
        viewholder.setData(i);
    }

    @Override
    public int getItemCount() {
        return questionsList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder
    {

        private TextView ques;
        private TextView correctAnswer;
        private int correct;
        private Button optionA, optionB, optionC, optionD, prevSelectedB;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            ques=itemView.findViewById(R.id.tv_question);
            optionA=itemView.findViewById(R.id.optionA);
            optionB=itemView.findViewById(R.id.optionB);
            optionC=itemView.findViewById(R.id.optionC);
            optionD=itemView.findViewById(R.id.optionD);
            correctAnswer=itemView.findViewById(R.id.correctanswer);

            prevSelectedB=null;
        }

        private void setData(final int pos)
        {

            ques.setText(questionsList.get(pos).getQuestion());
            optionA.setText(questionsList.get(pos).getOptionA());
            optionB.setText(questionsList.get(pos).getOptionB());
            optionC.setText(questionsList.get(pos).getOptionC());
            optionD.setText(questionsList.get(pos).getOptionD());
            correct=questionsList.get(pos).getCorrectAns();
            correctAnswer.setText("  ");


            setOption(optionA, 1, pos);
            setOption(optionB, 2, pos);
            setOption(optionC, 3, pos);
            setOption(optionD, 4, pos);


            optionA.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    selectOption(optionA, 1, pos);
                    correctans(pos);
                }
            });

            optionB.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    selectOption(optionB, 2, pos);
                    correctans(pos);
                }
            });

            optionC.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    selectOption(optionC, 3, pos);
                    correctans(pos);
                }
            });

            optionD.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    selectOption(optionD, 4, pos);
                    correctans(pos);
                }
            });

        }

        private void selectOption(Button btn, int option_num, int quesID)
        {

            if (prevSelectedB==null)
            {
                //btn.setBackgroundResource(R.drawable.selected_btn);

                if (option_num==DbQuery.g_quesList.get(quesID).getCorrectAns())
                {
                    btn.setBackgroundResource(R.drawable.selected_btn);
                }
                else
                {
                    btn.setBackgroundResource(R.drawable.selected_btn_wrong);
                }

                DbQuery.g_quesList.get(quesID).setSelectedAns(option_num);

                prevSelectedB=btn;
            }
            else
            {
           /**     if (prevSelectedB.getId() == btn.getId())
                {
                    btn.setBackgroundResource(R.drawable.unselected_btn);
                    DbQuery.g_quesList.get(quesID).setSelectedAns(-1);

                    prevSelectedB=null;
                }
                else
                {
              **/
                if (option_num==DbQuery.g_quesList.get(quesID).getCorrectAns())
                {
                    prevSelectedB.setBackgroundResource(R.drawable.unselected_btn);
                    btn.setBackgroundResource(R.drawable.selected_btn);
                    DbQuery.g_quesList.get(quesID).setSelectedAns(option_num);
                    prevSelectedB=btn;
                }
                else
                {
                    prevSelectedB.setBackgroundResource(R.drawable.unselected_btn);
                    btn.setBackgroundResource(R.drawable.selected_btn_wrong);
                    DbQuery.g_quesList.get(quesID).setSelectedAns(option_num);
                    prevSelectedB=btn;
                }
           /**
                    prevSelectedB.setBackgroundResource(R.drawable.unselected_btn);
                    btn.setBackgroundResource(R.drawable.selected_btn);

                    DbQuery.g_quesList.get(quesID).setSelectedAns(option_num);
                    prevSelectedB=btn;
**/
            }

        }

        private void setOption(Button btn, int option_num, int quesID)
        {

            if (DbQuery.g_quesList.get(quesID).getSelectedAns()==option_num)
            {
                if (DbQuery.g_quesList.get(quesID).getSelectedAns()==DbQuery.g_quesList.get(quesID).getCorrectAns())
                {
                    btn.setBackgroundResource(R.drawable.selected_btn);
                }
                else
                {
                    btn.setBackgroundResource(R.drawable.selected_btn_wrong);
                }
                //btn.setBackgroundResource(R.drawable.selected_btn);
            }
            else
            {
                btn.setBackgroundResource(R.drawable.unselected_btn);
            }
        }

        private void correctans(int pos)
        {
            if (correct==1) {
                correctAnswer.setText("Correct Answer: " + questionsList.get(pos).getOptionA());
            }
            else if (correct==2) {
                correctAnswer.setText("Correct Answer: " + questionsList.get(pos).getOptionB());
            }
            else if (correct==3) {
                correctAnswer.setText("Correct Answer: " + questionsList.get(pos).getOptionC());
            }
            else if (correct==4) {
                correctAnswer.setText("Correct Answer: " + questionsList.get(pos).getOptionD());
            }
        }

    }
}
