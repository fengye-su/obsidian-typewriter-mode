import type TypewriterModeLib from "@/lib";
import type { App } from "obsidian";
import {
	PluginSettingTab,
	Setting,
} from "obsidian";

export default class TypewriterModeSettingTab extends PluginSettingTab {
	private tm: TypewriterModeLib;

	constructor(app: App, tm: TypewriterModeLib) {
		super(app, tm.plugin);
		this.tm = tm;
	}

	private addHeading(text: string) {
		return new Setting(this.containerEl).setName(text).setHeading();
	}

	private addText(text: string) {
		return new Setting(this.containerEl).setName(text);
	}

	display(): void {
		this.containerEl.empty();

		for (const feature of Object.values(this.tm.features.general)) {
			feature.registerSetting(this);
		}

		this.addHeading("Typewriter");
		if (this.tm.settings.isKeepLinesAboveAndBelowEnabled)
			this.addText('启用“上下保留行”时不可用');
		for (const feature of Object.values(this.tm.features.typewriter)) {
			feature.registerSetting(this);
		}

		this.addHeading("上下保留行");
		if (this.tm.settings.isTypewriterScrollEnabled)
			this.addText("启用打字机滚动时不可用");
		for (const feature of Object.values(this.tm.features.keepAboveAndBelow)) {
			feature.registerSetting(this);
		}

		this.addHeading("高亮当前行");
		for (const feature of Object.values(this.tm.features.currentLine)) {
			feature.registerSetting(this);
		}

		this.addHeading("暗化");
		for (const feature of Object.values(this.tm.features.dimming)) {
			feature.registerSetting(this);
		}

		this.addHeading("限制行宽");
		for (const feature of Object.values(this.tm.features.maxChar)) {
			feature.registerSetting(this);
		}

		this.addHeading("恢复光标位置");
		for (const feature of Object.values(
			this.tm.features.restoreCursorPosition,
		)) {
			feature.registerSetting(this);
		}

		this.addHeading("写作专注");
		for (const feature of Object.values(this.tm.features.writingFocus)) {
			feature.registerSetting(this);
		}

		this.addHeading("更新通知与赞助");
		for (const feature of Object.values(this.tm.features.updates)) {
			feature.registerSetting(this);
		}
	}
}
