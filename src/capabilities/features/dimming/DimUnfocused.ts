import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class DimUnfocused extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings = "isDimUnfocusedEnabled";
	protected override toggleClass = "ptm-dim-unfocused";
	protected settingTitle = "暗化未聚焦内容";
	protected settingDesc = "暗化未聚焦的段落或句子";
}
