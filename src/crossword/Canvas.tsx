import React from 'react';
import { Vector3, Color4 } from '@babylonjs/core';
import { Scene, Engine, SceneEventArgs } from 'react-babylonjs';

export type CanvasProps = {
	onSceneMount: (e: SceneEventArgs) => void;
};

export default function Canvas({onSceneMount}: CanvasProps) {

	return (
		<div className="App">
			<Engine canvasStyle={{height: '100%', width: '100%'}} canvasId="trojan-canvas">
				<Scene clearColor={new Color4(0.6,0.6,0.6)} onSceneMount={onSceneMount}>

					<arcRotateCamera
						name="arc"
						target={ new Vector3(0, 1, 0) }
						alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
						radius={4} minZ={0.001} wheelPrecision={50} 
						lowerRadiusLimit={8} upperRadiusLimit={20}
					/>

					<hemisphericLight
						name='hemi' direction={Vector3.Up()} intensity={0.8}
					/>

				</Scene>
			</Engine>
		</div>
	);
}
