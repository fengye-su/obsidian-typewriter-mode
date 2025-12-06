import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class HighlightCurrentLineOnlyInFocusedEditor extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings =
		"isHighlightCurrentLineOnlyInFocusedEditorEnabled";
	protected override toggleClass =
		"ptm-highlight-current-line-only-in-active-editor";
	protected hasCommand = false;
	protected settingTitle = "仅在聚焦的笔记中高亮当前行";
	protected settingDesc =
		"仅在光标所在的笔记中显示高亮行（例如拆分窗格中打开多个笔记）。";
}
