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
  getTodayMonth,
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
  jobs: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().min(3, "too short").required("Required"), // these constraints take precedence
      position: Yup.string().min(3, "too short").required("Required"), // these constraints take precedence
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

const JobsPage = ({ setFormStep }) => {
  const { formData, dispatch } = useContext(myContext);
  const handleRemove = (arrayHelpers, index) => {
    let deleteJob = window.confirm("You really wont delete this JOB");
    if (deleteJob) {
      return arrayHelpers.remove(index);
    }
  };

  return (
    <div>
      <Title>Work experience</Title>
      <SubTitle>Input your jobs data</SubTitle>
      <Formik
        initialValues={{ jobs: formData.jobs }}
        validationSchema={schema}
        onSubmit={(values) => {
          if (values.jobs.length) {
            dispatch({ type: "addJobs", data: values.jobs });

            setFormStep(2);
          } else {
            window.alert("Add at list 1 job");
          }
        }}
        render={({ values }) => (
          <FormStyled>
            <FieldArray
              name="jobs"
              render={(arrayHelpers) => (
                <div>
                  {values.jobs.map((_, index) => {
                    return (
                      <FormBlock key={index}>
                        <Label>
                          <ErrorMessage
                            name={`jobs.${index}.name`}
                            component="span"
                            className="field-error"
                          />
                          <Field type="text" name={`jobs.${index}.name`} />
                          <p>Company name</p>
                        </Label>
                        <Label>
                          <ErrorMessage
                            name={`jobs.${index}.position`}
                            component="span"
                            className="field-error"
                          />
                          <Field type="text" name={`jobs.${index}.position`} />
                          <p>Position</p>
                        </Label>
                        <Label>
                          <ErrorMessage
                            name={`jobs.${index}.startDate`}
                            component="span"
                            className="field-error"
                          />
                          <Field
                            type="month"
                            name={`jobs.${index}.startDate`}
                            max={getTodayMonth()}
                          />
                          <p>Start Date</p>
                        </Label>
                        <Label>
                          <ErrorMessage
                            name={`jobs.${index}.finishDate`}
                            component="span"
                            className="field-error"
                          />
                          <Field
                            type="month"
                            name={`jobs.${index}.finishDate`}
                            max={getTodayMonth()}
                          />
                          <p>Finish Date</p>
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
                    <Button onClick={() => setFormStep(0)}>GO BACK</Button>
                    <Button
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          name: "",
                          position: "",
                          startDate: "",
                          finishDate: "",
                        })
                      }
                    >
                      Add a job
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

export default JobsPage;
