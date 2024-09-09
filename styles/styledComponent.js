"use client";
import styled from "styled-components";

export const Text = styled.p((props) => ({
  fontSize: props.$size || "24px",
  fontWeight: props.$fontWeight || 400,
  color: props.$color || "var(--textColor)",
}));

export const SectionTitle = styled.h2((props) => ({
  fontSize: props.$size || "80px",
  color: props.$color || "var(--secondaryColor)",
  "@media (max-width: 990px)": {
    fontSize: "47px",
    lineHeight: "60px",
  },
  "@media (max-width: 600px)": {
    fontSize: "45px",
    lineHeight: "58px",
  },
}));

export const PageTitle = styled.h1((props) => ({
  fontSize: props.$size || "60px",
  fontWeight: 400,
  color: props.$color || "var(--primaryColor)",
  "@media (max-width: 600px)": {
    fontSize: "40px",
  },
}));

export const SubTitle = styled.h4((props) => ({
  fontSize: props.$size || "45px",
  fontWeight: 400,
  fontFamily: "Mr De Haviland",
  color: "var(--accentColor)",
}));

export const ErrorText = styled.p((props) => ({
  fontSize: props.$size || "14px",
  fontWeight: props.$fontWeight || 500,
  textAlign: props.$textAlign || "left",
  color: props.$color || "red",
  width: "100%",
}));
