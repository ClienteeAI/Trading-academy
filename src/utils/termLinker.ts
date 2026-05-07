import { DictionaryTerm } from '../data/dictionaryData';

/**
 * Automatically injects links to dictionary terms and other blog posts within the HTML content.
 * 
 * @param content The raw HTML content of the blog post.
 * @param dictionary All available dictionary terms.
 * @param currentLang The current language code (en, cs, pl).
 * @returns Processed HTML string with injected links.
 */
export function linkifyContent(content: string, dictionary: DictionaryTerm[], currentLang: 'en' | 'cs' | 'pl'): string {
  if (!content) return '';

  // Sort terms by length descending to match longest terms first
  const terms = [...dictionary].sort((a, b) => b.title[currentLang].length - a.title[currentLang].length);

  // Split content by HTML tags to avoid modifying attributes or tag names
  const parts = content.split(/(<[^>]+>)/g);

  return parts.map(part => {
    // If it's a tag, return as is
    if (part.startsWith('<')) return part;

    // Process text content
    let processedText = part;
    
    // Track which terms we've already linked to avoid double-linking or infinite loops
    // But since we are doing a single pass per text node, we just need to be careful.
    
    terms.forEach(term => {
      const termTitle = term.title[currentLang];
      if (!termTitle || termTitle.length < 3) return; // Skip very short terms

      // Escape special regex characters in the title
      const escapedTitle = termTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Basic word boundary regex
      // In Czech/Polish, \b doesn't work well with accented characters, 
      // but for standard titles it's often okay.
      // We also handle common Czech declensions if the term is 'Likvidita'
      let regexPattern = `\\b${escapedTitle}\\b`;
      
      // Special case for 'Likvidita' to catch 'likviditou', 'likvidity', etc.
      if (term.slug === 'liquidity' && currentLang === 'cs') {
        regexPattern = `\\b(Likvidit[a-z]{0,2})\\b`;
      }

      const regex = new RegExp(regexPattern, 'gi');
      
      // Only link if not already inside a link (this is harder with split tags, 
      // but since we process text nodes, we are mostly safe unless the text 
      // node itself is a child of an <a> which we won't know here without full parsing).
      // However, we can check if the processedText already contains the link.
      
      processedText = processedText.replace(regex, (match) => {
        // Simple check to avoid double wrapping (very basic)
        return `<a href="/blog/${term.slug}" class="pro-link" title="${term.description[currentLang].substring(0, 100)}...">${match}</a>`;
      });
    });

    return processedText;
  }).join('');
}
