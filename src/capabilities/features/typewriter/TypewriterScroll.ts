import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class TypewriterScroll extends FeatureToggle {
	public readonly settingKey: keyof TypewriterModeSettings =
		"isTypewriterScrollEnabled";
	protected override toggleClass = "ptm-typewriter-scroll";
	protected settingTitle = "打字机滚动";
	protected settingDesc = "开启或关闭打字机滚动";
}
