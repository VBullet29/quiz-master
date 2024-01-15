import { TQuestion } from "./question-type";

export type TAnswer = {
    id: number;
    text: string;
    next_question: Pick<TQuestion, "id" | "text">
};