'use client';

import React from 'react';

interface FormattedTextProps {
  content: string;
  className?: string;
}

/**
 * Component that renders text with basic markdown formatting:
 * - **bold** text
 * - Newlines preserved
 * - Bullet points (• or -) rendered as list items
 */
export function FormattedText({ content, className = '' }: FormattedTextProps) {
  // Split by double newlines to get paragraphs
  const paragraphs = content.split(/\n\n+/);

  return (
    <div className={className}>
      {paragraphs.map((paragraph, pIndex) => {
        // Check if paragraph contains bullet points
        const lines = paragraph.split('\n');
        const isBulletList = lines.every(
          (line) => line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*') || line.trim() === ''
        );

        if (isBulletList && lines.some((line) => line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*'))) {
          // Render as list
          return (
            <ul key={pIndex} className="list-disc pl-5 mb-3 space-y-1">
              {lines
                .filter((line) => line.trim())
                .map((line, lIndex) => {
                  // Remove bullet character and render with bold formatting
                  const cleanLine = line.replace(/^[\s]*[•\-\*][\s]*/, '');
                  return (
                    <li key={lIndex} className="text-gray-600">
                      {renderWithBold(cleanLine)}
                    </li>
                  );
                })}
            </ul>
          );
        }

        // Check if it's a mixed paragraph (text followed by bullets)
        const hasLeadingText = lines.length > 0 && !lines[0].trim().startsWith('•') && !lines[0].trim().startsWith('-') && !lines[0].trim().startsWith('*');
        const hasBullets = lines.some((line) => line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*'));

        if (hasLeadingText && hasBullets) {
          // Split into text and bullets
          const textLines: string[] = [];
          const bulletLines: string[] = [];
          let inBullets = false;

          for (const line of lines) {
            if (line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*')) {
              inBullets = true;
            }
            if (inBullets) {
              bulletLines.push(line);
            } else {
              textLines.push(line);
            }
          }

          return (
            <React.Fragment key={pIndex}>
              {textLines.length > 0 && (
                <p className="mb-2">
                  {textLines.map((line, lIndex) => (
                    <React.Fragment key={lIndex}>
                      {renderWithBold(line)}
                      {lIndex < textLines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              )}
              {bulletLines.length > 0 && (
                <ul className="list-disc pl-5 mb-3 space-y-1">
                  {bulletLines
                    .filter((line) => line.trim())
                    .map((line, lIndex) => {
                      const cleanLine = line.replace(/^[\s]*[•\-\*][\s]*/, '');
                      return (
                        <li key={lIndex} className="text-gray-600">
                          {renderWithBold(cleanLine)}
                        </li>
                      );
                    })}
                </ul>
              )}
            </React.Fragment>
          );
        }

        // Regular paragraph
        return (
          <p key={pIndex} className="mb-3">
            {lines.map((line, lIndex) => (
              <React.Fragment key={lIndex}>
                {renderWithBold(line)}
                {lIndex < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Renders text with **bold** markdown converted to <strong> tags
 */
function renderWithBold(text: string): React.ReactNode {
  // Split by **bold** pattern
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Bold text
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-semibold text-gray-800">
          {boldText}
        </strong>
      );
    }
    return part;
  });
}

