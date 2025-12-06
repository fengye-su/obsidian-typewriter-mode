import { Feature } from "@/capabilities/base/Feature";
import type { TypewriterModeSettings } from "@/capabilities/settings";
import type { PluginSettingTab } from "obsidian";
import { Setting } from "obsidian";

export default class CurrentLineHighlightUnderlineThickness extends Feature {
	public settingKey: keyof TypewriterModeSettings =
		"currentLineHighlightUnderlineThickness";

	registerSetting(settingTab: PluginSettingTab): void {
		new Setting(settingTab.containerEl)
			.setName("当前行下划线粗细")
			.setDesc("用于高亮当前行的下划线粗细")
			.setClass("typewriter-mode-setting")
			.addSlider((slider) =>
				slider
					.setLimits(1, 5, 1)
					.setDynamicTooltip()
					.setValue(this.tm.settings.currentLineHighlightUnderlineThickness)
					.onChange((newValue) => {
						this.changeCurrentLineHighlightUnderlineThickness(newValue);
					}),
			);
	}

	override load() {
		this.tm.setCSSVariable(
			"--current-line-highlight-underline-thickness",
			`${this.tm.settings.currentLineHighlightUnderlineThickness}px`,
		);
	}

	private changeCurrentLineHighlightUnderlineThickness(newValue: number) {
		this.tm.settings.currentLineHighlightUnderlineThickness = newValue;
		this.tm.setCSSVariable(
			"--current-line-highlight-underline-thickness",
			`${newValue}px`,
		);
		this.tm.saveSettings();
	}
}
