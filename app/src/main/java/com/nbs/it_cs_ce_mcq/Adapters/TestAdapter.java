package com.nbs.it_cs_ce_mcq.Adapters;

import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.nbs.it_cs_ce_mcq.DbQuery;
import com.nbs.it_cs_ce_mcq.Models.TestModel;
import com.nbs.it_cs_ce_mcq.R;
import com.nbs.it_cs_ce_mcq.StartTestActivity;

import java.util.List;

import static com.nbs.it_cs_ce_mcq.DbQuery.g_selected_test_index;
import static com.nbs.it_cs_ce_mcq.DbQuery.g_testList;
import static com.nbs.it_cs_ce_mcq.DbQuery.myPerformance;

public class TestAdapter extends RecyclerView.Adapter<TestAdapter.ViewHolder> {
    private List<TestModel> testList;

    public TestAdapter(List<TestModel> testList) {
        this.testList = testList;
    }

    @NonNull
    @Override
    public TestAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view= LayoutInflater.from(parent.getContext()).inflate(R.layout.test_item_layout,parent,false);

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull TestAdapter.ViewHolder holder, int position) {
        int progress=testList.get(position).getTopScore();
        String testname =testList.get(position).getTopicName();
        holder.setData(position,progress,testname);
    }

    @Override
    public int getItemCount() {
        return testList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        private TextView testNo;
        private TextView topScore;
        private ProgressBar progressBar;
        private TextView testTopic;

        private static final String TAG = "TestAdapter";
        private static final String AD_UNIT_ID = "ca-app-pub-3940256099942544/1033173712"; //interstrialads
        private InterstitialAd interstitialAd;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            testNo=itemView.findViewById(R.id.testNo);
            topScore=itemView.findViewById(R.id.scoretext);
            progressBar=itemView.findViewById(R.id.testProgressbar);
            testTopic=itemView.findViewById(R.id.testTopic);
        }

        private void setData(int pos, int progress, String testname)
        {

            testNo.setText("Test No : " + String.valueOf(pos+1));
            testTopic.setText("Test Name : " + String.valueOf(testname));
            topScore.setText(String.valueOf(progress) + " %");
            progressBar.setProgress(progress);

            String testnam = String.valueOf(testname);

            itemView.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View v) {

                    g_selected_test_index= pos;

                    Intent intent=new Intent(itemView.getContext(), StartTestActivity.class).putExtra("TEST_NAME", testnam);
                    itemView.getContext().startActivity(intent);

                }
            });


        }

    }
}
