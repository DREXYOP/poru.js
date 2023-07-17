'use strict';

const keys = [
    'ClientInvalidOption',
    'ClientInvalidProvidedShards',
    'ClientMissingIntents',
    'ClientNotReady',
  
    'TokenInvalid',
    'TokenMissing',
    'ApplicationCommandPermissionsTokenMissing',
  
    'WSCloseRequested',
    'WSConnectionExists',
    'WSNotOpen',
    'ManagerDestroyed',
  
    'BitFieldInvalid',
  
    'ShardingInvalid',
    'ShardingRequired',
    'InvalidIntents',
    'DisallowedIntents',
    'ShardingNoShards',
    'ShardingInProcess',
    'ShardingInvalidEvalBroadcast',
    'ShardingShardNotFound',
    'ShardingAlreadySpawned',
    'ShardingProcessExists',
    'ShardingWorkerExists',
    'ShardingReadyTimeout',
    'ShardingReadyDisconnected',
    'ShardingReadyDied',
    'ShardingNoChildExists',
    'ShardingShardMiscalculation',
  
    'ColorRange',
    'ColorConvert',
  
    'InviteOptionsMissingChannel',
  
    'ButtonLabel',
    'ButtonURL',
    'ButtonCustomId',
  
    'SelectMenuCustomId',
    'SelectMenuPlaceholder',
    'SelectOptionLabel',
    'SelectOptionValue',
    'SelectOptionDescription',
  
    'InteractionCollectorError',
  
    'FileNotFound',
  
    'UserBannerNotFetched',
    'UserNoDMChannel',
  
    'VoiceNotStageChannel',
  
    'VoiceStateNotOwn',
    'VoiceStateInvalidType',
  
    'ReqResourceType',
  
    'ImageFormat',
    'ImageSize',
  
    'MessageBulkDeleteType',
    'MessageNonceType',
    'MessageContentType',
  
    'SplitMaxLen',
  
    'BanResolveId',
    'FetchBanResolveId',
  
    'PruneDaysType',
  
    'GuildChannelResolve',
    'GuildVoiceChannelResolve',
    'GuildChannelOrphan',
    'GuildChannelUnowned',
    'GuildOwned',
    'GuildMembersTimeout',
    'GuildUncachedMe',
    'ChannelNotCached',
    'StageChannelResolve',
    'GuildScheduledEventResolve',
    'FetchOwnerId',
  
    'InvalidType',
    'InvalidElement',
  
    'MessageThreadParent',
    'MessageExistingThread',
    'ThreadInvitableType',
  
    'WebhookMessage',
    'WebhookTokenUnavailable',
    'WebhookURLInvalid',
    'WebhookApplication',
    'MessageReferenceMissing',
  
    'EmojiType',
    'EmojiManaged',
    'MissingManageGuildExpressionsPermission',
    'MissingManageEmojisAndStickersPermission',
  
    'NotGuildSticker',
  
    'ReactionResolveUser',
  
    'VanityURL',
  
    'InviteResolveCode',
  
    'InviteNotFound',
  
    'DeleteGroupDMChannel',
    'FetchGroupDMChannel',
  
    'MemberFetchNonceLength',
  
    'GlobalCommandPermissions',
    'GuildUncachedEntityResolve',
  
    'InteractionAlreadyReplied',
    'InteractionNotReplied',
    'InteractionEphemeralReplied',
  
    'CommandInteractionOptionNotFound',
    'CommandInteractionOptionType',
    'CommandInteractionOptionEmpty',
    'CommandInteractionOptionNoSubcommand',
    'CommandInteractionOptionNoSubcommandGroup',
    'CommandInteractionOptionInvalidChannelType',
    'AutocompleteInteractionOptionNoFocusedOption',
  
    'ModalSubmitInteractionFieldNotFound',
    'ModalSubmitInteractionFieldType',
  
    'InvalidMissingScopes',
    'InvalidScopesWithPermissions',
  
    'NotImplemented',
  
    'SweepFilterReturn',
  
    'GuildForumMessageRequired',
  ];
  

  module.exports = Object.fromEntries(keys.map(key => [key, key]));