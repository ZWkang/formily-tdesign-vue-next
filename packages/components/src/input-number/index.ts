import { transformComponent } from '../__builtins__'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import {
  InputNumber as TInputNumber,
  InputNumberProps as TInputNumberProps,
} from 'tdesign-vue-next'
import { PreviewText } from '../preview-text'

export type InputNumberProps = TInputNumberProps

const TransformElInputNumber = transformComponent<InputNumberProps>(
  TInputNumber,
  {
    change: 'update:modelValue',
  }
)

export const InputNumber = connect(
  TransformElInputNumber,
  mapProps(
    {
      value: 'modelValue',
      readOnly: 'readonly',
    },
    (props) => {
      return {
        modelValue: props.modelValue,
      }
    }
  ),
  mapReadPretty(PreviewText.Input)
)

export default InputNumber
