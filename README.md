# Weight Converter

A React widget that converts weight between pounds, kilograms and stones.

## Prerequisites

This component makes use of Bootstrap 4 class names, install bootstrap to your project or apply your own styles to the class names.

* [Bootstrap v4.3](http://www.dropwizard.io/1.0.2/docs/) - Front-end component library
* [React ^16.9.0](https://reactjs.org/) - Javascript library for user interfaces

## Installing

```
npm install @kevinorriss/weight-converter
```

## Usage

Import the component

```
import WeightConverter from '@kevinorriss/weight-converter'

...

<!-- JSX -->
<div className="your-container">
    <WeightConverter />
</div>
```

## Development

This repo comes with a react app for development purposes. To get started, open a terminal in the root of the project and then:

### Link the component to the app
```
cd ./component
npm link

cd ..
npm link @kevinorriss/weight-converter
```

### Start the app
```
yarn start
```

### Start the rollup watcher
```
cd ./component
npm run dev
```

Whenever you make a change to the component code, the react app will update.

## Tests

TODO Write unit tests

## Author

* **Kevin Orriss** - [orriss.io](http://orriss.io)

## License

This project is licensed under the ISC License