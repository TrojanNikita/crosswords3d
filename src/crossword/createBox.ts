import { Vector3, Scene, Mesh, DynamicTexture, StandardMaterial, HighlightLayer, AbstractMesh, Color3, PointerEventTypes } from '@babylonjs/core';
import { ICube } from './models/Cube'

export default class Cube {
	private letter: string;
	private position: Vector3;
	private scene: Scene;
	private isActive: boolean;

	constructor(props: ICube) {
		this.letter = props.letter;
		this.position = props.position;
		this.scene = props.scene;
		this.isActive = props.isActive ?? false;
		let box = Mesh.CreateBox(this.letter, 1.0, this.scene);
		box.position = this.position; 

		//Create dynamic texture		
		let textureGround = new DynamicTexture(
			"dynamic texture", {width:512, height:256}, this.scene, true,
		);
		// var textureContext = textureGround.getContext();

		let materialGround = new StandardMaterial("Mat", this.scene);
		materialGround.diffuseTexture = textureGround;
		box.material = materialGround;

		//Add text to dynamic texture
		const font = "bold 200px Arial";
		textureGround.drawText(this.letter, null, null, font, "yellow", "white", true, true);

		var h1 = new HighlightLayer("hl", this.scene);
		if (this.isActive) h1.addMesh(box, Color3.Yellow());
		this.scene.onPointerObservable.add(evt => {
			if (evt?.pickInfo?.hit && evt?.pickInfo?.pickedMesh) {
				let mesh = evt.pickInfo.pickedMesh;
				if (mesh && mesh.name === this.letter) {
					if (this.isActive) {
						this.isActive = false;
						h1.removeMesh(mesh as Mesh);
					} else {
						this.isActive = true;
						h1.addMesh(mesh as Mesh, Color3.Yellow());
					}
				}
			}
		}, PointerEventTypes.POINTERDOWN);
	}
	
	public createCube() {
		let box = Mesh.CreateBox(this.letter, 1.0, this.scene);
		box.position = this.position; 

		//Create dynamic texture		
		let textureGround = new DynamicTexture(
			"dynamic texture", {width:512, height:256}, this.scene, true,
		);
		// var textureContext = textureGround.getContext();

		let materialGround = new StandardMaterial("Mat", this.scene);
		materialGround.diffuseTexture = textureGround;
		box.material = materialGround;

		//Add text to dynamic texture
		const font = "bold 200px Arial";
		textureGround.drawText(this.letter, null, null, font, "yellow", "white", true, true);

		var h1 = new HighlightLayer("hl", this.scene);
		if (this.isActive) h1.addMesh(box, Color3.Yellow());
		this.scene.onPointerObservable.add(evt => {
			if (evt?.pickInfo?.hit && evt?.pickInfo?.pickedMesh) {
				let mesh = evt.pickInfo.pickedMesh;
				if (mesh && mesh.name === this.letter) {
					if (this.isActive) {
						this.isActive = false;
						h1.removeMesh(mesh as Mesh);
					} else {
						this.isActive = true;
						h1.addMesh(mesh as Mesh, Color3.Yellow());
					}
				}
			}
		}, PointerEventTypes.POINTERDOWN);
	}

}
