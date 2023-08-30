import { Component } from '@angular/core';
import {
  ChatClientService,
  ChannelService,
  StreamI18nService,
} from 'stream-chat-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService
  ) {
    const apiKey = 'API key';
    const userId = 'user id';
    const userToken = 'user token';

    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation();
    this.channelService.init({
      type: 'messaging',
      members: { $in: [userId] },
    });
  }
}
