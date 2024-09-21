'use client'
import axios from 'axios'
import React, { useState } from 'react'
type PersonType = {
  name: string
  age: number
  address: string
  hobby: string
  gender: string
  married: boolean
}
type ProductType = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}[]
type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>, data: number) => void
}
type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>, data: String) => void
}
function ActivityLogs() {
  const data1: number = 4
  const strData: String = 'test string'
  const strArray: Array<string> = ['array string test1', 'array string test2']
  const person: PersonType = {
    name: 'test name',
    age: 74,
    address: 'test address',
    hobby: 'test hobby',
    gender: 'test gender',
    married: true
  }
  let productList: ProductType = []
  const [data2, setData2] = useState<number>(data1)
  const [strData2, setStrData2] = useState<String>(strData)
  const [strArray2, setStrArray2] = useState<Array<string>>(strArray)
  const handleInputChange: InputProps['onChange'] = (event) => {
    console.log('input changed', event.target.value)
  }
  // const fetchData = async () => {
  //     const response = await fetch('https://fakestoreapi.com/products');
  //     productList = await response.json();
  //     console.log( productList );
  //     return productList
  // }
  const handleClick: ButtonProps['onClick'] = async (event, data) => {
    setData2(data2 + 1)
    setStrData2(strData2 + '!')
    setStrArray2(strArray2.concat(['array string test3']))
    //const response = await fetchData();
    const response = await axios.get('/api/fetchProduct')
    console.log('button clicked', event)
    console.log('button clicked', data)
    console.log('button clicked fetch data', response.data.data)
  }

  return (
    <>
      <h1>List of Data</h1>
      <button onClick={(event) => handleClick(event, 23)}>Click to change the data</button>
      <p>{data1}</p>
      <p>{strData}</p>
      <p>{strArray}</p>
      {person.married ? (
        <div>
          {' '}
          <p>{person.name}</p>
          <p>{person.age}</p>
          <p>{person.address}</p>
          <p>{person.hobby}</p>
          <p>{person.gender}</p>
          <p>{person.married}</p>
        </div>
      ) : (
        <p>Not Married</p>
      )}

      <p>{data2}</p>
      <p>{strData2}</p>
      {strArray2.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  )
}

export default ActivityLogs
