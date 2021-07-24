package com.nbs.it_cs_ce_mcq.Models;

public class RankModel {
    private int score;
    private int rank;

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public RankModel(int score, int rank) {
        this.score = score;
        this.rank = rank;
    }
}
