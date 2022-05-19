import Button from './Button.svelte';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		backgroundColor: {
			control: 'color'
		},
		label: {
			control: 'text'
		},
		onClick: {
			action: 'onClick'
		},
		primary: {
			control: 'boolean'
		},
		count: {
			control: 'number',
			defaultValue: 1
		},
		size: {
			control: {
				type: 'select'
			},
			options: ['small', 'medium', 'large']
		}
	}
}; // More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args

export const Primary = (args, { loaded: { data } }) => ({
	Component: Button,
	props: {
		...args,
		// ...label, if you want to add the full objectt from your json as props
		label: data.title // if you only need a part of the json
	},
});

Primary.loaders = [
	async ({args}) => ({
		data: await (await fetch(`https://jsonplaceholder.typicode.com/todos/${args.count}`)).json(),
	}),
];

export const Secondary = {
	render: (args) => ({
		Component: Button,
		props: args,
		on: {
			click: args.onClick
		}
	}),
	args: {
		label: 'Button'
	}
};
export const Large = {
	render: (args) => ({
		Component: Button,
		props: args,
		on: {
			click: args.onClick
		}
	}),
	args: {
		size: 'large',
		label: 'Button'
	}
};

export const Small = {
	render: (args) => ({
		Component: Button,
		props: args,
		on: {
			click: args.onClick
		}
	}),
	args: {
		size: 'small',
		label: 'Button'
	}
};

/*export const Primary = {
	render: (args) => ({
		Component: Button,
		props: args,
		on: {
			click: args.onClick
		}
	}),
	args: {
		primary: true,
		label: 'Some Label'
	}
};*/