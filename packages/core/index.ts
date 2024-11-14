export * from '@tk-element/components'
import { makeInstaller } from '@tk-element/utils'
import components from './components'
import '@tk-element/theme/index.css'

export default makeInstaller(components)
