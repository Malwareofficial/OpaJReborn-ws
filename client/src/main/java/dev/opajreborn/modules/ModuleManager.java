package dev.opajreborn.modules;

import dev.opajreborn.modules.combat.*;
import dev.opajreborn.modules.visual.*;
import dev.opajreborn.modules.movement.*;
import dev.opajreborn.modules.player.*;
import dev.opajreborn.modules.utility.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Registers and manages all modules.
 * To add a new module: instantiate it in the constructor and add to the list.
 */
public class ModuleManager {

    private final List<Module> modules = new ArrayList<>();

    public ModuleManager() {
        // ── Combat ──
        add(new KillAura());
        add(new CrystalAura());
        add(new BedAura());
        add(new Velocity());
        add(new AutoPot());
        add(new Criticals());
        add(new TriggerBot());
        add(new Reach());

        // ── Visual ──
        add(new ESP());
        add(new Tracers());
        add(new Chams());
        add(new FullBright());
        add(new Nametags());
        add(new Xray());
        add(new BlockESP());
        add(new StorageESP());

        // ── Movement ──
        add(new Speed());
        add(new Flight());
        add(new Jesus());
        add(new NoFall());
        add(new Scaffold());
        add(new Blink());
        add(new ElytraFly());
        add(new Sprint());

        // ── Player ──
        add(new AutoArmor());
        add(new InvManager());
        add(new NoHunger());
        add(new ChestStealer());
        add(new Replenish());
        add(new NoSlowdown());

        // ── Utility ──
        add(new AutoRespawn());
        add(new Timer());
        add(new Freecam());
        add(new AutoLog());
        add(new FastPlace());
        add(new PacketFly());
    }

    private void add(Module module) { modules.add(module); }

    public List<Module> getModules() { return modules; }

    public List<Module> getByCategory(Category category) {
        return modules.stream().filter(m -> m.getCategory() == category).toList();
    }

    public Module getByName(String name) {
        return modules.stream().filter(m -> m.getName().equalsIgnoreCase(name)).findFirst().orElse(null);
    }

    public void onUpdate() {
        modules.stream().filter(Module::isEnabled).forEach(Module::onUpdate);
    }

    public void onKey(int keyCode) {
        modules.stream().filter(m -> m.getKey() == keyCode).forEach(Module::toggle);
    }
}
