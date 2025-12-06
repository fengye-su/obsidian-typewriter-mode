import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class TogglePluginActivation extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings = "isPluginActivated";
	protected override toggleClass = "ptm-plugin-activated";
	protected settingTitle = "启用打字机模式";
	protected settingDesc = "启用或禁用下方所有功能。";
}
