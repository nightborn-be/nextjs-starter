import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/layout';
import Heading from '../typography/heading';
import Icons from '.';
import { COLORS } from '../../../constants/colors';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';

const Demo = () => {
	return (
		<Box maxW="31.25rem">
			<Heading>Icons</Heading>
			<Table mt={5}>
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>24x24</Th>
					</Tr>
				</Thead>
				<Tbody>
					{Object.keys(Icons).map((icon, index) => (
						<Tr
							key={`tr_${index}`}
							background={
								index % 2 == 0
									? COLORS.WHITE.hex
									: COLORS.GREY.T100.hex
							}
						>
							<Td>{icon}</Td>
							<Td>
								{Icons[icon]({
									height: 24,
									width: 24,
									fill: COLORS.GREY.T500.hex,
								})}
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</Box>
	);
};

export default {
	component: Demo,
	title: 'Foundations/Icons',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Demo {...args} />;

export const Default = Template.bind({});
