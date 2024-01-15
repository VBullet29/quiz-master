from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnswerViewSet
from .views import QuestionViewSet
from .views import QuestionnaireViewSet

router = DefaultRouter()
router.register(r'answers', AnswerViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'questionnaires', QuestionnaireViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
