import { NgModule } from '@angular/core';
import { ChipotleComponent } from './chipotle.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports:[SharedModule],
    declarations: [ChipotleComponent],
    exports: [ChipotleComponent]
})
export class ChipotleModule {}
