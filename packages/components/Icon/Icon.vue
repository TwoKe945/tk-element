<script lang='ts' setup>
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'
import { omit } from 'lodash-es'

defineOptions({
  name: 'TkIcon',
  inheritAttrs: false
})

const props = withDefaults(defineProps<IconProps>(), {
  type: 'primary'
})
const filterProps = computed(() => omit(props, ['icon', 'type']) as any)
const customStyles = computed(() => ({color: props.color ?? void 0}))
</script>

<template>
  <i :class="[`tk-icon--${props.type}`]" :style="customStyles" v-bind="$attrs" >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style scoped>
@import './style.css';
</style>
