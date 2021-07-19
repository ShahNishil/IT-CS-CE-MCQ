package com.nbs.it_cs_ce_mcq;

import android.content.Context;
import android.content.res.ColorStateList;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import androidx.core.content.ContextCompat;

import static com.nbs.it_cs_ce_mcq.DbQuery.ANSWERED;
import static com.nbs.it_cs_ce_mcq.DbQuery.NOT_VISITED;
import static com.nbs.it_cs_ce_mcq.DbQuery.REVIEW;
import static com.nbs.it_cs_ce_mcq.DbQuery.UNANSWERED;

public class QuestionGridAdapter extends BaseAdapter {
    private int numOfQues;
    private Context context;


    public QuestionGridAdapter(Context context, int numOfQues) {
        this.numOfQues = numOfQues;
        this.context=context;
    }

    @Override
    public int getCount() {
        return numOfQues;
    }

    @Override
    public Object getItem(int i) {
        return null;
    }

    @Override
    public long getItemId(int i) {
        return 0;
    }

    @Override
    public View getView(final int i, View view, ViewGroup viewGroup) {
        View myview;
        if (view==null)
        {
            myview = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.ques_grid_item,viewGroup,false);

        }
        else
        {
            myview=view;
        }

        myview.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (context instanceof QuestionsActivity)
                    ((QuestionsActivity)context).goToQuestion(i);

            }
        });

        TextView quesTV=myview.findViewById(R.id.ques_num);
        quesTV.setText(String.valueOf(i+1));

        Log.d("LOGGGGGGGG", String.valueOf(DbQuery.g_quesList.get(i).getStatus()));
        switch (DbQuery.g_quesList.get(i).getStatus())
        {

            case NOT_VISITED :
                quesTV.setBackgroundTintList(ColorStateList.valueOf(ContextCompat.getColor(myview.getContext(), R.color.grey)));
                break;
            case UNANSWERED :
                quesTV.setBackgroundTintList(ColorStateList.valueOf(ContextCompat.getColor(myview.getContext(), R.color.red)));
                break;
            case ANSWERED :
                quesTV.setBackgroundTintList(ColorStateList.valueOf(ContextCompat.getColor(myview.getContext(), R.color.GREEN)));
                break;
            case REVIEW :
                quesTV.setBackgroundTintList(ColorStateList.valueOf(ContextCompat.getColor(myview.getContext(), R.color.pink)));
                break;
            default :
                break;

        }

        return myview;
    }
}
