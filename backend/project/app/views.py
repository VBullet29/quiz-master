from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Answer
from .models import Question
from .models import Questionnaire
from .serializers import AnswerSerializer
from .serializers import QuestionSerializer
from .serializers import QuestionnaireSerializer


def update_question_data(questions_data, question_text, question_obj):
    for question_data in questions_data:
        if question_data["text"] == question_text:
            question_data["question"] = question_obj

        for answer_data in question_data["answers"]:
            if answer_data["next_question_text"] == question_text:
                answer_data["next_question"] = question_obj


class QuestionnaireViewSet(viewsets.ModelViewSet):
    queryset = Questionnaire.objects.all()
    serializer_class = QuestionnaireSerializer

    @action(detail=False, methods=['post'])
    def generate(self, request):
        Answer.objects.all().delete()
        Question.objects.all().delete()
        Questionnaire.objects.all().delete()

        questionnaire = Questionnaire.objects.create()

        questions_data = [
            {
                "text": "Do you prefer tea or coffee?",
                "answers": [
                    {
                        "text": "Tea",
                        "next_question_text": "What kind of tea do you prefer?"
                    },
                    {
                        "text": "Coffee",
                        "next_question_text": "Do you like your coffee black?"
                    }
                ]
            },
            {
                "text": "What kind of tea do you prefer?",
                "answers": [
                    {
                        "text": "Green Tea",
                        "next_question_text": None
                    },
                    {
                        "text": "Black Tea",
                        "next_question_text": None
                    }
                ]
            },
            {
                "text": "Do you like your coffee black?",
                "answers": [
                    {
                        "text": "Yes",
                        "next_question_text": None
                    },
                    {
                        "text": "No",
                        "next_question_text": "Do you add milk or sugar?"
                    }
                ]
            },
            {
                "text": "Do you add milk or sugar?",
                "answers": [
                    {
                        "text": "Milk",
                        "next_question_text": None
                    },
                    {
                        "text": "Sugar",
                        "next_question_text": None
                    }
                ]
            }
        ]

        for question_data in questions_data:
            question = Question.objects.create(questionnaire=questionnaire, text=question_data["text"])
            update_question_data(questions_data, question_data["text"], question)

        for question_data in questions_data:
            for answer_data in question_data["answers"]:
                Answer.objects.create(
                    question=question_data["question"],
                    text=answer_data["text"],
                    next_question=answer_data.get("next_question", None)
                )

        return Response(status=status.HTTP_201_CREATED)


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    @action(detail=False, methods=['get'], url_path='questionnaire_id/(?P<questionnaire_id>[^/.]+)')
    def questionnaire_id(self, request, questionnaire_id=None):
        questions = self.get_queryset().filter(questionnaire_id=questionnaire_id)
        serializer = self.get_serializer(questions, many=True)
        return Response(serializer.data)


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

