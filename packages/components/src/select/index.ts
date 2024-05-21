import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { defineComponent, h } from 'vue'
import { PreviewText } from '../preview-text'

// import { ElSelect, ElOption } from 'element-plus'
import { Select as TSelect, Option as TOption } from 'tdesign-vue-next'
import type {
  SelectProps as TSelectProps,
  OptionProps as TOptionProps,
} from 'tdesign-vue-next'
import { resolveComponent, transformComponent } from '../__builtins__'

export type SelectProps = TSelectProps & {
  options?: Array<TOptionProps>
}

const TransformElSelect = transformComponent<SelectProps>(TSelect, {
  change: 'update:modelValue',
})

const InnerSelect = connect(
  TransformElSelect,
  mapProps({ value: 'modelValue', readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Select)
)

const SelectOption = defineComponent({
  name: 'FSelect',
  props: ['options'],
  setup(customProps, { attrs, slots }) {
    return () => {
      const options = customProps.options || []
      const children =
        options.length !== 0
          ? {
              default: () =>
                options.map((option: any) => {
                  if (typeof option === 'string') {
                    return h(
                      TOption,
                      { key: option, value: option, label: option },
                      {
                        default: () => [
                          resolveComponent(slots?.option ?? option, { option }),
                        ],
                      }
                    )
                  } else {
                    return h(TOption, {
                      key: option.value,
                      ...option,
                    })
                  }
                }),
            }
          : slots
      return h(
        InnerSelect,
        {
          ...attrs,
        },
        children
      )
    }
  },
})

export const Select = connect(
  SelectOption,
  mapProps({ dataSource: 'options', loading: true }),
  mapReadPretty(PreviewText.Select)
)

export default Select
