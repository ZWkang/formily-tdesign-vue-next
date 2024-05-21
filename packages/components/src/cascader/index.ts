import { defineComponent, h } from 'vue'
import { useField } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { isVoidField, Field } from '@formily/core'
// import { ElCascader } from 'element-plus'
import { Cascader as TCascader } from 'tdesign-vue-next'

export type { CascaderProps } from 'tdesign-vue-next'

import { PreviewText } from '../preview-text'

// export const Cascader = connect(
//   ElCascader,
//   mapProps({ dataSource: 'options', value: 'modelValue' }),
//   mapReadPretty(PreviewText.Cascader)
// )

export const Cascader = observer(
  defineComponent({
    name: 'FCascader',
    props: ['onChange'],
    setup(props, { attrs, slots }: { [key: string]: any }) {
      const fieldRef = useField()
      return () => {
        const field = fieldRef.value as Field
        const Comp =
          field && !isVoidField(field) && field.pattern === 'readPretty'
            ? PreviewText.Cascader
            : TCascader
        return h(
          Comp,
          {
            ...attrs,
            options: field?.dataSource,
            modelValue: field?.value,
            onChange: (...args: any[]) => {
              props.onChange(...args)
            },
          },
          slots
        )
      }
    },
  })
)

export default Cascader
