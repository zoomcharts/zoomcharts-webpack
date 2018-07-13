import zc from "@dvsl/zoomcharts" 

// 
let TimeChart = zc.TimeChart;
let PieChart = zc.PieChart;
let GeoChart = zc.GeoChart;
let FacetChart = zc.FacetChart;

// Zoomcharts license and license key
window.ZoomChartsLicense = "";
window.ZoomChartsLicenseKey = "";

// 
var t = new TimeChart({
    container: document.getElementById("chartTimeChart"),
    area: { height: 350 },
    data: {
        preloaded: {
            values: [
                ["2017-01-09 00:00:00", 100],
                ["2017-01-20", 200],
                [1485907200, 300],
                ["2017-02-05 15:20:00", 400],
                ["2017-02-15 22:59:59", 500]
            ],
            dataLimitFrom: "2017-01-09 00:00:00",
            dataLimitTo: "2017-02-15 22:59:59",
            unit: 's'
        }
    }
});
// 
var p = new PieChart({
    container: document.getElementById("chartPieChart"),
    area: { height: 350 },
    data: {
        preloaded: {
            subvalues: [
                {
                    id: "foo", value: 100, subvalues: [
                        { id: "foo-1", value: 50, style: { expandable: false } },
                        { id: "foo-2", value: 50, style: { expandable: false } }
                    ]
                },
                { id: "bar", value: 50, style: { expandable: false } },
                { id: "baz", value: 30, style: { expandable: false } }
            ]
        }
    }
});
// 
var gc = new GeoChart({
    container: document.getElementById("chartGeoChart"),
    area: { height: 500 },
    data: {
        preloaded: {
            nodes: [
                {
                    id: "Squaw Valley",
                    coordinates: [-119.181449, 36.707146]
                },
                {
                    id: "Atlanta",
                    coordinates: [-84.388846, 33.752504]
                },
                {
                    id: "New York",
                    coordinates: [-73.996705, 40.74838]
                },
                {
                    id: "Lake Placid",
                    coordinates: [-81.364918, 27.294474]
                }
            ],
            links: [
                { from: "New York", to: "Atlanta", drivingTime: "13 hours 3 mins" },
                { from: "New York", to: "Squaw Valley", drivingTime: "1 day 18 hours" },
                { from: "New York", to: "Lake Placid", drivingTime: "17 hours 33 mins" },
                { from: "Lake Placid", to: "Squaw Valley", drivingTime: "1 day 15 hours" },
                { from: "Atlanta", to: "Squaw Valley", drivingTime: "1 day 10 hours" }
            ]
        }
    },
    navigation: {
        initialLat: 35.04409,
        initialLng: -90.246213,
        initialZoom: 4,
        minZoom: 4
    },
    layers: [
        {
            name: "Points",
            type: "items"
        }
    ]
});
// 
var f = new FacetChart({
    container: document.getElementById("chartFacetChart"),
    area: { height: 350 },
    data: {
        preloaded: {
            subvalues: [
                {
                    id: "foo", value: 100, value2: 50, subvalues: [
                        { id: "foo-1", value: 50, value2: 10 },
                        { id: "foo-2", value: 50, value2: 5 }
                    ]
                },
                { id: "bar", value: 50, value2: 100 },
                { id: "baz", value: 30, value2: 15 }
            ]
        }
    },
    series: [
        { name: "Foo", data: { field: "value" } },
        { name: "Bar", data: { field: "value2" } }
    ]
});
