import React from 'react';
export default class Earth extends React.Component {
  state = {
    option: null,
  }
  componentDidMount() {
   this.init()
  }
  init = () => {
    // 获取canvas画布
    canvas = document.getElementById("webglcanvas");
    console.log(canvas)
    // stats性能检测器初始化
    // stats = this.initStats();
    // 3D绘制
    // 相机
    camera = new window.THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 500; //相机的远近

    // 场景
    scene = new window.THREE.Scene();

    // 创建一个组合
    group = new window.THREE.Group();
    scene.add(group); //将组合添加进场景中渲染

    // 地球 数学形状 贴图
    let loader = new window.THREE.TextureLoader();
    loader.setCrossOrigin("Anonymous");
    const img = require("../../assets/earth.jpg");
    loader.load(img, function (texture) {
      // console.log(texture)
      let geometry = new window.THREE.SphereGeometry(120, 20, 20); //形状
      let material = new window.THREE.MeshBasicMaterial({ map: texture }); //材质
      let mesh = new window.THREE.Mesh(geometry, material); //物体
      group.add(mesh);
    });

    // 渲染器
    renderer = new window.THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true, // true/false表示是否开启反锯齿,
      alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", this.onWindowResize, false);
  }
  initStats = () => {
    stats = new Stats();
    //设置统计模式
    stats.setMode(0); // 0: fps, 1: ms
    //统计信息显示在左上角
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "10px";
    stats.domElement.style.top = "10px";
    //将统计对象添加到对应的<div>元素中
    // document.getElementById("stats-output").appendChild(stats.domElement);
    return stats;
  }
  renderMtehods = () => {
    // 更新性能监视器
    stats.update();
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (mouseX - camera.position.y) * 0.05;
    // 拍摄角度， 可改变地球视角
    camera.lookAt(scene.position);
    // 地球自转速度
    group.rotation.y -= 0.005;
    // 核心 递归调用
    renderer.render(scene, camera);
  }
  animate=()=>{
    setInterval(() => {
      this.renderMtehods();
    }, 20);
    this.renderMtehods();
  }
  onWindowResize=()=>{
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  public render() {
    return (
      <div id="webglcanvas">

      </div>
    )
  }
}
