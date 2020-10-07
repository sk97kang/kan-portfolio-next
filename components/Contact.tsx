import React from "react";
import Section from "./Section";

import styled from "styled-components";
import commonStyle from "../styles/commonStyle";

const Container = styled.div`
  ${commonStyle.grid}

  /* row-gap: 2rem; */
  justify-items: center;

  @media (min-width: 768px) {
    /* grid-template-columns: repeat(2, 1fr); */
    justify-items: center;
  }
`;

const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.first};
`;

const Text = styled.span`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.margins.mb2};
`;

const ContactInfo = styled.div``;

// const Inputs = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   column-gap: 1rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.8rem;
//   outline: none;
//   border: 1.5px solid ${({ theme }) => theme.colors.dark};
//   font-size: ${({ theme }) => theme.fontSizes.normal};
//   margin-bottom: ${({ theme }) => theme.margins.mb4};
//   border-radius: 0.5rem;
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   padding: 0.8rem;
//   outline: none;
//   border: 1.5px solid ${({ theme }) => theme.colors.dark};
//   font-size: ${({ theme }) => theme.fontSizes.normal};
//   margin-bottom: ${({ theme }) => theme.margins.mb4};
//   border-radius: 0.5rem;
// `;

// const Button = styled.input`
//   display: block;
//   background-color: ${({ theme }) => theme.colors.first};
//   color: ${({ theme }) => theme.colors.white};
//   padding: 0.75rem 2.5rem;
//   margin-left: auto;
//   border-radius: 0.5rem;
//   border: none;
//   outline: none;
//   font-size: ${({ theme }) => theme.fontSizes.normal};
//   cursor: pointer;
// `;

// const Form = styled.form`
//   @media (min-width: 768px) {
//     width: 380px;
//   }
// `;

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Container>
        <ContactInfo>
          <Subtitle>EMAIL</Subtitle>
          <Text>sk97.kang@gmail.com</Text>

          <Subtitle>PHONE</Subtitle>
          <Text>010-2173-8130</Text>

          <Subtitle>ADRESS</Subtitle>
          <Text>서울시 구로구</Text>
        </ContactInfo>

        {/* <Form>
          <Inputs>
            <Input type="text" placeholder="Name" />
            <Input type="mail" placeholder="Email" />
          </Inputs>

          <Textarea name="" id=""></Textarea>

          <Button type="submit" value="Enviar" />
        </Form> */}
      </Container>
    </Section>
  );
}

export default Contact;
