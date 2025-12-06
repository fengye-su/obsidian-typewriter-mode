import { Feature } from "@/capabilities/base/Feature";
import type { TypewriterModeSettings } from "@/capabilities/settings";
import type { PluginSettingTab } from "obsidian";
import { Setting } from "obsidian";

type Options = "paragraphs" | "sentences";

export default class DimUnfocusedMode extends Feature {
	public settingKey: keyof TypewriterModeSettings = "dimUnfocusedMode";

	registerSetting(settingTab: PluginSettingTab): void {
		new Setting(settingTab.containerEl)
			.setName("未聚焦内容的暗化模式")
			.setDesc("选择暗化未聚焦的段落或句子")
			.setClass("typewriter-mode-setting")
			.addDropdown((dropdown) =>
				dropdown
					.addOption("paragraphs", "段落")
					.addOption("sentences", "句子")
					.setValue(this.tm.settings.dimUnfocusedMode)
					.onChange((newValue) => {
						this.change(newValue as Options);
						settingTab.display();
					}),
			);
	}

	override load() {
		super.load();
		this.tm.perWindowProps.bodyAttrs["data-ptm-dim-unfocused-mode"] =
			this.tm.settings.dimUnfocusedMode;
	}

	private change(newValue: Options) {
		this.tm.settings.dimUnfocusedMode = newValue;
		this.tm.perWindowProps.bodyAttrs["data-ptm-dim-unfocused-mode"] =
			this.tm.settings.dimUnfocusedMode;
		this.tm.saveSettings().then();
	}
}
