import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MessageBodyComponent } from './message/message-body/message-body.component';
import { MessageAttachmentComponent } from './message/message-attachment/message-attachment.component';
import { MessageSignatureComponent } from './message/message-signature/message-signature.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    AvatarComponent,    
    MessageBodyComponent,
    MessageAttachmentComponent,
    MessageSignatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
