<template>
  <FormProvider :form="form">
    <Field
      name="input"
      title="单选"
      :decorator="[FormItem]"
      :component="[Transfer]"
      :dataSource="[
        {
          label: '选项1',
          key: 1,
        },
        {
          label: '选项2',
          key: 2,
        },
      ]"
    />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/vue'
import { FormItem, Transfer, Submit } from 'formilyjs-tdesign-vue-next'

const form = createForm()

const log = (value) => {
  console.log(value)
}
</script>
