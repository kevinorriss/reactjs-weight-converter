import React, { Component } from 'react'

class WeightConverter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            kilgorams: '',
            pounds: '',
            stones: ['', '']
        };

        this.clear = this.clear.bind(this)
        this.onKilogramsChange = this.onKilogramsChange.bind(this)
        this.onPoundsChange = this.onPoundsChange.bind(this)
        this.onStonesChange = this.onStonesChange.bind(this)
        this.onStonePoundsChange = this.onStonePoundsChange.bind(this)
    }

    componentDidMound() {
        this.clear()
    }

    static toDecimalString(value) {
        const stringValue = value.toString()
        if (stringValue.match(/^-?\d+$/)) {
            return stringValue
        }

        return (stringValue.match(/^\d+(?:\.\d{0,2})?/)[0])
            .replace(/0+$/g, '')
            .replace(/\.$/g, '')
    }

    static lbToKg(lbs) {
        return WeightConverter.toDecimalString(lbs / 2.205)
    }

    static lbToSt(lbs) {
        return [Math.floor(lbs / 14).toString(), WeightConverter.toDecimalString(lbs % 14)]
    }

    static isIntegerOrBlank(string) {
        return string.match(/^\d+$|^$/)
    }

    static isDecimalOrBlank(string) {
        return string.match(/^\d+(\.\d{0,2})?$|^$/)
    }

    clear() {
        this.setState({
            kilgorams: '',
            pounds: '',
            stones: ['', '']
        });
    }

    onKilogramsChange(e) {
        // get the value from the input
        const string = e.target.value

        // if the string doesn't match the expected pattern, prevent the change
        if (!WeightConverter.isDecimalOrBlank(string)) {
            return
        }

        // parse the string to a float, checking for NaN
        // clear the inputs if value isn't a number
        // when the input value is empty so all other inputs should be too
        const kgs = parseFloat(string)
        if (isNaN(kgs)) {
            return this.clear()
        }

        // calculate the lbs from kg
        const lbs = kgs * 2.205

        // set the new values
        this.setState({
            kilgorams: string,
            pounds: WeightConverter.toDecimalString(lbs),
            stones: WeightConverter.lbToSt(lbs)
        })
    }

    onPoundsChange(e) {
        // get the value from the input
        const string = e.target.value

        // if the value isn't a whole number or empty, prevent the change
        if (!WeightConverter.isDecimalOrBlank(string)) {
            return
        }

        // parse the value to a float
        // clearing all inputs if unable to parse (empty string)
        const lbs = parseFloat(string)
        if (isNaN(lbs)) {
            return this.clear()
        }

        // set the new values
        this.setState({
            pounds: string,
            kilgorams: WeightConverter.lbToKg(lbs),
            stones: WeightConverter.lbToSt(lbs)
        })
    }

    onStonesChange(e) {
        // get the new value from the event
        const string = e.target.value

        // if the value isnt a whole number or blank
        // dismiss the change event
        if (!WeightConverter.isIntegerOrBlank(string)) {
            return
        }

        // parse the stones and stone pounds to floats
        let value = parseFloat(string)
        let stLbs = parseFloat(this.state.stones[1])

        // if both can't be parsed, both are blank
        // so clear the other inputs
        if (isNaN(value) && isNaN(stLbs)) {
            return this.clear()
        }

        // calculate the pounds from the kg
        // defaulting to 0 for NaN values
        const lbs = ((value || 0) * 14) + (stLbs || 0)

        // set the new values
        this.setState({
            stones: [string, stLbs],
            pounds: WeightConverter.toDecimalString(lbs),
            kilgorams: WeightConverter.lbToKg(lbs)
        })
    }

    onStonePoundsChange(e) {
        // get the new value from the event
        const string = e.target.value

        // if the value isn't a whole number or blank
        // dismiss the change event
        if (!WeightConverter.isDecimalOrBlank(string)) {
            return
        }

        // parse the value to a float
        let stLbs = parseFloat(string)

        // if the value couldn't be parsed (blank string)
        // default it to 0
        if (isNaN(stLbs)) {
            stLbs = 0;
        // if the value is 14 or more, dismiss the event
        // user shouldn't be able to say 10 stone and 28 pounds
        // because that is 12 stone
        } else if (stLbs >= 14) {
            return
        }

        // parse the stones value to a float
        let st = parseFloat(this.state.stones[0])

        // if both values are not numbers (blank strings)
        // then clear the rest of the inputs
        if (isNaN(stLbs) && isNaN(st)) {
            return this.clear()
        }

        // calculate the pounds from stones and stone pounds
        // defaulting stones to 0 if a blank string
        // we already did stone pounds NaN handline further up
        const lbs = ((st || 0) * 14) + stLbs

        // set the new values
        this.setState({
            stones: [st, string],
            pounds: WeightConverter.toDecimalString(lbs),
            kilgorams: WeightConverter.lbToKg(lbs)
        })
    }
    
    render() {
        return (
            <div className="weight-converter">
                <div className="form-group">
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control text-center"
                            autoComplete="off"
                            autoFocus
                            name="kilograms"
                            onChange={this.onKilogramsChange}
                            value={this.state.kilgorams}
                        />
                        <div className="input-group-append">
                            <div className="input-group-text weight-unit">KG</div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control text-center"
                            autoComplete="off"
                            name="pounds"
                            onChange={this.onPoundsChange}
                            value={this.state.pounds}
                        />
                        <div className="input-group-append">
                            <div className="input-group-text weight-unit">LB</div>
                        </div>
                    </div>
                </div>
                <div className="form-group d-flex mb-0">
                    <div className="input-group mr-1">
                        <input
                            type="text"
                            className="form-control text-center"
                            autoComplete="off"
                            name="stones"
                            onChange={this.onStonesChange}
                            value={this.state.stones[0]}
                        />
                        <div className="input-group-append">
                            <div className="input-group-text weight-unit">ST</div>
                        </div>
                    </div>
                    <div className="input-group ml-1">
                        <input
                            type="text"
                            className="form-control text-center"
                            autoComplete="off"
                            name="stonePounds"
                            onChange={this.onStonePoundsChange}
                            value={this.state.stones[1]}
                        />
                        <div className="input-group-append">
                            <div className="input-group-text weight-unit">LB</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeightConverter