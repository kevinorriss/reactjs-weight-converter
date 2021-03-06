import React from 'react'
import WeightConverter from '@kevinorriss/weight-converter'
import { mount } from 'enzyme'

test('Should convert valid LB integer', () => {
    const wrapper = mount(<WeightConverter />)

    const pounds = wrapper.find('input[name="pounds"]')
    pounds.instance().value = "144"
    pounds.simulate('change', pounds)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('65.32')

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
    expect(kilograms.props().value).toEqual('44.69')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('7')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('0.52')
})

test('Should handle 0 LB', () => {
    const wrapper = mount(<WeightConverter />)

    const pounds = wrapper.find('input[name="pounds"]')
    pounds.instance().value = "0"
    pounds.simulate('change', pounds)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('0')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('0')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('0')
})

test('Should clear inputs on blank LB', () => {
    const wrapper = mount(<WeightConverter />)

    const pounds = wrapper.find('input[name="pounds"]')
    pounds.instance().value = "10"
    pounds.simulate('change', pounds)

    pounds.instance().value = ""
    pounds.simulate('change', pounds)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('')
})

test('Should reject invalid LB', () => {
    const wrapper = mount(<WeightConverter />)

    const pounds = wrapper.find('input[name="pounds"]')
    pounds.instance().value = 'abc'
    pounds.simulate('change', pounds)

    expect(pounds.props().value).toEqual('')

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('')
})