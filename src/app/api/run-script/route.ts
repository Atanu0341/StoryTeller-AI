import { RunEventType, RunOpts } from "@gptscript-ai/gptscript";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const {story, pages, path} = await request.json()
    
    const opts: RunOpts = {
        disableCache: true,
        // gptscript ./story-book.gpt --story "A robot and a human become friends" --pages 5 --path ./stories
        input: `--story ${story} --pages ${pages} --path ${path}`
    }
}