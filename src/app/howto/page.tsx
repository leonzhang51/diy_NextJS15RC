'use client'
import Banner from '@/components/HowTo/Banner'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
interface RequestBody {
  model: string
  prompt: string
  format: string
  stream: boolean
}

/**
 * Response from Ollama API.
 */
interface ApiResponse {
  response: string
}

/**
 * Shopping item.
 */
interface ShoppingItem {
  Name: string
  Item: string
  Quantity: string
}
const HowToPage: React.FC = (): JSX.Element => {
  const ollamaEndpoint: string = 'http://localhost:11434/api/generate'
  const prompt: string = `generate a shopping list with real product image from https://www.rona.ca/en for building backyard deck, return in json format`
  const requestBody: RequestBody = {
    model: 'llama3.1',
    prompt: prompt,
    format: 'json',
    stream: false
  }
  //create a function to get specific attribute from array object

  const [newPrompt, setNewPrompt] = useState<string>(prompt)
  const [messages, setMessages] = useState<ShoppingItem[]>([])

  /**
   * Generates shopping list from Ollama API.
   */
  const generate = async (): Promise<void> => {
    const response = await axios.post<ApiResponse>(ollamaEndpoint, requestBody, {
      headers: { 'Content-Type': 'application/json' }
    })

    if (response?.data?.response) {
      const parsedResponse = JSON.parse(response.data.response)
      const attributeNameFromResponse = Object.keys(parsedResponse)[0]
      const shoppingList = parsedResponse?.[attributeNameFromResponse]
      setMessages(shoppingList ?? [])
    }
  }
  console.log('current messages', messages)
  useEffect(() => {
    generate()
  }, [])
  return (
    <>
      <Banner />
    </>
  )
}

export default HowToPage
