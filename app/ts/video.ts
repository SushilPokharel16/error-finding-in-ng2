export class Video{
	id: number; 
	title: string;
	videoCode: string;
	desc: string;

	constructor(ids: number, 
	name: string,
	url: string,
	description: string){
		this.id =ids;
		this.title = name;
		this.videoCode = url;
		this.desc = description;
	}

}