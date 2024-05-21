import { connect, mapProps } from '@formily/vue'

import { Switch as _Switch } from 'tdesign-vue-next'
export type { SwitchProps } from 'tdesign-vue-next'

export const Switch = connect(_Switch, mapProps({ readOnly: 'readonly' }))

export default Switch
