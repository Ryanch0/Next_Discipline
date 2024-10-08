'use client'
import Image from "next/image"
import food0 from '../../public/food0.png'
import food1 from '../../public/food1.png'
import food2 from '../../public/food2.png'
import { useReducer } from "react"


const productReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      [action.payload]: {
        ...state[action.payload],
        count: state[action.payload].count + 1
      }
    }
  }
}

export default function List() {

  const [product, dispatch] = useReducer(productReducer,
    {
      Tomatoes: {
        price: '$50',
        count: 0,
        image: food0
      },
      Pasta: {
        price: '$60',
        count: 0,
        image: food1
      },
      Coconut: {
        price: '$20',
        count: 0,
        image: food2
      }
    })

  function handleIncreaseCount(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  }

  return (
    <div>
      <h2>Products</h2>
      {Object.keys(product).map((item, idx) => {
        const { price, count, image } = product[item]
        return (
          <div className="food" key={item}>
            <Image src={image} style={{ width: '100%', height: 'auto' }} alt="food-image" />
            <h4>{item} {price}</h4>
            <span style={{ marginRight: '4px' }}>{count}</span>
            <button onClick={() => {
              handleIncreaseCount(item)
            }}>+</button>
          </div>
        )
      })}
    </div>
  )
}
