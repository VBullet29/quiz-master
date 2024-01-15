import { TAnswer } from "./answer-type";

export type TQuestion = {
    id: number;
    text: string;
    answers: TAnswer[];
    questionnaireId: string;
}