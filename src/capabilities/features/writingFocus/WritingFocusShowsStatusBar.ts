import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class WritingFocusShowsHeader extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"doesWritingFocusShowStatusBar";
	protected override toggleClass = "ptm-writing-focus-shows-status-bar";
	protected settingTitle = "写作专注时显示状态栏";
	protected settingDesc =
		"启用后，写作专注模式会显示状态栏";
}
