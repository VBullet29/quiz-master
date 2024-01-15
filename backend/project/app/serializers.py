from rest_framework import serializers
from .models import Questionnaire, Question, Answer


class NextQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'text']


class AnswerSerializer(serializers.ModelSerializer):
    next_question = NextQuestionSerializer(read_only=True)

    class Meta:
        model = Answer
        fields = ['id', 'text', 'next_question']


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True)  # Include related answers

    class Meta:
        model = Question
        fields = ['id', 'text', 'answers', 'questionnaire']


class QuestionnaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questionnaire
        fields = '__all__'
