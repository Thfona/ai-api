import ollama, { ProgressResponse } from 'ollama';

export function createAiModel(): Promise<ProgressResponse> {
    return ollama.create({
        model: 'local-model',
        from: 'deepseek-r1:7b',
        parameters: {
            temperature: 0.5,
        },
    });
}
