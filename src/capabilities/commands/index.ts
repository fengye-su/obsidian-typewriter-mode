import type TypewriterModeLib from "@/lib";
import type { AbstractCommand } from "../base/AbstractCommand";
import type { Command } from "../base/Command";
import { MoveTypewriter } from "./MoveTypewriter";
import { TogglePlugin } from "./TogglePlugin";
import { ToggleTypewriter } from "./ToggleTypewriter";

export function getCommands(tm: TypewriterModeLib): Record<string, Command> {
	return [
		TogglePlugin,
		ToggleTypewriter,
		MoveTypewriter,
	].reduce((a, v) => {
		const command = new v(tm) as AbstractCommand;
		// @ts-ignore
		a[command.commandKey] = new v(tm);
		return a;
	}, {});
}
