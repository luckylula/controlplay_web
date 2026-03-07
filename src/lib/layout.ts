/**
 * Shared layout constants for the cover/home page.
 * All cover strips use the same height so they look uniform.
 * On large screens (lg/xl) strips are taller so content can expand and stay readable.
 */
export const COVER_STRIP_HEIGHT =
  "h-[440px] sm:h-[500px] lg:h-[640px] xl:h-[720px]";

/**
 * For content sections (categories, equip, contact, cards): on mobile let content
 * flow naturally to avoid overlapping; only apply fixed height from lg up.
 */
export const CONTENT_SECTION_HEIGHT =
  "min-h-0 py-10 sm:py-12 lg:py-0 lg:h-[640px] xl:h-[720px]";
