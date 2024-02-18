from web3 import Web3
import json
import os
import sys

try:
    contract_address = sys.argv[1]
except IndexError as e:
    print(
        "ERROR: you have to pass contract address as parameter",
        file=sys.stderr
    )
    sys.exit(1)

secret_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '.secret.json')
try:
    with open(secret_path) as f:
        secret = json.load(f)
except FileNotFoundError as e:
    print("ERROR: ", str(e), file=sys.stderr)
    sys.exit(2)

try:
    w3 = Web3(Web3.HTTPProvider(secret['node']))
except KeyError:
    print("ERROR: 'node' key not in .secret", file=sys.stderr)
    sys.exit(3)


if not w3.is_connected():
    print("ERROR: not connected, please verify host url", file=sys.stderr)
    sys.exit(4)
    
print("\t\t\t🎉 you are connected 🎊")

try:
    with open(secret['contract_metadata']) as f:
        contract_metadata = json.load(f)
        abi = contract_metadata['abi']
except KeyError as e:
    print(f"ERROR: {str(e)} not in .secret", file=sys.stderr)
    sys.exit(3)


crypto_stamp = w3.eth.contract(
    address=Web3.to_checksum_address(contract_address),
    abi=abi
)

try:
    author = secret['author']
except KeyError as e:
    print(f"ERROR: {str(e)} key not in .secret", file=sys.stderr)
    sys.exit(3)
try:
    caller = Web3.to_checksum_address(author['address'])
    private_key = author['private_key']
except KeyError as e:
    print(f"ERROR: 'author'.{str(e)} key not in .secret", file=sys.stderr)
    sys.exit(3)
chain_id = w3.eth.chain_id
nonce = w3.eth.get_transaction_count(caller)

print("-" * 80)
print("\t\t\tchain id is\t", chain_id)
print("\t\t\tnonce is\t", nonce)
print("-" * 80)

print("Now enter your text. remember it must not exceed 256 char.")
print("enter '$$' when you finish")
lines = []
while True:
    temp = input()
    if temp != "$$":
        lines.append(temp)
    else:
        break
text = "\n".join(lines)

try:
    call_function = (
        crypto_stamp
        .functions
        .stampTextContent(text)
        .build_transaction({"chainId": chain_id, "from": caller, "nonce": nonce})
    )
    signed_tx = w3.eth.account.sign_transaction(call_function, private_key=private_key)
    send_tx = w3.eth.send_raw_transaction(signed_tx.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(send_tx)
except Exception as e:
    print("ERROR:", str(e), file=sys.stderr)
    sys.exit(5)

if not tx_receipt.logs:
    print("ERROR: no token ID returned, check contract address", file=sys.stderr)
    sys.exit(6)

print("\tCongratulations ! 🎉 your document was saved on the blockchain 🎊")
print("-" * 80)
print("transaction:", tx_receipt.transactionHash.hex())

print("token ID:", int(tx_receipt.logs[0].topics[-1].hex(), 16))
print()

print("bye, 👋 see you soon man 🤘")
sys.exit(0)
