package dev.opajreborn;

import dev.opajreborn.modules.ModuleManager;
import dev.opajreborn.clickgui.ClickGUI;
import dev.opajreborn.config.ConfigManager;
import net.fabricmc.api.ModInitializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OpaJReborn implements ModInitializer {

    public static final String MOD_ID   = "opajreborn";
    public static final String MOD_NAME = "OpaJReborn";
    public static final String VERSION  = "1.0.0";

    public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

    public static ModuleManager moduleManager;
    public static ClickGUI      clickGUI;
    public static ConfigManager configManager;

    @Override
    public void onInitialize() {
        LOGGER.info("[{}] Initializing v{}", MOD_NAME, VERSION);

        moduleManager  = new ModuleManager();
        configManager  = new ConfigManager();
        clickGUI       = new ClickGUI();

        configManager.loadAll();
        LOGGER.info("[{}] Loaded {} modules", MOD_NAME, moduleManager.getModules().size());
    }
}
