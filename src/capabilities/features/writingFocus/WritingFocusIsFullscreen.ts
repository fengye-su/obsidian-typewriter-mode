import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class WritingFocusIsFullScreen extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings = "isWritingFocusFullscreen";
	protected settingTitle = "写作专注时让 Obsidian 全屏";
	protected settingDesc =
		"启用后，进入写作专注时会切换 Obsidian 窗口为全屏";
}
