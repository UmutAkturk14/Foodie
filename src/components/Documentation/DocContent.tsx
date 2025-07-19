import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

import { ChevronRight } from "lucide-react";

const DocContent = () => {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  }, []);

  return (
    <div className="mt-16 max-w-3xl mx-auto bg-white rounded-lg border border-stone-100 shadow-sm p-8">
      <h3 className="text-2xl font-semibold mb-6" id="installation">
        Installation
      </h3>
      <p className="mb-4 text-muted-foreground">
        Install the library using your package manager of choice:
      </p>
      <pre className="mb-8">
        <code className="bash">{`npm install quokka-js`}</code>
      </pre>

      <h3 className="text-2xl font-semibold mb-6" id="basic-usage">
        Basic Usage
      </h3>
      <p className="mb-4 text-muted-foreground">
        Import the library and start using it in your project:
      </p>
      <pre className="mb-8">
        <code className="typescript">{`/**
 * Import the module you want to use
 * For example, essential jQuery functionalities, you can use
 * the core module which extends with related DOM, Event Manager
 * and Geometry modules.
 * To do that, you can simly import $
 * import { $ } from 'quokka-js';
 */
import { $ } from 'quokka-js';

// Select an element
const $element = $('#element');

// Do your thing
$element.hasClass('className')`}</code>
      </pre>

      <h3 className="text-2xl font-semibold mb-6" id="configuration">
        Other modules
      </h3>
      <p className="mb-4 text-muted-foreground">
        Depending on your needs, you can import additional modules like Chrono
        for time management, Storage for local storage handling, or Utilities
        for various helper functions. Here’s how you can set up a store with
        some common configurations:
      </p>
      <pre>
        <code className="typescript">{`/**
 * For other modules, you can import them as needed.
 * import { Chrono, Storage, Utilities } from 'quokka-js';
 */

import { Storage } from 'quokka-js';

Storage.local.set({
    name: 'user',
    value: {
        id: '12345',
        name: 'John Doe',
        email: 'john@doe.com',
        preferences: {
            theme: 'dark',
            notifications: true,
        },
        options: {
            expires: 7,
            secure: true,
            'opt-in': true
        }
    },
})`}</code>
      </pre>

      <div className="mt-10 text-center flex justify-center items-center ">
        <a
          href="https://umutakturk14.github.io/QuokkaDocs/"
          target="_blank"
          rel="noopener noreferrer"
          className="doc-link border-2 border-stone-100 font-semibold flex justify-center items-center text-amber-700 hover:bg-amber-50 transition-colors px-4 py-2 rounded"
        >
          <span className="inline-block mr-2">📖</span>
          <span className="inline-flex items-center text-sm md:text-base">
            View Complete Documentation
            <ChevronRight className="h-5 w-5 ml-2" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default DocContent;
