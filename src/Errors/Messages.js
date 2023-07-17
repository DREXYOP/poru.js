'use strict';

const Error_Codes = require('./Error_Codes');

const Messages = {
  [Error_Codes.ClientInvalidOption]: (prop, must) => `The ${prop} option must be ${must}`,
  [Error_Codes.ClientInvalidProvidedShards]: 'None of the provided shards were valid.',
  [Error_Codes.ClientMissingIntents]: 'Valid intents must be provided for the Client.',
  [Error_Codes.ClientNotReady]: action => `The client needs to be logged in to ${action}.`,

  [Error_Codes.TokenInvalid]: 'An invalid token was provided.',
  [Error_Codes.TokenMissing]: 'Request to use token, but token was unavailable to the client.',
  [Error_Codes.ApplicationCommandPermissionsTokenMissing]:
    'Editing application command permissions requires an OAuth2 bearer token, but none was provided.',

  [Error_Codes.WSCloseRequested]: 'WebSocket closed due to user request.',
  [Error_Codes.WSConnectionExists]: 'There is already an existing WebSocket connection.',
  [Error_Codes.WSNotOpen]: (data = 'data') => `WebSocket not open to send ${data}`,
  [Error_Codes.ManagerDestroyed]: 'Manager was destroyed.',

  [Error_Codes.BitFieldInvalid]: bit => `Invalid bitfield flag or number: ${bit}.`,

  [Error_Codes.ShardingInvalid]: 'Invalid shard settings were provided.',
  [Error_Codes.ShardingRequired]: 'This session would have handled too many guilds - Sharding is required.',
  [Error_Codes.InvalidIntents]: 'Invalid intent provided for WebSocket intents.',
  [Error_Codes.DisallowedIntents]: 'Privileged intent provided is not enabled or whitelisted.',
  [Error_Codes.ShardingNoShards]: 'No shards have been spawned.',
  [Error_Codes.ShardingInProcess]: 'Shards are still being spawned.',
  [Error_Codes.ShardingInvalidEvalBroadcast]: 'Script to evaluate must be a function',
  [Error_Codes.ShardingShardNotFound]: id => `Shard ${id} could not be found.`,
  [Error_Codes.ShardingAlreadySpawned]: count => `Already spawned ${count} shards.`,
  [Error_Codes.ShardingProcessExists]: id => `Shard ${id} already has an active process.`,
  [Error_Codes.ShardingWorkerExists]: id => `Shard ${id} already has an active worker.`,
  [Error_Codes.ShardingReadyTimeout]: id => `Shard ${id}'s Client took too long to become ready.`,
  [Error_Codes.ShardingReadyDisconnected]: id => `Shard ${id}'s Client disconnected before becoming ready.`,
  [Error_Codes.ShardingReadyDied]: id => `Shard ${id}'s process exited before its Client became ready.`,
  [Error_Codes.ShardingNoChildExists]: id => `Shard ${id} has no active process or worker.`,
  [Error_Codes.ShardingShardMiscalculation]: (shard, guild, count) =>
    `Calculated invalid shard ${shard} for guild ${guild} with ${count} shards.`,

  [Error_Codes.ColorRange]: 'Color must be within the range 0 - 16777215 (0xFFFFFF).',
  [Error_Codes.ColorConvert]: 'Unable to convert color to a number.',

  [Error_Codes.InviteOptionsMissingChannel]:
    'A valid guild channel must be provided when GuildScheduledEvent is EXTERNAL.',

  [Error_Codes.ButtonLabel]: 'MessageButton label must be a string',
  [Error_Codes.ButtonURL]: 'MessageButton URL must be a string',
  [Error_Codes.ButtonCustomId]: 'MessageButton customId must be a string',

  [Error_Codes.SelectMenuCustomId]: 'MessageSelectMenu customId must be a string',
  [Error_Codes.SelectMenuPlaceholder]: 'MessageSelectMenu placeholder must be a string',
  [Error_Codes.SelectOptionLabel]: 'MessageSelectOption label must be a string',
  [Error_Codes.SelectOptionValue]: 'MessageSelectOption value must be a string',
  [Error_Codes.SelectOptionDescription]: 'MessageSelectOption description must be a string',

  [Error_Codes.InteractionCollectorError]: reason =>
    `Collector received no interactions before ending with reason: ${reason}`,

  [Error_Codes.FileNotFound]: file => `File could not be found: ${file}`,

  [Error_Codes.UserBannerNotFetched]: "You must fetch this user's banner before trying to generate its URL!",
  [Error_Codes.UserNoDMChannel]: 'No DM Channel exists!',

  [Error_Codes.VoiceNotStageChannel]: 'You are only allowed to do this in stage channels.',

  [Error_Codes.VoiceStateNotOwn]:
    'You cannot self-deafen/mute/request to speak on VoiceStates that do not belong to the ClientUser.',
  [Error_Codes.VoiceStateInvalidType]: name => `${name} must be a boolean.`,

  [Error_Codes.ReqResourceType]: 'The resource must be a string, Buffer or a valid file stream.',

  [Error_Codes.ImageFormat]: format => `Invalid image format: ${format}`,
  [Error_Codes.ImageSize]: size => `Invalid image size: ${size}`,

  [Error_Codes.MessageBulkDeleteType]: 'The messages must be an Array, Collection, or number.',
  [Error_Codes.MessageNonceType]: 'Message nonce must be an integer or a string.',
  [Error_Codes.MessageContentType]: 'Message content must be a string.',

  [Error_Codes.SplitMaxLen]: 'Chunk exceeds the max length and contains no split characters.',

  [Error_Codes.BanResolveId]: (ban = false) => `Couldn't resolve the user id to ${ban ? 'ban' : 'unban'}.`,
  [Error_Codes.FetchBanResolveId]: "Couldn't resolve the user id to fetch the ban.",

  [Error_Codes.PruneDaysType]: 'Days must be a number',

  [Error_Codes.GuildChannelResolve]: 'Could not resolve channel to a guild channel.',
  [Error_Codes.GuildVoiceChannelResolve]: 'Could not resolve channel to a guild voice channel.',
  [Error_Codes.GuildChannelOrphan]: 'Could not find a parent to this guild channel.',
  [Error_Codes.GuildChannelUnowned]: "The fetched channel does not belong to this manager's guild.",
  [Error_Codes.GuildOwned]: 'Guild is owned by the client.',
  [Error_Codes.GuildMembersTimeout]: "Members didn't arrive in time.",
  [Error_Codes.GuildUncachedMe]: 'The client user as a member of this guild is uncached.',
  [Error_Codes.ChannelNotCached]: 'Could not find the channel where this message came from in the cache!',
  [Error_Codes.StageChannelResolve]: 'Could not resolve channel to a stage channel.',
  [Error_Codes.GuildScheduledEventResolve]: 'Could not resolve the guild scheduled event.',
  [Error_Codes.FetchOwnerId]: "Couldn't resolve the guild ownerId to fetch the member.",

  [Error_Codes.InvalidType]: (name, expected, an = false) => `Supplied ${name} is not a${an ? 'n' : ''} ${expected}.`,
  [Error_Codes.InvalidElement]: (type, name, elem) => `Supplied ${type} ${name} includes an invalid element: ${elem}`,

  [Error_Codes.MessageThreadParent]: 'The message was not sent in a guild text or news channel',
  [Error_Codes.MessageExistingThread]: 'The message already has a thread',
  [Error_Codes.ThreadInvitableType]: type => `Invitable cannot be edited on ${type}`,

  [Error_Codes.WebhookMessage]: 'The message was not sent by a webhook.',
  [Error_Codes.WebhookTokenUnavailable]: 'This action requires a webhook token, but none is available.',
  [Error_Codes.WebhookURLInvalid]: 'The provided webhook URL is not valid.',
  [Error_Codes.WebhookApplication]: 'This message webhook belongs to an application and cannot be fetched.',
  [Error_Codes.MessageReferenceMissing]: 'The message does not reference another message',

  [Error_Codes.EmojiType]: 'Emoji must be a string or GuildEmoji/ReactionEmoji',
  [Error_Codes.EmojiManaged]: 'Emoji is managed and has no Author.',
  [Error_Codes.MissingManageGuildExpressionsPermission]: guild =>
    `Client must have Manage Guild Expressions permission in guild ${guild} to see emoji authors.`,
  [Error_Codes.MissingManageEmojisAndStickersPermission]: guild =>
    `Client must have Manage Emojis and Stickers permission in guild ${guild} to see emoji authors.`,

  [Error_Codes.NotGuildSticker]: 'Sticker is a standard (non-guild) sticker and has no author.',

  [Error_Codes.ReactionResolveUser]: "Couldn't resolve the user id to remove from the reaction.",

  [Error_Codes.VanityURL]: 'This guild does not have the vanity URL feature enabled.',

  [Error_Codes.InviteResolveCode]: 'Could not resolve the code to fetch the invite.',

  [Error_Codes.InviteNotFound]: 'Could not find the requested invite.',

  [Error_Codes.DeleteGroupDMChannel]: "Bots don't have access to Group DM Channels and cannot delete them",
  [Error_Codes.FetchGroupDMChannel]: "Bots don't have access to Group DM Channels and cannot fetch them",

  [Error_Codes.MemberFetchNonceLength]: 'Nonce length must not exceed 32 characters.',

  [Error_Codes.GlobalCommandPermissions]:
    'Permissions for global commands may only be fetched or modified by providing a GuildResolvable ' +
    "or from a guild's application command manager.",
  [Error_Codes.GuildUncachedEntityResolve]: type =>
    `Cannot resolve ${type} from an arbitrary guild, provide an id instead`,

  [Error_Codes.InteractionAlreadyReplied]: 'The reply to this interaction has already been sent or deferred.',
  [Error_Codes.InteractionNotReplied]: 'The reply to this interaction has not been sent or deferred.',
  [Error_Codes.InteractionEphemeralReplied]: 'Ephemeral responses cannot be deleted.',

  [Error_Codes.CommandInteractionOptionNotFound]: name => `Required option "${name}" not found.`,
  [Error_Codes.CommandInteractionOptionType]: (name, type, expected) =>
    `Option "${name}" is of type: ${type}; expected ${expected}.`,
  [Error_Codes.CommandInteractionOptionEmpty]: (name, type) =>
    `Required option "${name}" is of type: ${type}; expected a non-empty value.`,
  [Error_Codes.CommandInteractionOptionNoSubcommand]: 'No subcommand specified for interaction.',
  [Error_Codes.CommandInteractionOptionNoSubcommandGroup]: 'No subcommand group specified for interaction.',
  [Error_Codes.CommandInteractionOptionInvalidChannelType]: (name, type, expected) =>
    `The type of channel of the option "${name}" is: ${type}; expected ${expected}.`,
  [Error_Codes.AutocompleteInteractionOptionNoFocusedOption]: 'No focused option for autocomplete interaction.',

  [Error_Codes.ModalSubmitInteractionFieldNotFound]: customId =>
    `Required field with custom id "${customId}" not found.`,
  [Error_Codes.ModalSubmitInteractionFieldType]: (customId, type, expected) =>
    `Field with custom id "${customId}" is of type: ${type}; expected ${expected}.`,

  [Error_Codes.InvalidMissingScopes]: 'At least one valid scope must be provided for the invite',
  [Error_Codes.InvalidScopesWithPermissions]: 'Permissions cannot be set without the bot scope.',

  [Error_Codes.NotImplemented]: (what, name) => `Method ${what} not implemented on ${name}.`,

  [Error_Codes.SweepFilterReturn]: 'The return value of the sweepFilter function was not false or a Function',

  [Error_Codes.GuildForumMessageRequired]: 'You must provide a message to create a guild forum thread',
};

module.exports = Messages;