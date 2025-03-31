---
title: TailwindCSS Tips I Wish I Learned Earlier
date: 2024-03-24
summary: Learn how to enhance user interaction by adding focus rings to interactive elements like buttons in Tailwind CSS. Improve accessibility and user experience with simple yet effective styling techniques.
image: https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

### Consistent Sizing

When creating square elements or elements with equal height and width, opting for the `size` class instead of separate `height` and `width` classes can enhance readability and maintainability:

```jsx
{
  /* Using height and width classes */
}
<div className="h-12 w-12 bg-red-300"></div>;

{
  /* Using size class (recommended) */
}
<div className="size-12 bg-green-300"></div>;
```

### Using Rings in Tailwind CSS

In Tailwind CSS, rings are a powerful feature for enhancing the focus state of interactive elements like buttons. Let's explore how to use rings with a simple example:

```jsx
<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:ring-2 focus:ring-blue-500">
  Save Changes
</button>
```

In this example, we have a button styled with Tailwind CSS classes. Here's what each class does:

- `bg-blue-500`: Sets the background color of the button to blue.
- `hover:bg-blue-600`: Changes the background color to a darker shade of blue when hovered over.
- `text-white`: Sets the text color to white.
- `font-bold`: Makes the text bold.
- `py-2 px-4`: Adds padding to the top and bottom (py) and left and right (px) of the button.
- `rounded`: Rounds the corners of the button.

Now, let's focus on the `focus:ring-2` and `focus:ring-blue-500` classes.

These classes are responsible for adding a ring around the button when it gains focus.
The focus:ring-2 class specifies the width of the ring (2 pixels in this case), and focus:ring-blue-500 sets the color of the ring to blue to match the button's color.

By adding these ring classes, users can easily identify which element has focus, providing better accessibility and user experience.

Tailwind CSS makes it simple to enhance the interactivity and usability of your web applications with features like rings. Experiment with different colors and sizes to find the perfect style for your buttons and other interactive elements.

### Group

In Tailwind CSS, the `group` and `group-hover` utilities are used to apply styles to elements based on their parent's hover state. This is particularly useful for creating interactive components where you want certain elements within a container to change appearance when the container is hovered over.

Let's start with a simple example of a button with a hover effect using `group`:

```jsx
<button class="group bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Save Changes
  <span class="group-hover:underline ml-1">(Hover me!)</span>
</button>
```

In this example:

- The `group` class is applied to the button element.
- Inside the button, there's a span element with the class `group-hover:underline`. This means that the text within this span will be underlined when the parent button is hovered over.

### Plugins

Extending Tailwind with reusable third-party plugins.
Plugins let you register new styles for Tailwind to inject into the user’s stylesheet using JavaScript instead of CSS.

#### Here some Tailwind CSS plugins for developers

- [daisyui](https://daisyui.com/)
- [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [tailwindcss/container-queries](https://tailwindcss.com/docs/plugins#container-queries)
- [tailwindcss-flip](https://github.com/cvrajeesh/tailwindcss-flip)
- [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- [tailwind-scrollbar-hide](https://github.com/reslear/tailwind-scrollbar-hide)
- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss-opentype](https://tailwindcss-opentype.netlify.app/)
- [tailwindcss-3d](https://github.com/sambauers/tailwindcss-3d)
