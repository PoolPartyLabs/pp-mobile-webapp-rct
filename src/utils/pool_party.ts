/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/pool_party.json`.
 */
export type PoolParty = {
  "address": "3inmw7qcywQirQoNSL54MhqoG7CJ58ZYwVCYSmC1TTB4",
  "metadata": {
    "name": "poolParty",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "collectFees",
      "discriminator": [
        164,
        152,
        207,
        99,
        30,
        186,
        19,
        182
      ],
      "accounts": [
        {
          "name": "investor",
          "writable": true,
          "signer": true
        },
        {
          "name": "poolPositionConfig"
        },
        {
          "name": "poolPosition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              }
            ]
          }
        },
        {
          "name": "investorAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  111,
                  114,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "feesVault0TokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  95,
                  102,
                  101,
                  101,
                  115,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  48,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPosition"
              }
            ]
          }
        },
        {
          "name": "feesVault1TokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  95,
                  102,
                  101,
                  101,
                  115,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  49,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPosition"
              }
            ]
          }
        },
        {
          "name": "investorDepositFees0Account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "investor"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "poolVaultTokenAMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "investorDepositFees1Account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "investor"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "poolVaultTokenBMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "clmmProgram",
          "address": "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"
        },
        {
          "name": "positionNftAccount",
          "docs": [
            "The token account for nft"
          ]
        },
        {
          "name": "poolState",
          "writable": true
        },
        {
          "name": "protocolPosition",
          "writable": true
        },
        {
          "name": "personalPosition",
          "docs": [
            "Increase liquidity for this position"
          ],
          "writable": true
        },
        {
          "name": "tickArrayLower",
          "docs": [
            "Stores init state for the lower tick"
          ],
          "writable": true
        },
        {
          "name": "tickArrayUpper",
          "docs": [
            "Stores init state for the upper tick"
          ],
          "writable": true
        },
        {
          "name": "tokenVault0",
          "docs": [
            "The address that holds pool tokens for token_0"
          ],
          "writable": true
        },
        {
          "name": "tokenVault1",
          "docs": [
            "The address that holds pool tokens for token_1"
          ],
          "writable": true
        },
        {
          "name": "poolVaultTokenAMint",
          "docs": [
            "The mint of token vault 0"
          ]
        },
        {
          "name": "poolVaultTokenBMint",
          "docs": [
            "The mint of token vault 1"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Program to create mint account and mint tokens"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgram2022",
          "docs": [
            "Token program 2022"
          ],
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "memoProgram",
          "docs": [
            "memo program"
          ],
          "address": "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
        },
        {
          "name": "systemProgram",
          "docs": [
            "Required for init_if_needed constraint"
          ],
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "createInvestorPosition",
      "discriminator": [
        61,
        196,
        53,
        39,
        196,
        130,
        205,
        4
      ],
      "accounts": [
        {
          "name": "investor",
          "writable": true,
          "signer": true
        },
        {
          "name": "poolPositionConfig",
          "writable": true
        },
        {
          "name": "poolPosition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              }
            ]
          }
        },
        {
          "name": "investorAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  111,
                  114,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "investorDepositToken0Account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  95,
                  100,
                  101,
                  112,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  48,
                  95,
                  97,
                  99,
                  99,
                  116,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "investorAccount"
              }
            ]
          }
        },
        {
          "name": "investorDepositToken1Account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  95,
                  100,
                  101,
                  112,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  49,
                  95,
                  97,
                  99,
                  99,
                  116,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "investorAccount"
              }
            ]
          }
        },
        {
          "name": "poolVaultToken0Mint",
          "docs": [
            "The mint of token vault 0"
          ]
        },
        {
          "name": "poolVaultToken1Mint",
          "docs": [
            "The mint of token vault 1"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "SPL program for token transfers"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program"
          ],
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "createPosition",
      "discriminator": [
        48,
        215,
        197,
        153,
        96,
        203,
        180,
        133
      ],
      "accounts": [
        {
          "name": "manager",
          "writable": true,
          "signer": true
        },
        {
          "name": "poolPositionConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  58
                ]
              },
              {
                "kind": "arg",
                "path": "name"
              }
            ]
          }
        },
        {
          "name": "poolPosition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              }
            ]
          }
        },
        {
          "name": "managerAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  111,
                  114,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              },
              {
                "kind": "account",
                "path": "manager"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Program to create mint account and mint tokens"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "docs": [
            "Program to create the position manager state account"
          ],
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "tickLowerIndex",
          "type": "i32"
        },
        {
          "name": "tickUpperIndex",
          "type": "i32"
        },
        {
          "name": "poolStateKey",
          "type": "pubkey"
        },
        {
          "name": "tokenVault0Key",
          "type": "pubkey"
        },
        {
          "name": "tokenVault1Key",
          "type": "pubkey"
        },
        {
          "name": "vault0MintKey",
          "type": "pubkey"
        },
        {
          "name": "vault1MintKey",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "createPositionVaults",
      "discriminator": [
        53,
        206,
        111,
        96,
        95,
        230,
        30,
        152
      ],
      "accounts": [
        {
          "name": "manager",
          "writable": true,
          "signer": true
        },
        {
          "name": "poolPosition",
          "writable": true
        },
        {
          "name": "poolPositionVault0TokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  48,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPosition"
              }
            ]
          }
        },
        {
          "name": "poolPositionVault1TokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  49,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPosition"
              }
            ]
          }
        },
        {
          "name": "feesVault0TokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  95,
                  102,
                  101,
                  101,
                  115,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  48,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPosition"
              }
            ]
          }
        },
        {
          "name": "feesVault1TokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  95,
                  102,
                  101,
                  101,
                  115,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  49,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPosition"
              }
            ]
          }
        },
        {
          "name": "vault0Mint",
          "docs": [
            "The mint of token vault 0"
          ]
        },
        {
          "name": "vault1Mint",
          "docs": [
            "The mint of token vault 1"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Program to create mint account and mint tokens"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "docs": [
            "Program to create the position manager state account"
          ],
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "deposit",
      "discriminator": [
        242,
        35,
        198,
        137,
        82,
        225,
        242,
        182
      ],
      "accounts": [
        {
          "name": "investor",
          "writable": true,
          "signer": true
        },
        {
          "name": "poolPositionConfig",
          "writable": true
        },
        {
          "name": "investorAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  111,
                  114,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "investorDepositStableTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  95,
                  115,
                  116,
                  97,
                  98,
                  108,
                  101,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  97,
                  99,
                  99,
                  116,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "investorAccount"
              }
            ]
          }
        },
        {
          "name": "poolVaultDepositStableMint",
          "docs": [
            "The mint of token vault stable"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "SPL program for token transfers"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program"
          ],
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "increaseLiquidity",
      "discriminator": [
        46,
        156,
        243,
        118,
        13,
        205,
        251,
        178
      ],
      "accounts": [
        {
          "name": "investor",
          "writable": true,
          "signer": true
        },
        {
          "name": "poolPositionConfig"
        },
        {
          "name": "poolPosition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              }
            ]
          }
        },
        {
          "name": "investorAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  111,
                  114,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "investorDepositTokenAAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  95,
                  100,
                  101,
                  112,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  48,
                  95,
                  97,
                  99,
                  99,
                  116,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "investorAccount"
              }
            ]
          }
        },
        {
          "name": "investorDepositTokenBAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  95,
                  100,
                  101,
                  112,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  49,
                  95,
                  97,
                  99,
                  99,
                  116,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "investorAccount"
              }
            ]
          }
        },
        {
          "name": "poolPositionVault0TokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  48,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPosition"
              }
            ]
          }
        },
        {
          "name": "poolPositionVault1TokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  49,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPosition"
              }
            ]
          }
        },
        {
          "name": "feesVault0TokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  95,
                  102,
                  101,
                  101,
                  115,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  48,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPosition"
              }
            ]
          }
        },
        {
          "name": "feesVault1TokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  95,
                  102,
                  101,
                  101,
                  115,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  49,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPosition"
              }
            ]
          }
        },
        {
          "name": "clmmProgram",
          "address": "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"
        },
        {
          "name": "positionNftAccount",
          "docs": [
            "The token account for nft"
          ]
        },
        {
          "name": "poolState",
          "writable": true
        },
        {
          "name": "protocolPosition",
          "writable": true
        },
        {
          "name": "personalPosition",
          "docs": [
            "Increase liquidity for this position"
          ],
          "writable": true
        },
        {
          "name": "tickArrayLower",
          "docs": [
            "Stores init state for the lower tick"
          ],
          "writable": true
        },
        {
          "name": "tickArrayUpper",
          "docs": [
            "Stores init state for the upper tick"
          ],
          "writable": true
        },
        {
          "name": "tokenVault0",
          "docs": [
            "The address that holds pool tokens for token_0"
          ],
          "writable": true
        },
        {
          "name": "tokenVault1",
          "docs": [
            "The address that holds pool tokens for token_1"
          ],
          "writable": true
        },
        {
          "name": "poolVaultTokenAMint",
          "docs": [
            "The mint of token vault 0"
          ]
        },
        {
          "name": "poolVaultTokenBMint",
          "docs": [
            "The mint of token vault 1"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Program to create mint account and mint tokens"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgram2022",
          "docs": [
            "Token program 2022"
          ],
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "memoProgram",
          "docs": [
            "memo program"
          ],
          "address": "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
        }
      ],
      "args": []
    },
    {
      "name": "openPosition",
      "discriminator": [
        135,
        128,
        47,
        77,
        15,
        152,
        240,
        49
      ],
      "accounts": [
        {
          "name": "manager",
          "writable": true,
          "signer": true
        },
        {
          "name": "poolPositionConfig",
          "writable": true
        },
        {
          "name": "poolPosition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              }
            ]
          }
        },
        {
          "name": "managerAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  111,
                  114,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              },
              {
                "kind": "account",
                "path": "manager"
              }
            ]
          }
        },
        {
          "name": "clmmProgram",
          "address": "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"
        },
        {
          "name": "positionNftMint",
          "writable": true,
          "signer": true
        },
        {
          "name": "positionNftAccount",
          "docs": [
            "This account created in the contract by cpi to avoid large stack variables"
          ],
          "writable": true
        },
        {
          "name": "metadataAccount",
          "writable": true
        },
        {
          "name": "poolState",
          "writable": true
        },
        {
          "name": "protocolPosition",
          "writable": true
        },
        {
          "name": "tickArrayLower",
          "writable": true
        },
        {
          "name": "tickArrayUpper",
          "writable": true
        },
        {
          "name": "personalPosition",
          "writable": true
        },
        {
          "name": "tokenAccount0",
          "writable": true
        },
        {
          "name": "tokenAccount1",
          "writable": true
        },
        {
          "name": "tokenVault0",
          "docs": [
            "The address that holds pool tokens for token_0"
          ],
          "writable": true
        },
        {
          "name": "tokenVault1",
          "writable": true
        },
        {
          "name": "vault0Mint",
          "docs": [
            "The mint of token vault 0"
          ]
        },
        {
          "name": "vault1Mint",
          "docs": [
            "The mint of token vault 1"
          ]
        },
        {
          "name": "rent",
          "docs": [
            "Sysvar for token mint and ATA creation"
          ],
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "docs": [
            "Program to create the position manager state account"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Program to create mint account and mint tokens"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "docs": [
            "Program to create an ATA for receiving position NFT"
          ],
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "metadataProgram",
          "docs": [
            "Program to create NFT metadata"
          ],
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "tokenProgram2022",
          "docs": [
            "Program to create mint account and mint tokens"
          ],
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        }
      ],
      "args": [
        {
          "name": "amount0Max",
          "type": "u64"
        },
        {
          "name": "amount1Max",
          "type": "u64"
        },
        {
          "name": "tickLowerIndex",
          "type": "i32"
        },
        {
          "name": "tickUpperIndex",
          "type": "i32"
        },
        {
          "name": "tickArrayLowerStartIndex",
          "type": "i32"
        },
        {
          "name": "tickArrayUpperStartIndex",
          "type": "i32"
        }
      ]
    },
    {
      "name": "swapToRatioDeposit",
      "discriminator": [
        174,
        30,
        117,
        107,
        226,
        133,
        113,
        206
      ],
      "accounts": [
        {
          "name": "clmmProgram",
          "address": "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"
        },
        {
          "name": "poolPositionConfig",
          "writable": true
        },
        {
          "name": "investor",
          "docs": [
            "The user performing the swap"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "poolState",
          "docs": [
            "The program account of the pool in which the swap will be performed"
          ],
          "writable": true
        },
        {
          "name": "personalPosition",
          "docs": [
            "Increase liquidity for this position"
          ],
          "writable": true
        },
        {
          "name": "ammConfig0",
          "docs": [
            "The factory state to read protocol fees"
          ],
          "writable": true
        },
        {
          "name": "poolState0",
          "docs": [
            "The program account of the pool in which the swap will be performed"
          ],
          "writable": true
        },
        {
          "name": "ammConfig1",
          "writable": true
        },
        {
          "name": "poolState1",
          "docs": [
            "The program account of the pool in which the swap will be performed"
          ],
          "writable": true
        },
        {
          "name": "investorAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  111,
                  114,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "poolPositionConfig"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "investorDepositStableTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  95,
                  115,
                  116,
                  97,
                  98,
                  108,
                  101,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  97,
                  99,
                  99,
                  116,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "investorAccount"
              }
            ]
          }
        },
        {
          "name": "investorDepositToken0Account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  95,
                  100,
                  101,
                  112,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  48,
                  95,
                  97,
                  99,
                  99,
                  116,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "investorAccount"
              }
            ]
          }
        },
        {
          "name": "investorDepositToken1Account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  95,
                  100,
                  101,
                  112,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  49,
                  95,
                  97,
                  99,
                  99,
                  116,
                  58
                ]
              },
              {
                "kind": "account",
                "path": "investorAccount"
              }
            ]
          }
        },
        {
          "name": "poolVault0Input",
          "docs": [
            "The vault token account for input token"
          ],
          "writable": true
        },
        {
          "name": "poolVault1Input",
          "docs": [
            "The vault token account for input token"
          ],
          "writable": true
        },
        {
          "name": "poolVaultToken0Account",
          "docs": [
            "The vault token account for output token"
          ],
          "writable": true
        },
        {
          "name": "poolVaultToken1Account",
          "docs": [
            "The vault token account for output token"
          ],
          "writable": true
        },
        {
          "name": "poolVaultDepositStableMint",
          "docs": [
            "The mint of token vault 0"
          ]
        },
        {
          "name": "poolVaultToken0Mint",
          "docs": [
            "The mint of token vault 1"
          ]
        },
        {
          "name": "poolVaultToken1Mint",
          "docs": [
            "The mint of token vault 1"
          ]
        },
        {
          "name": "observationState0",
          "docs": [
            "The program account for the most recent oracle observation"
          ],
          "writable": true
        },
        {
          "name": "observationState1",
          "docs": [
            "The program account for the most recent oracle observation"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "SPL program for token transfers"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgram2022",
          "docs": [
            "SPL program 2022 for token transfers"
          ],
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "memoProgram",
          "docs": [
            "memo program"
          ],
          "address": "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program"
          ],
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "otherAmountThreshold",
          "type": "u64"
        },
        {
          "name": "sqrtPriceLimitX64",
          "type": "u128"
        },
        {
          "name": "isBaseInput",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "ammConfig",
      "discriminator": [
        218,
        244,
        33,
        104,
        203,
        203,
        43,
        111
      ]
    },
    {
      "name": "investor",
      "discriminator": [
        174,
        129,
        17,
        83,
        36,
        116,
        26,
        196
      ]
    },
    {
      "name": "observationState",
      "discriminator": [
        122,
        174,
        197,
        53,
        129,
        9,
        165,
        132
      ]
    },
    {
      "name": "personalPositionState",
      "discriminator": [
        70,
        111,
        150,
        126,
        230,
        15,
        25,
        117
      ]
    },
    {
      "name": "poolPosition",
      "discriminator": [
        246,
        13,
        238,
        156,
        119,
        129,
        253,
        135
      ]
    },
    {
      "name": "poolPositionConfig",
      "discriminator": [
        63,
        38,
        4,
        160,
        42,
        199,
        184,
        160
      ]
    },
    {
      "name": "poolState",
      "discriminator": [
        247,
        237,
        227,
        245,
        215,
        195,
        222,
        70
      ]
    },
    {
      "name": "protocolPositionState",
      "discriminator": [
        100,
        226,
        145,
        99,
        146,
        218,
        160,
        106
      ]
    },
    {
      "name": "tickArrayState",
      "discriminator": [
        192,
        155,
        85,
        205,
        49,
        249,
        129,
        42
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidTickRange",
      "msg": "Invalid tick range"
    },
    {
      "code": 6001,
      "name": "sqrtPriceX64",
      "msg": "sqrt_price_x64 out of range"
    },
    {
      "code": 6002,
      "name": "tickUpperOverflow",
      "msg": "The tick must be lesser than, or equal to the maximum tick(443636)"
    },
    {
      "code": 6003,
      "name": "invalidTickArray"
    },
    {
      "code": 6004,
      "name": "vaultsAlreadyInitialized",
      "msg": "The pool position vaults have already been initialized"
    },
    {
      "code": 6005,
      "name": "unauthorized",
      "msg": "unauthorized"
    }
  ],
  "types": [
    {
      "name": "ammConfig",
      "docs": [
        "Holds the current owner of the factory"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump to identify PDA"
            ],
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "owner",
            "docs": [
              "Address of the protocol owner"
            ],
            "type": "pubkey"
          },
          {
            "name": "protocolFeeRate",
            "docs": [
              "The protocol fee"
            ],
            "type": "u32"
          },
          {
            "name": "tradeFeeRate",
            "docs": [
              "The trade fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u32"
          },
          {
            "name": "tickSpacing",
            "docs": [
              "The tick spacing"
            ],
            "type": "u16"
          },
          {
            "name": "fundFeeRate",
            "docs": [
              "The fund fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u32"
          },
          {
            "name": "paddingU32",
            "type": "u32"
          },
          {
            "name": "fundOwner",
            "type": "pubkey"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "investor",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "poolPositionKey",
            "type": "pubkey"
          },
          {
            "name": "initLiquidity",
            "type": "u128"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "feesEarned0",
            "type": "u64"
          },
          {
            "name": "feesEarned1",
            "type": "u64"
          },
          {
            "name": "feesIndex0",
            "type": "u128"
          },
          {
            "name": "feesIndex1",
            "type": "u128"
          },
          {
            "name": "isManager",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "observation",
      "docs": [
        "The element of observations in ObservationState"
      ],
      "serialization": "bytemuckunsafe",
      "repr": {
        "kind": "c",
        "packed": true
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "blockTimestamp",
            "docs": [
              "The block timestamp of the observation"
            ],
            "type": "u32"
          },
          {
            "name": "sqrtPriceX64",
            "docs": [
              "the price of the observation timestamp, Q64.64"
            ],
            "type": "u128"
          },
          {
            "name": "cumulativeTimePriceX64",
            "docs": [
              "the cumulative of price during the duration time, Q64.64"
            ],
            "type": "u128"
          },
          {
            "name": "padding",
            "docs": [
              "padding for feature update"
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "observationState",
      "serialization": "bytemuckunsafe",
      "repr": {
        "kind": "c",
        "packed": true
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialized",
            "docs": [
              "Whether the ObservationState is initialized"
            ],
            "type": "bool"
          },
          {
            "name": "poolId",
            "type": "pubkey"
          },
          {
            "name": "observations",
            "docs": [
              "observation array"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "observation"
                  }
                },
                1000
              ]
            }
          },
          {
            "name": "padding",
            "docs": [
              "padding for feature update"
            ],
            "type": {
              "array": [
                "u128",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "personalPositionState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump to identify PDA"
            ],
            "type": "u8"
          },
          {
            "name": "nftMint",
            "docs": [
              "Mint address of the tokenized position"
            ],
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "docs": [
              "The ID of the pool with which this token is connected"
            ],
            "type": "pubkey"
          },
          {
            "name": "tickLowerIndex",
            "docs": [
              "The lower bound tick of the position"
            ],
            "type": "i32"
          },
          {
            "name": "tickUpperIndex",
            "docs": [
              "The upper bound tick of the position"
            ],
            "type": "i32"
          },
          {
            "name": "liquidity",
            "docs": [
              "The amount of liquidity owned by this position"
            ],
            "type": "u128"
          },
          {
            "name": "feeGrowthInside0LastX64",
            "docs": [
              "The token_0 fee growth of the aggregate position as of the last action on the individual position"
            ],
            "type": "u128"
          },
          {
            "name": "feeGrowthInside1LastX64",
            "docs": [
              "The token_1 fee growth of the aggregate position as of the last action on the individual position"
            ],
            "type": "u128"
          },
          {
            "name": "tokenFeesOwed0",
            "docs": [
              "The fees owed to the position owner in token_0, as of the last computation"
            ],
            "type": "u64"
          },
          {
            "name": "tokenFeesOwed1",
            "docs": [
              "The fees owed to the position owner in token_1, as of the last computation"
            ],
            "type": "u64"
          },
          {
            "name": "rewardInfos",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "positionRewardInfo"
                  }
                },
                3
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "poolPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "poolPositionNftAccountBump",
            "type": "u8"
          },
          {
            "name": "poolPositionConfigKey",
            "type": "pubkey"
          },
          {
            "name": "managerKey",
            "type": "pubkey"
          },
          {
            "name": "poolPositionNftKey",
            "type": "pubkey"
          },
          {
            "name": "positionNftMintKey",
            "type": "pubkey"
          },
          {
            "name": "positionNftAccountKey",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "feesIndex0",
            "type": "u128"
          },
          {
            "name": "feesIndex1",
            "type": "u128"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "vaultsInitialized",
            "type": "bool"
          },
          {
            "name": "createdAt",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "poolPositionConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "pdaBump",
            "type": "u8"
          },
          {
            "name": "tickLowerIndex",
            "type": "i32"
          },
          {
            "name": "tickUpperIndex",
            "type": "i32"
          },
          {
            "name": "poolKey",
            "type": "pubkey"
          },
          {
            "name": "poolPositionKey",
            "type": "pubkey"
          },
          {
            "name": "managerKey",
            "type": "pubkey"
          },
          {
            "name": "tokenVault0Key",
            "type": "pubkey"
          },
          {
            "name": "tokenVault1Key",
            "type": "pubkey"
          },
          {
            "name": "vault0MintKey",
            "type": "pubkey"
          },
          {
            "name": "vault1MintKey",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "poolState",
      "docs": [
        "The pool state",
        "",
        "PDA of `[POOL_SEED, config, token_mint_0, token_mint_1]`",
        ""
      ],
      "serialization": "bytemuckunsafe",
      "repr": {
        "kind": "c",
        "packed": true
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump to identify PDA"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "ammConfig",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "tokenMint0",
            "docs": [
              "Token pair of the pool, where token_mint_0 address < token_mint_1 address"
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenMint1",
            "type": "pubkey"
          },
          {
            "name": "tokenVault0",
            "docs": [
              "Token pair vault"
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenVault1",
            "type": "pubkey"
          },
          {
            "name": "observationKey",
            "docs": [
              "observation account key"
            ],
            "type": "pubkey"
          },
          {
            "name": "mintDecimals0",
            "docs": [
              "mint0 and mint1 decimals"
            ],
            "type": "u8"
          },
          {
            "name": "mintDecimals1",
            "type": "u8"
          },
          {
            "name": "tickSpacing",
            "docs": [
              "The minimum number of ticks between initialized ticks"
            ],
            "type": "u16"
          },
          {
            "name": "liquidity",
            "docs": [
              "The currently in range liquidity available to the pool."
            ],
            "type": "u128"
          },
          {
            "name": "sqrtPriceX64",
            "docs": [
              "The current price of the pool as a sqrt(token_1/token_0) Q64.64 value"
            ],
            "type": "u128"
          },
          {
            "name": "tickCurrent",
            "docs": [
              "The current tick of the pool, i.e. according to the last tick transition that was run."
            ],
            "type": "i32"
          },
          {
            "name": "observationIndex",
            "docs": [
              "the most-recently updated index of the observations array"
            ],
            "type": "u16"
          },
          {
            "name": "observationUpdateDuration",
            "type": "u16"
          },
          {
            "name": "feeGrowthGlobal0X64",
            "docs": [
              "The fee growth as a Q64.64 number, i.e. fees of token_0 and token_1 collected per",
              "unit of liquidity for the entire life of the pool."
            ],
            "type": "u128"
          },
          {
            "name": "feeGrowthGlobal1X64",
            "type": "u128"
          },
          {
            "name": "protocolFeesToken0",
            "docs": [
              "The amounts of token_0 and token_1 that are owed to the protocol."
            ],
            "type": "u64"
          },
          {
            "name": "protocolFeesToken1",
            "type": "u64"
          },
          {
            "name": "swapInAmountToken0",
            "docs": [
              "The amounts in and out of swap token_0 and token_1"
            ],
            "type": "u128"
          },
          {
            "name": "swapOutAmountToken1",
            "type": "u128"
          },
          {
            "name": "swapInAmountToken1",
            "type": "u128"
          },
          {
            "name": "swapOutAmountToken0",
            "type": "u128"
          },
          {
            "name": "status",
            "docs": [
              "Bitwise representation of the state of the pool",
              "bit0, 1: disable open position and increase liquidity, 0: normal",
              "bit1, 1: disable decrease liquidity, 0: normal",
              "bit2, 1: disable collect fee, 0: normal",
              "bit3, 1: disable collect reward, 0: normal",
              "bit4, 1: disable swap, 0: normal"
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "docs": [
              "Leave blank for future use"
            ],
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "rewardInfos",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "rewardInfo"
                  }
                },
                3
              ]
            }
          },
          {
            "name": "tickArrayBitmap",
            "docs": [
              "Packed initialized tick array state"
            ],
            "type": {
              "array": [
                "u64",
                16
              ]
            }
          },
          {
            "name": "totalFeesToken0",
            "docs": [
              "except protocol_fee and fund_fee"
            ],
            "type": "u64"
          },
          {
            "name": "totalFeesClaimedToken0",
            "docs": [
              "except protocol_fee and fund_fee"
            ],
            "type": "u64"
          },
          {
            "name": "totalFeesToken1",
            "type": "u64"
          },
          {
            "name": "totalFeesClaimedToken1",
            "type": "u64"
          },
          {
            "name": "fundFeesToken0",
            "type": "u64"
          },
          {
            "name": "fundFeesToken1",
            "type": "u64"
          },
          {
            "name": "openTime",
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                25
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "positionRewardInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "growthInsideLastX64",
            "type": "u128"
          },
          {
            "name": "rewardAmountOwed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "protocolPositionState",
      "docs": [
        "Info stored for each user's position"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump to identify PDA"
            ],
            "type": "u8"
          },
          {
            "name": "poolId",
            "docs": [
              "The ID of the pool with which this token is connected"
            ],
            "type": "pubkey"
          },
          {
            "name": "tickLowerIndex",
            "docs": [
              "The lower bound tick of the position"
            ],
            "type": "i32"
          },
          {
            "name": "tickUpperIndex",
            "docs": [
              "The upper bound tick of the position"
            ],
            "type": "i32"
          },
          {
            "name": "liquidity",
            "docs": [
              "The amount of liquidity owned by this position"
            ],
            "type": "u128"
          },
          {
            "name": "feeGrowthInside0LastX64",
            "docs": [
              "The token_0 fee growth per unit of liquidity as of the last update to liquidity or fees owed"
            ],
            "type": "u128"
          },
          {
            "name": "feeGrowthInside1LastX64",
            "docs": [
              "The token_1 fee growth per unit of liquidity as of the last update to liquidity or fees owed"
            ],
            "type": "u128"
          },
          {
            "name": "tokenFeesOwed0",
            "docs": [
              "The fees owed to the position owner in token_0"
            ],
            "type": "u64"
          },
          {
            "name": "tokenFeesOwed1",
            "docs": [
              "The fees owed to the position owner in token_1"
            ],
            "type": "u64"
          },
          {
            "name": "rewardGrowthInside",
            "docs": [
              "The reward growth per unit of liquidity as of the last update to liquidity"
            ],
            "type": {
              "array": [
                "u128",
                3
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "rewardInfo",
      "serialization": "bytemuckunsafe",
      "repr": {
        "kind": "c",
        "packed": true
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardState",
            "docs": [
              "Reward state"
            ],
            "type": "u8"
          },
          {
            "name": "openTime",
            "docs": [
              "Reward open time"
            ],
            "type": "u64"
          },
          {
            "name": "endTime",
            "docs": [
              "Reward end time"
            ],
            "type": "u64"
          },
          {
            "name": "lastUpdateTime",
            "docs": [
              "Reward last update time"
            ],
            "type": "u64"
          },
          {
            "name": "emissionsPerSecondX64",
            "docs": [
              "Q64.64 number indicates how many tokens per second are earned per unit of liquidity."
            ],
            "type": "u128"
          },
          {
            "name": "rewardTotalEmissioned",
            "docs": [
              "The total amount of reward emissioned"
            ],
            "type": "u64"
          },
          {
            "name": "rewardClaimed",
            "docs": [
              "The total amount of claimed reward"
            ],
            "type": "u64"
          },
          {
            "name": "tokenMint",
            "docs": [
              "Reward token mint."
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenVault",
            "docs": [
              "Reward vault token account."
            ],
            "type": "pubkey"
          },
          {
            "name": "authority",
            "docs": [
              "The owner that has permission to set reward param"
            ],
            "type": "pubkey"
          },
          {
            "name": "rewardGrowthGlobalX64",
            "docs": [
              "Q64.64 number that tracks the total tokens earned per unit of liquidity since the reward",
              "emissions were turned on."
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "tickArrayState",
      "serialization": "bytemuckunsafe",
      "repr": {
        "kind": "c",
        "packed": true
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolId",
            "type": "pubkey"
          },
          {
            "name": "startTickIndex",
            "type": "i32"
          },
          {
            "name": "ticks",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "tickState"
                  }
                },
                60
              ]
            }
          },
          {
            "name": "initializedTickCount",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                115
              ]
            }
          }
        ]
      }
    },
    {
      "name": "tickState",
      "serialization": "bytemuckunsafe",
      "repr": {
        "kind": "c",
        "packed": true
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tick",
            "type": "i32"
          },
          {
            "name": "liquidityNet",
            "docs": [
              "Amount of net liquidity added (subtracted) when tick is crossed from left to right (right to left)"
            ],
            "type": "i128"
          },
          {
            "name": "liquidityGross",
            "docs": [
              "The total position liquidity that references this tick"
            ],
            "type": "u128"
          },
          {
            "name": "feeGrowthOutside0X64",
            "docs": [
              "Fee growth per unit of liquidity on the _other_ side of this tick (relative to the current tick)",
              "only has relative meaning, not absolute — the value depends on when the tick is initialized"
            ],
            "type": "u128"
          },
          {
            "name": "feeGrowthOutside1X64",
            "type": "u128"
          },
          {
            "name": "rewardGrowthsOutsideX64",
            "type": {
              "array": [
                "u128",
                3
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u32",
                13
              ]
            }
          }
        ]
      }
    }
  ]
};
