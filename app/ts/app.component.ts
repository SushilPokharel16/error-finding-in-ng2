import {Component} from 'angular2/core';
// import {Config} from './config.service';
// import {PlaylistComponent} from './playlist.component';
// import {Video} from './video';
import {TitleComponent} from './title.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.component.html',
    // template: '<h1>{{heading}}</h1>'
    directives: [PlaylistComponent], [TitleComponent]; 


})

export class AppComponent {
	// heading = Config.myHeading;
	// subHeading = Config.mySubHeading;
	titles: Array<string>; 

	constructor(){
		this.titles = ['ram', 'hari'];
		

	}

	// class(){

	// }



}
