import {
  buttonTypeOptions,
  defaultProps
} from './../../components/Button/model'

export const desc_ButtonProps = {
  type: {
    control: {
      type: 'select'
    },
    options: buttonTypeOptions,
    description:
      'Specify "submit" for form submit button, "reset" for form reset button, and "button" for other buttons',
    table: {
      category: 'html',
      type: {
        summary: null
      },
      defaultValue: {
        summary: defaultProps.type
      }
    }
  },
  children: {
    control: {
      type: 'text'
    },
    description: 'Element to be displayed as a button label. ',
    table: {
      category: 'react',
      type: {
        summary: null
      }
    },
    type: {
      required: true
    }
  },
  violationCheck: {
    control: {
      type: 'boolean'
    },
    description:
      'Whether to display warning CSS when specification violations are detected',
    table: {
      category: 'semantics',
      type: {
        summary: null
      },
      defaultValue: {
        summary: defaultProps.violationCheck
      }
    }
  },
  cssReset: {
    control: {
      type: 'boolean'
    },
    description: 'Whether to apply reset CSS',
    table: {
      category: 'style',
      type: {
        summary: null
      },
      defaultValue: {
        summary: defaultProps.cssReset
      }
    }
  }
}
