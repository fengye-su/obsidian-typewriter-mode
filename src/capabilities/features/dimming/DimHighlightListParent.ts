import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class DimHighlightListParent extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"isDimHighlightListParentEnabled";
	protected override toggleClass = "ptm-dim-highlight-list-parent";
	protected settingTitle = "高亮列表父项";
	protected settingDesc =
		"启用后，当前活动列表项的父项不会被暗化";
}
