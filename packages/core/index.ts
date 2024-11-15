export * from '../components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { makeInstaller } from '@tk-element/utils'
import components from './components'
import '@tk-element/theme/index.css'

library.add(fas)
export default makeInstaller(components)
