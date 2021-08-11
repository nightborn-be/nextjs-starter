import Head from "next/head";
import Page from "../components/shared/composers/page";
import { useRouter } from "next/router";
import Container from "../components/shared/composers/container";
import Flex from "../components/shared/composers/flex";
import Paragraph from "../components/shared/text/paragraph";
import React from "react";
import Heading from "../components/shared/text/heading";
import TextButton from "../components/shared/button/text-button";
import { Formik } from "formik";

export default function Home() {
	// Attributes
	const router = useRouter();

	return (
		<Page>
			<Flex type="col" align="center" justify="center">
				<Container fitHeight type="3xl" className="bg-white p-6 flex rounded-xl">
					<Flex type="col" align="start" justify="start">
						<Container>
							<Heading type={1}>Welcome 👋</Heading>
							<Paragraph className="font-light">Please Sign In to continue</Paragraph>
						</Container>
						<Container fitHeight className="pt-8">
							{/* <TextInput 
                placeholder="Insert your e-mail address"
                label="E-mail address" 
              />
              <TextInput 
                className="mt-4"
                placeholder="Insert your password"
                label="Password" 
              /> */}
						</Container>
						<Container fitHeight className="mt-8">
							<TextButton text="Sign In" />
						</Container>
						<Container fitHeight className="pt-12">
							<Flex justify="center" align="center">
								<Paragraph>You don't have an account?</Paragraph>
							</Flex>
						</Container>
					</Flex>
				</Container>
			</Flex>
		</Page>
	);
}
