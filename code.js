var img_url = "index.jpeg";
var mapping = new THREE.UVMapping();	// テクスチャの普通のデフォルト値

var texture = THREE.ImageUtils.loadTexture( img_url, mapping, function () {
    
    var w = 830;
    var h = 400;
    
    // カメラ作成
    USER.camera = new THREE.PerspectiveCamera( 70, w / h, 1, 10000 );
    USER.camera.position.set( 0, 0, 1 );
    
    // シーン作成
    USER.scene = new THREE.Scene();
    
    // パノラマ背景
    var sg = new THREE.SphereGeometry( 500, 60, 40 );
    var mbm = new THREE.MeshBasicMaterial( {color:0xffffff, map: texture } );
    var material = new THREE.MeshBasicMaterial({color:0xffffff, envMap:texture});
    var mesh = new THREE.Mesh( sg, mbm );
    mesh.scale.x = -1;
    USER.scene.add( mesh );
    


    // レンダラー作成
    USER.renderer = new THREE.WebGLRenderer();
    USER.renderer.setSize( w, h );
    
    // 表示エリア設定
    document.getElementById("area").appendChild( USER.renderer.domElement );
    
    // コントロール作成
    USER.orbit();
    USER.controls.autoRotate = true;
    USER.controls.autoRotateSpeed = 0.5; //default 2.0
    
    // アニメーション開始
    USER.animate();
    
} );

