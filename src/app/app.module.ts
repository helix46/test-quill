import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { DefaultModule } from './default/default.module';
import Counter from './counter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DefaultModule,
    QuillModule.forRoot({
      customModules: [
        {
          implementation: Counter,
          path: 'modules/counter',
        },
      ],
      customOptions: [
        {
          import: 'formats/font',
          whitelist: [
            'mirza',
            'roboto',
            'aref',
            'serif',
            'sansserif',
            'monospace',
          ],
        },
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
