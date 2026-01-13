#!/usr/bin/env node
// ABOUTME: Basic smoke checks for required presentation files
// ABOUTME: Ensures the reveal.js shell and sample decks exist

'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const requiredFiles = [
  'index.html',
  'css/custom.css',
  'js/deck-loader.js',
  'js/auto-scale.js',
  'slides/ap-cs/sample.md',
  'slides/ap-ush/sample.md',
  'slides/football/sample.md',
  'slides/ap-ush/unit3-1-3-4.md',
];

const missing = requiredFiles.filter((file) => {
  const fullPath = path.join(root, file);
  return !fs.existsSync(fullPath);
});

if (missing.length > 0) {
  console.error('Smoke test failed. Missing files:');
  missing.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

console.log('Smoke test passed. Required files are present.');
