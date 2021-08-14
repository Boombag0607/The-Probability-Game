from react import jsx

# For multiple paths, use the JSXTransformer class.
transformer = jsx.JSXTransformer()
for jsx_path, js_path in my_paths:
    transformer.transform(jsx_path, js_path=js_path)

# For a single file, you can use a shortcut method.
jsx.transform('./prob-game/src/cards/Card.js', js_path='./prob-game/src/App.js')
