from nucypher.config.keyring import NucypherKeyring
from nucypher.characters.lawful import Alice, Ursula

ursula = Ursula.from_seed_and_stake_info(seed_uri="localhost:11500")

# keyring = NucypherKeyring.generate(checksum_address='0x287A817426DD1AE78ea23e9918e2273b6733a43D', password='PASSWORDPASSWORD', keyring_root='./')
keyring = NucypherKeyring(account='0x287A817426DD1AE78ea23e9918e2273b6733a43D', keyring_root='./')
keyring.unlock(password='PASSWORDPASSWORD')

# Instantiate Alice
alice = Alice(keyring=keyring, known_nodes=[ursula], provider_uri='~/.ethereum/geth.ipc')

# Start Node Discovery
alice.start_learning_loop(now=True)