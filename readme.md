# ZoomCharts

The world's most interactive data visualization software

- Official website: [zoomcharts.com](https://zoomcharts.com/en/)
- Download page: [zoomcharts.com/en/javascript-charts-library/pricing/](https://zoomcharts.com/en/javascript-charts-library/pricing/)
- Licensing: [zoomcharts.com/en/legal/](https://zoomcharts.com/en/legal/)
- Support: [forum.zoomcharts.com](https://forum.zoomcharts.com/)

## Download and install ZoomCharts

Please note that there are several ways to use ZoomCharts. For general installation instructions, see the [docs](https://zoomcharts.com/developers/en/introduction.html).

### Use our CDN

Instead of downloading, you can use our CDN to access files directly. See [zoomcharts.com/developers/en/overview/installation.html](https://zoomcharts.com/developers/en/overview/installation.html) for details.

```
<script src="https://cdn.zoomcharts-cloud.com/1/stable/zoomcharts.js"></script>
```

### Install from npm

See [npm documentation](https://docs.npmjs.com/) on how to get started with npm.

```
npm install --save @dvsl/zoomcharts
```

## Load ZoomCharts as an ES6 module

ZoomCharts can be loaded as an ES6 module with the use of transpilers - Babel and TypeScript.

### Babel
```javascript
import zc from "@dvsl/zoomcharts" 

let TimeChart = zc.TimeChart;

//Generate the chart
var t = new TimeChart({
    //options
})
```
### TypeScript
```javascript
import * as zc from "@dvsl/zoomcharts"

let TimeChart = zc.TimeChart;

//Generate the chart
var t = new TimeChart({
    //options
})
```
## Build and debug

If you want to do modifications to ZoomCharts or fix issues, you may build your own files. ZoomCharts uses Webpack as the build system.

```
npm i webpack webpack-cli copy-webpack-plugin --save-dev
```
Poject structure
```
.
├── index.html
├── package.json
├── index.js
└── webpack.config.js
```
Setup **__package.json__** file
```javascript
{
  "name": "zoomcharts-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "./build/bundle.js",
  "scripts": {
    "start": "webpack --config webpack.config.js",
    "webpack": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@dvsl/zoomcharts": "^1.18.4"
  },
  "devDependencies": {
    "copy-webpack-plugin": "^4.5.2",
    "webpack": "^4.15.0",
    "webpack-cli": "^3.0.8"
  }
}
```
Create **__webpack.config.js__** file
```javascript
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './node_modules/@dvsl/zoomcharts/lib/assets',
                to: 'assets'
            }
        ])
    ]
};
```
