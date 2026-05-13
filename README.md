# OpaJReborn

> The blatant Fabric 1.21.11 client. Open source. Free. No limits.

## Features

- **Opal-style ClickGUI** — drag-and-drop, animated, keybindable
- **50+ Modules** — Combat, Visual, Movement, Player, Utility
- **HUD Customizer** — full drag-and-drop HUD builder
- **Config Profiles** — save & load presets instantly
- **Fabric 1.21.11** — stays up to date with every Fabric release

## Quick Install

1. Install [Fabric 1.21.11](https://fabricmc.net/use/installer/)
2. Download the latest `.jar` from [Releases](../../releases)
3. Drop `OpaJReborn.jar` + `FabricAPI.jar` into `.minecraft/mods`
4. Launch Minecraft with the Fabric 1.21.11 profile
5. Press `RSHIFT` in-game to open ClickGUI

## Development

### Website

```bash
cd website
npm install
npm run dev
```

### Client (Gradle)

```bash
./gradlew build
```

Output is in `build/libs/`.

## Project Structure

```
.
├── website/          # OpaJReborn website (Vite + React + TS)
│   ├── src/
│   │   ├── components/   # Shared UI components (Navbar, etc.)
│   │   ├── sections/     # Page sections (Hero, Features, ClickGUI, ...)
│   │   └── App.tsx       # Root component
│   └── package.json
├── src/              # Fabric client source (Java)
│   └── main/
│       ├── java/
│       └── resources/
├── gradle/
├── build.gradle
└── README.md
```

## Contributing

PRs welcome. Open an issue first for large changes.

## License

MIT — see [LICENSE](LICENSE).
