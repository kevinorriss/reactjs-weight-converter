import React from 'react'
import WeightConverter from '@kevinorriss/weight-converter'
import { mount } from 'enzyme'

test('Should convert valid KG integer', () => {
    const wrapper = mount(<WeightConverter />)

    const kilograms = wrapper.find('input[name="kilograms"]')
    kilograms.instance().value = "10"
    kilograms.simulate('change', kilograms)

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('22.05')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('1')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('8.05')
})

test('Should convert valid KG decimal', () => {
    const wrapper = mount(<WeightConverter />)

    const kilograms = wrapper.find('input[name="kilograms"]')
    kilograms.instance().value = "20.51"
    kilograms.simulate('change', kilograms)

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('45.22')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('3')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('3.22')
})

test('Should handle 0 KG', () => {
    const wrapper = mount(<WeightConverter />)

    const kilograms = wrapper.find('input[name="kilograms"]')
    kilograms.instance().value = "0"
    kilograms.simulate('change', kilograms)

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('0')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('0')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('0')
})

test('Should clear inputs on blank KG', () => {
    const wrapper = mount(<WeightConverter />)

    const kilograms = wrapper.find('input[name="kilograms"]')
    kilograms.instance().value = "10"
    kilograms.simulate('change', kilograms)

    kilograms.instance().value = ""
    kilograms.simulate('change', kilograms)

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('')
})

test('Should reject invalid KG', () => {
    const wrapper = mount(<WeightConverter />)

    const kilograms = wrapper.find('input[name="kilograms"]')

    kilograms.instance().value = ''
    kilograms.simulate('change', kilograms)

    kilograms.instance().value = 'abc'
    kilograms.simulate('change', kilograms)

    expect(kilograms.props().value).toEqual('')

    const pounds = wrapper.find('input[name="pounds"]')
    expect(pounds.props().value).toEqual('')

    const stones = wrapper.find('input[name="stones"]')
    expect(stones.props().value).toEqual('')

    const stonePounds = wrapper.find('input[name="stonePounds"]')
    expect(stonePounds.props().value).toEqual('')
})