import React, { useRef, useState } from "react";
import { Container, Wrapper } from "./style";
import { Input, Button } from "../../components/Generic";
import Footer from "../../components/Footer";
import { useQueries, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;
const SignUp = () => {
  const emailRef = useRef("");
  const pwRef = useRef("");

  return (
    <Container>
      <Wrapper>
        <h1 className="title">Registration</h1>
        <Input placeholder={"First name"} />
        <Input placeholder={"Last name"} />
        <Input ref={emailRef} placeholder={"Email"} />
        <Input ref={pwRef} placeholder={"Password"} />
        <Input placeholder={"Re-enter password"} />
        <Button width={"100%"} type={"primary"}>
          Register
        </Button>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SignUp;
