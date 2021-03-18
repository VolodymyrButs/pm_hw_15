import React, { useContext } from "react";
import { myContext } from "../contextProvider";
import styled from "styled-components";

import { Title, Button } from "../components/common";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1000px;
  margin: 10px auto;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #333;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  margin: 5px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 695px;
  margin: 5px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
`;
const Logo = styled.div`
  background-color: #345456;
  width: 200px;
  border-radius: 50%50%;
  margin: 10px auto;
  font-size: 70px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  line-height: 200px;
`;
const Name = styled(Title)`
  text-align: left;
  text-transform: uppercase;
`;
const Link = styled.a`
  font-size: 20px;
  color: #000;
  margin: 5px 0;
  text-decoration: none;
  cursor: pointer;
`;
const ItemWrapper = styled.div`
  position: relative;
  font-size: 20px;
  border: 1px solid #333;
  margin: 5px 0;
  padding: 10px;
  border-radius: 10px;
  span {
    font-weight: bold;
    margin-left: 10px;
  }
`;
const Count = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid #333;
  text-align: center;
  border-radius: 50%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1000px;
  margin: 10px auto;
`;

const ResumePage = ({ setFormStep }) => {
  const { formData } = useContext(myContext);
  return (
    <>
      <Title>RESUME</Title>
      <Wrapper>
        <LeftSide>
          <Logo>{formData.personal.firstName.charAt(0)}</Logo>
          <Name>
            {formData.personal.firstName}
            <br /> {formData.personal.lastName}
          </Name>
          <Link href={`mailto:${formData.personal.email}`}>
            {formData.personal.email}
          </Link>
          <Link href={`tel:${formData.personal.phone}`}>
            {formData.personal.phone}
          </Link>
        </LeftSide>
        <Main>
          <Title>STUDYS</Title>
          {formData.study.map((item, index) => {
            return (
              <ItemWrapper>
                <p>
                  School: <span>{item.name}</span>
                </p>
                <p>
                  Specialty: <span>{item.specialty}</span>
                </p>
                <p>
                  Study period:
                  <span>
                    {item.startDate.replaceAll("-", "/")} -{" "}
                    {item.finishDate.replaceAll("-", "/")}
                  </span>
                </p>
                <Count>{index + 1}</Count>
              </ItemWrapper>
            );
          })}
          <Title>JOBS</Title>
          {formData.jobs.map((item, index) => {
            return (
              <ItemWrapper>
                <p>
                  Company: <span>{item.name}</span>
                </p>
                <p>
                  Position: <span>{item.position}</span>
                </p>
                <p>
                  Work period:
                  <span>
                    {item.startDate.replaceAll("-", "/")} -{" "}
                    {item.finishDate.replaceAll("-", "/")}
                  </span>
                </p>
                <Count>{index + 1}</Count>
              </ItemWrapper>
            );
          })}
        </Main>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={() => setFormStep(2)}>GO BACK</Button>
      </ButtonWrapper>
    </>
  );
};

export default ResumePage;
