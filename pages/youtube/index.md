---
layout: default
permalink: /youtube
---

<div class="row">

  <div class="medium-6 large-5 columns">

    <div class="row">
      <div class="small-3 columns">
        <label for="input-video-id" class="middle">Video Id</label>
      </div>
      <div class="small-9 columns">
        <input type="text" id="input-video-id" placeholder="" />
      </div>
    </div>
    
    <div class="row">
      <div class="small-3 columns">
        <label for="input-post-title" class="middle">Post Title</label>
      </div>
      <div class="small-9 columns">
        <input type="text" id="input-post-title" placeholder="" />
      </div>
    </div>

    <div class="row">
      <div class="small-3 columns">
        <label for="input-post-guid" class="middle">Post Guid</label>
      </div>
      <div class="small-9 columns">
        <input type="text" id="input-post-guid" placeholder="" />
      </div>
    </div>

    <div class="row column">
      <label for="input-post-permalink" class="middle">Post Permalink</label>
      <input type="text" id="input-post-permalink" placeholder="" />
    </div>

    <div class="row">
      <div class="small-3 columns">
        <label for="input-post-latlng" class="middle">Post Latlng</label>
      </div>
      <div class="small-9 columns">
        <input type="text" id="input-post-latlng" placeholder="" />
      </div>
    </div>

    <div class="row">
      <a href="#" id="get-video-info-button" class="button large expanded">Get Video Info</a>
    </div>
    
    <div id="error-msg" class="callout alert hide">
    <div>

</div>

<script>
apikey = "{{ site.apikey }}";
</script>
<script src="{{ '/pages/youtube/script.js' | absolute_url }}"></script>
