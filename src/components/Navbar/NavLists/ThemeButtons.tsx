'use client'

import { useTheme } from '@/context/ThemeState'
import { themeButtons } from '@/data/navbar-items'
import NavLinkItem from '../NavLinkItem'

const ThemeButtons = () => {
  const { theme, toggleTheme } = useTheme()
  const item = themeButtons[theme]

  return (
    <span onClick={toggleTheme}>
      <NavLinkItem
        title={item.title}
        showTitle={item.showTitle}
        icon={item.icon}
        dropdown={item.dropdown}
        isButton={item.isButton}
        buttonVariant={item.buttonVariant}
        buttonSize={item.buttonSize}
        className={item.className}
      />
    </span>
  )
}

export default ThemeButtons
