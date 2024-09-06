"use client";
import { useEffect, useState } from "react";
import {
  Stepper,
  Button,
  Group,
  Code,
  Progress,
  Box,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Question from "./Question";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function Typhoid() {
  const [active, setActive] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (active == 9) {
      if (score > 5) {
        setResult(
          "It seams you are having Typhoid, please see your doctor immediately"
        );
        setColor("var(--mantine-color-red-7)");
      } else {
        setResult("Congratulations! You are not having Typhoid. Thank you.");
        setColor("var(--mantine-color-green-7)");
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
            quest="Have you lost your appetite?"
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
            <Text fz="lg" c={color}>
              {result}
            </Text>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Link href={"/"} passHref>
              <Button mt="xl" radius="xl" className={styles.control} size="lg">
                Go back to home page
              </Button>
            </Link>
          </Box>
        </Stepper.Completed>
      </Stepper>
      {active < 9 && <Progress mt="lg" value={(active / 9) * 100} />}

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
