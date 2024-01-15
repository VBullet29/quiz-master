import uuid
from django.db import models


class Questionnaire(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        db_table = 'questionnaires'


class Question(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    questionnaire = models.ForeignKey(Questionnaire, related_name='questions', on_delete=models.CASCADE)
    text = models.TextField()

    class Meta:
        db_table = 'questions'


class Answer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    text = models.CharField(max_length=1024)
    next_question = models.ForeignKey(Question, related_name='next_for_answer', on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        db_table = 'answers'
