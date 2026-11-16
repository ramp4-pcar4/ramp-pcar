# ramp-pcar
Was previously called ramp-website but had to be renamed to make the endpoint for the website bilingual. 
If you're looking for the RAMP4 repo, its [here](https://github.com/ramp4-pcar4/ramp4-pcar4).

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Site scope
The site has been reduced to the landing page only (header + RAMP map hero). The feature sections, sample pages and
contact form have been removed; "Get in Touch" / "Request a Demo" are `mailto:` links (see `src/configs/links.ts`).
The landing map is a RAMP2 instance loaded from `public/js/rv-main.js` with `public/config/ramp3/0.json`.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).