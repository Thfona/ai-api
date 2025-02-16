import { Injectable } from '@nestjs/common';
import ollama from 'ollama';

@Injectable()
export class ChatService {
    async chat(input: string): Promise<string> {
        const response = await ollama.chat({
            model: 'local-model',
            messages: [{ role: 'user', content: input }],
        });

        return response.message.content;
    }
}
