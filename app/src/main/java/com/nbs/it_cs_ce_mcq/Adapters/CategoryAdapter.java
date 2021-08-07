package com.nbs.it_cs_ce_mcq.Adapters;

import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.nbs.it_cs_ce_mcq.DbQuery;
import com.nbs.it_cs_ce_mcq.Models.categoryModel;
import com.nbs.it_cs_ce_mcq.R;
import com.nbs.it_cs_ce_mcq.TestActivity;

import java.util.List;

public class CategoryAdapter extends BaseAdapter {

    private final List<categoryModel> cat_list;


    public CategoryAdapter(List<categoryModel> cat_list)
    {
        this.cat_list=cat_list;
    }

    @Override
    public int getCount() {
        return cat_list.size();
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
        View myView;

        if (view==null)
        {
            myView= LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.cat_item_layout,viewGroup,false);
        }
        else
        {
            myView=view;
        }

        myView.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v)
            {
                DbQuery.g_selected_cat_index=i;

                Intent intent=new Intent(myView.getContext(), TestActivity.class);
                myView.getContext().startActivity(intent);
            }
        });

        TextView catName=myView.findViewById(R.id.catName);
        TextView noOfTests=myView.findViewById(R.id.no_of_tests);
        catName.setText(cat_list.get(i).getName());
        noOfTests.setText( String.valueOf(cat_list.get(i).getNoOfTests()) + " Tests");
        return myView;

    }
}
