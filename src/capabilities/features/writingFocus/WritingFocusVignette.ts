import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class WritingFocusVignette extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"doesWritingFocusShowVignette";
	protected settingTitle = "写作专注vignette";
	protected settingDesc =
		"在写作专注模式下为屏幕边缘添加vignette";
}
