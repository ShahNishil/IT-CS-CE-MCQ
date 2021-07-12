package com.nbs.it_cs_ce_mcq;

import android.os.Bundle;
import androidx.annotation.NonNull;
import com.google.android.material.bottomnavigation.BottomNavigationView;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.core.view.GravityCompat;
import android.view.MenuItem;
import android.view.Menu;
import com.google.android.material.navigation.NavigationView;

import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import androidx.drawerlayout.widget.DrawerLayout;
import androidx.appcompat.app.AppCompatActivity;

import android.view.View;
import android.widget.FrameLayout;
import android.widget.TextView;

import com.google.android.material.snackbar.Snackbar;
import com.nbs.it_cs_ce_mcq.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {

    private AppBarConfiguration mAppBarConfiguration;
    private ActivityMainBinding binding;
    private BottomNavigationView bottomNavigationView;
    private FrameLayout main_frame;
    private TextView drawerProfileName, drawerProfileText;



    private BottomNavigationView.OnNavigationItemSelectedListener onNavigationItemSelectedListener = new BottomNavigationView.OnNavigationItemSelectedListener()
    {
        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {

            switch (menuItem.getItemId())
            {
                case R.id.nav_home:
                    setFragement(new CategoryFragment());
                    return true;

                case R.id.nav_leaderboard:
                    setFragement(new LeaderBoardFragment());
                    return true;

                case R.id.nav_account:
                    setFragement(new AccountFragment());
                    return true;
            }
            return false;

        }
    };


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        setSupportActionBar(binding.appBarMain.toolbar);
        /**  binding.appBarMain.toolbar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });**/


        bottomNavigationView = findViewById(R.id.bottom_nav_bar);
        main_frame = findViewById(R.id.main_frame);
        bottomNavigationView.setOnNavigationItemSelectedListener(onNavigationItemSelectedListener);


        DrawerLayout drawer = binding.drawerLayout;
        NavigationView navigationView = binding.navView;

        mAppBarConfiguration = new AppBarConfiguration.Builder(
                R.id.nav_home, R.id.nav_gallery, R.id.nav_slideshow)
                .setDrawerLayout(drawer)
                .build();
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_main);
        NavigationUI.setupActionBarWithNavController(this, navController, mAppBarConfiguration);
        NavigationUI.setupWithNavController(navigationView, navController);

        drawerProfileName=navigationView.getHeaderView(0).findViewById(R.id.nav_drawer_name);
        drawerProfileText=navigationView.getHeaderView(0).findViewById(R.id.nav_drawer_text_img);

        String name=DbQuery.myProfile.getName();
        drawerProfileName.setText(name);

        drawerProfileText.setText(name.toUpperCase().substring(0,1));

        setFragement(new CategoryFragment());
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if(drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        }else {
            super.onBackPressed();
        }
    }
/**
    @Override
    public boolean onNavigationItemSelected(MenuItem menuItem)
    {
        int id=menuItem.getItemId();

        if (id==R.id.nav_home){
            setFragement(new CategoryFragment());
        } else if (id==R.id.nav_account){
            setFragement(new AccountFragment());
        } else if (id==R.id.nav_leaderboard){
            setFragement(new LeaderBoardFragment());
        }

        DrawerLayout drawer=(DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);

        return true;
    };
**/


    @Override
    public boolean onCreateOptionsMenu(Menu menu)
    {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onSupportNavigateUp()
    {
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_main);
        return NavigationUI.navigateUp(navController, mAppBarConfiguration)
                || super.onSupportNavigateUp();
    }



    private void setFragement(Fragment fragement)
     {
         FragmentTransaction transaction=getSupportFragmentManager().beginTransaction();
         transaction.replace(main_frame.getId(),fragement);
         transaction.commit();
     }

}