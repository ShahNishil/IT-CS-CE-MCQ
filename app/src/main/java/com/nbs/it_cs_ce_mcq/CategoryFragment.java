package com.nbs.it_cs_ce_mcq;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.GridView;

import androidx.appcompat.widget.Toolbar;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;
import com.nbs.it_cs_ce_mcq.Adapters.CategoryAdapter;


public class CategoryFragment extends Fragment {

    private GridView catView;
    private AdView mAdView;
    private InterstitialAd mInterstitialAd;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view=inflater.inflate(R.layout.fragment_category, container, false);


         Toolbar toolbar=getActivity().findViewById(R.id.toolbar);
         ((MainActivity)getActivity()).getSupportActionBar().setTitle("Tests");


        catView=view.findViewById(R.id.cat_Grid);

        /** ad unit **/
        mAdView = view.findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder().build();
        mAdView.loadAd(adRequest);

        //loadCategories();




        CategoryAdapter adapter=new CategoryAdapter(DbQuery.g_catList);
        catView.setAdapter(adapter);

        return view;
    }

}