import { useState } from 'react'

export const useCard = (stock) => {
    const [amount, setAmount] = useState(0)
    const handleValue = (value) => {
        const result = amount + value
        if (result <= stock) {
            setAmount(amount+value)
        }
        if (amount<= 0) {
            setAmount(1)
        }
    }

    return {
        handleValue, amount
    }
}