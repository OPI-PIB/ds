# ds

## Color converter

https://oklch.com/

## Palette generator

https://uicolors.app/generate

## Install

### CSS

style.css

```
@layer tw, ds;

@import 'tailwindcss' layer(tw);
@import '@opi_pib/ds'; // automatic layer 'ds'
```

or

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@opi_pib/ds/dist/index.css" />
```

### Tailwind

style.css

```
@layer tw, ds;

@import 'tailwindcss' layer(tw);
@import '@opi_pib/ds/tailwind' layer(ds); // automatic layer 'ds'
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

### Icons

index.html

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@opi_pib/ds/icons/ds-icons.css" />
```

or

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@opi_pib/ds@1.0.36/icons/ds-icons.css" />
```

file.html

```
<i class="ds-icon-edit" aria-label="Edytuj"></i>
```

or

```
<i class="ds-img-edit" aria-label="Edytuj"></i>
```
