import { linkifyContent } from './src/utils/termLinker.js';
import { dictionaryData } from './src/data/dictionaryData.js';

const testContent = '<p>Likvidita je velmi důležitá pro trading. Nízká likvidita způsobuje volatilitu.</p>';
const result = linkifyContent(testContent, dictionaryData, 'cs');
console.log('RESULT:', result);
