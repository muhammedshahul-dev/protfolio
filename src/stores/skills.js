
import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('Skills', () => {
  const skills=[
  {
    id: crypto.randomUUID,
    skill:"html",
    stack:'front-end'
  },
  {
    id: crypto.randomUUID,
    skill:"javaScript",
    stack:'front-end'
  },
  {
    id: crypto.randomUUID,
    skill:"Css",
    stack:'front-end'
  },
  {
    id: crypto.randomUUID,
    skill:"TailWind",
    stack:'front-end'
  },
  {
    id: crypto.randomUUID,
    skill:"vue.js",
    stack:'front-end'
  },
  {
    id: crypto.randomUUID,
    skill:"Laravel",
    stack:'back-end'
  },
  {
    id: crypto.randomUUID,
    skill:"PHP",
    stack:'back-end'
  },
  {
    id: crypto.randomUUID,
    skill:"Sql",
    stack:'back-end'
  },
  ]

  return { skills }
})
