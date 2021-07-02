# Chakra UI + MDX

## Explanation

[MDX](https://mdxjs.com/) is a Markdown format that lets you seamlessly write JSX in your Markdown documents. You can create custom components and embed them into your content.

## Tech Stack

- [Chakra UI](https://chakra-ui.com)
- [Next JS](https://nextjs.org)
- [MDX](https://mdxjs.com/) with [@next/mdx](https://www.npmjs.com/package/@next/mdx)

MDX exports an `MDXProvider` that can be used to render Markdown files into HTML. It also allows us to pass a components object in order to override the default MDX components (like headings, texts, lists etc...), and also add new components.

The `MDXProvider` is used in `pages/_app.tsx` inside of the `ChakraProvider`. The order matters, because if it was `MDXProvider > ChakraProvider` you wouldn't be able to use Chakra UI components in MDX.

Next JS has an official MDX package called `@next/mdx` which we're using in this example. That package allows Next JS to render `.mdx` files as pages. You can see its usage in `next.config.js`.

## Take it for a spin
If you'd like to run this example locally, you can do:
```
npx degit chakra-ui/examples/examples/mdx chakra-ui-mdx
cd chakra-ui-mdx
yarn install
yarn dev
```

## Components Configuration

You can find the MDX components configuration in `src/mdx-components/index.tsx`. If you'd like to change the colors, edit the spacing, add new components, fine-tune the built-in ones, that's the place you should be looking at.

## Adding new components

Adding new components is fairly simple. All you have to do is register a new component in `src/mdx-components/index.tsx`:

```typescript
const MyComponent = props => {
  /* Your JSX component code */
}

const MDXComponents = {
  h1: props => <Heading {...props} size='3xl' as='h1' apply='mdx.h1' />,
  ...MyComponent // <- make sure to register it in MDXComponents
}
```

and then use it in your `*.mdx` files like so:

```markdown
This is my mdx file.

<MyComponent />
```
