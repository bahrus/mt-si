# mt-si

Provides a "mounted signal" that can be used by other peer components to decide whether to "go to sleep" or remain active.

```html
<script mt-si type=application/json>
{
    "on": "*",
    "whereMediaMatches": "..."
}
</script>

...
<template mt-si defer-be-switched be-switched="...">
    <my-heavy-lifting-component mt-si></my-heavy-lifting-component>
</template>
```

By default, searches for script element with type=application/json within shadow root.  But can specify which one:

```html
<script id=my-mt-observer mt-si type=application/json>
{
    "on": "*",
    "whereMediaMatches": "..."
}
</script>

...
<template mt-si-obs=my-mt-observer defer-be-switched be-switched="...">
    <my-heavy-lifting-component mt-si></my-heavy-lifting-component>
</template>
```



