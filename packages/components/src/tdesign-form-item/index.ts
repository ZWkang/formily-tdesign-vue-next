import { isVoidField } from '@formily/core'
import { connect, mapProps } from '@formily/vue'

import type { TdFormItemProps } from 'tdesign-vue-next'
import { FormItem } from 'tdesign-vue-next'

export type ElFormItemProps = TdFormItemProps & { title: string }

export const ElFormItem = connect(
  FormItem,
  mapProps({ title: 'label', required: true }, (props, field) => ({
    error: !isVoidField(field) ? field.selfErrors[0] ?? undefined : undefined,
  }))
)

export default ElFormItem
