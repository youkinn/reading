import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: "./static/js/lib/structure/index.js",
  plugins: [
    resolve({
      jsnext: true, // 该属性是指定将Node包转换为ES2015模块
      // main 和 browser 属性将使插件决定将那些文件应用到bundle中
      main: true, // Default: true
      browser: true // Default: false
    }),
    commonjs({}),
    // babel({
    //   exclude: "node_modules/**", // 排除node_modules 下的文件
    //   runtimeHelpers: true
    // })
  ],
  output: [
    {
      file: "dist/index.js",
      name: "SongPackage",
      format: "umd"
    }
  ]
};
