# prototype-grid-providers

Proof of concept for working with CSS Grids in React

```jsx
const LayoutGroupHome = createGridProvider(
	gridStyles,
	['head', 'body', 'sidebar', 'foot']
);

// ... props are grid area names ...

<LayoutGroupHome
	head={<div className={indexStyles.debug}>head el</div>}
	body={<div className={indexStyles.debug}>body</div>}
	sidebar={<div className={indexStyles.debug}>sidebar</div>}
	foot={<div className={indexStyles.debug}>foot</div>}
/>
```

![demo](demo.png)

## Running in development
`gatsby develop`
