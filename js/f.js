//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);


var loader = new  THREE.TextureLoader();
loader.load('../img/fondo.png', function(texture){
     scene.background = texture;
    });


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//modelo3d1

const gltfLoader = new THREE.GLTFLoader();

gltfLoader.load('../brunhilda/scene.gltf', (gltf)=>{
    var loaderObjeto1 = gltf.scene;
    loaderObjeto1.scale.set(0.002,0.002,0.002);
    console.log('carga completa');
    scene.add(loaderObjeto1);
    const controls1 = new THREE.DragControls( [loaderObjeto1], camera, renderer.domElement );
    loaderObjeto1.position.x = -11
    loaderObjeto1.position.y = -3.3


}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);



//modelo3d2

const gltfLoader2 = new THREE.GLTFLoader();

gltfLoader.load('../the_noble_craftsman/scene.gltf', (gltf)=>{
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(0.12,0.12,0.12);
    console.log('carga completa');
    scene.add(loaderObjeto2);
    loaderObjeto2.position.x = 8
    loaderObjeto2.position.y = -5
    const controls2 = new THREE.DragControls( [loaderObjeto2], camera, renderer.domElement );

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);


//modelo3d3

const gltfLoader3 = new THREE.GLTFLoader();

gltfLoader.load('../winter_girl/scene.gltf', (gltf)=>{
    var loaderObjeto3 = gltf.scene;
    loaderObjeto3.scale.set(1,1,1);
    console.log('carga completa');
    scene.add(loaderObjeto3);
    loaderObjeto3.position.x = 2
    loaderObjeto3.position.y = -2
    const controls3 = new THREE.DragControls( [loaderObjeto3], camera, renderer.domElement );

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);

//modelo3d4
const light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
scene.add( light );

const gltfLoader4 = new THREE.GLTFLoader();

gltfLoader.load('../sean_house/scene.gltf', (gltf)=>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.006,0.006,0.006);
    console.log('carga completa');
    scene.add(loaderObjeto);
    loaderObjeto.position.x = -3.3
    loaderObjeto.position.y = -1.2

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);

//model
const gltfLoader13 = new THREE.GLTFLoader();

gltfLoader.load('../birds/scene.gltf', (gltf)=>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.6,0.6,0.6);
    console.log('carga completa');
    scene.add(loaderObjeto);
    loaderObjeto.position.x = -4
    loaderObjeto.position.y = -1

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);

//model
const gltfLoader14 = new THREE.GLTFLoader();

gltfLoader.load('../birds/scene.gltf', (gltf)=>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.6,0.6,0.6);
    console.log('carga completa');
    scene.add(loaderObjeto);
    loaderObjeto.position.x = -1
    loaderObjeto.position.y = -5

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);



//barco

const gltfLoader6 = new THREE.GLTFLoader();

gltfLoader.load('../barco(1)/scene.gltf', (gltf)=>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(2,2,2);
    console.log('carga completa');
    scene.add(loaderObjeto);
    loaderObjeto.position.x = -5.2
    loaderObjeto.position.y = -5.8

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);

//barco2


const gltfLoader7 = new THREE.GLTFLoader();

gltfLoader.load('../barco(1)/scene.gltf', (gltf)=>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(2,2,2);
    console.log('carga completa');
    scene.add(loaderObjeto);
    loaderObjeto.position.x = -5
    loaderObjeto.position.y = 2

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);



//model

const gltfLoader11 = new THREE.GLTFLoader();

gltfLoader.load('../islas_lowpoly/scene.gltf', (gltf)=>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.002,0.002,0.001);
    console.log('carga completa');
    scene.add(loaderObjeto);
    loaderObjeto.position.x = -7
    loaderObjeto.position.y = -1

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);

//model





var light2 = new THREE.PointLight( 0xFBB4B4,1, 100 );
light.position.set( 50 ,50 ,50 );
scene.add( light2 );

//geometria

const geometry = new THREE.SphereGeometry( 1, 50, 30 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../img/fs.jpg');



const material = new THREE.MeshMatcapMaterial({
    opacity: 0.5,
    transparent: true,
} );
material.matcap = matcap;
material.flatShading =  true;


//model


const gltfLoader9 = new THREE.GLTFLoader();

gltfLoader.load('../isla_3_2/scene.gltf', (gltf)=>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.9,0.9,0.9);
    console.log('carga completa');
    scene.add(loaderObjeto);
    loaderObjeto.position.x = -1
    loaderObjeto.position.y = -5.2

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);

//model


const gltfLoader10 = new THREE.GLTFLoader();

gltfLoader.load('../compass/scene.gltf', (gltf)=>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.3,0.2,0.1);
    console.log('carga completa');
    scene.add(loaderObjeto);
    loaderObjeto.position.x = 3
    loaderObjeto.position.y = 3

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);

//esfera1
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

sphere.position.x = -7.7
sphere.position.y = -4.5

//esfera2

const sphere2 = new THREE.Mesh( geometry, material );
scene.add( sphere2 );


sphere2.position.x = -3.5
sphere2.position.y = -5.1

//esfera3

const sphere3 = new THREE.Mesh( geometry, material );
scene.add( sphere3 );

sphere3.position.x = 1
sphere3.position.y = -5.1

//esfera4

const sphere4 = new THREE.Mesh( geometry, material );
scene.add( sphere4 );

sphere4.position.x = 1
sphere4.position.y = -1.8

//esfera5

const sphere5 = new THREE.Mesh( geometry, material );
scene.add( sphere5 );

sphere5.position.x = -1.6
sphere5.position.y = -1

//esfera6

const sphere6 = new THREE.Mesh( geometry, material );
scene.add( sphere6 );

sphere6.position.x = -5.4
sphere6.position.y = -1.4

//esfera7

const sphere7 = new THREE.Mesh( geometry, material );
scene.add( sphere7 );

sphere7.position.x = -9
sphere7.position.y = -1

//esfera8

const sphere8 = new THREE.Mesh( geometry, material );
scene.add( sphere8 );

sphere8.position.x = -6.5
sphere8.position.y = 1

//esfera9

const sphere9 = new THREE.Mesh( geometry, material );
scene.add( sphere9 );

sphere9.position.x = -3
sphere9.position.y = 3

//esfera10

const sphere10 = new THREE.Mesh( geometry, material );
scene.add( sphere10 );

sphere10.position.x = -10
sphere10.position.y = 3

camera.position.z = 10;

const controls = new THREE.DragControls( [ ], camera, renderer.domElement );



//animacion
function animate() {
    requestAnimationFrame( animate );
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;
    sphere2.rotation.x += 0.01;
    sphere2.rotation.y += 0.01;
    sphere2.rotation.z += 0.01;
    sphere3.rotation.x += 0.01;
    sphere3.rotation.y += 0.01;
    sphere3.rotation.z += 0.01;
    sphere4.rotation.x += 0.01;
    sphere4.rotation.y += 0.01;
    sphere4.rotation.z += 0.01;
    sphere5.rotation.x += 0.01;
    sphere5.rotation.y += 0.01;
    sphere5.rotation.z += 0.01;
    sphere6.rotation.x += 0.01;
    sphere6.rotation.y += 0.01;
    sphere6.rotation.z += 0.01;
    sphere7.rotation.x += 0.01;
    sphere7.rotation.y += 0.01;
    sphere7.rotation.z += 0.01;
    sphere8.rotation.x += 0.01;
    sphere8.rotation.y += 0.01;
    sphere8.rotation.z += 0.01;
    sphere9.rotation.x += 0.01;
    sphere9.rotation.y += 0.01;
    sphere9.rotation.z += 0.01;
    sphere10.rotation.x += 0.01;
    sphere10.rotation.y += 0.01;
    sphere10.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();