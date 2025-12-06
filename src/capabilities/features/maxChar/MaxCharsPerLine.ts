import { Feature } from "@/capabilities/base/Feature";
import type { TypewriterModeSettings } from "@/capabilities/settings";
import type { PluginSettingTab } from "obsidian";
import { Setting } from "obsidian";

export default class MaxCharsPerLine extends Feature {
	public settingKey: keyof TypewriterModeSettings = "maxCharsPerLine";

	registerSetting(settingTab: PluginSettingTab): void {
		new Setting(settingTab.containerEl)
			.setName("每行最大字符数")
			.setDesc("每行允许的最大字符数量")
			.setClass("typewriter-mode-setting")
			.addText((text) =>
				text
					.setValue(this.tm.settings.maxCharsPerLine.toString())
					.onChange((newValue) => {
						this.changeMaxCharsPerLine(Number.parseInt(newValue));
					}),
			);
	}

	override load() {
		this.tm.setCSSVariable(
			"--max-chars-per-line",
			`${this.tm.settings.maxCharsPerLine}ch`,
		);
	}

	private changeMaxCharsPerLine(newValue: number) {
		this.tm.settings.maxCharsPerLine = newValue;
		this.tm.setCSSVariable("--max-chars-per-line", `${newValue}ch`);
		this.tm.saveSettings();
	}
}
