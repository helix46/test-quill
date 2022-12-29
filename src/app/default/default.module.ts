import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [DefaultComponent],
  exports: [DefaultComponent],
  imports: [CommonModule, QuillModule.forRoot()],
})
export class DefaultModule {}
