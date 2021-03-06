import type { Client } from 'discord.js';
import { BaseAliasStore } from './base/BaseAliasStore';
import { Command } from './Command';

/**
 * Stores all Command pieces
 * @since 1.0.0
 */
export class CommandStore extends BaseAliasStore<Command> {
	public constructor(client: Client) {
		super(client, Command as any, { name: 'commands' });
	}
}
