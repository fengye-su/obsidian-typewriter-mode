import type TypewriterModeLib from "@/lib";
import type { Feature } from "../base/Feature";
import { loadCapabilityGroups } from "../base/loadCapabilityGroups";
import currentLine from "./currentLine";
import general from "./general";
import restoreCursorPosition from "./restoreCursorPosition";
import typewriter from "./typewriter";

export function getFeatures(
	tm: TypewriterModeLib,
): Record<string, Record<string, Feature>> {
	return loadCapabilityGroups<Feature>(tm, {
		currentLine,
		general,
		typewriter,
		restoreCursorPosition,
	});
}
