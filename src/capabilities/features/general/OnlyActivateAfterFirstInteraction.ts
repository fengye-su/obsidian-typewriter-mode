import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class OnlyActivateAfterFirstInteraction extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"isOnlyActivateAfterFirstInteractionEnabled";
	protected settingTitle = "仅在首次交互后启用";
	protected settingDesc =
		"仅在与编辑器进行第一次交互后再启用当前行高亮和段落暗化";
}
