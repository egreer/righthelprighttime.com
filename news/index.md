---
layout: default
title: News
group: navigation
order: 4
---

<div>
{% for post in site.posts %}
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    {{ post.content }}
{% endfor %}
</div>
