package com.nbs.it_cs_ce_mcq;

import android.os.Bundle;
        import androidx.fragment.app.Fragment;
        import android.view.LayoutInflater;
        import android.view.View;
        import android.view.ViewGroup;
        import android.widget.GridView;

        import java.util.ArrayList;
        import java.util.List;


public class LeaderBoardFragment extends Fragment {

    private GridView catView;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view=inflater.inflate(R.layout.fragment_category, container, false);

        catView=view.findViewById(R.id.cat_Grid);

        //loadCategories();

        LeaderBoardAdapter adapter=new LeaderBoardAdapter(DbQuery.g_catList);
        catView.setAdapter(adapter);

        return view;
    }

}
