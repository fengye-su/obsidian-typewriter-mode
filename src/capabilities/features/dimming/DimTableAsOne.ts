import { FeatureToggle } from "@/capabilities/base/FeatureToggle";
import type { TypewriterModeSettings } from "@/capabilities/settings";

export default class DimTableAsOne extends FeatureToggle {
	public settingKey: keyof TypewriterModeSettings = "isDimTableAsOneEnabled";
	protected override toggleClass = "ptm-dim-table-as-one";
	protected settingTitle = "编辑时取消表格单元格暗化";
	protected settingDesc =
		"启用后，编辑表格时所有单元格都会显示（不被暗化）；禁用后，仅当前正在编辑的单元格显示，其他单元格保持暗化。";
}
