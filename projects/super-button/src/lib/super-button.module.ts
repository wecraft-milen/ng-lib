import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuperButtonComponent } from './super-button.component';

@NgModule({
  declarations: [SuperButtonComponent],
  imports: [CommonModule],
  exports: [SuperButtonComponent],
})
export class SuperButtonModule {}
