# Hevel-UI

A collection of custom [Svelte](https://svelte.dev/) UI components built on top of [shadcn-svelte](https://www.shadcn-svelte.com/).

Used for projects I work on, in order to have a consistent design and to avoid rewriting the same components over and over.

## Installation

Install `hevel-ui` in a project with npm

```bash
npm install hevel-ui
```

Or, to update the package

```bash
npm update hevel-ui
```

There is no default theme for now, so you must add a theme to your `app.css`.\
You can find the theme generator of shadcn-svelte [here](https://www.shadcn-svelte.com/themes)

## Usage/Examples

All shadcn and custom components are exported from the root, so they can be imported like this :

```ts
import { Button, DropdownMenu, LightSwitch, Sheet, AudioPlayer } from 'hevel-ui';
```

## Documentation

There is no documentation for now, but you can refer to the [shadcn-svelte documentation](https://www.shadcn-svelte.com/docs) for the shadcn components.

A really basic example of the custom components can be found in the `src/routes/+page.svelte` file for testing purposes.

I intend to add more examples in the future.

## Building & Publication

To build and validate the library, run

```bash
npm run build
```

To deploy the package

```bash
npm publish
```

## Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/) - the original shadcn library for React
- [shadcn-svelte](https://www.shadcn-svelte.com/) - shadcn/ui ported to Svelte by [Huntabyte](https://github.com/huntabyte)
- [Svelte](https://svelte.dev/) - the framework used to build this library
- [svelte-headless-table](https://svelte-headless-table.bryanmylee.com/) - the library used to build the custom table component
- [lucide-svelte](https://lucide.dev/icons/) - the icons used in the custom components

## Disclaimer

Please note that `hevel-ui` is primarily intended for projects I work on, and as such, support may not be readily available for other projects.

Feel free to use the library in your projects, but be aware that breaking changes may occur without notice.

## Contributing

You are welcome to contribute to the project. Please open an issue or a pull request if you have any suggestions or improvements.

## License

See the [LICENSE](LICENSE) file.
