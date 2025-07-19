const exampleCodes = {
  core:
`/**
 * Core Module | Extends with related DOM, Event Manager and Geometry modules
 */
import { $ } from 'quokka-js';

// Select an element
const $product: Core = $('#product');

// Get the data (data-id)
const productData: string = $product.data('id')

// Get the text
const productText: string = $product.text();

// Set the text
$product.text('new text');

// Add class
$product.addClass('newClass');

/**
 * DOM Module
 */

// Append element
$product.append('<p>Appended element.</p>');

// Click element
$product.click();

/* Animations */

// Bounce
$product.bounce();

// Pulse
$product.pulse();

// Flip
$product.flip();

/**
 * Event Manager Module
 */

// Add an event listener
$product.on('click.element:clicked', () => {
  console.log('Element clicked.');
})

// Trigger an event
$product.trigger('click');


/**
 * Geometry Module
 */

// Height
const productHeight: number = $product.height();

// Width
const productWidth: number = $product.width();

// Offset
const productOffset: {top: number, left: number} = $product.offset();

// Is in viewport?
const isInViewport: boolean = $product.isInViewport();
`,
  chrono: `/**
 * Chrono Module
 */
import { Chrono } from 'quokka-js';

// Add time to a given date (or now by default)
const fiveMinutesLater: Date = Chrono.addMinutes(5);
const twoHoursLater: Date = Chrono.addHours(2, new Date('2025-06-05T12:00:00'));
const threeDaysLater: Date = Chrono.addDays(3);
const oneWeekLater: Date = Chrono.addWeeks(1);
const thirtySecondsLater: Date = Chrono.addSeconds(30);
const withExtraMs: Date = Chrono.addMilliseconds(1500);

/**
 * Expiry Checks
 */

// Check if a date/time is expired
const expiryTime = new Date(Date.now() + 5000);
const isExpired: boolean = Chrono.isExpired(expiryTime);

// Time left until expiry in different units
const msLeft: number = Chrono.timeLeft(expiryTime, 'ms');
const secondsLeft: number = Chrono.timeLeft(expiryTime, 'seconds');
const minutesLeft: number = Chrono.timeLeft(expiryTime, 'minutes');
const hoursLeft: number = Chrono.timeLeft(expiryTime, 'hours');
const daysLeft: number = Chrono.timeLeft(expiryTime, 'days');

// Rounded values
const roundedMinutesLeft: number = Chrono.expiresInMinutes(expiryTime);
const roundedHoursLeft: number = Chrono.expiresInHours(expiryTime);
const roundedDaysLeft: number = Chrono.expiresInDays(expiryTime);

/**
 * Set Expiry from Now
 */

// Set expiry by combining multiple units
const customExpiry: Date = Chrono.setExpiryFromNow({ minutes: 10, hours: 1 });

/**
 * Expiry Difference Summary
 */

// Get detailed diff between now and expiry date
const expiryDiff = Chrono.getExpiryDiff(expiryTime);
/*
{
  diff: number,
  isExpired: boolean,
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}
*/

/**
 * Format Expiry
 */

// Get a user-friendly string
const expiryLabel: string = Chrono.formatExpiry(expiryTime);
// → e.g., "Expires in 5 minutes" or "Expired 2 hours ago"
`,
  storage: `/**
 * Storage Module
 */
import { Storage } from 'quokka-js';

/**
 * Local Storage
 */
Storage.local.set({ name: 'username', value: 'Zookeeper' });
Storage.local.get('username'); // → 'Zookeeper'

Storage.local.set({
  name: 'token',
  value: 'abc123',
  expires: Date.now() + 60_000, // Expires in 1 min
});

Storage.local.remove({ name: 'token' });
Storage.local.clear();

Storage.local.has({ name: 'username' }); // → true | false
Storage.local.keys();   // → string[]
Storage.local.values(); // → string[]
Storage.local.entries(); // → [string, string][]
Storage.local.length();  // → number

/**
 * Session Storage
 * Works identically to localStorage, but scoped to the session
 */
Storage.session.set({ name: 'temp', value: true });
Storage.session.get('temp');

/**
 * Expiry Management
 * Automatically cleans expired items on load and during access
 */
`,
  utilities: `/**
 * Utilities Module
 */
import { Utilities } from 'quokka-js';

/**
 * Type Checks
 */
utils.isArray([1, 2, 3]);      // → true
utils.isObject({ a: 1 });      // → true
utils.isEmpty([]);             // → true

/**
 * Debounce & Throttle
 */
const debouncedFn = utils.debounce(() => console.log('debounced'), 300);
const throttledFn = utils.throttle(() => console.log('throttled'), 1000);

debouncedFn();
throttledFn();

/**
 * Device & Browser Detection
 */
utils.getDeviceType();         // → 'mobile' | 'tablet' | 'desktop'
utils.getBrowser();            // → 'Chrome' | 'Safari' | ...
utils.getOS();                 // → 'Windows' | 'macOS' | ...

/**
 * Helpers
 */
utils.generateUUID();          // → 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
utils.deepClone({ x: 1 });     // → { x: 1 }
utils.randomInt(10, 20);       // → 13

/**
 * URL & Encoding
 */
utils.getQueryParam('id');     // → '123'
utils.base64Encode('hello');   // → 'aGVsbG8='
utils.base64Decode('aGVsbG8=');// → 'hello'

/**
 * Geolocation
 */
utils.getCurrentCoordinates()
  .then(({ lat, lon }) => console.log(lat, lon));
';`
};

export default exampleCodes;
