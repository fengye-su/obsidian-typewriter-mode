import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class TypewriterOnlyUseCommands extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"isTypewriterOnlyUseCommandsEnabled";
	protected override toggleClass = "ptm-typewriter-only-use-commands";
	protected settingTitle = "方向键不触发打字机对齐";
	protected settingDesc =
		"仅在使用插件的移动命令时才会触发打字机对齐，方向键不会触发。默认移动命令为 Cmd/Ctrl+↑/↓，你可在 Obsidian 设置中自定义热键。";
}
