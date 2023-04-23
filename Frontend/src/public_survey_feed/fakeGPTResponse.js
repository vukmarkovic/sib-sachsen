export const fakeGPTResponse = {
    id: 'chatcmpl-6v30QuCYp91jM3P2duXsjAPApjE0R',
    object: 'chat.completion',
    created: 1679054270,
    model: 'gpt-3.5-turbo-0301',
    usage: {
        prompt_tokens: 215,
        completion_tokens: 188,
        total_tokens: 403,
    },
    choices: [
        {
            message: {
                role: 'assistant',
                content:
                    '\n\n{\n  "phrases": [\n    {"phrase": "Unsere Software ermöglicht", "rating": "positive"},\n    {"phrase": "zufriedene", "rating": "positive"},\n    {"phrase": "mental gesunde", "rating": "positive"},\n    {"phrase": "leistungsstarke Teams", "rating": "positive"},\n    {"phrase": "messbar", "rating": "positive"},\n    {"phrase": "113 Soft Facts", "rating": "positive"},\n    {"phrase": "menschlicher Eigenschaften", "rating": "positive"},\n    {"phrase": "sichtbar", "rating": "positive"},\n    {"phrase": "verständlich", "rating": "positive"},\n    {"phrase": "jedes Team nutzbar machen", "rating": "positive"},\n    {"phrase": "Softes", "rating": "positive"}\n  ]\n}',
            },
            finish_reason: 'stop',
            index: 0,
        },
    ],
}
