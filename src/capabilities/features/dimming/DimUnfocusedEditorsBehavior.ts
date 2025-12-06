import { Feature } from "@/capabilities/base/Feature";
import type { TypewriterModeSettings } from "@/capabilities/settings";
import type { PluginSettingTab } from "obsidian";
import { Setting } from "obsidian";

export default class DimUnfocusedEditorsBehavior extends Feature {
	public settingKey: keyof TypewriterModeSettings =
		"dimUnfocusedEditorsBehavior";

	registerSetting(settingTab: PluginSettingTab): void {
		new Setting(settingTab.containerEl)
			.setName("未聚焦笔记的暗化行为")
			.setDesc(
				"光标不在的笔记/编辑器中段落或句子的暗化方式（例如拆分窗格打开多个笔记时）",
			)
			.setClass("typewriter-mode-setting")
			.addDropdown((dropdown) =>
				dropdown
					.addOption("dim-none", "不暗化任何内容")
					.addOption(
						"dim",
						"除刚刚聚焦的段落/句子外全部暗化",
					)
					.addOption("dim-all", "暗化全部")
					.setValue(this.tm.settings.dimUnfocusedEditorsBehavior)
					.onChange((newValue) => {
						this.changeDimUnfocusedEditorsBehavior(
							newValue as "dim-none" | "dim" | "dim-all",
						);
						settingTab.display();
					}),
			);
	}

	override load() {
		super.load();
		this.tm.perWindowProps.bodyAttrs[
			"data-ptm-dim-unfocused-editors-behavior"
		] = this.tm.settings.dimUnfocusedEditorsBehavior;
	}

	private changeDimUnfocusedEditorsBehavior(
		newValue: "dim-none" | "dim" | "dim-all",
	) {
		this.tm.settings.dimUnfocusedEditorsBehavior = newValue;
		this.tm.perWindowProps.bodyAttrs[
			"data-ptm-dim-unfocused-editors-behavior"
		] = newValue;
		this.tm.saveSettings().then();
	}
}
