import { Scene, Vector3 } from "@babylonjs/core";

export interface ICube {
	// буква
	letter: string;
	// выделена или нет
	isActive?: boolean;
	// угадана или нет
	isSuccess?: boolean;
	// стоит на пересечении
	isCrossing?: boolean;
	// позиция, необходима для построения слов
	position: Vector3;
	// сценв необходима для помещения на канвас
	scene: Scene;
}