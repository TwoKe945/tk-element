import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

export function makeInstaller(components: Plugin[]) {
  const installer: Plugin = (app: App) => {
    each(components, (comp) => app.use(comp));
  }
  return installer
}

type SFCWithInstall<T> = T &  Plugin

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name
    // register component
    app.component(name, component as SFCWithInstall<T>)
  }
  return component as SFCWithInstall<T>
}
