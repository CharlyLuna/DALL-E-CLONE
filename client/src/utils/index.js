import { surpriseMePrompts } from '../constants'

export const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]
  // Check to not return the same random prompt two time in a row
  if (randomPrompt === prompt) return getRandomPrompt(prompt)
  return randomPrompt
}
