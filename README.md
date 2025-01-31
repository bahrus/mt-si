# mt-si [WIP]

Provides a "mounted signal" that can be used by other peer components to decide whether to "go to sleep" or remain active.

```html
<script mt-si type=application/json>
{
    "whereMediaMatches": "..."
}
</script>

...
<template mt-si defer-be-switched be-switched="...">
    <my-heavy-lifting-component defer-hydration mt-si></my-heavy-lifting-component>
</template>
```

When the conditions of the mount observer are met, it removes the defer-be-switched attribute, and sets a breadcrumb property, allowing access to the mount observer:

```html
<template id=myTemplate mt-si be-switched="...">
    <my-heavy-lifting-component defer-hydration mt-si></my-heavy-lifting-component>
</template>

<script>
    import {guid} from 'mount-observer/guid.js';
    const setOfMountObservers = myTemplate[guid];
</script>
```

By default, the mt-si adorning the script element will monitor for all mt-si attributes and apply.

However, will check if -obs is present, and if so, apply selectively:

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



