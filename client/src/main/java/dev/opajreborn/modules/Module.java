package dev.opajreborn.modules;

import net.minecraft.client.MinecraftClient;

/**
 * Base class for every module. Extend this to add a new module.
 */
public abstract class Module {

    protected static final MinecraftClient mc = MinecraftClient.getInstance();

    private final String   name;
    private final Category category;
    private       boolean  enabled;
    private       int      key; // -1 = no keybind

    public Module(String name, Category category) {
        this.name     = name;
        this.category = category;
        this.enabled  = false;
        this.key      = -1;
    }

    public void toggle() {
        enabled = !enabled;
        if (enabled) onEnable();
        else         onDisable();
    }

    /** Called every client tick while enabled. */
    public void onUpdate() {}

    /** Called when the module is turned on. */
    public void onEnable()  {}

    /** Called when the module is turned off. */
    public void onDisable() {}

    public String   getName()     { return name;     }
    public Category getCategory() { return category; }
    public boolean  isEnabled()   { return enabled;  }
    public void     setEnabled(boolean v) { if (v != enabled) toggle(); }
    public int      getKey()      { return key;      }
    public void     setKey(int k) { key = k;         }
}
