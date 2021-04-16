import Head from "next/head";
import Page from "../components/shared/composers/page";
import { useRouter } from "next/router";
import TextButton from "../components/shared/buttons/text-button";
import Container from "../components/shared/composers/container";
import Flex from "../components/shared/composers/flex";
import TextInput from '../components/shared/inputs/text-input';
import Title from "../components/shared/text/title";
import SubTitle from "../components/shared/text/sub-title";
import Paragraph from "../components/shared/text/paragraph";

export default function Home() {

  // Attributes
  const router = useRouter();

  return (
    <Page>
      <Flex type="col" align="center" justify='center'>
        <Container fitHeight type="3xl" className="bg-white p-6 flex rounded-xl">
          <Flex type="col" align="start" justify="start">
            <Container>
              <Title>
                Welcome 👋
              </Title>
              <Paragraph className="font-light">
                Please Sign In to continue 
              </Paragraph>
            </Container>
            <Container fitHeight className="pt-8">
              <TextInput 
                placeholder="Insert your e-mail address"
                label="E-mail address" 
              />
              <TextInput 
                className="mt-4"
                placeholder="Insert your password"
                label="Password" 
              />
            </Container>
            <Container fitHeight className="mt-8">
              <TextButton>
                Sign In
              </TextButton>
            </Container>
            <Container fitHeight className="pt-12">
              <Flex justify="center" align="center">
                <Paragraph>
                  You don't have an account?
                </Paragraph>
              </Flex>
            </Container>
          </Flex>
        </Container>
      </Flex>
    </Page>
  )
}