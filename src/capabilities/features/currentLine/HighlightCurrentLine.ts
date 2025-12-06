import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class HighlightCurrentLine extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"isHighlightCurrentLineEnabled";
	protected override toggleClass = "ptm-highlight-current-line";
	protected settingTitle = "高亮当前行";
	protected settingDesc = "高亮光标所在的行";
}
