import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'
import {
  TimePicker as TTimePicker,
  TimePickerProps,
  TimeRangePicker as TTimeRangePicker,
} from 'tdesign-vue-next'
import { Component, defineComponent, h } from 'vue'

export type { TimePickerProps } from 'tdesign-vue-next'

const MixinTimePicker: Component = defineComponent({
  name: 'FMixinTimePicker',
  setup(props, { attrs, slots }) {
    return () => {
      const isRange = attrs.isRange
      if (isRange) {
        // return <TTimeRangePicker {...attrs} v-slots={slots} />
        return h(
          TTimeRangePicker,
          {
            ...attrs,
          },
          slots
        )
      }

      return h(
        TTimePicker,
        {
          ...attrs,
        },
        slots
      )
    }
  },
})

const TransformElTimePicker = transformComponent<TimePickerProps>(
  MixinTimePicker,
  {
    change: 'update:modelValue',
  }
)

export const TimePicker = connect(
  TransformElTimePicker,
  mapProps((props) => {
    return {
      readOnly: 'readonly',
      value: 'modelValue',
    }
  }),
  mapReadPretty(PreviewText.TimePicker)
)

export default TimePicker
