import { connect, mapProps } from '@formily/vue'

import { Transfer as _Transfer } from 'tdesign-vue-next'
export type { TransferProps } from 'tdesign-vue-next'

export const Transfer = connect(
  _Transfer,
  mapProps({ dataSource: 'data', value: 'modelValue' })
)

export default Transfer
