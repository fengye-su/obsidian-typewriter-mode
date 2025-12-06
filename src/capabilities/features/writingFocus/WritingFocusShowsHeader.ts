import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class WritingFocusShowsHeader extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"doesWritingFocusShowHeader";
	protected override toggleClass = "ptm-writing-focus-shows-header";
	protected settingTitle = "写作专注时显示标题栏";
	protected settingDesc =
		"启用后，写作专注模式会显示标题栏";
}
