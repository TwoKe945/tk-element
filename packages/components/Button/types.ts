import { Component, Ref } from "vue"

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'large' | 'default' | 'small'

export interface ButtonProps {
  tag: string|Component
  type?: ButtonType
  size?: ButtonSize
  nativeType?: NativeType
  disabled?: boolean
  loading?: boolean
  loadingIcon?: string
  icon?: string
  circle?: boolean
  plain?: boolean
  round?: boolean
  autofocus?: boolean
  useThrottle?: boolean
  throttleDuration?: number
}

export interface ButtonEmits {
  (e: 'click', val: MouseEvent): void
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | undefined>
}
