const STORAGE_KEY = "mtm6303_final_checklist_26F_v1";

const STEPS = [
  {
    id: "a2-folder-header",
    phase: "a2",
    phaseLabel: "Part 1 • Assignment 2 Base",
    title: "1. Rename Theme Folder & Update style.css Theme Header",
    desc: "Keep your active theme folder named cms2-project, set Theme Name to CMS II Project, set Author to Sneza M Drouin, and include screenshot.jpeg plus a screenshot of your 4+ colour palette.",
    verify: "WP Admin → Appearance → Themes displays 'CMS II Project' by Sneza M Drouin with your Serbia flag screenshot.",
    fileLabel: "style.css (top header)",
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
    desc: "Ensure index.php, page.php, footer.php, header.php, functions.php, and front-page.php each start with a comment answering: (1) What it does in the WP template hierarchy, (2) Why it exists separately, and (3) How it connects to other template files.",
    verify: "Check the top of all 6 PHP files in VS Code to confirm each has all 3 answers.",
    fileLabel: "front-page.php (top comment)",
    code: `<?php
/**
 * 1. Template hierarchy: WordPress uses front-page.php for the static front page.
 * 2. Separate file: Keeps homepage sections separate from standard page.php layouts.
 * 3. Connections: Calls get_header(), get_footer(), and get_template_part().
 */`
  },
  {
    id: "a2-pages-images",
    phase: "a2",
    phaseLabel: "Part 1 • Assignment 2 Base",
    title: "3. Build 4+ Serbia Pages, Featured Images & 5+ Total Images",
    desc: "Publish Home plus at least 3 Serbia pages in WordPress. Give at least one inner page a Featured Image so page.php demonstrates has_post_thumbnail(), and display at least 5 images across your site.",
    verify: "Visit pages with and without a featured image and confirm dynamic titles, content, and images appear as expected.",
    fileLabel: "page.php",
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
    desc: "Add a comment block above every @media query in style.css explaining the chosen breakpoint, what changes there, and why your Serbia layout needs it.",
    verify: "Test at ~375px, ~768px, and ~1200px widths with no horizontal scrolling.",
    fileLabel: "style.css (@media comment)",
    code: `/* Breakpoint: 48rem (768px) and below.
   Changes: Stacks the 3-column footer grid into 1 column.
   Why: Prevents cramped columns and horizontal overflow on smaller screens. */
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
    title: "5. Keep Manual 3-Array Footer Evidence in footer-phase1.php",
    desc: "Save your Phase 1 manual footer in footer-phase1.php inside cms2-project/ using 3 PHP arrays of Serbia links, foreach loops, and an HTML comment above each column.",
    verify: "Confirm footer-phase1.php exists inside cms2-project/ alongside footer.php.",
    fileLabel: "footer-phase1.php",
    code: `<?php
// Phase 1 manual footer documentation copy (not loaded by WordPress).
$places = [
  ['label' => 'Belgrade Fortress', 'url' => 'https://www.beogradskatvrdjava.co.rs/'],
  ['label' => 'Novi Sad', 'url' => 'https://novisad.travel/'],
];
?>
<footer class="site-footer">
  <!-- Column 1: Featured Places in Serbia -->
  <section>
    <h2>Places</h2>
    <ul>
      <?php foreach ($places as$link) : ?>
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
    desc: "Load Bootstrap and your Google Font (Lora) via wp_enqueue_style() in functions.php, and add a comment above the font enqueue explaining which font you chose, why it fits Serbia's identity, and how it is loaded.",
    verify: "Refresh front end and inspect computed heading font and Bootstrap grid classes.",
    fileLabel: "functions.php",
    code: `function serbia_assets() {
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css', [], '5.3.8');

    /* Font: Lora from Google Fonts.
       Fit: Classic serif character pairs well with Serbia's historic landmarks and editorial content.
       Loading: Enqueued via wp_enqueue_style() and listed as a dependency for style.css. */
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
    title: "7. Add 4+ Social Media Icon Links to header.php",
    desc: "Replace your placeholder reference links in header.php with at least 4 social media icon links using a font icon library (Bootstrap Icons) with aria-hidden=\"true\" on the icon and clear aria-label text on each link.",
    verify: "Confirm 4+ social links appear in the header, each has an accessible name, and Tab focus is visible.",
    fileLabel: "header.php",
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
    desc: "Prompt an AI coding assistant for widget registration/display code first, critique what is outdated/wrong in ai-dev-log.md, and register/display the 'Header' widget area (id: header-area) at the top of header.php.",
    verify: "Add a widget in Appearance → Widgets → Header and confirm it appears above other header content; remove it and confirm no empty wrapper renders.",
    fileLabel: "functions.php + header.php",
    code: `// functions.php
function serbia_widgets() {
    register_sidebar([
        'name'          => 'Header',
        'id'            => 'header-area',
        'before_widget' => '<section id="%1$s" class="widget \%2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ]);
}
add_action('widgets_init', 'serbia_widgets');

// Top of <header class="site-header"> in header.php
<?php if (is_active_sidebar('header-area')) : ?>
  <div class="header-widgets"><?php dynamic_sidebar('header-area'); ?></div>
<?php endif; ?>`
  },
  {
    id: "fp1-testimonials",
    phase: "fp1",
    phaseLabel: "Part 2 • Final Project 1",
    title: "9. Dynamic Testimonials Array & Loop (3+ Serbia Testimonials)",
    desc: "Store at least 3 Serbia testimonials in a PHP array / array of arrays and loop through them with foreach inside template-parts/testimonials.php.",
    verify: "Refresh Home page and confirm 3+ Serbia testimonials display dynamically.",
    fileLabel: "template-parts/testimonials.php",
    code: `<?php
/**
 * a. Contains: Dynamic testimonials list for Serbia.
 * b. Why extracted: Keeps front-page.php clean and easier to edit.
 * c. Called from: front-page.php via get_template_part('template-parts/testimonials').
 */
$testimonials = [
    ['name' => 'Milica K.', 'quote' => 'Sunset views from Kalemegdan Fortress over the rivers were memorable.'],
    ['name' => 'Stefan D.', 'quote' => 'Great hospitality and local food across Belgrade and Novi Sad.'],
    ['name' => 'Elena R.', 'quote' => 'Tara National Park offered unforgettable mountain viewpoints.'],
];
?>
<section class="testimonials-section">
  <h2>Visitor Stories</h2>
  <?php foreach ($testimonials as$item) : ?>
    <figure>
      <blockquote><p><?php echo esc_html($item['quote']); ?></p></blockquote>
      <figcaption><?php echo esc_html($item['name']); ?></figcaption>
    </figure>
  <?php endforeach; ?>
</section>`
  },
  {
    id: "fp1-cards-template-parts",
    phase: "fp1",
    phaseLabel: "Part 2 • Final Project 1",
    title: "10. 6 Personalized Bootstrap Cards + 2 Documented Template Parts",
    desc: "Add a 6-card Bootstrap section styled with your Serbia palette and ensure you have 2 custom template parts with comments answering (a) what it contains, (b) why extracted, and (c) where called from.",
    verify: "Check 6 cards on Home across mobile, tablet, and desktop widths and test card links.",
    fileLabel: "template-parts/cards.php",
    code: `<?php
/**
 * a. Contains: 6 Bootstrap cards highlighting Serbia destinations and travel topics.
 * b. Why extracted: Separates card layout from front-page.php for maintainability.
 * c. Called from: front-page.php via get_template_part('template-parts/cards').
 */
$cards = [
    ['title' => 'Belgrade', 'text' => 'Historic fortress walls and lively neighbourhoods.', 'path' => '/belgrade/'],
    ['title' => 'Novi Sad', 'text' => 'Petrovaradin sights and Danube riverside walks.', 'path' => '/novi-sad/'],
    ['title' => 'Tara Park', 'text' => 'Forest trails and Drina River viewpoints.', 'path' => '/nature/'],
    ['title' => 'Food & Drink', 'text' => 'Traditional dishes, bakeries, and local specialties.', 'path' => '/food/'],
    ['title' => 'Monasteries', 'text' => 'Historic architecture and cultural heritage.', 'path' => '/heritage/'],
    ['title' => 'Getting Around', 'text' => 'Practical travel tips for visiting Serbia.', 'path' => '/travel/'],
];
?>
<section class="cards-section">
  <h2>Explore Serbia</h2>
  <div class="row g-4">
    <?php foreach ($cards as$card) : ?>
      <div class="col-12 col-md-6 col-lg-4">
        <article class="card h-100">
          <div class="card-body">
            <h3 class="card-title"><?php echo esc_html($card['title']); ?></h3>
            <p class="card-text"><?php echo esc_html($card['text']); ?></p>
            <a class="btn btn-primary" href="<?php echo esc_url(home_url($card['path'])); ?>">Read more</a>
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
    title: "11. Register & Display 3 WordPress Footer Menus",
    desc: "Keep footer-one, footer-two, and footer-three registered in functions.php and rendered via wp_nav_menu() in footer.php, then assign 3 separate menus in Appearance → Menus.",
    verify: "Update a link in one footer menu in WP Admin and verify only that column changes on the site.",
    fileLabel: "footer.php",
    code: `<footer class="site-footer">
  <div class="footer-columns">
    <?php foreach ([
      'footer-one'   => 'Places',
      'footer-two'   => 'Plan a visit',
      'footer-three' => 'Resources'
    ] as $location =>$heading) : ?>
      <section>
        <h2><?php echo esc_html($heading); ?></h2>
        <?php wp_nav_menu([
          'theme_location'       => $location,
          'container'            => 'nav',
          'container_aria_label' =>
