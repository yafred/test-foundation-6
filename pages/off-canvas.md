---
layout: default
permalink: /off-canvas
---


<div class="off-canvas position-left" id="offCanvasLeft" data-off-canvas>

  <!-- Close button -->
  <button class="close-button" aria-label="Close menu" type="button" data-close>
    <span aria-hidden="true">&times;</span>
  </button>

  <!-- Menu -->
  <ul class="vertical menu">
    <li><a href="#">Foundation</a></li>
    <li><a href="#">Dot</a></li>
    <li><a href="#">ZURB</a></li>
    <li><a href="#">Com</a></li>
    <li><a href="#">Slash</a></li>
    <li><a href="#">Sites</a></li>
  </ul>
</div>

<div class="off-canvas-content" data-off-canvas-content>
  <p>This is the content</p>
  <button type="button" class="button" data-toggle="offCanvasLeft">Open Menu</button>
</div>
