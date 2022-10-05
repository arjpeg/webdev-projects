from __future__ import annotations

from server.src import db


class Question(db.Model):
    question_text: str = models.Column(models.String(80), nullable=False)  # type: ignore
    question_id: int = models.Column(models.Integer, primary_key=True)  # type: ignore

    answer_choices: list[AnswerChoice] = models.relationship("AnswerChoice", backref="question") # type: ignore
    correct_answer: AnswerChoice = models.relationship("AnswerChoice", uselist=False backref="question") # type: ignore


class AnswerChoice(db.Model):
    text: str = models.Column(models.String(80), nullable=False)  # type: ignore
