# A PRAJAN KUMAR --- Premium AI Creative Developer Portfolio

## Master Build Specification for Antigravity + Claude Sonnet 4.6

> **Goal:** Build a production-quality, award-level portfolio for **A
> PRAJAN KUMAR**.\
> The website must feel like a futuristic AI engineer's personal
> operating system combined with **Liquid Glass + macOS + cinematic
> creative-development portfolio** aesthetics.

------------------------------------------------------------------------

# 0. CORE IDENTITY

**Name:** A PRAJAN KUMAR

**Primary positioning:** - AI Engineer - Full Stack Developer - Data
Analyst - Freelancer - UI/UX Designer

**Current role/status:** - AWS Student Builder Campus Leader

**Education:** - B.Tech Artificial Intelligence & Data Science - Annai
Mira College of Engineering and Technology - 2023--2027 - CGPA: 8.67/10

The uploaded resume confirms the education, CGPA, technical skills,
projects and achievements above. Use the resume as the factual source
for existing portfolio content and do not invent unsupported
achievements. Where information is missing, use clearly marked
placeholders.

------------------------------------------------------------------------

# 1. IMPORTANT: INSPECT BEFORE BUILDING

Before changing the project:

1.  Inspect the complete repository.
2.  Identify whether the project is React, Next.js, Vite, etc.
3.  Identify TypeScript configuration.
4.  Identify Tailwind CSS.
5.  Identify shadcn/ui.
6.  Identify existing component folders.
7.  Identify routing.
8.  Identify existing animation libraries.
9.  Identify image/font handling.
10. Preserve existing working code.
11. Do not rewrite the entire application unnecessarily.
12. Fix existing build/runtime issues before adding new complexity.

If the project is missing the required stack, configure:

-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   Framer Motion

Reuse the supplied vaporize-text component and floating-menu concept
where appropriate instead of recreating equivalent functionality
unnecessarily.

------------------------------------------------------------------------

# 2. DESIGN DIRECTION

The visual identity should combine:

-   Liquid Glass
-   macOS UI
-   futuristic AI interface
-   dot-matrix typography
-   cinematic photography
-   subtle Arc Reactor energy
-   glass reflections
-   particle effects
-   vapor typography
-   smooth motion
-   minimal luxury
-   creative-agency polish

### DO NOT MAKE IT

-   Generic portfolio
-   Bootstrap portfolio
-   Basic student resume website
-   Overloaded cyberpunk neon website
-   Excessive gradient website
-   Excessive card-grid website
-   Template-looking website

### TARGET FEEL

Think:

**Apple/macOS polish + futuristic AI lab + cinematic Iron Man
interface + Awwwards creative portfolio.**

The interface must look expensive without looking noisy.

------------------------------------------------------------------------

# 3. COLOR SYSTEM

Primary background:

``` text
#050505
#080808
#0B0B0B
```

Use:

-   off-white
-   soft gray
-   transparent white
-   charcoal
-   subtle metallic silver

The **Arc Reactor blue/cyan energy** should be the primary interactive
accent.

Use cyan/blue glow carefully.

Do not turn the entire website blue.

Accent should appear primarily in:

-   spotlight
-   active navigation
-   hover states
-   status indicators
-   subtle borders
-   Arc Reactor-inspired particles
-   interactive buttons

------------------------------------------------------------------------

# 4. LIQUID GLASS SYSTEM

Create reusable glass primitives:

``` text
GlassNav
GlassPanel
GlassCard
GlassButton
GlassDock
GlassModal
GlassTooltip
```

Base appearance:

``` css
background: rgba(255,255,255,0.035–0.075);
border: 1px solid rgba(255,255,255,0.08–0.14);
backdrop-filter: blur(20px) saturate(140%);
-webkit-backdrop-filter: blur(20px) saturate(140%);
```

Add:

-   subtle inner highlight
-   soft shadow
-   faint reflection
-   thin top-edge illumination
-   slight transparency variation

Use different glass intensities rather than making every component
identical.

------------------------------------------------------------------------

# 5. macOS-INSPIRED INTERACTION LANGUAGE

The website should borrow interaction principles from modern macOS:

-   fluid spring animations
-   translucent panels
-   floating controls
-   soft shadows
-   depth hierarchy
-   hover magnification
-   glass dock
-   contextual menus
-   smooth window-like transitions
-   subtle blur
-   responsive feedback

Do not copy Apple's exact UI or branding.

Use the interaction philosophy, not a replica.

------------------------------------------------------------------------

# 6. TYPOGRAPHY

The primary display typography should feel:

-   dot matrix
-   digital
-   technical
-   monospaced
-   futuristic

Use a high-quality readable digital/monospace font.

Suggested hierarchy:

### Display

``` text
A PRAJAN KUMAR
```

### Roles

``` text
AI ENGINEER
FULL STACK DEVELOPER
DATA ANALYST
FREELANCER
UI/UX DESIGNER
```

### Technical labels

``` text
SYSTEM.STATUS
LOCATION
CURRENT ROLE
BUILD
VERSION
```

Do not use the digital font for every paragraph.

Use a clean readable font for body copy.

------------------------------------------------------------------------

# 7. ASSET FOLDER ARCHITECTURE

Create a dedicated asset structure.

``` text
public/
└── assets/
    ├── profile/
    │   ├── profile-main.webp
    │   ├── profile-secondary.webp
    │   └── profile-placeholder.webp
    │
    ├── hero/
    │   ├── iron-man.webp
    │   ├── arc-reactor.webp
    │   └── hero-placeholder.webp
    │
    ├── certificates/
    │   ├── certificate-01.webp
    │   ├── certificate-02.webp
    │   ├── certificate-03.webp
    │   ├── certificate-04.webp
    │   ├── certificate-05.webp
    │   ├── certificate-06.webp
    │   ├── certificate-07.webp
    │   ├── certificate-08.webp
    │   ├── certificate-09.webp
    │   └── certificate-10.webp
    │
    ├── projects/
    │   ├── project-01.webp
    │   ├── project-02.webp
    │   ├── project-03.webp
    │   └── placeholders/
    │
    └── resume/
        └── resume.pdf
```

If the actual asset is unavailable, create a visually appropriate
placeholder with the exact expected filename.

Do not silently substitute unrelated stock photos for personal assets.

------------------------------------------------------------------------

# 8. ASSET PLACEHOLDER SYSTEM

Create an explicit placeholder system.

Example:

``` tsx
<AssetPlaceholder
  type="profile"
  label="ADD PROFILE IMAGE"
/>
```

For missing assets:

``` text
ADD PROFILE IMAGE
ADD IRON MAN IMAGE
ADD ARC REACTOR IMAGE
ADD CERTIFICATE 01
ADD CERTIFICATE 02
ADD PROJECT IMAGE
```

Placeholders must disappear automatically when the real asset is added.

------------------------------------------------------------------------

# 9. HERO --- THE MAIN EXPERIENCE

Hero height:

``` text
100svh
min-height: 700px desktop
```

The hero must immediately communicate:

**A PRAJAN KUMAR**

with:

**AI ENGINEER / FULL STACK DEVELOPER**

Main hero layers:

``` text
Layer 1 → atmospheric background
Layer 2 → moving name marquee
Layer 3 → Iron Man visual
Layer 4 → personal portrait
Layer 5 → glass reflections
Layer 6 → hero metadata
Layer 7 → vapor role
Layer 8 → navigation
```

The portrait must remain the dominant visual.

------------------------------------------------------------------------

# 10. CONTINUOUS A PRAJAN KUMAR BACKGROUND

Create a seamless horizontal marquee.

Text:

``` text
A PRAJAN KUMAR
```

Repeat continuously.

Requirements:

-   infinite
-   seamless
-   no visible jump
-   very large text
-   low opacity
-   behind portrait
-   pointer-events disabled
-   GPU accelerated
-   responsive
-   slightly slower than foreground animations

Example concept:

``` text
A PRAJAN KUMAR   A PRAJAN KUMAR   A PRAJAN KUMAR
      A PRAJAN KUMAR   A PRAJAN KUMAR
```

Use CSS animation where possible.

Do not use JavaScript for a simple marquee.

------------------------------------------------------------------------

# 11. FACE REVEAL

Use the uploaded personal portrait as the actual hero identity.

Do not replace it with stock photography.

Animation:

``` text
dark silhouette
→ digital noise
→ particles
→ face reveal
→ full portrait
→ subtle idle motion
```

Possible timing:

``` text
0.0s  dark/glass silhouette
0.4s  particles appear
0.8s  facial area begins revealing
1.5s  majority of face visible
2.0s  complete reveal
```

Use:

-   mask
-   blur
-   particle noise
-   opacity
-   subtle displacement
-   glass reflection

Keep it cinematic.

------------------------------------------------------------------------

# 12. CRITICAL HERO EXCEPTION --- NO ARC REACTOR CURSOR

The Arc Reactor spotlight must **NOT** affect the face reveal.

Create an explicit interaction boundary:

``` text
.arc-reactor-ignore
```

The hero portrait and face reveal must be excluded from:

-   cursor spotlight
-   Arc Reactor glow
-   interactive spotlight distortion
-   pointer-following energy effects

The portrait can still have its own subtle parallax.

This is a strict requirement.

------------------------------------------------------------------------

# 13. IRON MAN HERO LAYER

Use the provided Iron Man image as a secondary visual.

Composition:

``` text
Iron Man
    ↓
behind / beside portrait
    ↓
low opacity
    ↓
glass + atmospheric treatment
```

The user's face always has higher visual priority.

Iron Man should feel like:

**technology inspiration**

not:

**a superhero poster.**

------------------------------------------------------------------------

# 14. ARC REACTOR SPOTLIGHT --- GLOBAL INTERACTION

I will provide an Arc Reactor image.

Use it to build a reusable spotlight system across the website.

Create:

``` text
ArcReactorSpotlight
```

Behavior:

-   follows cursor
-   soft cyan/blue energy glow
-   subtle radial light
-   slight glass illumination
-   reacts to movement
-   low intensity at rest
-   stronger near interactive elements

Visual concept:

``` text
cursor
  ↓
soft circular energy field
  ↓
glass surfaces illuminate
  ↓
Arc Reactor-style glow
```

The effect should be elegant, not like a flashlight.

------------------------------------------------------------------------

# 15. SPOTLIGHT PERFORMANCE

Desktop:

-   pointer-following spotlight
-   requestAnimationFrame or motion-value based
-   smooth interpolation

Mobile:

-   disable cursor spotlight
-   replace with subtle scroll/interaction glow

Respect:

``` text
prefers-reduced-motion
```

Avoid expensive DOM updates on every React render.

Use CSS variables / motion values where possible.

------------------------------------------------------------------------

# 16. NAVIGATION

Desktop:

``` text
A PRAJAN

HOME
ABOUT
SKILLS
EXPERIENCE
PROJECTS
CERTIFICATIONS
CONTACT
```

Optional:

``` text
RESUME
```

Use a floating glass nav.

It should have:

-   rounded pill shape
-   blur
-   thin border
-   soft reflection
-   active section indicator
-   smooth scroll

------------------------------------------------------------------------

# 17. MOBILE MENU

Do not merely compress desktop navigation.

Use a floating liquid-glass menu.

Collapsed:

``` text
┌──────────────────────┐
│ MENU             ☰   │
└──────────────────────┘
```

Expanded:

``` text
HOME
ABOUT
SKILLS
EXPERIENCE
PROJECTS
CERTIFICATIONS
CONTACT
```

Use:

-   spring animation
-   glass morphing
-   hamburger → X
-   outside-click closing
-   keyboard accessibility
-   section navigation
-   safe-area support
-   iPhone/Android compatibility

------------------------------------------------------------------------

# 18. HERO ROLE --- VAPOR TEXT

Use the supplied vaporize text component.

Roles:

``` text
AI ENGINEER
FULL STACK DEVELOPER
DATA ANALYST
FREELANCER
UI/UX DESIGNER
```

Cycle:

``` text
AI ENGINEER
↓
vaporize
↓
FULL STACK DEVELOPER
↓
vaporize
↓
DATA ANALYST
↓
vaporize
↓
FREELANCER
↓
vaporize
↓
UI/UX DESIGNER
↓
repeat
```

Use:

-   white/off-white particles
-   digital typography
-   moderate density
-   cinematic vapor motion

Ensure actual semantic text remains available for SEO/accessibility.

------------------------------------------------------------------------

# 19. SECTION ORDER

Use this page architecture:

``` text
01 HERO
02 EXPERIENCE
03 SKILLS
04 PROJECTS
05 CERTIFICATIONS
06 ABOUT / ACHIEVEMENTS
07 CONTACT / MACOS DOCK
08 FOOTER
```

The **Experience section must come immediately after Hero.**

------------------------------------------------------------------------

# 20. EXPERIENCE --- DIRECTLY AFTER HERO

Heading:

``` text
EXPERIENCE
```

Subtitle:

``` text
BUILDING, LEARNING, LEADING.
```

Create a cinematic horizontal/vertical timeline.

Highlight the current role prominently:

``` text
2026 — PRESENT

AWS STUDENT BUILDER CAMPUS LEADER
```

Use the user's current AWS Student Builder Campus Leader status as the
current highlight.

Also create editable placeholders for:

``` text
INTERNSHIP
STARTUP / PRODUCT EXPERIENCE
TECHNICAL LEADERSHIP
CLUB / COMMUNITY LEADERSHIP
HACKATHONS
```

Do not invent employers, dates or responsibilities that are not
provided.

------------------------------------------------------------------------

# 21. SKILLS --- SCROLL TITLE GRID

This is a key requested interaction.

Do NOT use a normal vertical skill list.

Create a **horizontal scroll title grid**.

Concept:

``` text
SKILLS

PYTHON
REACT
NODE.JS
MACHINE LEARNING
DATA SCIENCE
GENERATIVE AI
AI AGENTS
JAVASCRIPT
C++
JAVA
MYSQL
MONGODB
SUPABASE
FIGMA
FLUTTER
GITHUB
```

The titles should move horizontally as the user scrolls vertically.

Create a sticky section.

Example:

``` text
VERTICAL SCROLL
       ↓
HORIZONTAL SKILL MOVEMENT
```

Interaction:

-   vertical scroll drives horizontal translation
-   smooth inertial movement
-   hover enlarges the skill
-   Arc Reactor spotlight highlights nearby skills
-   active skill can display a small glass information panel

Do not use progress bars.

------------------------------------------------------------------------

# 22. SKILL CATEGORIES

Based on the resume, organize skills into:

### LANGUAGES

-   Python
-   C
-   C++
-   Java

### FRONTEND

-   HTML5
-   CSS3
-   JavaScript
-   React.js

### BACKEND

-   Node.js

### DATABASE

-   MySQL
-   MongoDB

### TOOLS & PLATFORMS

-   GitHub
-   VS Code
-   Netlify
-   Hugging Face
-   Figma
-   Canva
-   Google Colab
-   Notion
-   Flutter
-   WordPress

### CONCEPTS

-   REST APIs
-   MVC Architecture
-   Responsive Design
-   CRUD Operations

Keep this data editable in `portfolio.ts`.

------------------------------------------------------------------------

# 23. PROJECTS --- EXPANDING CARDS

Create the Projects section using **expanding cards**, inspired by the
provided reference.

Default state:

Multiple narrow project cards arranged horizontally.

When a project is hovered:

-   card expands
-   project image becomes visible
-   title enlarges
-   description appears
-   technology tags appear
-   GitHub button appears
-   Arc Reactor spotlight follows the card

When the pointer leaves:

-   card smoothly collapses

On mobile:

-   use tap-to-expand
-   only one card expanded at a time

------------------------------------------------------------------------

# 24. PROJECT CONTENT

Use resume-supported projects as the initial portfolio dataset:

1.  IDC AMCET
2.  AI Based Real Estate Valuation System
3.  Basic Calculator
4.  To-Do List
5.  Real Time Web Weather Application
6.  AI Quizbot
7.  NASA Space Apps '24 / ZINGO
8.  Real Time AI Accident Predictor
9.  AI Text Generator & Summarizer
10. EnergyGuard

The resume provides project links for several of these. Preserve their
URLs when adding them to the site.

Create an editable schema:

``` ts
{
  id,
  title,
  year,
  description,
  category,
  technologies,
  image,
  github,
  live,
  featured
}
```

If an image is missing:

``` text
ADD PROJECT IMAGE
```

------------------------------------------------------------------------

# 25. PROJECT CARD DESIGN

Collapsed:

``` text
01
AI ACCIDENT
PREDICTOR
```

Expanded:

``` text
01

REAL TIME AI ACCIDENT PREDICTOR

AI-powered road safety project...

Python
Machine Learning
Data Analysis

VIEW PROJECT
GITHUB
```

Use glass, image masking and subtle Arc Reactor lighting.

------------------------------------------------------------------------

# 26. CERTIFICATIONS --- 3D CAROUSEL

Use the supplied Uiverse-style rotating card concept as the visual
reference.

However, improve it for portfolio use.

Create:

``` text
CertificationCarousel
```

Cards must have a **locked landscape aspect ratio**.

Recommended:

``` text
16:10
```

or approximately:

``` text
1.6 : 1
```

Never allow certificates to become portrait cards.

------------------------------------------------------------------------

# 27. CERTIFICATION CAROUSEL BEHAVIOR

Default:

-   certificates continuously slide/rotate
-   smooth motion
-   subtle perspective
-   glass container
-   Arc Reactor atmosphere

When the user hovers over a certificate:

### STOP THE MOTION

The entire carousel must pause immediately/smoothly.

The hovered certificate becomes the focus.

It should:

-   move slightly forward
-   enlarge subtly
-   become sharper
-   receive multi-color illumination
-   display a glass border
-   show a soft Arc Reactor-style energy ring

When the mouse leaves:

-   carousel resumes from the same position

Do NOT restart the animation from the beginning.

------------------------------------------------------------------------

# 28. MULTI-COLOR CERTIFICATE HOVER

The hovered certificate should receive a premium multi-color edge glow.

Use a restrained gradient such as:

``` text
cyan
blue
violet
magenta
```

The effect should look like refracted light through glass.

Do not make the entire certificate neon.

Keep the actual certificate readable.

------------------------------------------------------------------------

# 29. CERTIFICATE PLACEHOLDERS

Create at least 10 slots because the supplied reference uses 10 cards.

``` text
certificate-01
certificate-02
certificate-03
certificate-04
certificate-05
certificate-06
certificate-07
certificate-08
certificate-09
certificate-10
```

If only some certificates are provided:

-   keep the remaining cards as placeholders
-   label them `ADD CERTIFICATE`
-   make them easy to replace

Do not fabricate certificate names.

------------------------------------------------------------------------

# 30. CERTIFICATION DATA MODEL

Create:

``` ts
{
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  image: string;
  placeholder?: boolean;
}
```

Keep it inside:

``` text
data/portfolio.ts
```

------------------------------------------------------------------------

# 31. RESUME

I will add my resume to the project.

Create:

``` text
/public/assets/resume/resume.pdf
```

Add a resume button in:

-   navigation
-   hero or CTA
-   contact/footer

Behavior:

``` text
VIEW RESUME
```

opens the PDF in a new tab.

Do not hard-code a fake resume URL.

If the resume is not available yet, show:

``` text
ADD RESUME
```

and keep the button disabled or clearly marked as pending.

------------------------------------------------------------------------

# 32. ABOUT / PROFILE CONTENT

Use the uploaded resume as the initial factual source.

Current education:

``` text
B.Tech Artificial Intelligence & Data Science
Annai Mira College of Engineering and Technology
2023–2027
CGPA: 8.67/10
```

Resume-supported interests/strengths include:

-   full-stack web development
-   programming
-   problem solving
-   UI/UX design
-   mobile application development
-   responsive interfaces
-   REST APIs
-   scalable web applications

Do not overclaim expertise.

------------------------------------------------------------------------

# 33. ACHIEVEMENTS

Create an interactive achievement strip/grid.

Resume-supported achievements include:

-   Smart India Hackathon participation in 2023, 2024 and 2025
-   NASA Space Apps Challenge 2024
-   MSME Idea Hackathon 4.0
-   Internal hackathons
-   Oracle Data Science course
-   5+ entrepreneurship workshops
-   2 symposiums
-   85+ LeetCode streak

Also highlight:

``` text
AWS STUDENT BUILDER CAMPUS LEADER
CURRENT
```

because this is the user's current status.

Use editable achievement cards.

------------------------------------------------------------------------

# 34. MACOS CONTACT FOOTER

The footer should be one of the most memorable parts of the website.

Make it feel like a **macOS desktop dock / application launcher**.

Visual:

``` text
        ┌─────────────────────────────────────┐
        │  ●  ●  ●                           │
        │                                     │
        │   Mail  GitHub  LinkedIn  LeetCode │
        │   X     Instagram  GFG   CodeChef  │
        └─────────────────────────────────────┘
```

Do not literally copy macOS.

Use a futuristic liquid-glass interpretation.

------------------------------------------------------------------------

# 35. CONTACT DOCK APPS

Include these applications:

1.  Mail
2.  LeetCode
3.  GitHub
4.  LinkedIn
5.  Instagram
6.  X
7.  GeeksforGeeks
8.  CodeChef
9.  Coddy.tech
10. Coding Ninjas
11. HackerRank

Also provide an easy way to add future apps.

Use a data array:

``` ts
const contactApps = [
  {
    name: "Mail",
    icon: "mail",
    url: "mailto:aprajankumar369@gmail.com"
  },
  ...
];
```

Future apps should require adding only one object.

------------------------------------------------------------------------

# 36. EMAIL

Use:

``` text
aprajankumar369@gmail.com
```

Mail app action:

``` text
mailto:aprajankumar369@gmail.com
```

When hovered:

``` text
MAIL
aprajankumar369@gmail.com
```

When clicked:

Open the user's default email client.

------------------------------------------------------------------------

# 37. SOCIAL LINKS

Use the user's real links where available.

Known resume links:

``` text
GitHub:
https://github.com/APK2608

LinkedIn:
https://www.linkedin.com/in/a-prajan-kumar-14305b2a2/
```

For the following, create editable placeholders if the exact URL is not
already configured:

``` text
LeetCode
Instagram
X
GeeksforGeeks
CodeChef
Coddy.tech
Coding Ninjas
HackerRank
```

Do not invent usernames/URLs.

------------------------------------------------------------------------

# 38. MACOS DOCK INTERACTION

On desktop:

-   hover icon → magnify
-   neighboring icons subtly move
-   tooltip appears
-   glass reflection follows cursor
-   Arc Reactor spotlight illuminates the dock

On mobile:

-   convert dock to horizontally scrollable glass tray
-   icons remain large enough for touch
-   no hover-only functionality

------------------------------------------------------------------------

# 39. FUTURE SOCIAL LINKS

Make the footer data-driven.

Example:

``` ts
export const contactApps = [
  {
    id: "mail",
    name: "Mail",
    icon: "mail",
    url: "mailto:aprajankumar369@gmail.com",
    enabled: true,
  },

  {
    id: "github",
    name: "GitHub",
    icon: "github",
    url: "https://github.com/APK2608",
    enabled: true,
  },

  {
    id: "future-platform",
    name: "Future Platform",
    icon: "globe",
    url: "#",
    enabled: false,
  }
];
```

Adding a new platform should not require editing the footer component.

------------------------------------------------------------------------

# 40. FOOTER ENDING

End with:

``` text
A PRAJAN KUMAR

AI × DATA × CODE × DESIGN

AWS STUDENT BUILDER CAMPUS LEADER

● AVAILABLE FOR OPPORTUNITIES

© 2026 A PRAJAN KUMAR
```

Keep it minimal.

------------------------------------------------------------------------

# 41. GLOBAL ARC REACTOR ATMOSPHERE

The Arc Reactor should not only be a cursor spotlight.

Create a subtle global atmospheric layer:

-   very faint blue energy particles
-   occasional radial pulse
-   soft glass reflections
-   subtle energy lines
-   low-opacity circular geometry

These effects should be extremely subtle.

The website should still look elegant when the animation is disabled.

------------------------------------------------------------------------

# 42. ARC REACTOR INTERACTION ZONES

The spotlight should interact with:

-   navigation
-   skill titles
-   project cards
-   certificate cards
-   contact dock
-   buttons
-   glass panels

The spotlight should NOT interact with:

``` text
.hero-face
.face-reveal
```

Implement this explicitly.

------------------------------------------------------------------------

# 43. RESPONSIVE BEHAVIOR

Mobile width:

``` text
320px+
```

Tablet:

``` text
640px+
```

Desktop:

``` text
1024px+
```

Large:

``` text
1440px+
```

Check:

-   no horizontal overflow
-   no clipped typography
-   certificates remain landscape
-   project cards remain usable
-   skills horizontal scroll works
-   mobile menu works
-   contact dock is touch-friendly
-   hero portrait remains dominant

------------------------------------------------------------------------

# 44. MOBILE CERTIFICATIONS

On mobile:

-   maintain landscape certificates
-   allow horizontal touch scrolling
-   pause when finger is interacting
-   selected certificate enlarges slightly
-   prevent accidental page scrolling while dragging only when necessary
-   never make certificates unreadably small

------------------------------------------------------------------------

# 45. MOBILE PROJECTS

Desktop:

``` text
hover → expand
```

Mobile:

``` text
tap → expand
tap another → previous collapses
```

Only one project should be expanded at a time.

------------------------------------------------------------------------

# 46. MOBILE SKILLS

Keep the horizontal title-grid concept.

Use:

``` text
vertical scroll → horizontal movement
```

but reduce animation complexity on low-power devices.

Allow direct horizontal touch interaction as a fallback.

------------------------------------------------------------------------

# 47. ACCESSIBILITY

Implement:

-   semantic HTML
-   keyboard navigation
-   focus states
-   ARIA labels
-   alt text
-   reduced motion
-   readable contrast
-   touch-friendly controls
-   no information exclusively available through hover

Certificates must still be accessible.

Projects must still be accessible.

Social links must still have accessible labels.

------------------------------------------------------------------------

# 48. PERFORMANCE

Strictly optimize:

-   canvas
-   particles
-   cursor effects
-   image loading
-   animations
-   React state updates

Use:

-   IntersectionObserver
-   requestAnimationFrame only where required
-   motion values
-   CSS transforms
-   lazy loading
-   optimized images
-   responsive images

Pause offscreen animations.

Do not run multiple heavy particle systems simultaneously.

------------------------------------------------------------------------

# 49. COMPONENT ARCHITECTURE

Suggested:

``` text
components/
├── ui/
│   ├── vaporize-text-cycle.tsx
│   ├── liquid-glass-nav.tsx
│   ├── mobile-glass-menu.tsx
│   ├── arc-reactor-spotlight.tsx
│   ├── glass-card.tsx
│   ├── glass-button.tsx
│   ├── expanding-project-card.tsx
│   ├── certification-carousel.tsx
│   ├── macos-contact-dock.tsx
│   ├── asset-placeholder.tsx
│   └── scroll-title-grid.tsx
│
├── hero/
│   ├── hero.tsx
│   ├── face-reveal.tsx
│   ├── hero-marquee.tsx
│   └── iron-man-layer.tsx
│
└── sections/
    ├── experience.tsx
    ├── skills.tsx
    ├── projects.tsx
    ├── certifications.tsx
    ├── about.tsx
    ├── contact.tsx
    └── footer.tsx
```

------------------------------------------------------------------------

# 50. DATA ARCHITECTURE

Create:

``` text
data/
└── portfolio.ts
```

Store:

``` ts
export const portfolio = {
  name: "A PRAJAN KUMAR",

  title: "AI Engineer & Creative Technologist",

  roles: [
    "AI ENGINEER",
    "FULL STACK DEVELOPER",
    "DATA ANALYST",
    "FREELANCER",
    "UI/UX DESIGNER",
  ],

  education: {},

  currentRole: {},

  experience: [],

  skills: [],

  projects: [],

  certifications: [],

  achievements: [],

  contactApps: [],

  resume: "/assets/resume/resume.pdf",
};
```

------------------------------------------------------------------------

# 51. PROJECT DATA

Initial project dataset may include:

``` text
IDC AMCET
AI Based Real Estate Valuation System
Basic Calculator
To-Do List
Real Time Weather Application
AI Quizbot
NASA Space Apps '24 / ZINGO
Real Time AI Accident Predictor
AI Text Generator & Summarizer
EnergyGuard
```

Use the resume for supported links and descriptions.

Do not invent detailed metrics unless supplied.

------------------------------------------------------------------------

# 52. CONTENT PLACEHOLDERS

Create placeholders for information that will be added later:

``` text
[ADD EXPERIENCE DETAILS]
[ADD INTERNSHIP]
[ADD CERTIFICATION]
[ADD PROJECT IMAGE]
[ADD PROJECT DESCRIPTION]
[ADD INSTAGRAM URL]
[ADD X URL]
[ADD LEETCODE URL]
[ADD GFG URL]
[ADD CODECHEF URL]
[ADD CODDY.TECH URL]
[ADD CODING NINJAS URL]
[ADD HACKERRANK URL]
```

Do not hide missing information.

Make replacement obvious.

------------------------------------------------------------------------

# 53. RESUME CONTENT EXTRACTION

When the resume is present in the project:

1.  Extract factual information.
2.  Use it to populate the portfolio.
3.  Do not copy the resume visually.
4.  Convert resume content into better web storytelling.
5.  Keep all factual claims traceable to the resume/user input.
6.  If the newer resume differs from older information, prefer the
    newest user-provided resume.

The current uploaded resume shows B.Tech AI & Data Science at Annai Mira
College of Engineering and Technology, 2023--2027, with CGPA 8.67/10 and
the listed skills/projects/achievements.

------------------------------------------------------------------------

# 54. SEO

Title:

``` text
A Prajan Kumar — AI Engineer & Full Stack Developer
```

Description:

``` text
A Prajan Kumar is an AI & Data Science developer building intelligent applications, full-stack products, data-driven systems and modern digital experiences.
```

Use semantic HTML.

Ensure roles appear in real HTML, not only canvas.

------------------------------------------------------------------------

# 55. FINAL PAGE EXPERIENCE

The complete scrolling experience should feel like:

``` text
OPEN WEBSITE
      ↓
CINEMATIC HERO
      ↓
FACE REVEAL
      ↓
VAPOR ROLE
      ↓
EXPERIENCE
      ↓
HORIZONTAL SKILLS
      ↓
EXPANDING PROJECTS
      ↓
CERTIFICATION CAROUSEL
      ↓
ABOUT / ACHIEVEMENTS
      ↓
MACOS CONTACT DOCK
      ↓
FOOTER
```

Every transition should feel connected.

------------------------------------------------------------------------

# 56. DO NOT OVER-ANIMATE

Use animation hierarchy:

### Level 1 --- Essential

-   hero reveal
-   marquee
-   vapor role
-   navigation
-   project expansion

### Level 2 --- Interactive

-   spotlight
-   skill hover
-   certificate hover
-   dock magnification

### Level 3 --- Atmospheric

-   particles
-   noise
-   subtle energy pulses

Level 3 must never compete with Level 1.

------------------------------------------------------------------------

# 57. BUILD QUALITY

Before finishing:

``` text
npm run build
```

or the equivalent project command.

Fix:

-   TypeScript errors
-   ESLint errors
-   runtime errors
-   hydration errors
-   image loading errors
-   mobile layout errors

No console errors should remain.

------------------------------------------------------------------------

# 58. FINAL TEST CHECKLIST

## Hero

-   [ ] Face reveal works
-   [ ] Personal portrait used
-   [ ] Iron Man layer works
-   [ ] Background name continuously moves
-   [ ] Vapor roles cycle
-   [ ] Face is excluded from Arc Reactor spotlight

## Navigation

-   [ ] Desktop glass nav
-   [ ] Mobile glass menu
-   [ ] Smooth section scrolling
-   [ ] Keyboard accessible

## Experience

-   [ ] Appears immediately after Hero
-   [ ] AWS Student Builder Campus Leader shown as current
-   [ ] Other experience is editable

## Skills

-   [ ] Horizontal title grid
-   [ ] Vertical scroll drives horizontal movement
-   [ ] Mobile fallback works

## Projects

-   [ ] Expanding cards
-   [ ] Desktop hover
-   [ ] Mobile tap
-   [ ] One active card on mobile

## Certifications

-   [ ] Landscape locked
-   [ ] Continuous movement
-   [ ] Hover pauses carousel
-   [ ] Selected certificate enlarges
-   [ ] Multi-color glow
-   [ ] Carousel resumes from same position

## Contact

-   [ ] macOS-inspired glass dock
-   [ ] Email works
-   [ ] GitHub works
-   [ ] LinkedIn works
-   [ ] Other platforms are editable
-   [ ] Future apps can be added from data

## Assets

-   [ ] Profile folder created
-   [ ] Hero folder created
-   [ ] Certificates folder created
-   [ ] Projects folder created
-   [ ] Resume folder created
-   [ ] Missing assets use placeholders

## Performance

-   [ ] Mobile smooth
-   [ ] Desktop smooth
-   [ ] Offscreen effects pause
-   [ ] Reduced-motion supported
-   [ ] No unnecessary canvas instances
-   [ ] No console errors
-   [ ] Production build succeeds

------------------------------------------------------------------------

# 59. FINAL CREATIVE DIRECTION

The final portfolio should communicate:

> **A PRAJAN KUMAR**
>
> **AI × DATA × CODE × DESIGN**

It should feel like the user's own digital identity system.

The Arc Reactor is the visual metaphor for intelligence and energy.

The liquid glass is the interface language.

The dot-matrix typography represents technology.

The face reveal represents identity.

The vapor text represents adaptability across technical roles.

The horizontal skill grid represents continuous learning.

The expanding project cards represent depth.

The certification carousel represents growth.

The macOS contact dock represents connectivity.

Everything should ultimately lead back to one memorable identity:

# A PRAJAN KUMAR

Build this as a **real production website**, not a static mockup.
