export type CrazymemeSol = {
  "version": "0.1.0",
  "name": "crazymeme_sol",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setGlobal",
      "accounts": [
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetGlobalParams"
          }
        }
      ]
    },
    {
      "name": "create",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "crazyState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "crazyTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "auctionPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "crazyState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "crazyTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenAmount",
          "type": "u64"
        },
        {
          "name": "maxSolCost",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sell",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "crazyState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "crazyTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenAmount",
          "type": "u64"
        },
        {
          "name": "minSolOutput",
          "type": "u64"
        }
      ]
    },
    {
      "name": "getPrice",
      "accounts": [
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "crazyState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": "u64"
    }
  ],
  "accounts": [
    {
      "name": "crazyState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "solReserves",
            "type": "u64"
          },
          {
            "name": "tokenReserves",
            "type": "u64"
          },
          {
            "name": "tokenLocked",
            "type": "u64"
          },
          {
            "name": "lastUpdateTime",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "auctionPeriod",
            "type": "u64"
          },
          {
            "name": "tokenReleaseTick",
            "type": "u64"
          },
          {
            "name": "tokenReleasePerTime",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "global",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "feeRecipient",
            "type": "publicKey"
          },
          {
            "name": "initialTokenSupply",
            "type": "u64"
          },
          {
            "name": "initialDevBuyAmount",
            "type": "u64"
          },
          {
            "name": "initialDevBuyPercent",
            "type": "u64"
          },
          {
            "name": "tokenReleaseTick",
            "type": "u64"
          },
          {
            "name": "tradeFee",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "SetGlobalParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeRecipient",
            "type": "publicKey"
          },
          {
            "name": "initialTokenSupply",
            "type": "u64"
          },
          {
            "name": "initialDevBuyAmount",
            "type": "u64"
          },
          {
            "name": "initialDevBuyPercent",
            "type": "u64"
          },
          {
            "name": "tokenReleaseTick",
            "type": "u64"
          },
          {
            "name": "tradeFee",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CreateEvent",
      "fields": [
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "symbol",
          "type": "string",
          "index": false
        },
        {
          "name": "uri",
          "type": "string",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "crazyState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenReceived",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TradeEvent",
      "fields": [
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "solAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "isBuy",
          "type": "bool",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SetGlobalParamsEvent",
      "fields": [
        {
          "name": "feeRecipient",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "initialTokenSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "initialDevBuyAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "initialDevBuyPercent",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenReleaseTick",
          "type": "u64",
          "index": false
        },
        {
          "name": "tradeFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "createFee",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInitialized",
      "msg": "Global Already Initialized"
    },
    {
      "code": 6001,
      "name": "NotInitialized",
      "msg": "Global Not Initialized"
    },
    {
      "code": 6002,
      "name": "InvalidAuthority",
      "msg": "Invalid Authority"
    },
    {
      "code": 6003,
      "name": "InsufficientTokens",
      "msg": "Insufficient Tokens"
    },
    {
      "code": 6004,
      "name": "InsufficientSOL",
      "msg": "Insufficient SOL"
    },
    {
      "code": 6005,
      "name": "MinBuy",
      "msg": "Min buy is 1 Token"
    },
    {
      "code": 6006,
      "name": "MinSell",
      "msg": "Min sell is 1 Token"
    },
    {
      "code": 6007,
      "name": "InvalidFeeRecipient",
      "msg": "Invalid Fee Recipient"
    },
    {
      "code": 6008,
      "name": "InvalidWithdrawAuthority",
      "msg": "Invalid Withdraw Authority"
    },
    {
      "code": 6009,
      "name": "InvalidAuctionPeriod",
      "msg": "Invalid Auction Period"
    },
    {
      "code": 6010,
      "name": "InvalidTimestamp",
      "msg": "Invalid Timestamp"
    },
    {
      "code": 6011,
      "name": "DevNotPurchased",
      "msg": "Dev Not Purchased"
    },
    {
      "code": 6012,
      "name": "DevAlreadyPurchased",
      "msg": "Dev Already Purchased"
    },
    {
      "code": 6013,
      "name": "NotInAuctionSession",
      "msg": "Not In Auction Session"
    },
    {
      "code": 6014,
      "name": "SlippageExceeded",
      "msg": "Slippage Exceeded"
    },
    {
      "code": 6015,
      "name": "InvalidAmount",
      "msg": "Invalid Amount"
    },
    {
      "code": 6016,
      "name": "EmptySupply",
      "msg": "Empty Supply"
    }
  ]
};

export const IDL: CrazymemeSol = {
  "version": "0.1.0",
  "name": "crazymeme_sol",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setGlobal",
      "accounts": [
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetGlobalParams"
          }
        }
      ]
    },
    {
      "name": "create",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "crazyState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "crazyTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "auctionPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "crazyState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "crazyTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenAmount",
          "type": "u64"
        },
        {
          "name": "maxSolCost",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sell",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "crazyState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "crazyTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenAmount",
          "type": "u64"
        },
        {
          "name": "minSolOutput",
          "type": "u64"
        }
      ]
    },
    {
      "name": "getPrice",
      "accounts": [
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "crazyState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": "u64"
    }
  ],
  "accounts": [
    {
      "name": "crazyState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "solReserves",
            "type": "u64"
          },
          {
            "name": "tokenReserves",
            "type": "u64"
          },
          {
            "name": "tokenLocked",
            "type": "u64"
          },
          {
            "name": "lastUpdateTime",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "auctionPeriod",
            "type": "u64"
          },
          {
            "name": "tokenReleaseTick",
            "type": "u64"
          },
          {
            "name": "tokenReleasePerTime",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "global",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "feeRecipient",
            "type": "publicKey"
          },
          {
            "name": "initialTokenSupply",
            "type": "u64"
          },
          {
            "name": "initialDevBuyAmount",
            "type": "u64"
          },
          {
            "name": "initialDevBuyPercent",
            "type": "u64"
          },
          {
            "name": "tokenReleaseTick",
            "type": "u64"
          },
          {
            "name": "tradeFee",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "SetGlobalParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeRecipient",
            "type": "publicKey"
          },
          {
            "name": "initialTokenSupply",
            "type": "u64"
          },
          {
            "name": "initialDevBuyAmount",
            "type": "u64"
          },
          {
            "name": "initialDevBuyPercent",
            "type": "u64"
          },
          {
            "name": "tokenReleaseTick",
            "type": "u64"
          },
          {
            "name": "tradeFee",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CreateEvent",
      "fields": [
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "symbol",
          "type": "string",
          "index": false
        },
        {
          "name": "uri",
          "type": "string",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "crazyState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenReceived",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TradeEvent",
      "fields": [
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "solAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "isBuy",
          "type": "bool",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SetGlobalParamsEvent",
      "fields": [
        {
          "name": "feeRecipient",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "initialTokenSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "initialDevBuyAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "initialDevBuyPercent",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenReleaseTick",
          "type": "u64",
          "index": false
        },
        {
          "name": "tradeFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "createFee",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInitialized",
      "msg": "Global Already Initialized"
    },
    {
      "code": 6001,
      "name": "NotInitialized",
      "msg": "Global Not Initialized"
    },
    {
      "code": 6002,
      "name": "InvalidAuthority",
      "msg": "Invalid Authority"
    },
    {
      "code": 6003,
      "name": "InsufficientTokens",
      "msg": "Insufficient Tokens"
    },
    {
      "code": 6004,
      "name": "InsufficientSOL",
      "msg": "Insufficient SOL"
    },
    {
      "code": 6005,
      "name": "MinBuy",
      "msg": "Min buy is 1 Token"
    },
    {
      "code": 6006,
      "name": "MinSell",
      "msg": "Min sell is 1 Token"
    },
    {
      "code": 6007,
      "name": "InvalidFeeRecipient",
      "msg": "Invalid Fee Recipient"
    },
    {
      "code": 6008,
      "name": "InvalidWithdrawAuthority",
      "msg": "Invalid Withdraw Authority"
    },
    {
      "code": 6009,
      "name": "InvalidAuctionPeriod",
      "msg": "Invalid Auction Period"
    },
    {
      "code": 6010,
      "name": "InvalidTimestamp",
      "msg": "Invalid Timestamp"
    },
    {
      "code": 6011,
      "name": "DevNotPurchased",
      "msg": "Dev Not Purchased"
    },
    {
      "code": 6012,
      "name": "DevAlreadyPurchased",
      "msg": "Dev Already Purchased"
    },
    {
      "code": 6013,
      "name": "NotInAuctionSession",
      "msg": "Not In Auction Session"
    },
    {
      "code": 6014,
      "name": "SlippageExceeded",
      "msg": "Slippage Exceeded"
    },
    {
      "code": 6015,
      "name": "InvalidAmount",
      "msg": "Invalid Amount"
    },
    {
      "code": 6016,
      "name": "EmptySupply",
      "msg": "Empty Supply"
    }
  ]
};
