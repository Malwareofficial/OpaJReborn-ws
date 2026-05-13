# Contributing to OpaJReborn

Thanks for wanting to contribute!

## Adding a Module

1. Create a new file in the correct category under `client/src/main/java/dev/opajreborn/modules/<category>/`
2. Extend `Module` and pass the name + category to `super()`
3. Register it in `ModuleManager` under the appropriate section comment
4. Implement `onUpdate()`, `onEnable()`, `onDisable()` as needed

```java
// Example: client/src/main/java/dev/opajreborn/modules/combat/MyModule.java
public class MyModule extends Module {
    public MyModule() { super("MyModule", Category.COMBAT); }

    @Override
    public void onUpdate() { /* logic */ }
}
```

Then add `add(new MyModule());` in the Combat section of `ModuleManager`.

## Website Changes

The website lives in the root of the project (not in a subfolder). Run `npm run dev` to start it.

- Sections are in `src/sections/`
- Shared components are in `src/components/`
- Global styles are in `src/index.css`

## Code Style

- Java: standard Fabric conventions, 4-space indent
- TypeScript: follow existing patterns, no unnecessary abstractions
- No swearing in code comments

## Pull Requests

- One feature / fix per PR
- Describe what it does and why
