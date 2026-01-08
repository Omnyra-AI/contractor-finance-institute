/**
 * Pre-generate audio files for all course lessons
 * Run with: npx ts-node scripts/generate-audio.ts
 */

import * as fs from "fs";
import * as path from "path";

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = "21m00Tcm4TlvDq8ikWAM"; // Rachel - professional female voice

// Import course data
import { contractorFinanceFundamentals } from "../src/lib/course-data";

const OUTPUT_DIR = path.join(__dirname, "../public/audio");

async function generateAudio(text: string, lessonId: string): Promise<void> {
  if (!ELEVENLABS_API_KEY) {
    throw new Error("ELEVENLABS_API_KEY not set");
  }

  console.log(`Generating audio for ${lessonId}...`);

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": ELEVENLABS_API_KEY,
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.0,
          use_speaker_boost: true,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`ElevenLabs API error for ${lessonId}: ${error}`);
  }

  const audioBuffer = await response.arrayBuffer();
  const outputPath = path.join(OUTPUT_DIR, `${lessonId}.mp3`);

  fs.writeFileSync(outputPath, Buffer.from(audioBuffer));
  console.log(`✓ Saved ${outputPath}`);
}

async function main() {
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const course = contractorFinanceFundamentals;
  let totalLessons = 0;
  let generated = 0;
  let skipped = 0;

  for (const module of course.modules) {
    for (const lesson of module.lessons) {
      totalLessons++;
      const outputPath = path.join(OUTPUT_DIR, `${lesson.id}.mp3`);

      // Skip if already exists
      if (fs.existsSync(outputPath)) {
        console.log(`⏭ Skipping ${lesson.id} (already exists)`);
        skipped++;
        continue;
      }

      try {
        await generateAudio(lesson.transcript, lesson.id);
        generated++;

        // Rate limit: ElevenLabs has limits, wait between requests
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`✗ Failed to generate ${lesson.id}:`, error);
      }
    }
  }

  console.log(`\nComplete!`);
  console.log(`Total lessons: ${totalLessons}`);
  console.log(`Generated: ${generated}`);
  console.log(`Skipped: ${skipped}`);
}

main().catch(console.error);
