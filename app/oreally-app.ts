import {Component} from 'angular2/core';
import {Book} from './components/book';

@Component({
    selector: 'oreally-app',
    providers: [],
    pipes: [],
    directives: [],
    templateUrl: 'app/oreally-app.html',
})

export class OreallyApp {
    images = [
        '/images/animal1.gif',
        '/images/animal2.gif',
        '/images/animal3.gif',
        '/images/animal4.gif',
        '/images/animal5.gif',
        '/images/animal6.gif',
        '/images/animal7.gif',
        '/images/animal8.gif',
        '/images/animal9.gif',
        '/images/animal10.gif',
        '/images/animal11.gif',
        '/images/animal12.gif'
    ];
    model = new Book('#008fb3', '/images/animal1.gif', 'Angular2 is... good? I guess?', 'HTML in your Javascript', '& other mixing of concerns', 'I.P. Freely');

    constructor() {
    }

    getColor() {
        return this.model.color;
    }
}
