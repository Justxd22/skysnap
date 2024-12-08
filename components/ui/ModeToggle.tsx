"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { useHotkeys } from "react-hotkeys-hook"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  useHotkeys(["t"], () => {
    setTheme(theme === "light" ? "dark" : "light")
  })

  return (
<></>
  )
}
