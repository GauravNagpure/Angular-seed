import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap';
import { SlideComponent } from './slides/slide.component';
@NgModule({
    imports: [CommonModule, CarouselModule],
    declarations: [SlideComponent],
    exports:[SlideComponent],

})
export class SharedModule {}
