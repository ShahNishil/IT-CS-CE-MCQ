package com.nbs.it_cs_ce_mcq;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toolbar;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.FirebaseAuth;
import com.nbs.it_cs_ce_mcq.databinding.ActivityMainBinding;

import java.util.Objects;

 public class AccountFragment extends Fragment {

    private LinearLayout logoutB, leaderboardB, profileB, bookmarkB;
    private TextView profile_img_text, name, score, rank;

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

       // Toolbar toolbar=getActivity().findViewById(R.id.toolbar);
      //  ((MainActivity)getActivity()).getSupportActionBar().setTitle("My Account");

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

        bookmarkB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });

        profileB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent=new Intent(getContext(), MyProfileActivity.class);
                startActivity(intent);
            }
        });

/**
        leaderboardB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });


**/

        return view;
    }

    private void initViews(View view)
    {

        logoutB=view.findViewById(R.id.logoutB);
        profile_img_text=view.findViewById(R.id.profile_img_text);
        name=view.findViewById(R.id.name);
        //rank=view.findViewById(R.id.Rank);
        score=view.findViewById(R.id.total_score);
        //leaderboardB=view.findViewById(R.id.leaderboardB);
        bookmarkB=view.findViewById(R.id.bookmarkB);
        profileB=view.findViewById(R.id.profileB);


    }

}



