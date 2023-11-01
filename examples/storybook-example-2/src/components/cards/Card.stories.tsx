import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

export default {
	title: 'Example/Card',
	component: Card,
	tags: ['autodoc'],
	decorators: [
		(Story) => (
			<div style={{ padding: '20px', textAlign: 'center', maxWidth: '400px' }}>
				<Story />
			</div >
		)
	]
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		name: 'TranVanA',
		phone: '0333444888'
	}
};
