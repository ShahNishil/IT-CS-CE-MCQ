package com.nbs.it_cs_ce_mcq;

public class  TestModel {

    private String testID;
    private int topScore;
    private int time;
    private String topicName;

    public TestModel(String testID, int topScore, int time, String topicName) {
        this.testID = testID;
        this.topScore = topScore;
        this.time = time;
        this.topicName = topicName;
    }


    public TestModel(String testID, int topScore, int time) {
        this.testID = testID;
        this.topScore = topScore;
        this.time = time;
    }

    public String getTestID() {
        return testID;
    }

    public void setTestID(String testID) {
        this.testID = testID;
    }

    public int getTopScore() {
        return topScore;
    }

    public void setTopScore(int topScore) {
        this.topScore = topScore;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }
}
