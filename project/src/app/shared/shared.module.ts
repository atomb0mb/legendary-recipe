import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { AlertComponent } from './alert/alert.component';
import { LoggingService } from '../logging.service';


@NgModule({
    declarations: [
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
    ],
    imports: [CommonModule],
    exports: [
        CommonModule,
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent],

    providers: [LoggingService]
})
export class SharedModule { }
