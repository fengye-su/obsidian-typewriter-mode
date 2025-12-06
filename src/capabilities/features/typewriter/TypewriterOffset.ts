import { Feature } from "@/capabilities/base/Feature";
import type { TypewriterModeSettings } from "@/capabilities/settings";
import type { PluginSettingTab } from "obsidian";
import { Setting } from "obsidian";

export default class TypewriterOffset extends Feature {
	public settingKey: keyof TypewriterModeSettings = "typewriterOffset";

	registerSetting(settingTab: PluginSettingTab): void {
		new Setting(settingTab.containerEl)
			.setName("打字机偏移")
			.setDesc(
				"将打字机行定位在屏幕的指定百分比位置",
			)
			.setClass("typewriter-mode-setting")
			.addSlider((slider) =>
				slider
					.setLimits(0, 100, 5)
					.setDynamicTooltip()
					.setValue(this.tm.settings.typewriterOffset * 100)
					.onChange((newValue) => {
						this.changeTypewriterOffset(newValue / 100);
					}),
			);
	}

	private changeTypewriterOffset(newValue: number) {
		this.tm.settings.typewriterOffset = newValue;
		this.tm.saveSettings().then();
	}
}
