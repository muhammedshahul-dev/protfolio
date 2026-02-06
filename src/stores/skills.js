
import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('Skills', () => {
  const skills=[
  {
    id: crypto.randomUUID,
    skill:"html"
  },
  {
    id: crypto.randomUUID,
    skill:"javaScript"
  },
  {
    id: crypto.randomUUID,
    skill:"Css"
  },
  {
    id: crypto.randomUUID,
    skill:"TailWind"
  },
  {
    id: crypto.randomUUID,
    skill:"vue.js"
  },
  {
    id: crypto.randomUUID,
    skill:"Laravel"
  },
  {
    id: crypto.randomUUID,
    skill:"PHP"
  },
  {
    id: crypto.randomUUID,
    skill:"MySql"
  },
  ]

  return { skills }
})
