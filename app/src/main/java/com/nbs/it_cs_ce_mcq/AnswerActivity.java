package com.nbs.it_cs_ce_mcq;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.Dialog;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.nbs.it_cs_ce_mcq.Adapters.AnswerAdapter;
import com.nbs.it_cs_ce_mcq.Adapters.ReadAdapter;

import java.util.Objects;


public class AnswerActivity extends AppCompatActivity {

    private Toolbar toolbar;
    private RecyclerView itemView;
    private AnswerAdapter adapter;
    private Dialog progressDialog;
    private TextView dialogText;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_answer);

        toolbar=findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        Objects.requireNonNull(getSupportActionBar()).setDisplayShowTitleEnabled(true);

        getSupportActionBar().setTitle(DbQuery.g_catList.get(DbQuery.g_selected_cat_index).getName());
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        itemView=findViewById(R.id.test_recycler_view);

        progressDialog = new Dialog(AnswerActivity.this);
        progressDialog.setContentView(R.layout.dialog_layout);
        progressDialog.setCancelable(false);
        progressDialog.getWindow().setLayout(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);

        dialogText = progressDialog.findViewById(R.id.dialog_text);
        dialogText.setText("Loading...");

        progressDialog.show();

        LinearLayoutManager layoutManager=new LinearLayoutManager(this);
        layoutManager.setOrientation(RecyclerView.VERTICAL);
        itemView.setLayoutManager(layoutManager);

        DbQuery.loadTestDataRead(new MyCompleteListener() {
            @Override
            public void onSuccess() {

                adapter=new AnswerAdapter(DbQuery.g_quesList);
                itemView.setAdapter(adapter);

                progressDialog.dismiss();

            }

            @Override
            public void onFailure() {
                progressDialog.dismiss();
                Toast.makeText(AnswerActivity.this, "Something went wrong ! Please try again.", Toast.LENGTH_SHORT).show();

            }
        });


    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item)
    {
        if (item.getItemId() == android.R.id.home)
        {
            AnswerActivity.this.finish();
        }

        return super.onOptionsItemSelected(item);

    }

}
