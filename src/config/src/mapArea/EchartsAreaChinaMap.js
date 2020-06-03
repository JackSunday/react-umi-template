export default `
 var data = [{ name: "北京",value: 54},{ name: "天津",value: 13},{name: "上海",value: 40},
  {
    name: "重庆",
    value: 75
  },
  {
    name: "河北",
    value: 13
  },
  {
    name: "河南",
    value: 83
  },
  {
    name: "云南",
    value: 0.1
  },
  {
    name: "江苏",
    value: 31
  },
  {
    name: "浙江",
    value: 104
  },
];
option = {
  tooltip: {},
  dataRange: {
    show: true,
    x: "10%",
    y: "70%",
    itemWidth: 10,
    itemHeight: 8,
    itemGap: 5,
    min: 0,
    max: 100,
    splitList: [
      { start: 50, label: ">90%", color: "#ff4201" },
      { start: 10, end: 50, label: "60%~90%", color: "#ff9e02" },
      { start: 5, end: 10, label: "30%~60%", color: "#ffff00" },
      { start: 1, end: 5, label: "1%~30%", color: "#c2e87b" },
      { end: 1, label: "1%以下", color: "#86cffa" }
    ]
  },
  geo: {
    map: "china",
    roam: !1,
    zoom: 1.23,
    label: {
      normal: {
        show: !0,
        fontSize: "12",
        color: "#777f78"
      }
    },
    itemStyle: {
      normal: {
        borderColor: "rgba(0, 0, 0, 0.2)"
      },
      emphasis: {
        areaColor: "#e53828",
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        borderWidth: 0
      }
    }
  },
  series: [
    {
      type: "map",
      geoIndex: 0,
      data: data
    }
  ]
};

`