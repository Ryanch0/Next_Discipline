'use client'

import React from 'react'

export default props => {
    const {name} = props
    return (
        <div className="cart-item">
            <p>{name}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}