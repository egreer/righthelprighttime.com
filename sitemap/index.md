---
layout: default
title: Site Map
priority: .80
---

<ul>
  {% assign pages_list = site.html_pages | sort: "order", "last" %}
  {% for page in pages_list %}
    <li>
      <a href="{{ page.url | relative_url }}">{{ page.title }}</a>
    </li>
  {% endfor %}
  <li>
    <a href="sitemap.xml">sitemap.xml</a>
  </li>
</ul>

## Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
