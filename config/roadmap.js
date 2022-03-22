let config = {
	statusList : ['todo', 'wip', 'done'],
	roadmap    : {
		periods : [
			{
				period  : '2022',
				content : [
					{
						entity_id : '#TrinityGrandFinale',
						title     : 'Trinity Grand Finale',
						link      : undefined,
                        redditBtn : false,
						content   : [
							{
								entity_id : '#PoW_in_Pulse',
								title     : 'PoW in Pulse',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#PoW_tst_BIT',
										title     : 'Final tests in BIT (with ENQ rewards) and release in the main network',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}
								],
								readiness : 0
							},
							{
								entity_id : '#PoS_leader_es',
								title     : 'PoS leader elections system',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#PoS_elections',
										title     : 'Implement procedure of macroblock producing right transfer',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									},
									{
										entity_id : '#PoS_slashing',
										title     : 'Slashing mechanic',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																		
								],
								readiness : 0
							},
							{
								entity_id : '#PoA_utility_revision',
								title     : 'PoA  - revision for PoA utility',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#PoA_anti_frontrun',
										title     : 'PoA will be able to add transactions from own mempool (frontrun protection measure)',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0
							},
							{
								entity_id : '#PoW_ASIC_protection',
								title     : 'Enabling full RandomX ASIC protection',
								link      : undefined,
                     			redditBtn : false,
								content   : [
									{
										entity_id : '#PoW_MA_change',
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
						entity_id : '#Enecuum_VM',
						title     : 'Smart contracts Machine',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entity_id : '#Ethereum_VM_or_not',
								title     : 'To EVM or not to',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#ESC_analisis',
										title     : 'Analyse approaches to Ethereum smart contracts compatibility',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entity_id : '#Multisig_pContract',
								title     : 'Multisignature Precompiled contract',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#Multisig_ownersip_distr',
										title     : 'The contract allows to distribute ownership of funds between several persons in different shares',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entity_id : '#NFT_implmnt',
								title     : 'NFT tokens implementation',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							}							
						]
					},
					{
						entity_id : '#ENQ_ecosystem',
						title     : 'Ecosystem',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entity_id : '#Cold_wallet_int',
								title     : 'Cold wallet integration',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#Ledger_enq_app',
										title     : 'Ledger Live integration as an ease of usage for existing Enecuum Ledger App',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entity_id : '#CDS',
								title     : 'Community driven support',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							},
							{
								entity_id : '#Crosschain_dbridge',
								title     : 'Crosschain decentralized bridge',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#FT_NFT_bridge',
										title     : 'Exchange fungible and NFT tokens with Ethereum, add more blockchains',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entity_id : '#DeFi_ENQ_pl',
								title     : 'DeFi platform',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#ENEX_platform_release',
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
						entity_id : '#ENQ_perf_optimizatoin',
						title     : 'Performance Optimizations',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entity_id : '#Bin_form',
								title     : 'Binary formats',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#Net_traff_compression',
										title     : 'Compress network traffic',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entity_id : '#DB_tune',
								title     : 'Database tuning',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#DB_analisis',
										title     : 'Analyze node’s database resources usage and make it fly',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entity_id : '#IM_operations',
								title     : 'In-memory operations',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#IM_caching_mech',
										title     : 'Additional in-memory caching mechanisms for better performance',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entity_id : '#Net_throughput_inc',
								title     : 'Network throughput increase',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#Net_layers_perf',
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
						entity_id : '#ENQ_API',
						title     : 'API for life',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entity_id : '#N_RPC_API',
								title     : 'Node RPC API',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#Light_node_comm',
										title     : 'Add more options to directly communicate with light nodes, without resource-hungry explorer',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entity_id : '#BE_upgrade',
								title     : 'Upgrade Block Explorer into a Blockchain Provider',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#RW_BE',
										title     : 'Use explorer not only to read from the blockchain, but to write to it too',
										link      : undefined,
										redditBtn : false,
										status    : 'todo'										
									}																	
								],
								readiness : 0									
							},
							{
								entity_id : '#Sys_for_notif',
								title     : 'Notification system',
								link      : undefined,
								redditBtn : false,
								content   : [
									{
										entity_id : '#Invoice_p_up',
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
						entity_id : '#ENQ_PWA',
						title     : 'Progressive Web Application',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entity_id : '#Miner_Andr',
								title     : 'Android miner',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							},
							{
								entity_id : '#Wallet_iOS',
								title     : 'iOS wallet',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							},
							{
								entity_id : '#PC_miner',
								title     : 'Desktop (Linux, Windows, MacOS) miners',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							}							
						]
					},
					{
						entity_id : '#OpenS_Power',
						title     : 'Open Source Power',
						link      : undefined,
						redditBtn : false,
						content   : [
							{
								entity_id : '#GPU_PoW_grant',
								title     : 'GPU PoW miner grant',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							},
							{
								entity_id : '#ENQ_Hackathon',
								title     : 'Hackathons',
								link      : undefined,
								redditBtn : false,
								content   : [],
								readiness : 0									
							},
							{
								entity_id : '#BB_programs',
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