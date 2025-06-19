import { defineDesktopConfig } from '@owdproject/core/runtime/utils/utilDesktop'

export default defineDesktopConfig({
    apps: ['@owdproject/app-about', "@owdproject/app-todo"],
    modules: [],
    theme: '@owdproject/theme-win95',
})
