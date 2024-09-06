"use client";
import { useState } from "react";
import { Stepper, Button, Group, Code, Progress } from "@mantine/core";
import { useForm } from "@mantine/form";
import Question from "./Question";

export default function Steps() {
  const [active, setActive] = useState(0);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
      name: "",
      email: "",
      website: "",
      github: "",
    },
  });

  const nextStep = () =>
    setActive((current) => {
      return current < 9 ? current + 1 : current;
    });

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active}>
        {/* <Stepper.Step label="" description="">
          <Question onClick={nextStep} quest="Is your temperature high?" />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question onClick={nextStep} quest="Are you feeling cold?" />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question onClick={nextStep} quest="Are you having headache?" />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClick={nextStep}
            quest="Are you feeling pain in your muscles and joints?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClick={nextStep}
            quest="Do you fell tired without engaging in stressful work?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question onClick={nextStep} quest="Are you vomiting?" />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question onClick={nextStep} quest="Do you go to toilet often?" />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClick={nextStep}
            quest="Are you having pain in your abdomen?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question onClick={nextStep} quest="Are you feeling cold?" />
        </Stepper.Step> */}
        {/* 1. Fever (high temperature) 
        2. Chills 
        3. Headache 
        4. Muscle and joint
        pain 
        5. Fatigue (extreme tiredness) 
        6. Nausea and vomiting 
        7. Diarrhea
        8. Abdominal pain */}
        <Stepper.Completed>
          Completed! Form values:
          <Code block mt="xl">
            {JSON.stringify(form.getValues(), null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>
      <Progress value={(active / 9) * 100} />
      <Group justify="flex-end" mt="xl">
        {active !== 0 && (
          <Button m="md" variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {/* {active !== 3 && <Button onClick={nextStep}>Next step</Button>} */}
      </Group>
    </>
  );
}
