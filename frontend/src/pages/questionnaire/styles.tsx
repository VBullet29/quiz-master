import MuiButton from "@mui/material/Button";
import MuiDialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import MuiDialogContentText from "@mui/material/DialogContentText";
import { styled } from "@mui/material/styles";
import { IAnswerWrapperProps } from "./types";

export const MainContainer = styled("main")({
    height: "100vh",
});

export const TopPart = styled("div")({
    backgroundColor: "#1D89E4",
    height: "35%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
})

export const BottomPart = styled("div")({
    backgroundColor: "#F2F2F2",
    height: "65%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
})

export const ButtonWrapper = styled("div")({
    height: "150px",
    display: "flex",
    alignItems: "center",
})

export const Button = styled(MuiButton)({
    backgroundColor: "#1D89E4",
    width: "80vw",
    height: "60px",
    color: "#FFF",
    ":hover": {
        backgroundColor: "#1D89E4",
        opacity: "0.8"
    }
})

export const NextButton = styled(Button)({
})

export const SubmitButton = styled(Button)({
})

export const Counter = styled("div")({
    position: "absolute",
    top: "-40px",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "3px solid #D7B87C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
})

export const QuestionWrapper = styled("div")({
    top: "calc(-150px / 2)",
    position: "relative",
    width: "80vw",
    backgroundColor: "#FFF",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    paddingTop: "25px"
})

export const Title = styled("h2")({
})

export const Question = styled("p")({
})

export const AnswersContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
})

export const AnswerWrapper = styled("div")<IAnswerWrapperProps>(({ selected }) => ({
    backgroundColor: "#FFF",
    width: "80vw",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: selected ? "3px solid #D7B87C" : "none",
    ":hover": {
        border: "3px solid #1D89E4",
        cursor: "pointer"
    }
}))

export const Answer = styled("p")({
    textAlign: "center",
})

export const Dialog = styled(MuiDialog)({
})

export const DialogTitle = styled(MuiDialogTitle)({
})

export const DialogContent = styled(MuiDialogContent)({
})

export const DialogContentText = styled(MuiDialogContentText)({
})

export const DialogActions = styled(MuiDialogActions)({
})