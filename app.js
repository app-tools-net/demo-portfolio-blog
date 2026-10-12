/**
 * js/app.js
 * Core engine for the Portfolio & Blog Hub boilerplate.
 */

const PortfolioEngine = {
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.calculateReadingTimes();
        });
    },

    /**
     * UTILITY: AUTOMATED READING TIMER CALCULATOR
     * Scans an article layout container block, counts the words, and calculates 
     * a precise estimation metric to output into the article metadata UI track.
     */
    calculateReadingTimes() {
        const targetArticle = document.querySelector('article');
        const metricDisplay = document.getElementById('publishTime');

        if (targetArticle && metricDisplay) {
            const layoutTextContent = targetArticle.innerText;
            // Split string text arrays to count isolated word fragments cleanly
            const totalWordsCount = layoutTextContent.trim().split(/\s+/).length;
            
            // Average standard analytical reading velocity parameters (200 words per minute)
            const readingMinutesValue = Math.ceil(totalWordsCount / 200);
            
            // Append calculation string to the time element tag safely
            metricDisplay.innerText += ` • ${readingMinutesValue} min read`;
        }
    }
};

PortfolioEngine.init();
