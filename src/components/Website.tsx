"use client";
import Link from "next/link";
import styles from "../app/page.module.css";
import {
  Title,
  Text,
  Button,
  Container,
  Grid,
  Image,
  Box,
} from "@mantine/core";
export default function Website() {
  return (
    <div>
      <div className={styles.main}>
        <Container className={styles.wrapper}>
          <Grid>
            <Grid.Col visibleFrom="md" span={{ lg: 4, md: 3 }}>
              <Box style={{ display: "flex", justifyContent: "end" }}>
                <Image maw="310" h="auto" src={"./images/3.png"} alt="" />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ lg: 8, md: 9 }}>
              <div style={{ justifyContent: "start" }} className={styles.inner}>
                <Title className={styles.smart}>SMART </Title>
                <Title className={styles.healthcare}>
                  HEALTHCARE{" "}
                  <Text
                    c="#ff4912"
                    component="span"
                    fs="italic"
                    className={styles.system}
                    inherit
                  >
                    system
                  </Text>
                </Title>

                <Text
                  mt="xl"
                  pt="lg"
                  fs="italic"
                  size="lg"
                  c="var(--mantine-color-white)"
                  className={styles.description}
                >
                  Our advanced healthcare platform combines cutting-edge
                  technology, data-driven insights, and a dedicated focus on
                  personalized care to revolutionize the way you manage your
                  health and wellness throughout your lifetime.
                </Text>

                <div className={styles.controls}>
                  <Button
                    radius="xl"
                    className={styles.control}
                    mr={{ md: 20 }}
                    size="lg"
                    bg="#fa1b35"
                    c="var(--mantine-color-white)"
                  >
                    How it works
                  </Button>
                  <Link href={"/diagnose"} passHref>
                    <Button
                      radius="xl"
                      c="#fa1b35"
                      bg="var(--mantine-color-white)"
                      className={styles.control}
                      size="lg"
                    >
                      Diagnose me
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
