package dev.opajreborn.clickgui;

import net.minecraft.client.gui.screen.Screen;
import net.minecraft.text.Text;

/**
 * The actual Minecraft Screen that renders the ClickGUI.
 * Extend with category panels and module rows.
 */
public class ClickGUIScreen extends Screen {

    public ClickGUIScreen() {
        super(Text.literal("OpaJReborn ClickGUI"));
    }

    @Override
    public void render(net.minecraft.client.gui.DrawContext context, int mouseX, int mouseY, float delta) {
        super.render(context, mouseX, mouseY, delta);
        // TODO: Render category panels and module toggles
    }

    @Override
    public boolean shouldPause() { return false; }
}
