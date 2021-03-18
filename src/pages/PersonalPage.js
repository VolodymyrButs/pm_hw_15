import React, { useContext, useState } from "react";
import styled from "styled-components";

import { myContext } from "../contextProvider";
import {
  Title,
  SubTitle,
  Button,
  FormBlock,
  BottomBlock,
} from "../components/common";

const Form = styled.form`
  width: 500px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  label {
    font-size: 10px;
    margin: 2px 0 10px 5px;
  }
`;

const FormPersonal = ({ setFormStep }) => {
  const { formData, dispatch } = useContext(myContext);
  const { firstName, lastName, phone, email } = formData.personal;
  const [firstNameValue, setFirstNameValue] = useState(firstName);
  const [lastNameValue, setlastNameValue] = useState(lastName);
  const [phoneValue, setPhoneValue] = useState(phone);
  const [emailValue, setEmailValue] = useState(email);
  const data = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    phone: phoneValue,
    email: emailValue,
  };

  return (
    <>
      <Title>Create your own resume</Title>
      <SubTitle>Input your persohal data</SubTitle>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "addPersonal", data: data });

          setFormStep(1);
        }}
      >
        <FormBlock>
          <input
            type="text"
            id="firstName"
            defaultValue={firstNameValue ? firstNameValue : ""}
            required
            onChange={(e) => setFirstNameValue(e.target.value)}
            minLength={3}
            placeholder="Input first name (min 3 characters)"
          />
          <label htmlFor="firstName">First Name</label>

          <input
            type="text"
            id="lastName"
            defaultValue={lastNameValue ? lastNameValue : ""}
            required
            onChange={(e) => setlastNameValue(e.target.value)}
            minLength={3}
            placeholder="Input last name (min 3 characters)"
          />
          <label htmlFor="lastName">Last Name</label>

          <input
            type="phone"
            id="phone"
            defaultValue={phoneValue ? phoneValue : ""}
            required
            pattern="\+380+[0-9]{9}"
            onChange={(e) => setPhoneValue(e.target.value)}
            placeholder="Input number (+380XXXXXXXXX)"
            title="Format requested +380XXXXXXXXX"
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="email"
            id="email"
            defaultValue={emailValue ? emailValue : ""}
            required
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Input email"
          />
          <label htmlFor="email">Email adress</label>
        </FormBlock>
        <BottomBlock>
          <p></p>
          <Button type="submit">SAVE AND GO TO NEXT PAGE</Button>
        </BottomBlock>
      </Form>
    </>
  );
};

export default FormPersonal;
