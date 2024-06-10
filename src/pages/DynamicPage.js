import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MenuList } from '../data/data'

export default function DynamicPage() {
  const { id } = useParams()
  const [item, setItem] = useState({})
  console.log(id)

  useEffect(() => {
    const itemByid = MenuList.filter((item) => item.id == id)
    console.log(itemByid)
    setItem(itemByid[0])
  }, [id])
  return (
    <div>{item.name}</div>
  )
}
