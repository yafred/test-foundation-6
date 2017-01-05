---
layout: default
permalink: /responsive-top-bar
---
<div class="top-bar">
  <div class="top-bar-title">
    <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
      <button class="menu-icon dark" type="button" data-toggle></button>
    </span>
    <strong>Site Title</strong>
  </div>
  <div id="responsive-menu">
    <div class="top-bar-right">
      <!-- not for small -->
      <ul class="show-for-medium dropdown menu" data-dropdown-menu>
        <li>
          <a href="#">Item 1</a>
            <ul class="menu">
              <li><a href="#">Item 1A</a></li>
              <li><a href="#">Item 1B</a></li>
              <li><a href="#">Item 1C</a></li>
            </ul>
        </li>
        <li>
          <a href="#">Item 2</a>
            <ul class="menu">
              <li><a href="#">Item 2A</a></li>
              <li><a href="#">Item 2B</a></li>
              <li><a href="#">Item 2C</a></li>
            </ul>
        </li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
      </ul>  
		
		
      <!-- for small -->
      <ul class="hide-for-medium vertical menu" data-drilldown>
        <li>
          <a href="#">Item 1</a>
            <ul class="menu">
              <li><a href="#">Item 1A</a></li>
              <li><a href="#">Item 1B</a></li>
              <li><a href="#">Item 1C</a></li>
            </ul>
        </li>
        <li>
          <a href="#">Item 2</a>
            <ul class="menu">
              <li><a href="#">Item 2A</a></li>
              <li><a href="#">Item 2B</a></li>
              <li><a href="#">Item 2C</a></li>
            </ul>
        </li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
      </ul>
    </div>
  </div>
</div>