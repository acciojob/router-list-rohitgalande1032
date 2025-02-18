import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({items}) => {
    const {id} = useParams();
    const item = items.find(item => item.id === parseInt(id))
  return (
    <div>{item.description}</div>
  )
}

export default ItemDetail