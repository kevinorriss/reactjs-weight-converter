import React from 'react'
import WeightConverter from '@kevinorriss/weight-converter'
import { mount } from 'enzyme'

test('Should convert valid LB integer', () => {
    const wrapper = mount(<WeightConverter />)

    const pounds = wrapper.find('input[name="pounds"]')
    pounds.instance().value = "144"
    pounds.simulate('change', pounds)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('65.3')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('10')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('4')
})

test('Should convert valid LB decimal', () => {
    const wrapper = mount(<WeightConverter />)

    const pounds = wrapper.find('input[name="pounds"]')
    pounds.instance().value = "98.52"
    pounds.simulate('change', pounds)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('44.68')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('7')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('0.52')
})

// test('Should handle 0 KG', () => {
//     const wrapper = mount(<WeightConverter />)

//     const kilograms = wrapper.find('input[name="kilograms"]')
//     kilograms.instance().value = "0"
//     kilograms.simulate('change', kilograms)

//     const pounds = wrapper.find('input[name="pounds"]')
//     expect(pounds.props().value).toEqual('0')

//     const stones = wrapper.find('input[name="stones"]')
//     expect(stones.props().value).toEqual('0')

//     const stonePounds = wrapper.find('input[name="stonePounds"]')
//     expect(stonePounds.props().value).toEqual('0')
// })

// test('Should clear inputs on blank KG', () => {
//     const wrapper = mount(<WeightConverter />)

//     const kilograms = wrapper.find('input[name="kilograms"]')
//     kilograms.instance().value = "10"
//     kilograms.simulate('change', kilograms)

//     kilograms.instance().value = ""
//     kilograms.simulate('change', kilograms)

//     const pounds = wrapper.find('input[name="pounds"]')
//     expect(pounds.props().value).toEqual('')

//     const stones = wrapper.find('input[name="stones"]')
//     expect(stones.props().value).toEqual('')

//     const stonePounds = wrapper.find('input[name="stonePounds"]')
//     expect(stonePounds.props().value).toEqual('')
// })

// test('Should reject invalid KG', () => {
//     const wrapper = mount(<WeightConverter />)

//     const kilograms = wrapper.find('input[name="kilograms"]')

//     kilograms.instance().value = ''
//     kilograms.simulate('change', kilograms)

//     kilograms.instance().value = 'abc'
//     kilograms.simulate('change', kilograms)

//     expect(kilograms.props().value).toEqual('')

//     const pounds = wrapper.find('input[name="pounds"]')
//     expect(pounds.props().value).toEqual('')

//     const stones = wrapper.find('input[name="stones"]')
//     expect(stones.props().value).toEqual('')

//     const stonePounds = wrapper.find('input[name="stonePounds"]')
//     expect(stonePounds.props().value).toEqual('')
// })