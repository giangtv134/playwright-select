import { InjectedScript } from './injectedScript';

const SelectorGenerator = InjectedScript()

// Initialize InjectedScript (in a browser context, simplified)
// https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/injected/injectedScript.ts
const generator = new SelectorGenerator(
    globalThis,
    false,
    'javascript',
    'testId',
    1,
    'chrome',
    []);

/**
 * Parses a Playwright selector and returns the matching web element.
 * @param {string} selector - The Playwright selector string.
 * @returns {Element|null} The matched web element or null if not found.
 */
export function getElementByPlaywrightSelector(selector) {
    try {
        const parsedSelector = generator.parseSelector(selector);
        const elements = generator.querySelectorAll(parsedSelector, document);
        return elements[0] || null;
    } catch (error) {
        console.error('Error parsing selector:', error);
        return null;
    }
}

/**
 * Generates a Playwright selector string from a web element.
 * @param {Element} element - The web element to generate a selector for.
 * @returns {string} The Playwright selector string.
 */
export function generatePlaywrightSelector(element) {
    try {
        const selector = generator.generateSelector(element, {});
        return selector || 'Could not generate a valid selector';
    } catch (error) {
        console.error('Error generating selector:', error);
        return '';
    }
}

document.getElementByPlaywright = getElementByPlaywrightSelector;
document.generatePlaywrightSelector = generatePlaywrightSelector;
