const STORAGE_KEY = "mtm6303_final_checklist_26F_v1";

const STEPS = [
  {
    id: "a2-folder-header",
    phase: "a2",
    phaseLabel: "Part 1 • Assignment 2 Base",
    title: "1. Rename Theme Folder & Update style.css Theme Header",
    desc: "Ensure your active theme folder is named exactly <code>cms2-project</code>, update the Theme Name to <code>CMS II Project</code>, set Author to <code>Sneza M Drouin</code>, and include <code>screenshot.jpeg</code> + a screenshot of your 4+ colour palette.",
    verify: "Save → refresh WP Admin → Appearance → Themes shows 'CMS II Project' by Sneza M Drouin with your Serbia flag screenshot.",
    fileLabel: "style.css (lines 1–8)",
    code: `/*
Theme Name: CMS II Project
Author: Sneza M Drouin
Description: Destination showcasing WordPress theme for Serbia.
Version: 1.0
Text Domain: cms2-project
*/`
  },
  {
    id: "a2-php-comments",
    phase: "a2",
    phaseLabel: "Part 1 • Assignment 2 Base",
    title: "2. Add 3-Question Block Comments to All 6 Required PHP Files",
    desc: "Verify <code>index.php</code>, <code>page.php</code>, <code>footer.php</code>, <code>header.php</code>, <code>functions.php</code>, and <code>front-page.php</code> all exist and start with a block comment answering: (1) What it does in the WP hierarchy, (2) Why it exists separately, and (3) How it connects to other templates.",
    verify: "Inspect the top of all 6 PHP files in VS Code to confirm none are missing the 3-question docblock.",
    fileLabel: "front-page.php (top block comment)",
    code: `<?php
/**
 * 1. Template hierarchy: WordPress loads front-page.php automatically for the static Home page.
 * 2. Separate file: Isolates custom homepage sections (hero, testimonials, cards) from standard inner pages.
 * 3. Connections: Calls get_header(), get_footer(), and get_template_part() to assemble shared layout parts.
 */`
  },
  {
    id: "a2-pages-images",
    phase: "a2",
    phaseLabel: "Part 1 • Assignment 2 Base",
    title: "3. Build 4+ Serbia Pages, Featured Images & 5+ Total Images",
    desc: "In WP Admin → Pages, publish Home plus at least 3 Serbia pages (e.g., Belgrade, Culture & Food, Travel Guide). Assign a Featured Image to at least one inner page so <code>page.php</code> demonstrates <code>has_post_thumbnail()</code>, and display at least 5 images across the site.",
    verify: "Open each page in the browser: verify dynamic title, content, featured image on pages that have one, and clean layout when no featured image is set.",
    fileLabel: "page.php (dynamic title + conditional featured image)",
    code: `<article <?php post_class(); ?>>
  <header class="page-banner"><?php the_title('<h1>', '</h1>'); ?></header>
  <?php if (has_post_thumbnail()) {
    the_post_thumbnail('large');
  } ?>
  <?php the_content(); ?>
</article>`
  },
  {
    id: "a2-breakpoints",
    phase: "a2",
    phaseLabel: "Part 1 • Assignment 2 Base",
    title: "4. Document Every @media Breakpoint in style.css",
    desc: "Check every <code>@media</code> query in <code>style.css</code> (mobile, tablet, desktop) and add a comment block directly above it explaining what breakpoint you chose, what changes at that width, and why your Serbia layout requires it.",
    verify: "Resize browser to ~375px (mobile), ~768px (tablet), and ~1200px (desktop): zero horizontal scrolling and readable typography.",
    fileLabel: "style.css (media query comment standard)",
    code: `/* Breakpoint: 48rem (768px) and below.
   Changes: Stacks the 3-column footer grid and header items into 1 column.
   Why: Prevents narrow column text wrapping and horizontal overflow on tablet/mobile screens. */
@media (max-width: 48rem) {
  .footer-columns {
    grid-template-columns: 1fr;
  }
}`
  },
  {
    id: "a2-footer-phase1",
    phase: "a2",
    phaseLabel: "Part 1 • Assignment 2 Base",
    title: "5. Save Manual 3-Array Footer Evidence in footer-phase1.php",
    desc: "Assignment 2 requires <code>footer-phase1.php</code> inside your theme folder as documentation: 3 columns of Serbia links stored in 3 PHP arrays, rendered with <code>foreach</code> loops, with an HTML comment above each column.",
    verify: "Confirm footer-phase1.php sits inside cms2-project/ alongside footer.php.",
    fileLabel: "footer-phase1.php (documentation copy)",
    code: `<?php
// Documentation copy of Assignment 2 Phase 1 manual footer (not loaded by WordPress).
$places = [
  ['label' => 'Belgrade Fortress', 'url' => 'https://www.beogradskatvrdjava.co.rs/'],
  ['label' => 'Novi Sad', 'url' => 'https://novisad.travel/'],
];
?>
<footer class="site-footer">
  <!-- Column 1: Top Destinations in Serbia -->
  <section>
    <h2>Places to Visit</h2>
    <ul>
      <?php foreach ($places as $link) : ?>
        <li><a href="<?php echo esc_url($link['url']); ?>"><?php echo esc_html($link['label']); ?></a></li>
      <?php endforeach; ?>
    </ul>
  </section>
</footer>`
  },
  {
    id: "fp1-font-bootstrap",
    phase: "fp1",
    phaseLabel: "Part 2 • Final Project 1",
    title: "6. Enqueue Google Font & Bootstrap with Comment in functions.php",
    desc: "In <code>functions.php</code>, load Bootstrap 5 and your Google Font (<code>Lora</code>) via <code>wp_enqueue_style()</code> BEFORE <code>serbia-style</code>. Add the required comment block directly above your font enqueue explaining which font you chose, why it fits Serbia's visual identity, and how it is loaded.",
    verify: "Save → refresh → DevTools Computed styles show 'Lora' on headings and Bootstrap grid classes active.",
    fileLabel: "functions.php (font comment + enqueues)",
    code: `function serbia_assets() {
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css', [], '5.3.8');

    /* Font: Lora (Google Fonts, weights 400 & 600).
       Identity fit: Editorial serif headings evoke Serbia's historic architecture and cultural heritage.
       Loading method: Enqueued via wp_enqueue_style() with null version and passed as a dependency to style.css. */
    wp_enqueue_style('serbia-font', 'https://fonts.googleapis.com/css2?family=Lora:wght@400;600&display=swap', [], null);

    wp_enqueue_style('bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css', [], '1.13.1');
    wp_enqueue_style('serbia-style', get_stylesheet_uri(), ['bootstrap', 'serbia-font', 'bootstrap-icons']);
}
add_action('wp_enqueue_scripts', 'serbia_assets');`
  },
  {
    id: "fp1-social-icons",
    phase: "fp1",
    phaseLabel: "Part 2 • Final Project 1",
    title: "7. Replace Reference Links with 4+ Social Media Icon Links in header.php",
    desc: "Your current <code>header.php</code> still has 2 classroom reference links. Replace them with at least 4 real social media icon links (e.g., Instagram, YouTube, Facebook, X/TikTok for Serbia Tourism) using Bootstrap Icons (<code>&lt;i class=\"bi ...\" aria-hidden=\"true\"&gt;</code>) and descriptive <code>aria-label</code> attributes.",
    verify: "Inspect header in browser: 4+ social icons render, each has an accessible name, and Tab focus outlines work.",
    fileLabel: "header.php (4+ social media icons)",
    code: `<div class="social-links" aria-label="Social media">
  <a href="https://www.instagram.com/serbiatourism/" aria-label="Serbia Tourism on Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a>
  <a href="https://www.youtube.com/@SerbiaTourism" aria-label="Serbia Tourism on YouTube"><i class="bi bi-youtube" aria-hidden="true"></i></a>
  <a href="https://www.facebook.com/serbiatourism/" aria-label="Serbia Tourism on Facebook"><i class="bi bi-facebook" aria-hidden="true"></i></a>
  <a href="https://x.com/serbiatourism" aria-label="Serbia Tourism on X"><i class="bi bi-twitter-x" aria-hidden="true"></i></a>
</div>`
  },
  {
    id: "fp1-header-widget",
    phase: "fp1",
    phaseLabel: "Part 2 • Final Project 1",
    title: "8. Header Widget Area + Mandatory AI Critique",
    desc: "Prompt an AI coding assistant for widget registration/display code BEFORE writing yours, critique what was outdated/wrong in <code>ai-dev-log.md</code>, then verify your <code>register_sidebar()</code> (<code>name => 'Header'</code>, <code>id => 'header-area'</code>) and <code>is_active_sidebar()</code> display at the very top of <code>header.php</code>.",
    verify: "WP Admin → Appearance → Widgets → Header: add a Paragraph block → appears above header; remove it → wrapper disappears cleanly.",
    fileLabel: "functions.php + header.php",
    code: `// In functions.php:
function serbia_widgets() {
    register_sidebar([
        'name'          => 'Header',
        'id'            => 'header-area',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ]);
}
add_action('widgets_init', 'serbia_widgets');

// At the very top inside <header class="site-header"> in header.php:
<?php if (is_active_sidebar('header-area')) : ?>
  <div class="header-widgets"><?php dynamic_sidebar('header-area'); ?></div>
<?php endif; ?>`
  },
  {
    id: "fp1-testimonials",
    phase: "fp1",
    phaseLabel: "Part 2 • Final Project 1",
    title: "9. Dynamic Testimonials Array & Loop (Minimum 3 Serbia Testimonials)",
    desc: "Create/update <code>template-parts/testimonials.php</code> with an array of associative arrays containing at least 3 authentic Serbia visitor testimonials, looped via <code>foreach</code> and escaped with <code>esc_html()</code>.",
    verify: "Refresh Home page: all 3+ Serbia testimonials render dynamically with zero Harbour practice text.",
    fileLabel: "template-parts/testimonials.php",
    code: `<?php
/**
 * a. Contains: Dynamic visitor testimonials section for Serbia.
 * b. Why extracted: Keeps front-page.php clean and makes testimonial markup easy to maintain.
 * c. Called from: front-page.php via get_template_part('template-parts/testimonials').
 */
$testimonials = [
    ['name' => 'Milica K.', 'quote' => 'Walking Kalemegdan Fortress at sunset overlooking the Sava and Danube was unforgettable.'],
    ['name' => 'Stefan D.', 'quote' => 'The street food in Skadarlija and hospitality in Novi Sad made our trip effortless.'],
    ['name' => 'Elena R.', 'quote' => 'Tara National Park has some of the clearest mountain viewpoints in the Balkans.'],
];
?>
<section class="testimonials-section">
  <h2>Visitor Stories</h2>
  <div class="row g-4">
    <?php foreach ($testimonials as $item) : ?>
      <div class="col-12 col-md-4">
        <figure class="card h-100 p-3">
          <blockquote><p><?php echo esc_html($item['quote']); ?></p></blockquote>
          <figcaption class="fw-bold">&mdash; <?php echo esc_html($item['name']); ?></figcaption>
        </figure>
      </div>
    <?php endforeach; ?>
  </div>
</section>`
  },
  {
    id: "fp1-cards-template-parts",
    phase: "fp1",
    phaseLabel: "Part 2 • Final Project 1",
    title: "10. 6 Personalized Bootstrap Cards + 2 Documented Template Parts",
    desc: "Replace the 2 Harbour cards in <code>front-page.php</code> with <strong>6 Serbia Bootstrap cards</strong> (<code>col-12 col-md-6 col-lg-4</code>) styled with your palette. Ensure you have <strong>2 custom template parts</strong> (<code>template-parts/hero.php</code> and <code>template-parts/cards.php</code> or <code>testimonials.php</code>) with comments answering (a) what it contains, (b) why extracted, and (c) where called from.",
    verify: "Check Home at 375px (1 col), 800px (2 cols), and 1200px (3 cols × 2 rows = 6 cards) and verify all 6 links work.",
    fileLabel: "template-parts/cards.php (6 Serbia cards)",
    code: `<?php
/**
 * a. Contains: 6-card responsive Bootstrap grid highlighting Serbian destinations & experiences.
 * b. Why extracted: Separates card data/markup from front-page.php for readability and reuse.
 * c. Called from: front-page.php via get_template_part('template-parts/cards').
 */
$cards = [
    ['title' => 'Belgrade Fortress', 'text' => 'Explore ancient walls above the Danube and Sava rivers.', 'path' => '/belgrade/'],
    ['title' => 'Novi Sad & Petrovaradin', 'text' => 'Discover colorful Austro-Hungarian streets and riverside cafes.', 'path' => '/novi-sad/'],
    ['title' => 'Tara National Park', 'text' => 'Hike deep gorges and panoramic Drina River overlooks.', 'path' => '/nature/'],
    ['title' => 'Serbian Cuisine', 'text' => 'Taste traditional ćevapi, ajvar, burek, and kafana culture.', 'path' => '/culture-food/'],
    ['title' => 'Studenica Monastery', 'text' => 'Visit 12th-century UNESCO marble architecture and frescoes.', 'path' => '/heritage/'],
    ['title' => 'Travel Planning', 'text' => 'Seasonal tips, transit routes, and local currency essentials.', 'path' => '/travel-guide/'],
];
?>
<section class="cards-section">
  <h2>Explore Serbia</h2>
  <div class="row g-4">
    <?php foreach ($cards as $card) : ?>
      <div class="col-12 col-md-6 col-lg-4">
        <article class="card h-100">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title"><?php echo esc_html($card['title']); ?></h3>
            <p class="card-text flex-grow-1"><?php echo esc_html($card['text']); ?></p>
            <a class="btn btn-primary mt-2" href="<?php echo esc_url(home_url($card['path'])); ?>">Explore</a>
          </div>
        </article>
      </div>
    <?php endforeach; ?>
  </div>
</section>`
  },
  {
    id: "fp1-footer-menus",
    phase: "fp1",
    phaseLabel: "Part 2 • Final Project 1",
    title: "11. Configure & Assign All 3 WordPress Footer Menus",
    desc: "Your <code>functions.php</code> already registers <code>footer-one</code>, <code>footer-two</code>, and <code>footer-three</code>, and <code>footer.php</code> loops through them with <code>wp_nav_menu()</code>. Update the footer copyright text from 'Harbour Guide' to your Serbia theme, then create and assign 3 separate menus in WP Admin → Appearance → Menus.",
    verify: "Edit one link in Footer Two in WP Admin → refresh front end → confirm only column 2 changes.",
    fileLabel: "footer.php (clean Serbia branding)",
    code: `<footer class="site-footer">
  <div class="footer-columns">
    <?php foreach ([
      'footer-one'   => 'Destinations',
      'footer-two'   => 'Culture & Tips',
      'footer-three' => 'Site Links'
    ] as $location => $heading) : ?>
      <section>
        <h2><?php echo esc_html($heading); ?></h2>
        <?php wp_nav_menu([
          'theme_location'       => $location,
          'container'            => 'nav',
          'container_aria_label' => $heading,
          'fallback_cb'          => false,
        ]); ?>
      </section>
    <?php endforeach; ?>
  </div>
  <p>&copy; <?php echo date('Y'); ?> Serbia Travel Guide &mdash; Sneza M Drouin</p>
</footer>
<?php wp_footer(); ?>
</body>
</html>`
  },
  {
    id: "sub-ai-dev-log",
    phase: "submit",
    phaseLabel: "Part 3 • Logs & ZIP Submission",
    title: "12. Complete ai-dev-log.md (4+ A2 Entries + 4+ FP1 Entries, 50–100 Words Each)",
    desc: "Create/update <code>ai-dev-log.md</code> inside <code>cms2-project/</code> using the 5-column table (<code>Section | Prompt Used | What AI Generated | What You Changed & Why | What You Wrote Yourself</code>). Include: (1) an AI mistake/correction entry, (2) the Header Widget AI Critique, and (3) a feature built 100% without AI.",
    verify: "Check word counts: every table entry must be 50–100 words.",
    fileLabel: "ai-dev-log.md (Markdown table template)",
    code: `# AI Development Log — CMS II Project (Serbia)

| Section | Prompt Used | What AI Generated | What You Changed & Why | What You Wrote Yourself |
| :--- | :--- | :--- | :--- | :--- |
| Header Widget Area (AI Critique) | "Write WordPress code to register and display a Header widget area." | Generated legacy sidebar code without <code>is_active_sidebar()</code> wrapper and generic <code>&lt;li&gt;</code> tags. | Added <code>is_active_sidebar('header-area')</code> check so empty markup does not render, and changed wrappers to semantic <code>&lt;section&gt;</code> tags. | Integrated the widget area above the site title in <code>header.php</code> and tested adding/removing blocks in WP Admin. |
| Bootstrap Cards &amp; Palette | Did not use AI | N/A — built manually using Bootstrap 5 grid docs and Week 10 follow-along notes. | N/A | Wrote the 6-item Serbia destinations PHP array, responsive <code>col-12 col-md-6 col-lg-4</code> grid, and custom CSS variables in <code>style.css</code>. |`
  },
  {
    id: "sub-zip-video",
    phase: "submit",
    phaseLabel: "Part 3 • Logs & ZIP Submission",
    title: "13. Verify Extracted ZIP File & Record Demo Video URL",
    desc: "Compress the <code>cms2-project</code> folder into a standard <code>.zip</code> file (NOT <code>.rar</code>). Extract it to a test folder to verify all PHP files, <code>template-parts/</code>, <code>style.css</code>, <code>screenshot.jpeg</code>, palette screenshot, and <code>ai-dev-log.md</code> are intact. Record your screen walkthrough explaining your code and paste the accessible video link in the Brightspace submission comment.",
    verify: "Test-extract your ZIP archive before uploading and verify your video link opens in an incognito browser window.",
    fileLabel: "Final ZIP Checklist",
    code: `cms2-project.zip
└── cms2-project/
    ├── style.css
    ├── functions.php
    ├── index.php
    ├── front-page.php
    ├── page.php
    ├── header.php
    ├── footer.php
    ├── footer-phase1.php
    ├── screenshot.jpeg
    ├── palette-screenshot.png
    ├── ai-dev-log.md
    └── template-parts/
        ├── hero.php
        ├── testimonials.php
        └── cards.php`
  }
];

let state = loadState();
let currentFilter = "all";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { checked: {}, notes: {} };
  } catch (e) {
    return { checked: {}, notes: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateProgress();
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderSteps() {
  const container = document.getElementById("steps-container");
  const filtered = currentFilter === "all"
    ? STEPS
    : STEPS.filter(step => step.phase === currentFilter);

  container.innerHTML = filtered.map(step => {
    const isChecked = !!state.checked[step.id];
    const noteText = state.notes[step.id] || "";
    return `
      <article class="step-card ${isChecked ? "completed" : ""}" data-id="${step.id}" data-phase="${step.phase}">
        <div class="step-header">
          <input type="checkbox" class="step-checkbox" id="chk-${step.id}" ${isChecked ? "checked" : ""} aria-label="Mark ${step.title} complete" />
          <div class="step-meta">
            <span class="phase-tag">${step.phaseLabel}</span>
            <h2 class="step-title">${step.title}</h2>
            <p class="step-desc">${step.desc}</p>
            <div class="verify-box"><strong>Save &rarr; Refresh &rarr; Check:</strong> ${step.verify}</div>
            <div class="code-wrapper">
              <div class="code-topbar">
                <span>${step.fileLabel}</span>
                <button type="button" class="copy-btn" data-step="${step.id}">Copy Snippet</button>
              </div>
              <pre><code>${escapeHtml(step.code)}</code></pre>
            </div>
            <textarea class="notes-area" data-note="${step.id}" placeholder="Personal notes or test observations for this step...">${escapeHtml(noteText)}</textarea>
          </div>
        </div>
      </article>
    `;
  }).join("");

  attachStepEvents();
  updateProgress();
}

function attachStepEvents() {
  document.querySelectorAll(".step-checkbox").forEach(box => {
    box.addEventListener("change", (e) => {
      const card = e.target.closest(".step-card");
      const id = card.dataset.id;
      state.checked[id] = e.target.checked;
      card.classList.toggle("completed", e.target.checked);
      saveState();
    });
  });

  document.querySelectorAll(".notes-area").forEach(area => {
    area.addEventListener("input", (e) => {
      state.notes[e.target.dataset.note] = e.target.value;
      saveState();
    });
  });

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const step = STEPS.find(s => s.id === btn.dataset.step);
      if (!step) return;
      try {
        await navigator.clipboard.writeText(step.code);
        const orig = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = orig; }, 1400);
      } catch (err) {
        btn.textContent = "Select & Ctrl+C";
      }
    });
  });
}

function updateProgress() {
  const total = STEPS.length;
  const done = STEPS.filter(s => state.checked[s.id]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  document.getElementById("progress-label").textContent = `${done} / ${total} Completed`;
  document.getElementById("progress-percent").textContent = `${pct}%`;
  document.getElementById("progress-fill").style.width = `${pct}%`;

  document.getElementById("count-all").textContent = total;
  document.getElementById("count-a2").textContent = STEPS.filter(s => s.phase === "a2").length;
  document.getElementById("count-fp1").textContent = STEPS.filter(s => s.phase === "fp1").length;
  document.getElementById("count-submit").textContent = STEPS.filter(s => s.phase === "submit").length;
}

document.querySelectorAll(".tab-btn").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentFilter = tab.dataset.filter;
    renderSteps();
  });
});

document.getElementById("btn-export").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mtm6303-checklist-backup.json";
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById("file-import").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (imported && typeof imported === "object") {
        state = {
          checked: imported.checked || {},
          notes: imported.notes || {}
        };
        saveState();
        renderSteps();
      }
    } catch (err) {
      alert("Invalid backup JSON file.");
    }
  };
  reader.readAsText(file);
});

document.getElementById("btn-reset").addEventListener("click", () => {
  if (confirm("Clear all checked items and saved notes?")) {
    state = { checked: {}, notes: {} };
    saveState();
    renderSteps();
  }
});

renderSteps();
