import { Feature } from "@/capabilities/base/Feature";
import type { TypewriterModeSettings } from "@/capabilities/settings";
import type { PluginSettingTab } from "obsidian";
import { Setting } from "obsidian";

export default class LinesAboveAndBelow extends Feature {
	public settingKey: keyof TypewriterModeSettings = "linesAboveAndBelow";

	registerSetting(settingTab: PluginSettingTab): void {
		new Setting(settingTab.containerEl)
			.setName("当前行上下的保留行数")
			.setDesc(
				"始终在当前行上下保留的行数",
			)
			.setClass("typewriter-mode-setting")
			.addText((text) =>
				text
					.setValue(this.tm.settings.linesAboveAndBelow.toString())
					.onChange((newValue) => {
						this.changeAmountOfLinesAboveAndBelow(Number.parseInt(newValue));
					}),
			);
	}

	private changeAmountOfLinesAboveAndBelow(newValue: number) {
		this.tm.settings.linesAboveAndBelow = newValue;
		this.tm.saveSettings().then();
	}
}
