<script lang='ts' setup>
import { computed, ref } from 'vue';
import { ButtonProps, ButtonEmits, ButtonInstance } from './types'
import { throttle } from 'lodash-es'
import TkIcon from '../Icon/Icon.vue'
defineOptions({
  name: 'TkButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500
})

const emits = defineEmits<ButtonEmits>()
const slots = defineSlots()
const _ref = ref<HTMLButtonElement>()
const iconStyle = computed(() => ({ marginRight: slots.default ? '6px' : '0px' }))

const handleBtnClick = (e: MouseEvent) => emits('click', e)
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)

defineExpose<ButtonInstance>({
  ref: _ref
})
</script>

<template >
  <component
    :is="props.tag"
    ref="_ref"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    class="tk-button"
    :class="{
      [`tk-button--${type}`]: type,
      [`tk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <tk-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" size="1x" :style="iconStyle" spin></tk-icon>
      </slot>
    </template>
    <tk-icon v-if="icon && !loading" :icon="icon" :style="iconStyle" size="1x"></tk-icon>
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>
