import React from 'react'

export type PaymentType = {
    payment: number
}
export default function Payment({payment}: PaymentType) {
  return (
    <div> Payment: {payment}</div>
  )
}
