import { Feature } from "@/capabilities/base/Feature";
import type { TypewriterModeSettings } from "@/capabilities/settings";
import type { PluginSettingTab } from "obsidian";

export default class CurrentLineHighlightStyle extends Feature {
	public settingKey: keyof TypewriterModeSettings = "currentLineHighlightStyle";

	public override getBodyClasses(): string[] {
		return [
			"ptm-current-line-highlight-box",
			"ptm-current-line-highlight-underline",
		];
	}

	registerSetting(settingTab: PluginSettingTab): void {
		
	}

	override load() {
		super.load();
		this.tm.settings.currentLineHighlightStyle = "box";
		this.applyClass();
	}

	private applyClass() {
		const currentLineStyleClass = `ptm-current-line-highlight-${this.tm.settings.currentLineHighlightStyle}`;
		console.debug("apply current line style ", currentLineStyleClass);
		for (const cl of this.getBodyClasses())
			this.tm.perWindowProps.bodyClasses.remove(cl);
		this.tm.perWindowProps.bodyClasses.push(currentLineStyleClass);
		console.debug(this.tm.perWindowProps.bodyClasses);
	}
}
