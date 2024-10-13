import { Container, Title, Accordion, Image, Flex } from "@mantine/core";
import classes from "./faq.module.css";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];
export function Faq() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>
            {" "}
            <Flex>
              {placeholder}
              <Image
                className={classes.faqImage}
                m={10}
                ml={30}
                src={images[1]}
                height={180}
                w={180}
              />
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            Can I create more that one account?
          </Accordion.Control>
          <Accordion.Panel>
            <Flex>
              {placeholder}
              <Image
                className={classes.faqImage}
                m={10}
                ml={30}
                src={images[0]}
                height={180}
                w={180}
              />
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            How can I subscribe to monthly newsletter?
          </Accordion.Control>
          <Accordion.Panel>
            {" "}
            <Flex>
              {placeholder}
              <Image
                className={classes.faqImage}
                m={10}
                ml={30}
                src={images[4]}
                height={180}
                w={180}
              />
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            Do you store credit card information securely?
          </Accordion.Control>
          <Accordion.Panel>
            {" "}
            <Flex>
              {placeholder}
              <Image
                className={classes.faqImage}
                m={10}
                ml={30}
                src={images[2]}
                height={180}
                w={180}
              />
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            What payment systems to you work with?
          </Accordion.Control>
          <Accordion.Panel>
            {" "}
            <Flex>
              {placeholder}
              <Image
                className={classes.faqImage}
                m={10}
                ml={30}
                src={images[3]}
                height={180}
                w={180}
              />
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
