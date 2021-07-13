package com.nbs.it_cs_ce_mcq;

import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class ReadAdapter extends RecyclerView.Adapter<ReadAdapter.ViewHolder> {
    private List<TestModel> testList;

    public ReadAdapter(List<TestModel> testList) {
        this.testList = testList;
    }

    @NonNull
    @Override
    public ReadAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view= LayoutInflater.from(parent.getContext()).inflate(R.layout.readtopic_item_layout,parent,false);

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ReadAdapter.ViewHolder holder, int position) {
        String topicname=testList.get(position).getTopicName();
        holder.setData(position,topicname);
    }

    @Override
    public int getItemCount() {
        return testList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        private TextView topicNo;
        private TextView topicName;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            topicNo=itemView.findViewById(R.id.topicNo);
            topicName=itemView.findViewById(R.id.topicName);

        }

        private void setData(int pos, String topicname)
        {

            topicNo.setText("Topic No : " + String.valueOf(pos+1));
            topicName.setText("Topic Name : " + String.valueOf(topicname));

            itemView.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View v) {

                    DbQuery.g_selected_test_index= pos;

                    Intent intent=new Intent(itemView.getContext(),StartTestActivity.class);
                    itemView.getContext().startActivity(intent);

                }
            });


        }

    }
}
