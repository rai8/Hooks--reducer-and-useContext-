import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const generateID = () => Math.floor(Math.random() * 100000000)

  const { addTransaction } = useContext(GlobalContext)

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const handleSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      id: generateID(),
      amount: parseInt(+amount),
      text: text,
    }
    addTransaction(newTransaction)
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            placeholder='Enter text...'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            placeholder='Enter amount...'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
