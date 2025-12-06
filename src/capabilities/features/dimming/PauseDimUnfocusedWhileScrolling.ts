import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class PauseDimUnfocusedParagraphsWhileScrolling extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"isPauseDimUnfocusedWhileScrollingEnabled";
	protected override toggleClass = "ptm-dim-unfocused-pause-while-scrolling";
	protected settingTitle = "滚动时暂停暗化";
	protected settingDesc =
		"启用后，滚动时段落/句子不会被暗化";
}
