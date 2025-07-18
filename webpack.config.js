const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // ← 이거 꼭 필요!

module.exports = {
  //   mode: "development",
  mode: "production",
  entry: "./src/dist/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              // 처리할 HTML 속성들
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // ✅ 여기 안에 HtmlWebpackPlugin 인스턴스를 넣습니다.
    new HtmlWebpackPlugin({
      template: "./src/pages/home/index.html", // 템플릿 위치
    }),
  ],
};