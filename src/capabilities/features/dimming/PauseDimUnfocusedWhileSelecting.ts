import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class PauseDimUnfocusedWhileSelecting extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"isPauseDimUnfocusedWhileSelectingEnabled";
	protected override toggleClass = "ptm-dim-unfocused-pause-while-selecting";
	protected settingTitle = "选中文本时暂停暗化";
	protected settingDesc =
		"启用后，选中文本时段落/句子不会被暗化";
}
