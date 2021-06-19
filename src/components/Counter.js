import Button from 'react-bootstrap/Button'
import React from 'react'
import { observer } from 'mobx-react-lite'
import countStore from '../store/countStore'

const Counter = observer(() => {
    const { increment, decrement, count } = countStore
    return (
        <div>
            <div className='p-3 d-flex justify-content-around'>
                <div className='mr-3'>
                    <Button
                        onClick={increment}
                    >increment</Button>
                </div>
                <div className='ml-3'>
                    <Button
                        onClick={decrement}
                    >decrement</Button>
                </div>
            </div>
            <div className='mb-3'>{count}</div>
        </div>
    )
})

export default Counter
