# ds

## Color converter

https://oklch.com/

## Generator palet

https://uicolors.app/generate

## Install

### CSS

style.css

```
@layer tw, ds;

@import 'tailwindcss' layer(tw);
@import '@opi_pib/ds/theme' layer(ds);
```

### Tailwind

style.css

```
@layer tw, ds;

@import 'tailwindcss' layer(tw);
@import '@opi_pib/ds/tailwind' layer(ds);
```

### Font

https://fonts.google.com/specimen/Open+Sans

index.html

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400..700;1,400..700&display=swap"
  rel="stylesheet"
/>
```

style.css

```
body {
	font-family: var(--font-sans);
}
```
