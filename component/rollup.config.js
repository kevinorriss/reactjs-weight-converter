import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const config = {
    input: 'src/WeightConverter.js',
    external: ['react'],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ],
    output: {
        format: 'umd',
        name: 'countdown',
        globals: {
            react: "React"
        }
    }
}
export default config