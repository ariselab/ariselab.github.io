---
layout: archive
title: "Members"
permalink: /members/
author_profile: true
---



{% include base_path %}
<h2>Faculty</h2>
{% for post in site.members reversed %}
	{% if post.excerpt == "Faculty" %}
   		{% include archive-member.html %}
	{% endif %}
  
{% endfor %}
<h2>Ph.D. students</h2>
{% for post in site.members reversed %}
  {% if post.excerpt == "Ph.D. graduate student" %}
   		{% include archive-member.html %}
	{% endif %}
{% endfor %}
