import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'

import { DatePicker as TDatePicker } from 'tdesign-vue-next'

import type { DatePickerProps as ElDatePickerProps } from 'tdesign-vue-next'

import { PreviewText } from '../preview-text'

export type DatePickerProps = ElDatePickerProps

const TransformElDatePicker = transformComponent<DatePickerProps>(TDatePicker, {
  change: 'update:modelValue',
})

const getDefaultFormat = (props: DatePickerProps, formatType = 'format') => {
  const type = props.mode

  if (type === 'week' && formatType === 'format') {
    return '[Week] ww'
  } else if (type === 'month') {
    return 'YYYY-MM'
  } else if (type === 'year') {
    return 'YYYY'
  }

  // else if (type === 'datetime' || type === 'datetimerange') {
  //   return 'YYYY-MM-DD HH:mm:ss'
  // }

  return 'YYYY-MM-DD'
}

export const DatePicker = connect(
  TransformElDatePicker,
  mapProps(
    {
      value: 'modelValue',
      readOnly: 'readonly',
    },
    (props: any) => {
      return {
        ...props,

        format: props.format || getDefaultFormat(props),
        valueFormat:
          props.valueFormat || getDefaultFormat(props, 'valueFormat'),
      }
    }
  ),
  mapReadPretty(PreviewText.DatePicker)
)

export default DatePicker
