import React from 'react'
import WeightConverter from '@kevinorriss/weight-converter'
import { mount } from 'enzyme'

test('Should convert valid STLB integer', () => {
    const wrapper = mount(<WeightConverter />)

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    stonePounds.instance().value = "10"
    stonePounds.simulate('change', stonePounds)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('4.54')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('10')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('')
})

test('Should convert valid decimal STLB', () => {
    const wrapper = mount(<WeightConverter />)

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    stonePounds.instance().value = "10.54"
    stonePounds.simulate('change', stonePounds)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('4.78')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('10.54')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('')
})

test('Should handle 0 STLB', () => {
    const wrapper = mount(<WeightConverter />)

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    stonePounds.instance().value = "0"
    stonePounds.simulate('change', stonePounds)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('0')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('0')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('')
})

test('Should clear inputs on blank STLB', () => {
    const wrapper = mount(<WeightConverter />)

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    stonePounds.instance().value = "10"
    stonePounds.simulate('change', stonePounds)

    stonePounds.instance().value = ""
    stonePounds.simulate('change', stonePounds)

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('')
})

test('Should reject invalid STLB', () => {
    const wrapper = mount(<WeightConverter />)

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    stonePounds.instance().value = 'abc'
    stonePounds.simulate('change', stonePounds)

    expect(stonePounds.props().value).toEqual('')

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('')
})

test('Should reject STLB values above 13', () => {
    const wrapper = mount(<WeightConverter />)

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    stonePounds.instance().value = '14'
    stonePounds.simulate('change', stonePounds)

    expect(stonePounds.props().value).toEqual('')

    const kilograms = wrapper.find('input[name="kilograms"]')
    expect(kilograms.props().value).toEqual('')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('')
})