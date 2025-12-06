import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class LimitMaxCharsPerLine extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings = "isMaxCharsPerLineEnabled";
	protected override toggleClass = "ptm-max-chars-per-line";
	public override isToggleClassPersistent = true;
	protected settingTitle = "限制每行最大字符数";
	protected settingDesc = "限制每行可显示的最大字符数";
}
