package dev.opajreborn.clickgui;

/**
 * Entry point for the in-game ClickGUI.
 * Call open() to show the screen, close() to hide it.
 *
 * Rendering lives in ClickGUIScreen (Minecraft Screen subclass).
 */
public class ClickGUI {

    private ClickGUIScreen screen;

    public ClickGUI() {
        screen = new ClickGUIScreen();
    }

    public void open() {
        net.minecraft.client.MinecraftClient.getInstance().setScreen(screen);
    }

    public void close() {
        net.minecraft.client.MinecraftClient.getInstance().setScreen(null);
    }

    public boolean isOpen() {
        return net.minecraft.client.MinecraftClient.getInstance().currentScreen instanceof ClickGUIScreen;
    }
}
