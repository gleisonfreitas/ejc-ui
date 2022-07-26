import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message-validacao',
  template: `
    <div *ngIf="temErro()"
      class="ui-message ui-messages-error">
      {{text}}
    </div>
  `,
  styles: ['.ui-messages-error { magin: 0; margin-top: 4px;}']
})
export class MessageValidacaoComponent {

  @Input() control: FormControl;
  @Input() error: string;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
