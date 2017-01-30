import {Component} from 'angular2/core';
import {NamesComponent} from './names.component';



@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.component.html',
    directives: [NamesComponent]

})

export class AppComponent {
	names:Array<string>;
	constructor(){
		this.names = ["Ram", "Hari", "Krishna", "Sita", "Sarita"];
	}
	


}
//note: making array in app.component.ts first, secondly binding 
// that array in app.component.html with new property name. After binding, 
// it should be received in the .ts file we made i.e. names.component.ts in which we use
// " input" as a means of receiving. Then, we like to show the output of array serially 
// for which we need to run for loop for iterate the array. And this has been done
//  in names.component.html.//