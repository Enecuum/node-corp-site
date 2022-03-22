let config = {
	statusList : ['todo', 'wip', 'done'],
	roadmap    : {
		periods : [
			{
				period  : '2022',
				content : [
					{
						entityId  : '#TrinityGrandFinale',
						title     : 'Trinity Grand Finale',
						link      : undefined,
                        redditBtn : false,
						content   : [
							{
								entityId  : '#PoW_in_Pulse',
								title     : 'PoW in Pulse',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#PoW_tst_BIT',
										title     : 'Final tests in BIT (with ENQ rewards) and release in the main network',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}
								],
								readiness : 0
							},
							{
								entityId  : '#PoS_leader_es',
								title     : 'PoS leader elections system',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#PoS_elections',
										title     : 'Implement procedure of macroblock producing right transfer',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									},
									{
										entityId  : '#PoS_slashing',
										title     : 'Slashing mechanic',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																		
								],
								readiness : 0
							},
							{
								entityId  : '#PoA_utility_revision',
								title     : 'PoA  - revision for PoA utility',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#PoA_anti_frontrun',
										title     : 'PoA will be able to add transactions from own mempool (frontrun protection measure)',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0
							},
							{
								entityId  : '#PoW_ASIC_protection',
								title     : 'Enabling full RandomX ASIC protection',
								link      : undefined,
                     			redditBtn : false,
								content   : [
									{
										entityId  : '#PoW_MA_change',
										title     : 'Make PoW nodes change mining algorithm on regular basis',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}
								],
								readiness : 0
							}														
						]
					},
					{
						entityId  : '#Enecuum_VM',
						title     : 'Smart contracts Machine',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entityId  : '#Ethereum_VM_or_not',
								title     : 'To EVM or not to',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#ESC_analisis',
										title     : 'Analyse approaches to Ethereum smart contracts compatibility',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entityId  : '#Multisig_pContract',
								title     : 'Multisignature Precompiled contract',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#Multisig_ownersip_distr',
										title     : 'The contract allows to distribute ownership of funds between several persons in different shares',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entityId  : '#NFT_implmnt',
								title     : 'NFT tokens implementation',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							}							
						]
					},
					{
						entityId  : '#ENQ_ecosystem',
						title     : 'Ecosystem',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entityId  : '#Cold_wallet_int',
								title     : 'Cold wallet integration',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#Ledger_enq_app',
										title     : 'Ledger Live integration as an ease of usage for existing Enecuum Ledger App',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entityId  : '#CmtDS',
								title     : 'Community driven support',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							},
							{
								entityId  : '#Crosschain_dbridge',
								title     : 'Crosschain decentralized bridge',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#FT_NFT_bridge',
										title     : 'Exchange fungible and NFT tokens with Ethereum, add more blockchains',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entityId  : '#DeFi_ENQ_pl',
								title     : 'DeFi platform',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#ENEX_platform_release',
										title     : 'Enex release',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							}							
						]
					},
					{
						entityId  : '#ENQ_perf_optimizatoin',
						title     : 'Performance Optimizations',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entityId  : '#Bin_form',
								title     : 'Binary formats',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#Net_traff_compression',
										title     : 'Compress network traffic',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entityId  : '#DB_tune',
								title     : 'Database tuning',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#DB_analisis',
										title     : 'Analyze node’s database resources usage and make it fly',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entityId  : '#IM_operations',
								title     : 'In-memory operations',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#IM_caching_mech',
										title     : 'Additional in-memory caching mechanisms for better performance',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entityId  : '#Net_throughput_inc',
								title     : 'Network throughput increase',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#Net_layers_perf',
										title     : 'Prepare network layer performance for millions of devices load, implementing Chord protocol',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							}							
						]
					},
					{
						entityId  : '#ENQ_API',
						title     : 'API for life',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entityId  : '#N_RPC_API',
								title     : 'Node RPC API',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#Light_node_comm',
										title     : 'Add more options to directly communicate with light nodes, without resource-hungry explorer',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entityId  : '#BE_upgrade',
								title     : 'Upgrade Block Explorer into a Blockchain Provider',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#RW_BE',
										title     : 'Use explorer not only to read from the blockchain, but to write to it too',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entityId  : '#Sys_for_notif',
								title     : 'Notification system',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entityId  : '#Invoice_p_up',
										title     : 'Power-up invoice system by notification subscriptions for incoming transfers and more',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							}							
						]
					},
					{
						entityId  : '#ENQ_PWA',
						title     : 'Progressive Web Application',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entityId  : '#Miner_Andr',
								title     : 'Android miner',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							},
							{
								entityId  : '#Wallet_iOS',
								title     : 'iOS wallet',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							},
							{
								entityId  : '#PC_miner',
								title     : 'Desktop (Linux, Windows, MacOS) miners',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							}							
						]
					},
					{
						entityId  : '#OpenS_Power',
						title     : 'Open Source Power',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entityId  : '#GPU_PoW_grant',
								title     : 'GPU PoW miner grant',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							},
							{
								entityId  : '#ENQ_Hackathon',
								title     : 'Hackathons',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							},
							{
								entityId  : '#BB_programs',
								title     : 'Bug Bounty',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							}							
						]
					}
				]
			}
		]
	}
}

module.exports = config;