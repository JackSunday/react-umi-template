export default`
var data= [
  { name: "南京市", value: 30 },
  { name: "无锡市", value: 87 },
  { name: "徐州市", value: 30 },
  { name: "常州市", value: 32 },
  { name: "苏州市", value: 57 },
  { name: "南通市", value: 63 },
  { name: "淮安市", value: 35 },
  { name: "盐城市", value: 15 },
  { name: "扬州市", value: 6 },
  { name: "泰州市", value: 88 },
  { name: "宿迁市", value: 41 },
  { name: "镇江市", value: 18 },
  { name: "连云港市", value: 1 }
]
option ={
  title: {
    x: "center",
    y: "1%",
    subtext: this.subtext,
    textStyle: {
      color: "#2a86b4",
      fontSize: 20
    }
  },
  grid:{
   top:'10%'
  },
  tooltip: {
    trigger: "item",
    formatter: params => {
      if (params.data && params.data.fCount) {
        return params.name + ":" + this.format(params.data.fCount) + "人";
      } else {
        return params.name + ":" + "-" + "人";
      }
    }
  },
  dataRange: {
    min: 0,
    max: 100,
    x: "5%",
    y: "60%",
    splitList: [
      {
        start: 70,
        end: 100,
        label: "> 90 %",
        color: "#ff4201"
      },
      {
        start: 50,
        end: 70,
        label: "60 % ~90 % ",
        color: "#ff9e02"
      },
      {
        start:20,
        end: 50,
        label: "30 % ~60 % ",
        color: "#ffff00"
      },
      {
        start: 10,
        end: 20,
        label: "1 % ~30 % ",
        color: "#c2e87b"
      },
      {
        start: 0,
        end: 10,
        label:"1 % 以下",
        color: "#86cffa"
      }
    ]
  },
  geo: {
    show: true,
    map: "江苏",
    label: {
      normal: {
        show: true,
        color: "#333"
      },
      emphasis: {
        show: true
      }
    },
    roam: false,
    zoom: 1.23,
    itemStyle: {
      normal: {
        borderColor: "rgba(100,149,237,1)",
        borderWidth: 2,
        label: {
          show: true,
          textStyle: {
            color: "#1b1b1b"
          }
        },
        areaStyle: {
          color: "#D1F8FE"
        }
      },
      emphasis: {
        color: "#D1F8FE"
      }
    }
  },
  series: [
    {
      name: "credit_pm2.5",
      type: "scatter",
      coordinateSystem: "geo",
      data: this.data,
      label: {
        normal: {
          formatter: "{b}",
          position: "center",
          show: true
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: "#67d0d4"
        }
      }
    },
    {
      type: "map",
      map: "jiangsu",
      geoIndex: 0,
      aspectScale: 0.75, // 长宽比
      showLegendSymbol: true, // 存在legend时显示
      label: {
        normal: {
          show: true,
          offset: [100, 40],
          position: "inside"
        },
        emphasis: {
          show: true,
          textStyle: {
            color: "#28837c"
          }
        }
      },
      zoom: 1,
      roam: false,
      itemStyle: {
        normal: {
          areaColor: "#000",
          borderColor: "#a5c6e5"
        },
        emphasis: {
          areaColor: "#28837c"
        }
      },
      animation: true,
      data: data
    }
  ]
}

`