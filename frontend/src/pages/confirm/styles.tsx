import { Check } from "@mui/icons-material"
import { styled } from "@mui/material/styles"

export const MainContainer = styled("main")({
    height: "100vh",
})

export const InnerContainer = styled("div")({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
})

export const Middle = styled("div")({
    backgroundColor: "#1D89E4",
    width: "100%",
    height: "50%"
})

export const FirstMiddle = styled(Middle)({
    backgroundColor: "#1D89E4",
    width: "100%",
    height: "50%"
})

export const SecondMiddle = styled(Middle)({
    backgroundColor: "#F2F2F2",
    height: "50%"
})

export const Section = styled("div")({
    position: "absolute",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    gap: "20px",
    boxShadow: "0 0 35px -2px rgba(0,0,0,.2)"
})

export const Title = styled("h1")({
})

export const Description = styled("p")({
    textAlign: "center"
})

export const CheckIconWrapper = styled("div")({
    borderRadius: "50%",
    backgroundColor: "#1D89E4",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",

})

export const CheckIcon = styled(Check)({});