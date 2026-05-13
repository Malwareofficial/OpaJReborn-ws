package dev.opajreborn.config;

import dev.opajreborn.OpaJReborn;
import dev.opajreborn.modules.Module;
import com.google.gson.*;
import net.fabricmc.loader.api.FabricLoader;

import java.io.*;
import java.nio.file.*;

/**
 * Saves and loads module states + settings to .minecraft/config/opajreborn/.
 * Each config profile is a separate JSON file.
 */
public class ConfigManager {

    private final Path configDir;
    private final Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public ConfigManager() {
        configDir = FabricLoader.getInstance().getConfigDir().resolve("opajreborn");
        try { Files.createDirectories(configDir); }
        catch (IOException e) { OpaJReborn.LOGGER.error("Failed to create config dir", e); }
    }

    public void saveAll() { save("default"); }
    public void loadAll() { load("default"); }

    public void save(String profileName) {
        JsonObject root = new JsonObject();
        for (Module m : OpaJReborn.moduleManager.getModules()) {
            JsonObject mod = new JsonObject();
            mod.addProperty("enabled", m.isEnabled());
            mod.addProperty("key", m.getKey());
            root.add(m.getName(), mod);
        }
        Path file = configDir.resolve(profileName + ".json");
        try (Writer w = Files.newBufferedWriter(file)) {
            gson.toJson(root, w);
        } catch (IOException e) {
            OpaJReborn.LOGGER.error("Failed to save config '{}'", profileName, e);
        }
    }

    public void load(String profileName) {
        Path file = configDir.resolve(profileName + ".json");
        if (!Files.exists(file)) return;
        try (Reader r = Files.newBufferedReader(file)) {
            JsonObject root = gson.fromJson(r, JsonObject.class);
            for (Module m : OpaJReborn.moduleManager.getModules()) {
                if (!root.has(m.getName())) continue;
                JsonObject mod = root.getAsJsonObject(m.getName());
                m.setEnabled(mod.get("enabled").getAsBoolean());
                m.setKey(mod.get("key").getAsInt());
            }
        } catch (IOException e) {
            OpaJReborn.LOGGER.error("Failed to load config '{}'", profileName, e);
        }
    }
}
