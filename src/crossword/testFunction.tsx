import React from 'react'
import { SceneEventArgs } from 'react-babylonjs';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import Canvas from './Canvas';
import Cube from './createBox';

function onSceneMount(sceneEventArgs: SceneEventArgs) {
	const { scene } = sceneEventArgs;
	let arr: Cube[] = [];
	arr.push(new Cube({scene, letter: 'a', position: new Vector3(0, 0, 0)}));
	arr.push(new Cube({scene, letter: 'b', position: new Vector3(0, 0, 1)}));
	arr.push(new Cube({scene, letter: 'c', position: new Vector3(0, 0, 2), isActive: true}));
	arr.push(new Cube({scene, letter: 'd', position: new Vector3(0, 0, 3)}));
	arr.push(new Cube({scene, letter: 'e', position: new Vector3(0, 0, 4)}));
	// for (let i = 0; i < 5; i++) {
	// 	arr[i].createCube();
	// }

	scene.getEngine().runRenderLoop(() => {
		if (scene) {
			scene.render();
		}
	});
}

export default function Box() {
	return (
		<Canvas onSceneMount={onSceneMount} />
	);
}