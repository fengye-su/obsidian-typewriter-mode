import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class FadeLines extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings = "isFadeLinesEnabled";
	protected override toggleClass = "ptm-fade-lines";
	protected settingTitle = "淡化行";
	protected settingDesc =
		"为当前行上下的文本添加渐变，使其朝编辑器的顶部和底部逐渐淡出。";
}
