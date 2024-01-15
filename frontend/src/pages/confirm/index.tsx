import { TAnswer } from "../../types/answer-type";
import { useLocation } from "react-router-dom";
import { MainContainer } from "../questionnaire/styles";
import { CheckIcon, CheckIconWrapper, Description, FirstMiddle, InnerContainer, SecondMiddle, Section, Title } from "./styles";

function Confirm() {
    const location = useLocation();

    const answers = location.state.answers as TAnswer[];

    return (
        <MainContainer>
            <InnerContainer>
                <FirstMiddle />
                <SecondMiddle />
                <Section>
                    <Title>
                        Thank you for your time!
                    </Title>
                    <Description>
                        {`Your answers ${answers.map((answer) => answer.text)} have been submitted.`}
                    </Description>
                    <CheckIconWrapper>
                        <CheckIcon />
                    </CheckIconWrapper>
                </Section>
            </InnerContainer>
        </MainContainer>
    );
}

export default Confirm;