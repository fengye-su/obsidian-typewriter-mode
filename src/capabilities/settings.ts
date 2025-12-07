export interface TypewriterModeSettings {
	version: string | null;

	isPluginActivated: boolean;

	isTypewriterScrollEnabled: boolean;
	isOnlyActivateAfterFirstInteractionEnabled: boolean;
	isOnlyMaintainTypewriterOffsetWhenReachedEnabled: boolean;
	isTypewriterOnlyUseCommandsEnabled: boolean;
	typewriterOffset: number;
	isKeepLinesAboveAndBelowEnabled: boolean;
	linesAboveAndBelow: number;
	isPauseDimUnfocusedWhileScrollingEnabled: boolean;
	isPauseDimUnfocusedWhileSelectingEnabled: boolean;
	isHighlightCurrentLineEnabled: boolean;
	isHighlightCurrentLineOnlyInFocusedEditorEnabled: boolean;
	currentLineHighlightStyle: "box";
	"currentLineHighlightColor-dark": string;
	"currentLineHighlightColor-light": string;
	isRestoreCursorPositionEnabled: boolean;
}

export const DEFAULT_SETTINGS: TypewriterModeSettings = {
	version: null,

	isPluginActivated: true,

	isTypewriterScrollEnabled: true,
	isOnlyActivateAfterFirstInteractionEnabled: false,
	isOnlyMaintainTypewriterOffsetWhenReachedEnabled: false,
	isTypewriterOnlyUseCommandsEnabled: false,
	typewriterOffset: 0.5,
	isKeepLinesAboveAndBelowEnabled: false,
	linesAboveAndBelow: 5,
	isPauseDimUnfocusedWhileScrollingEnabled: true,
	isPauseDimUnfocusedWhileSelectingEnabled: true,
	isHighlightCurrentLineEnabled: true,
	isHighlightCurrentLineOnlyInFocusedEditorEnabled: false,
	currentLineHighlightStyle: "box",
	"currentLineHighlightColor-dark": "#444",
	"currentLineHighlightColor-light": "#ddd",
	isRestoreCursorPositionEnabled: false,
};
