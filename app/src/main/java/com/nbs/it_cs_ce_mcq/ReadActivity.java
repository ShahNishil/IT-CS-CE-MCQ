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

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;
import com.nbs.it_cs_ce_mcq.Adapters.ReadAdapter;

import java.util.Objects;


public class ReadActivity extends AppCompatActivity {

    private Toolbar toolbar;
    private RecyclerView testView;
    private ReadAdapter adapter;
    private Dialog progressDialog;
    private TextView dialogText;
    //private AdView mAdView;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_read);

        toolbar=findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        Objects.requireNonNull(getSupportActionBar()).setDisplayShowTitleEnabled(true);

        getSupportActionBar().setTitle(DbQuery.g_catList.get(DbQuery.g_selected_cat_index).getName());
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        testView=findViewById(R.id.test_recycler_view);

        /** ad unit
        mAdView = findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder().build();
        mAdView.loadAd(adRequest);
    **/

        progressDialog = new Dialog(ReadActivity.this);
        progressDialog.setContentView(R.layout.dialog_layout);
        progressDialog.setCancelable(false);
        progressDialog.getWindow().setLayout(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);

        dialogText = progressDialog.findViewById(R.id.dialog_text);
        dialogText.setText("Loading...");

        progressDialog.show();

        LinearLayoutManager layoutManager=new LinearLayoutManager(this);
        layoutManager.setOrientation(RecyclerView.VERTICAL);
        testView.setLayoutManager(layoutManager);

        DbQuery.loadTestDataRead(new MyCompleteListener() {
            @Override
            public void onSuccess() {

                adapter=new ReadAdapter(DbQuery.g_testList);
                testView.setAdapter(adapter);

                progressDialog.dismiss();

            }

            @Override
            public void onFailure() {
                progressDialog.dismiss();
                Toast.makeText(ReadActivity.this, "Something went wrong ! Please try again.", Toast.LENGTH_SHORT).show();

            }
        });


    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item)
    {
        if (item.getItemId() == android.R.id.home)
        {
            ReadActivity.this.finish();
        }

        return super.onOptionsItemSelected(item);

    }

}

