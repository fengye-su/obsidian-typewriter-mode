import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class KeepLinesAboveAndBelow extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"isKeepLinesAboveAndBelowEnabled";
	protected settingTitle = "保留上下行";
	protected settingDesc =
		"启用后，始终在视图中当前行上下保留指定数量的行";

	protected override isSettingEnabled(): boolean {
		return !this.tm.settings.isTypewriterScrollEnabled;
	}
}
