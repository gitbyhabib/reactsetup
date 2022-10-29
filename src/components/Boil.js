import React from 'react'
export default function Boil({ celsius = 0 }) {
    if (celsius >= 100) {
        return (
            <p>water can boil</p>
        )
    }
      return (
            <p>water can not boil</p>
        )
}
