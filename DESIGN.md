---
name: Jessica Albuquerque
description: Personal-brand site of a high-end real estate broker in Sorocaba; the visitor arrives at a lit house at dusk and walks in.
colors:
  ink: "#1C1917"
  ink-2: "#44403C"
  mute: "#6B645D"
  paper: "#FAFAF9"
  stone: "#F1EEE9"
  line: "#D6D3D1"
  line-hover: "#A8A29E"
  brass: "#955A06"
  brass-hi: "#E4B869"
  on-dark: "#FAFAF9"
  on-dark-2: "#CFC9C2"
  night: "#0A0B2A"
  field: "#FFFFFF"
  error: "#9B1C1C"
typography:
  display:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.4rem, 5.6vw, 4.9rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 4.3vw, 3.5rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.22
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0em"
  body-small:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
  caption:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.02em"
  label:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.22em"
  wordmark:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.24em"
  button:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.01em"
  numeral:
    fontFamily: "Poppins, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.04em"
rounded:
  none: "0"
spacing:
  pad: "clamp(20px, 5vw, 72px)"
  gap: "clamp(16px, 2.4vw, 32px)"
  max: "1240px"
  top-h: "72px"
  section: "clamp(96px, 12vw, 190px)"
  section-tall: "clamp(96px, 13vw, 200px)"
  section-short: "clamp(88px, 11vw, 170px)"
  touch: "44px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.field}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "56px"
  button-light-hover:
    backgroundColor: "{colors.brass-hi}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "44px"
  button-ghost-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "13px 14px"
  chip:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "46px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  form-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(26px, 3.2vw, 46px)"
  topbar-solid:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "{spacing.top-h}"
---

# Design System: Jessica Albuquerque

## Overview

**Creative North Star: "The Lit House at Dusk"**

Every rule in this system is read off one photograph: the contemporary house the owner supplied (`public/assets/mansao.webp`), seen at dusk with its lights on. Its door and fascias give the coffee-black, its walls give the pale stone, its windows give the brass, and its architecture gives the straight lines and square corners. The site does not present a catalogue; the scroll walks the visitor up the path, the door swings open, warm light fills the frame, and the page is what is inside. This world replaced an earlier navy-and-gold version after the owner asked for a site that looked less like a template.

The personality is discreet, precise and warm. Large light type at tight tracking carries the voice; small uppercase labels at wide tracking do the naming; photography carries the atmosphere. Density is low: sections breathe at 88 to 200px of vertical padding, the 12-column grid is used asymmetrically, and hairlines do the dividing that boxes and cards would do elsewhere. Motion is one authored moment (the entrance) followed by stillness, with photographs unveiling as they enter view.

Two facts about the material must stay visible to anyone extending the system. Only the mansion photograph is the owner's; the five other photographs are Unsplash hotlinks used as illustrative placeholders. And two pieces of product data are unresolved and shown as visible `[a informar]` markers in the footer: the WhatsApp number and the CRECI registration.

**Key Characteristics:**
- One typeface, Poppins, self-hosted; hierarchy comes from weight (300, 400, 500) and tracking, never from a second family.
- One accent, brass, in two values: dark brass on light surfaces, lit-window brass on dark ones.
- Square corners everywhere (radius 0) and no shadows; depth is tonal and photographic.
- Hairlines (1px) structure lists, indices and steps; there are no card containers.
- A 12-column grid used off-centre: text and images deliberately do not mirror each other.
- One signature interaction, the scroll-driven arrival through the front door, with a complete static fallback.

## Colors

A warm neutral range taken from the house (coffee, stone, warm white) with a single brass accent that stands for the lit windows.

### Primary
- **Brass** (`brass`): the accent on light surfaces. Button hover fill, the underline of text links, the hover colour of a service name, the profile call-to-action, the text caret in fields.
- **Lit-Window Brass** (`brass-hi`): the same accent on dark surfaces. Light-button hover, the underline of text links on dark, focus rings on dark, the scroll progress line, the falling scroll cue, footer link hover, text selection, and the four step numerals.

### Neutral
- **Coffee Black** (`ink`): the door and fascias of the house. Body text, primary buttons, the dark sections (method, footer, hero base), the top rule of the services index, selected chips.
- **Coffee Grey** (`ink-2`): secondary text on light surfaces and field labels.
- **Stone Mute** (`mute`): captions, form notes, placeholders.
- **Warm White** (`paper`): the page background, the solid top bar, the form panel, and text on dark (`on-dark` carries the same value under its own name).
- **Facade Stone** (`stone`): the tinted section background (services) and the placeholder behind photographs while they load.
- **Hairline** (`line`): 1px dividers and field borders; **Hairline Hover** (`line-hover`) is the border of a field or chip under the pointer.
- **Dimmed Warm White** (`on-dark-2`): secondary text on dark surfaces.
- **Dusk Sky** (`night`): the sky of the entrance stage only.
- **Field White** (`field`): the fill of inputs and unselected chips, and the text set directly over photography in the entrance.
- **Error Red** (`error`): the border of an invalid field and its message. The only non-house colour, used only for validation.

### Named Rules
**The Lit Window Rule.** Brass means light or action. It appears where something is lit (the windows, the cue, the progress line) or where something can be done (hover, underline, focus). It never fills a section, a panel or a block of text.

**The Two Brasses Rule.** `brass` on light, `brass-hi` on dark. Dark brass on coffee-black and lit brass on warm white both fail contrast; neither is used that way anywhere in the build.

**The Surface Focus Rule.** Each surface declares its own focus colour: `ink` on light surfaces, `brass-hi` on dark ones (2px outline, 3px offset). A new dark section must set it.

## Typography

**Display Font:** Poppins (with Segoe UI, system-ui, -apple-system, sans-serif)
**Body Font:** Poppins (same stack)
**Label Font:** Poppins (same stack)

**Character:** One geometric sans, pinned by the owner, doing three jobs by weight. Set light and tight it reads as architecture; set medium, small, uppercase and wide it reads as an engraved plate. Served from the site itself as woff2 in weights 300, 400, 500 and 600, with `font-display: swap`; 300 and 400 are preloaded.

### Hierarchy
- **Display** (300, clamp(2.4rem, 5.6vw, 4.9rem), 1.05, -0.04em): the hero headline. The same voice, within a few percent of this size, sets the name over the entrance sky, the closing contact headline (up to 5.4rem, -0.045em) and the service names in the index (up to 4.4rem, line-height 1).
- **Headline** (300, clamp(2rem, 4.3vw, 3.5rem), 1.1, -0.035em): section headings, balanced, often capped near 17ch.
- **Statement** (300, clamp(1.75rem, 3.5vw, 3rem), 1.22, -0.03em): the long opening sentence of the broker section, set as a heading rather than a paragraph.
- **Title** (500, 1.125rem, 1.3, -0.01em): step names and property-profile names.
- **Body** (400, 1rem, 1.75): running text, capped between 42ch and 58ch. A 1.0625rem variant leads the broker section.
- **Body Small** (400, 0.9375rem, 1.7): step descriptions, profile descriptions, chips.
- **Caption** (400, 0.8125rem, +0.02em, `mute`): figure captions, the illustrative-image note, form notes, legal line.
- **Label** (500, 0.75rem, uppercase, +0.18em to +0.26em): principle terms, field labels, the service-row action, the profile action, the skip and scroll cues.
- **Wordmark** (500, 0.8125rem, uppercase, +0.24em): the name in the top bar and footer. There is no logo; the name set this way is the mark.
- **Numeral** (300, clamp(2.4rem, 4.4vw, 3.8rem), tabular figures): the step numbers 01 to 04.

### Named Rules
**The One Family Rule.** Poppins only. A second typeface is not available to this system; contrast comes from the jump between weight 300 at display size and weight 500 at label size.

**The Light and Tight Rule.** Anything above 1.75rem is weight 300 with negative tracking between -0.03em and -0.045em. Large type is never medium or bold.

**The Wide Label Rule.** Uppercase is reserved for 0.75 to 0.875rem text at weight 500 with at least +0.18em tracking. Sentences are never set in uppercase.

## Layout

A centred column (`max` 1240px) with fluid side padding (`pad`, 20 to 72px) holds a 12-column grid with a fluid gutter (`gap`, 16 to 32px). Compositions are asymmetric on purpose: the opening statement spans columns 1 to 8 while its portrait figure sits in 9 to 12 and drops below the baseline; the body text indents to columns 2 to 7; section heads pair a heading in columns 1 to 7 with a note in 9 to 12, bottom-aligned; the gallery places a wide image in 1 to 7, a tall one in 9 to 12 pushed down by up to 180px, and a third in 5 to 12; the contact text takes 1 to 6 and the form 8 to 12.

Vertical rhythm is generous and fluid: sections use 88 to 200px of block padding, and the space between a section head and its content runs 44 to 120px. The page alternates surfaces to mark its chapters: warm white, facade stone, coffee-black, warm white, then the mansion again under a dark veil, then the coffee-black footer.

The top bar is fixed at 72px. It is transparent with light text over the hero and turns solid warm white with a hairline once the page scrolls past the entrance. Anchored sections offset by the bar height.

Responsive behaviour, as built:
- **Below 1024px:** the four steps become a 2 by 2 grid.
- **Below 900px:** the primary navigation is hidden (the wordmark and the WhatsApp action remain); every 12-column composition collapses to a single column with offsets removed; service rows stack name over description with the arrow alone at the right; the tall gallery image becomes 16:10.
- **Below 600px:** steps become a single column with the numeral beside the text; principle rows stack; the hero actions stack full width.

Every interactive target is at least 44px tall.

## Elevation & Depth

The system is flat. There is no `box-shadow` anywhere in the build. Depth comes from three sources: tonal surfaces (warm white, stone, coffee-black), hairlines, and photography with shade laid over it.

Gradients exist, but only as light or as shade over a photograph: the authored dusk sky and stars around the mansion, the glow in the doorway and the flood of light on crossing it, the vignette and scrims that keep entrance text legible, the three-way shade over the hero photograph, and the 86 to 93 percent coffee veil over the mansion in the contact section. No gradient fills a button, a panel, a heading or an empty background.

### Named Rules
**The No Shadow Rule.** Surfaces never lift. A panel separates from what is behind it by colour alone, as the warm-white form does on the veiled photograph.

**The Light Only Rule.** A gradient is admissible when it is light falling or shade over a photograph. A gradient used to decorate a flat surface is not part of this system.

## Shapes

Every corner is square (radius 0): buttons, fields, chips, the form panel, photographs, the skip control. This is the architecture of the house, straight fascias and rectangular openings, and it is the main thing separating the site from the rounded template look the owner rejected.

Lines are 1px and solid: `line` on light, warm white at 14 to 28 percent on dark, `ink` for the single heavy rule that opens the services index. Photographs are plain rectangles at 16:10 or 4:5, cropped by their frame with no border, and unveil top to bottom with a clip. Icons are limited to one drawn arrow (1.5px stroke, square caps) that slides right on hover.

## Components

Controls are quiet and exact: flat fills, square edges, colour changes instead of movement, and an arrow that advances a few pixels to confirm intent.

### Buttons
- **Shape:** square (radius 0), 1px border in the fill colour, 56px tall, 30px side padding, label at 0.95rem weight 500, optional arrow 14px after the label.
- **Primary:** coffee-black fill with warm-white label. Hover turns the fill and border brass with a white label over 0.25s; the arrow moves 5px right.
- **Light:** warm-white fill with coffee label, for dark surfaces and photography. Hover turns it lit-window brass.
- **Ghost:** 44px tall, 22px padding, transparent with a 1px border in the current text colour; lives in the top bar. Hover inverts to a solid fill (warm white over the hero, coffee-black once the bar is solid).
- **Focus:** 2px outline, 3px offset, in the surface's focus colour.

### Text Links
Weight 500 with a 1px brass underline set 7px below the text; hover lowers the underline to 10px. On dark the text is warm white and the underline lit-window brass. Navigation links carry no underline at rest; a 1px line in the text colour draws in from the left on hover.

### Chips
- **Style:** a two-column grid of radio choices, each 46px tall, white fill, 1px hairline, centred label.
- **State:** hover darkens the border; selected fills coffee-black with warm-white text; keyboard focus draws the 2px outline around the chip.

### Cards / Containers
- **Corner Style:** square.
- **Background:** the only contained panel is the contact form: warm white on the veiled mansion photograph, padding 26 to 46px.
- **Shadow Strategy:** none; see Elevation & Depth.
- **Border:** none. Property profiles are not cards: a photograph, a title, one line and a labelled action, with the whole group as one link.

### Inputs / Fields
- **Style:** white fill, 1px hairline, square, 13px by 14px padding, body type, brass caret. Label above in the Label style, coloured `ink-2`; optional hints in lower-case caption.
- **Focus:** the border turns coffee-black, plus the standard outline for keyboard focus.
- **Error:** the border turns error red and a 0.875rem message in the same red appears beneath, announced as an alert.

### Navigation
A fixed 72px bar: wordmark left, four anchor links centre-right at 0.9rem, the ghost WhatsApp action at the far right. Transparent with light text over the hero; solid warm white with coffee text and a hairline after the entrance. Hidden during the entrance until the visitor is inside. Below 900px the anchor links are removed and the bar keeps wordmark and action. The footer repeats the wordmark and the links on coffee-black, with lit-brass hover.

### Service Index Row
A full-width link between hairlines, opened by one coffee-black rule: the service name in display type (columns 1 to 5), a description (6 to 10), and a labelled arrow at the right. On hover the row shifts right by 8 to 22px, its bottom rule darkens, the name turns brass and the arrow advances 8px. Each row opens WhatsApp with a message already written for that service.

### Numbered Steps
Four columns on coffee-black, each opened by a translucent hairline: a light lit-brass numeral, a title, a short description. The numbers describe a real sequence (first contact to keys).

### Principles List
A definition list between hairlines: a 9.5rem label column in uppercase and a one-line description beside it.

### Photograph Frame
A square-cornered frame with the stone colour behind it. The image unveils from the top (clip over 1.3s, scale from 1.1 to 1 over 1.7s) when a fifth of it is in view, once. Linked photographs scale to 1.04 on hover. Stock images carry an "Imagem ilustrativa" caption or the gallery note.

### The Entrance (signature)
A sticky stage 420vh long. The mansion photograph is sized to cover the screen (or show the whole house on tall phones), with the front door pinned at 62 percent of the viewport height and an authored sky and ground extending the image. Scroll progress drives the camera: the photograph scales from the door as if walking toward it, three captions pass, the door leaf (a crop of the same photograph) rotates up to 86 degrees on its hinge to reveal warm light, the light floods the frame, and the living-room hero resolves beneath it with its headline at bottom left. A 2px lit-brass line at the top shows progress; "Pular introdução" at top right jumps inside and moves focus to the headline. Scroll position is eased toward its target each frame rather than applied raw. Without JavaScript or with reduced motion, the stage is skipped entirely and the hero is simply the first screen.

Imagery in use: `public/assets/mansao.webp` (1672 by 941, owner-supplied, provenance in `mansao.webp.json`; not a listing) for the entrance and the contact background, with `public/assets/og.jpg` as its 1200 by 630 crop for link previews. Unsplash placeholders, hotlinked, to be replaced with real material: `photo-1618221195710-dd6b41faaea6` (hero living room), `photo-1600210492486-724fe5c67fb0` (broker section figure), `photo-1613490493576-7fde63acd811`, `photo-1600585154526-990dced4db0d` and `photo-1613977257363-707ba9348227` (the three property profiles).

## Do's and Don'ts

### Do:
- **Do** take every colour from the token set; a new surface is warm white, facade stone or coffee-black.
- **Do** switch brass with the surface: `brass` on light, `brass-hi` on dark, and set the focus colour to match.
- **Do** keep every corner square and every divider a 1px solid line.
- **Do** set large type in Poppins 300 with negative tracking, and small naming text in Poppins 500 uppercase with at least +0.18em tracking.
- **Do** place content on the 12-column grid off-centre, and collapse it to one column below 900px.
- **Do** keep every tap target at 44px or taller and every paragraph under about 58ch.
- **Do** label stock photography as illustrative until real material replaces it, and keep unresolved data (WhatsApp number, CRECI) as a visible marker rather than an invented value.
- **Do** give any new motion a static equivalent under reduced motion, as the entrance and the photograph unveil both have.

### Don't:
- **Don't** add a second typeface, or set large type in a weight above 300.
- **Don't** round a corner or add a box-shadow; this system has neither.
- **Don't** use a gradient on a flat surface. Gradients here are light, or shade over a photograph.
- **Don't** fill a section, panel or paragraph with brass, or introduce a second accent hue.
- **Don't** wrap content in bordered or tinted cards; rows between hairlines and unframed photographs do that work.
- **Don't** add a second authored scroll sequence; after the entrance the page is still except for photographs unveiling.
- **Don't** present the mansion photograph or any stock image as a property for sale.
