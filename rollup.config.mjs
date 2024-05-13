import withSolid from "rollup-preset-solid";
import terser from "@rollup/plugin-terser";
import sass from "rollup-plugin-sass";

export default withSolid({
  targets: ["esm", "cjs"],
  plugins: [
		terser(),
		sass({
			output: "dist/index.css",
		})
	],
  input: 'src/index.ts'
});
