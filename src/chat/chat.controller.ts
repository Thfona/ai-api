import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatDto } from './dto/chat.dto';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @Post()
    @HttpCode(200)
    chat(@Body() chatDto: ChatDto): Promise<string> {
        return this.chatService.chat(chatDto.input);
    }
}
