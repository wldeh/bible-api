// scripts/generate-en-lsv-random.js

const fs = require("fs");
const path = require("path");

const VERSION = "en-lsv";
const ROOT = process.cwd();
const BIBLES_DIR = path.join(ROOT, "bibles");
const VERSION_DIR = path.join(BIBLES_DIR, VERSION);
const BOOKS_DIR = path.join(VERSION_DIR, "books");

if (!fs.existsSync(VERSION_DIR)) {
  console.error(`Version directory not found: ${VERSION_DIR}`);
  process.exit(1);
}
if (!fs.existsSync(BOOKS_DIR)) {
  console.error(`Books directory not found: ${BOOKS_DIR}`);
  process.exit(1);
}

const allVerses = [];

const books = fs
  .readdirSync(BOOKS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const book of books) {
  const chaptersDir = path.join(BOOKS_DIR, book, "chapters");
  if (!fs.existsSync(chaptersDir)) continue;

  const chapters = fs
    .readdirSync(chaptersDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const chapter of chapters) {
    const versesDir = path.join(chaptersDir, chapter, "verses");
    if (!fs.existsSync(versesDir)) continue;

    const verseFiles = fs
      .readdirSync(versesDir, { withFileTypes: true })
      .filter((d) => d.isFile() && d.name.endsWith(".json"))
      .map((d) => d.name);

    for (const verseFile of verseFiles) {
      const verseNumber = verseFile.replace(".json", "");

      const cdnUrl = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${VERSION}/books/${book}/chapters/${chapter}/verses/${verseNumber}.json`;

      allVerses.push({
        version: VERSION,
        book,
        chapter: Number(chapter),
        verse: Number(verseNumber),
        path: `bibles/${VERSION}/books/${book}/chapters/${chapter}/verses/${verseNumber}.json`,
        cdn_url: cdnUrl,
      });
    }
  }
}

// write index.json
const indexPath = path.join(VERSION_DIR, "index.json");
fs.writeFileSync(indexPath, JSON.stringify(allVerses, null, 2), "utf8");
console.log(`Wrote ${allVerses.length} verses to ${indexPath}`);

// pick random
if (allVerses.length === 0) {
  console.error("No verses found for en-lsv. Exiting.");
  process.exit(1);
}

const picked = allVerses[Math.floor(Math.random() * allVerses.length)];

const verseFileAbsolute = path.join(ROOT, picked.path);
const verseJson = JSON.parse(fs.readFileSync(verseFileAbsolute, "utf8"));

const randomOut = {
  version: picked.version,
  reference: `${picked.book} ${picked.chapter}:${picked.verse}`,
  book: picked.book,
  chapter: picked.chapter,
  verse: picked.verse,
  text: verseJson.text,
};

const randomPath = path.join(VERSION_DIR, "random.json");
fs.writeFileSync(randomPath, JSON.stringify(randomOut, null, 2), "utf8");
console.log(`Wrote random verse to ${randomPath}`);
