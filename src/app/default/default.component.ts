import { Component } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
// @ts-ignore
import Quill from 'quill';
import { VideoHandler, ImageHandler, Options } from 'ngx-quill-upload';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
})
export class DefaultComponent {
  blurred = false;
  focused = false;

  modules = {
    toolbar: [['image', 'video']],
    imageHandler: {
      upload: (file: File) => {
        return; // your uploaded image URL as Promise<string>
      },
      accepts: ['png', 'jpg', 'jpeg', 'jfif'], // Extensions to allow for images (Optional) | Default - ['jpg', 'jpeg', 'png']
    } as Options,
    videoHandler: {
      upload: (file: File) => {
        return; // your uploaded video URL as Promise<string>
      },
      accepts: ['mpeg', 'avi'], // Extensions to allow for videos (Optional) | Default - ['mp4', 'webm']
    } as Options,
  };

  created(event: Quill) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event);
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event);
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event);
    this.focused = true;
    this.blurred = false;
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event);
    this.focused = false;
    this.blurred = true;
  }

  constructor() {
    Quill.register('modules/imageHandler', ImageHandler);
    Quill.register('modules/videoHandler', VideoHandler);
  }
}
