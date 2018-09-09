---
layout: archive
title: "Reading Group"
permalink: /reading/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.reading reversed %}
  {% include archive-reading.html %}
{% endfor %}
