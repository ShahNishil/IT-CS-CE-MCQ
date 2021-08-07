package com.nbs.it_cs_ce_mcq;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.appcompat.widget.Toolbar;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.FirebaseAuth;
import com.nbs.it_cs_ce_mcq.databinding.ActivityMainBinding;

import java.util.Objects;

 public class AccountFragment extends Fragment {

    private LinearLayout logoutB, moreAppB, rateusB, profileB, shareB;
    private TextView profile_img_text, name, score, rank;
    private AdView mAdView;

     public AccountFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState)
    {
        // Inflate the layout for this fragment
        View view=inflater.inflate(R.layout.fragment_account, container, false);

        initViews(view);

        Toolbar toolbar=getActivity().findViewById(R.id.toolbar);
        ((MainActivity)getActivity()).getSupportActionBar().setTitle("My Account");

        String username=DbQuery.myProfile.getName();
        profile_img_text.setText(username.toUpperCase().substring(0,1));

        name.setText(username);

        score.setText(String.valueOf(DbQuery.myPerformance.getScore()));


        logoutB.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View v) {

                FirebaseAuth.getInstance().signOut();

                GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                        .requestIdToken(getString(R.string.default_web_client_id))
                        .requestEmail()
                        .build();

                GoogleSignInClient mGoogleClient= GoogleSignIn.getClient(getContext(), gso);
                mGoogleClient.signOut().addOnCompleteListener(new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(@NonNull Task<Void> task) {

                        Intent intent=new Intent(getContext(),LoginActivity.class);
                        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
                        startActivity(intent);
                        getActivity().finish();

                    }
                });

            }
        });

        profileB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(getContext(), MyProfileActivity.class);
                startActivity(intent);
            }
        });

        shareB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent myIntent=new Intent(Intent.ACTION_SEND);
                myIntent.setType("text/plain");
                String shareBody="This is the best mcq app for IT-CS-CE course. Which also gives you a certificate after completing the test in this app.\n\n" + "https://play.google.com/store/apps/details?id=com.nbs.it_cs_ce_mcq&h1=en";
                String shareSub="Best App For IT-CS-CE Mcqs Practice";
                myIntent.putExtra(Intent.EXTRA_SUBJECT, shareSub);
                myIntent.putExtra(Intent.EXTRA_TEXT, shareBody);
                startActivity(Intent.createChooser(myIntent, "Share Using"));

            }
        });

        rateusB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=" + "com.nbs.it_cs_ce_mcq")));
                }
                catch (Exception ex)
                {
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("http://play.google.com/store/apps/details?id=" + "com.nbs.it_cs_ce_mcq")));
                }
            }
        });

        moreAppB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(Intent.ACTION_VIEW, Uri.parse("https://play.google.com/store/apps/developer?id=NBS+technologies&hl=en_US&gl=US"));
                startActivity(intent);
            }
        });


        return view;
    }

    private void initViews(View view)
    {

        logoutB=view.findViewById(R.id.logoutB);
        profile_img_text=view.findViewById(R.id.profile_img_text);
        name=view.findViewById(R.id.name);
        shareB=view.findViewById(R.id.shareB);
        rateusB=view.findViewById(R.id.rateB);
        moreAppB=view.findViewById(R.id.moreApp);
        score=view.findViewById(R.id.total_score);
        profileB=view.findViewById(R.id.profileB);

        /** ad unit **/
        mAdView = view.findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder().build();
        mAdView.loadAd(adRequest);


    }

}



