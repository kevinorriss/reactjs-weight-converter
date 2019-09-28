import React from 'react'
import WeightConverter from '@kevinorriss/weight-converter'
import { mount } from 'enzyme'

test('Should convert valid ST integer', () => {
    const wrapper = mount(<WeightConverter />)

    const stones = wrapper.find('input[name="stones"]')
    stones.instance().value = "10"
    stones.simulate('change', stones)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('63.5')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('140')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('')
})

test('Should reject decimal ST', () => {
    const wrapper = mount(<WeightConverter />)

    const stones = wrapper.find('input[name="stones"]')
    stones.instance().value = "10.5"
    stones.simulate('change', stones)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('')
})

test('Should handle 0 ST', () => {
    const wrapper = mount(<WeightConverter />)

    const stones = wrapper.find('input[name="stones"]')
    stones.instance().value = "0"
    stones.simulate('change', stones)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('0')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('0')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('')
})

test('Should clear inputs on blank ST', () => {
    const wrapper = mount(<WeightConverter />)

    const stones = wrapper.find('input[name="stones"]')
    stones.instance().value = "10"
    stones.simulate('change', stones)

    stones.instance().value = ""
    stones.simulate('change', stones)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('')
})

test('Should reject invalid ST', () => {
    const wrapper = mount(<WeightConverter />)

    const stones = wrapper.find('input[name="stones"]')

    stones.instance().value = 'abc'
    stones.simulate('change', stones)

    expect(stones.props().value).toEqual('')

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('')
})