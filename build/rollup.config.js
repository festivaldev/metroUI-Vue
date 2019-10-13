import lessModules from 'rollup-plugin-less-modules';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import minify from 'rollup-plugin-babel-minify';

export default {
	input: 'src/index.js',
	output: {
		name: 'metroUI-vue',
		exports: 'named',
	},
	external: [ "vue", "uuid/v4" ],
	plugins: [
		lessModules({
			output: "dist/metroui-vue.css",
			options: {
				javascriptEnabled: true,
			},
			sourcemap: false,
			minify: true
		}),
		commonjs(),
		vue({
			css: true,
			compileTemplate: true,
		}),
		minify({
			comments: false
		})
	],
};