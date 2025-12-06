import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class OnlyMaintainTypewriterOffsetWhenReached extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"isOnlyMaintainTypewriterOffsetWhenReachedEnabled";
	protected hasCommand = false;
	protected settingTitle = "仅在达到打字机位置时进行偏移";
	protected settingDesc =
		"在达到指定的打字机位置前，光标所在行不会滚动到编辑器中央，从而移除编辑器顶部的额外空白。";
}
