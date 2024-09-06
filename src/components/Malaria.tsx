"use client";
import { useEffect, useState } from "react";
import { Stepper, Button, Group, Code, Progress, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import Question from "./Question";

export default function Malaria() {
  const [active, setActive] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (active == 9) {
      if (score > 5) {
        setResult(
          "It seams you are having Malaria, please see your doctor immediately"
        );
      } else {
        setResult("You are not having Malaria.");
      }
    }
  }, [active]);

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

  const handleYes = () => {
    setScore((score) => {
      return score + 1;
    });
    setActive((current) => {
      return current < 9 ? current + 1 : current;
    });
  };

  const handleNo = () => {
    setActive((current) => {
      return current < 9 ? current + 1 : current;
    });
  };

  const prevStep = () => {
    setScore((score) => {
      return score - 1;
    });
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
    <>
      <Stepper active={active}>
        <Stepper.Step label="" description="">
          <Question
            onClickNo={handleNo}
            onClickYes={handleYes}
            quest="Is your temperature high?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClickNo={handleNo}
            onClickYes={handleYes}
            quest="Are you feeling cold?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClickNo={handleNo}
            onClickYes={handleYes}
            quest="Are you having headache?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClickNo={handleNo}
            onClickYes={handleYes}
            quest="Are you feeling pain in your muscles and joints?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClickNo={handleNo}
            onClickYes={handleYes}
            quest="Do you fell tired without engaging in stressful work?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClickNo={handleNo}
            onClickYes={handleYes}
            quest="Are you vomiting?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClickNo={handleNo}
            onClickYes={handleYes}
            quest="Do you go to toilet often?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClickNo={handleNo}
            onClickYes={handleYes}
            quest="Are you having pain in your abdomen?"
          />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <Question
            onClickNo={handleNo}
            onClickYes={handleYes}
            quest="Are you feeling cold?"
          />
        </Stepper.Step>

        <Stepper.Completed>
          <Box mt="xl" ta="center">
            <h2>{result}</h2>
          </Box>
        </Stepper.Completed>
      </Stepper>
      <Progress value={(active / 9) * 100} />
      <h1>{score}</h1>
      <Group justify="flex-end" mt="xl">
        {/* {active !== 0 && (
          <Button m="md" variant="default" onClick={prevStep}>
            Back
          </Button>
        )} */}
        {/* {active !== 3 && <Button onClickNo={handleNo} onClickYes={handleYes}>Next step</Button>} */}
      </Group>
    </>
  );
}
