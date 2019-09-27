import React from 'react'
import ReactDOM from 'react-dom'
import WeightConverter from '@kevinorriss/weight-converter'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<WeightConverter />, div)
})