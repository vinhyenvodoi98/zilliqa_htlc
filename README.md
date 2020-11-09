<h1  align="center">Zilliqa HTLC👋</h1>

## Hash time lock contract (htlc)

A Hashed Timelock Contract (HTLC) is a type of smart contract used in cryptocurrency channels to eliminate counterparty risk. It enables implementation of time-bound transactions.

In practical terms, this means that recipients of a transaction have to acknowledge payment by generating cryptographic proof within a certain timeframe. Otherwise, the transaction does not take place

Atomic cross-chain trading between cryptocurrencies is implemented using HTLC.

## Functionality

I tried implementing HTLC on xsgd with the ability to exchange any zrc2 with any ERC20 on eth network

There are 4 functions: NewContract, withdraw, refund and getStatus

- NewContract will create a transaction and set a time when it can be executed.

- Withdraw is for the receiver to call and followed by a secret before being a hasklock. if it is, the transaction will be executed and public secreted on the network.

- Refund function is used when the transaction time has expired and the transaction creator will be able to withdraw the token.

- getStatus is used to check the status of a transaction.
