import type { Meta, StoryObj } from '@storybook/react';
import { Button } from ".";

export default {
	title: 'Example/Button',
	component: Button,
	tags: ['autodoc'],
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		style: {
			background: 'none',
		},
		buttonText: 'Show / Hide',
	}
};

export const Clicked: Story = {
	args: {
		...Default.args,
		style: {
			background: 'red',
		},
	}
};
