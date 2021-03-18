import React, { useContext } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

import { myContext } from "../contextProvider";
import {
  Title,
  SubTitle,
  FormBlock,
  BottomBlock,
  Button,
  getToday,
} from "../components/common";

const FormStyled = styled(Form)`
  width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  input {
    width: 100%;
  }
  p {
    margin: 2px 0 10px 5px;
    font-size: 10px;
  }
  span {
    color: red;
    font-size: 10px;
  }
`;

const schema = Yup.object().shape({
  study: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().min(3, "too short").required("Required"), // these constraints take precedence
      specialty: Yup.string().min(3, "too short").required("Required"), // these constraints take precedence
      startDate: Yup.date()
        .min("01-01-1970", "Scould be after 01-01-1970")
        .max(new Date(), "Scould be before today")
        .max(Yup.ref("finishDate"), "Start scould be before finish")
        .required("Required"),
      finishDate: Yup.date()
        .min("01-01-1970", "Scould be after 01-01-1970")
        .max(new Date(), "Scould be before today")
        .required("Required"),
    })
  ),
});

const StudyPage = ({ setFormStep }) => {
  const { formData, dispatch } = useContext(myContext);
  const handleRemove = (arrayHelpers, index) => {
    let deleteStudy = window.confirm("You really wont delete this STUDY");
    if (deleteStudy) {
      return arrayHelpers.remove(index);
    }
  };

  return (
    <div>
      <Title>Education experience</Title>
      <SubTitle>Input your study data</SubTitle>
      <Formik
        initialValues={{ study: formData.study }}
        validationSchema={schema}
        onSubmit={(values) => {
          if (values.study.length) {
            dispatch({ type: "addStudy", data: values.study });
            setFormStep(3);
          } else {
            window.alert("Add at list 1 study");
          }
        }}
        render={({ values }) => (
          <FormStyled>
            <FieldArray
              name="study"
              render={(arrayHelpers) => (
                <div>
                  {values.study.map((_, index) => {
                    return (
                      <FormBlock key={index}>
                        <Label>
                          <ErrorMessage
                            name={`study.${index}.name`}
                            component="span"
                            className="field-error"
                          />
                          <Field type="text" name={`study.${index}.name`} />
                          <p> Name of school</p>
                        </Label>
                        <Label>
                          <ErrorMessage
                            name={`study.${index}.specialty`}
                            component="span"
                            className="field-error"
                          />
                          <Field
                            type="text"
                            name={`study.${index}.specialty`}
                          />
                          <p>Specialty</p>
                        </Label>
                        <Label>
                          <ErrorMessage
                            name={`study.${index}.startDate`}
                            component="span"
                            className="field-error"
                          />
                          <Field
                            type="date"
                            name={`study.${index}.startDate`}
                            max={getToday()}
                          />
                          <p>Start Date</p>
                        </Label>
                        <Label>
                          <ErrorMessage
                            name={`study.${index}.finishDate`}
                            component="span"
                            className="field-error"
                          />
                          <Field
                            type="date"
                            name={`study.${index}.finishDate`}
                            max={getToday()}
                          />
                          <p> Finish Date</p>
                        </Label>
                        <Button
                          onClick={() => handleRemove(arrayHelpers, index)} // remove a friend from the list
                        >
                          Remove
                        </Button>
                      </FormBlock>
                    );
                  })}
                  <BottomBlock>
                    <Button onClick={() => setFormStep(1)}>GO BACK</Button>
                    <Button
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          name: "",
                          specialty: "",
                          startDate: "",
                          finishDate: "",
                        })
                      }
                    >
                      Add a study
                    </Button>

                    <div>
                      <Button type="submit">SAVE AND GO TO NEXT PAGE</Button>
                    </div>
                  </BottomBlock>
                </div>
              )}
            />
          </FormStyled>
        )}
      />
    </div>
  );
};

export default StudyPage;
