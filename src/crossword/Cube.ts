import { Vector3, Scene, Mesh, DynamicTexture, StandardMaterial, HighlightLayer, AbstractMesh, Color3, PointerEventTypes } from '@babylonjs/core';
import { ICube } from './models/Cube'

export default class Cube {
	private name: string;
	private letter: string;
	private position: Vector3;
	private scene: Scene;
	private isActive: boolean;
	private box: Mesh;

	constructor(props: ICube) {
		this.name = props.name;
		this.letter = props.letter;
		this.position = props.position;
		this.scene = props.scene;
		this.isActive = props.isActive ?? false;
		this.box = Mesh.CreateBox(this.name, 1.0, this.scene);
		this.box.position = this.position;

		//Create dynamic texture
		let textureGround = new DynamicTexture(
			"dynamic texture", {width:512, height:256}, this.scene, true,
		);
		// var textureContext = textureGround.getContext();

		let materialGround = new StandardMaterial("Mat", this.scene);
		materialGround.diffuseTexture = textureGround;
		this.box.material = materialGround;

		//Add text to dynamic texture
		const font = "bold 200px Arial";
		textureGround.drawText(this.letter, null, null, font, "yellow", "white", true, true);
	}

	public getIsActive() {
		return this.isActive;
	}
	public setIsActive(isAct: boolean) {
		this.isActive = isAct;
		var h1 = new HighlightLayer("hl", this.scene);
		if (this.isActive) h1.addMesh(this.box, Color3.Yellow());
		else {
			h1.removeMesh(this.box);
		}
	}

}
