import axios from "axios";
import { routes } from "../../constants/route-constants";
import { TQuestion } from "../../types/question-type";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Title,
    Answer,
    TopPart,
    Counter,
    Question,
    NextButton,
    BottomPart,
    SubmitButton,
    AnswerWrapper,
    ButtonWrapper,
    MainContainer,
    QuestionWrapper,
    AnswersContainer,
} from "./styles";

function Questionnaire() {
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const [answers, setAnswers] = useState<any[]>([]);
    const [counter, setCounter] = useState(1);
    const [questions, setQuestions] = useState<TQuestion[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<any>("");
    const [currentQuestion, setCurrentQuestion] = useState<any>({});

    const setNextQuestion = () => {
        const nextQuestion = questions.find(question => question.id === selectedAnswer.next_question?.id);
        setCurrentQuestion(nextQuestion);
    }

    const handleNext = () => {
        setCounter(counter + 1);
        setNextQuestion();
        setAnswers([...answers, selectedAnswer]);
    }

    const handleSubmit = () => {
        navigate(routes.confirm, { state: { answers: [...answers, selectedAnswer] } });
    }

    const handleClickAnswer = (answer: string) => {
        setSelectedAnswer(answer);
    }

    useEffect(() => {
        const getQuestions = async () => {
            const response = await axios.get(`/api/questions/questionnaire_id/${id}`);
            setQuestions(response.data);
            setCurrentQuestion(response.data[0]);
        }
        getQuestions();
    }, [id])

    if (questions.length === 0) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <MainContainer>
            <TopPart />
            <BottomPart>
                <QuestionWrapper>
                    <Counter>
                        {counter}
                    </Counter>
                    <Title>
                        Question
                    </Title>
                    <Question>
                        {currentQuestion.text}
                    </Question>
                </QuestionWrapper>
                <AnswersContainer>
                    {
                        currentQuestion.answers.map((answer: any) => {
                            return (
                                <AnswerWrapper
                                    key={answer.id}
                                    selected={answer.id === selectedAnswer.id}
                                    onClick={() => handleClickAnswer(answer)}
                                >
                                    <Answer>
                                        {answer.text}
                                    </Answer>
                                </AnswerWrapper>
                            )
                        })
                    }
                </AnswersContainer>
                <ButtonWrapper>
                    {selectedAnswer.next_question ? <NextButton onClick={handleNext}>Next</NextButton> : <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>}
                </ButtonWrapper>
            </BottomPart>
        </MainContainer>
    )
}

export default Questionnaire;