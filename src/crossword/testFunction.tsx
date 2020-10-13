import React from 'react'
import { SceneEventArgs } from 'react-babylonjs';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import Canvas from './Canvas';
import Cube from './Cube';
import {Color3, Mesh, PointerEventTypes} from "@babylonjs/core";

// const CROSSWORD: Array<Array<Array<string>>> = [[['a', 'b', c], [], []], [[], [], []], [[], [], []]];
const CROSSWORD: Array<string> = ['a', 'b', 'c'];


function onSceneMount(sceneEventArgs: SceneEventArgs) {
	const { scene } = sceneEventArgs;
	// let activeCube: Cube | null = null;
	const arr: Cube[] = CROSSWORD.map((letter, i) => {
		return new Cube({scene, name: `${i}_box`, letter, position: new Vector3(0, 0, i)});
	});
	// arr.push(new Cube({scene, letter: 'К', position: new Vector3(0, 0, 0)}));
	// arr.push(new Cube({scene, letter: 'о', position: new Vector3(0, 0, 1)}));
	// arr.push(new Cube({scene, letter: 'ш', position: new Vector3(0, 0, 2), isActive: true}));
	// arr.push(new Cube({scene, letter: 'к', position: new Vector3(0, 0, 3)}));
	// arr.push(new Cube({scene, letter: 'а', position: new Vector3(0, 0, 4)}));
	// for (let i = 0; i < 5; i++) {
	// 	arr[i].createCube();
	// }
	// if (mesh && mesh.name === this.letter) {


	scene.onPointerObservable.add(evt => {
		if (evt?.pickInfo?.hit && evt?.pickInfo?.pickedMesh) {
			let mesh = evt.pickInfo.pickedMesh;
			const names = mesh.name.split('_');
			const box_i = Number(names[0]);
			console.log(box_i);
			if (arr[box_i].getIsActive()) {
				arr[box_i].setIsActive(false);
			} else {
				arr[box_i].setIsActive(true);
			}
		}
	}, PointerEventTypes.POINTERDOWN);

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
