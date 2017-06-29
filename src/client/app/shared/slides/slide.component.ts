import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'picture',
    templateUrl:'./slide.component.html',
})
export class SlideComponent{
    pictures: string[] = [
        "./assets/images/slide1.jpg",
        "./assets/images/slide2.jpg",
        "./assets/images/slide3.jpg",
        "./assets/images/slide4.jpg",
    ]
}
