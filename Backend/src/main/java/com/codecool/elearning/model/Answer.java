package com.codecool.elearning.model;

public class Answer {

    private String text;
    private boolean right;

    public Answer(boolean right, String text) {
        this.right = right;
        this.text = text;
    }

    public boolean isRight() {
        return right;
    }

    public String getText() {
        return text;
    }
}
