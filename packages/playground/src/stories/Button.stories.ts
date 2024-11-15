import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'

import { TkButton } from 'tk-element'
import { divide } from 'lodash-es'


type Story = StoryObj<typeof TkButton> & { argTypes: ArgTypes }
const meta: Meta<typeof TkButton> = {
  title: 'Example/Button',
  component: TkButton as any,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control:{ type: 'select' },
      options: ['primary', 'success', 'warning', 'info', 'danger']
    },
    size: {
      control:{ type: 'select' },
      options: ['large', 'default', 'small']
    },
    plain: {
    control: 'boolean'
    },
    round: {
    control: 'boolean'
    },
    circle: {
    control: 'boolean'
    },
    disabled: {
    control: 'boolean'
    },
    loading: {
    control: 'boolean'
    },
    nativeType: {
    control: { type: 'select' },
    options: ['button', 'submit', 'reset']
    },
    //  icon: {
    //   control: 'text'
    //  },
    //  loadingIcon: {
    //   control: 'text'
    //  },
    autofocus: {
    control: 'boolean'
    },
    useThrottle: {
    control: 'boolean'
    },
    throttleDuration: {
    control: 'number'
    }
  },
  args: {  onClick: fn() }
}

const container = (val: string) => `<div style="margin:5px">${val}</div>`

export const Default: Story & { args: {content: string }} = {
  argTypes: {
    content: {
      control: 'text',
    }
  },
  args: {
    type: 'primary',
    content: 'Button'
  },
  render: (args) => ({
    components: { TkButton },
    setup() {
      return { args };
    },
    template: container(`<tk-button v-bind="args">{{args.content}}</tk-button>`)
  })
}

export default meta
