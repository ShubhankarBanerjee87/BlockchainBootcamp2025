var abiJson = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "initialOwner",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ERC721EnumerableForbiddenBatchMint",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "ERC721IncorrectOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721InsufficientApproval",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidOperator",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721NonexistentToken",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "ERC721OutOfBoundsIndex",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_fromTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_toTokenId",
        "type": "uint256"
      }
    ],
    "name": "BatchMetadataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "MetadataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "uri",
        "type": "string"
      }
    ],
    "name": "safeMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

document.addEventListener('DOMContentLoaded', function () {

  const web3 = new Web3(window.ethereum);
  const PINATA_JWT = ""; // <-- Replace this with your JWT

  // Elements
  const connectWalletBtn = document.getElementById('connectWalletBtn');
  const imageUpload = document.getElementById('imageUpload');
  const imagePreview = document.getElementById('imagePreview');
  const nameInput = document.getElementById('name');
  const descriptionInput = document.getElementById('description');
  const mintBtn = document.getElementById('mintBtn');

  let walletConnected = false;

  // Handle wallet connection
  connectWalletBtn.addEventListener('click', async function () {
    // Check if MetaMask is installed
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask is not installed. Please install it to use this feature.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const selectedAddress = accounts[0];

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const nativeSymbol = getNativeTokenSymbol(parseInt(chainId, 16));


      // Get balance of the selected address
      const balanceWei = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [selectedAddress, 'latest'],
      });

      const balanceEth = parseFloat(web3.utils.fromWei(balanceWei, 'ether')).toFixed(4);

      connectWalletBtn.innerHTML = `
          <svg class="metamask-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3622 2L13.0252 8.3208L14.5365 4.7179L21.3622 2Z" fill="#E17726" stroke="#E17726" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.63782 2L10.8939 8.39272L9.46348 4.7179L2.63782 2Z" fill="#E27625" stroke="#E27625" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.4938 16.7679L16.3902 20.2424L20.9995 21.5961L22.3089 16.8396L18.4938 16.7679Z" fill="#E27625" stroke="#E27625" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.7002 16.8396L3.00047 21.5961L7.60066 20.2424L5.50615 16.7679L1.7002 16.8396Z" fill="#E27625" stroke="#E27625" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.35461 10.7957L6.07227 12.8955L10.6277 13.0926L10.4761 8.03467L7.35461 10.7957Z" fill="#E27625" stroke="#E27625" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.6454 10.7957L13.4692 7.96362L13.3623 13.0926L17.9177 12.8955L16.6454 10.7957Z" fill="#E27625" stroke="#E27625" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.60059 20.2424L10.3243 18.8529L7.97461 16.8754L7.60059 20.2424Z" fill="#E27625" stroke="#E27625" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.6758 18.8529L16.3904 20.2424L16.0255 16.8754L13.6758 18.8529Z" fill="#E27625" stroke="#E27625" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.3904 20.2424L13.6758 18.8529L13.9062 20.7946L13.8796 21.5245L16.3904 20.2424Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.60059 20.2424L10.1205 21.5245L10.1031 20.7946L10.3243 18.8529L7.60059 20.2424Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.1741 15.6077L7.90625 14.8778L9.50669 14.0762L10.1741 15.6077Z" fill="#233447" stroke="#233447" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.8259 15.6077L14.4933 14.0762L16.1029 14.8778L13.8259 15.6077Z" fill="#233447" stroke="#233447" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.60066 20.2424L7.99282 16.7679L5.50615 16.8396L7.60066 20.2424Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.0072 16.7679L16.3902 20.2424L18.4938 16.8396L16.0072 16.7679Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.9177 12.8955L13.3623 13.0926L13.8259 15.6077L14.4933 14.0762L16.1029 14.8778L17.9177 12.8955Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.90625 14.8778L9.50669 14.0762L10.1741 15.6077L10.6277 13.0926L6.07227 12.8955L7.90625 14.8778Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.07227 12.8955L7.97461 16.8754L7.90625 14.8778L6.07227 12.8955Z" fill="#E27525" stroke="#E27525" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.1029 14.8778L16.0254 16.8754L17.9177 12.8955L16.1029 14.8778Z" fill="#E27525" stroke="#E27525" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6277 13.0926L10.1741 15.6077L10.7446 18.3687L10.8689 14.5L10.6277 13.0926Z" fill="#E27525" stroke="#E27525" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3623 13.0926L13.1302 14.4909L13.2455 18.3687L13.8259 15.6077L13.3623 13.0926Z" fill="#E27525" stroke="#E27525" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.8259 15.6077L13.2455 18.3687L13.6758 18.8529L16.0255 16.8754L16.1029 14.8778L13.8259 15.6077Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.90625 14.8778L7.97461 16.8754L10.3243 18.8529L10.7446 18.3687L10.1741 15.6077L7.90625 14.8778Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.8796 21.5245L13.9062 20.7946L13.6932 20.6154H10.3068L10.1031 20.7946L10.1205 21.5245L7.60059 20.2424L8.49645 21.0082L10.2723 22.1982H13.7186L15.5036 21.0082L16.3904 20.2424L13.8796 21.5245Z" fill="#C0AC9D" stroke="#C0AC9D" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.6758 18.8529L13.2455 18.3687H10.7446L10.3243 18.8529L10.1031 20.7946L10.3068 20.6154H13.6932L13.9062 20.7946L13.6758 18.8529Z" fill="#161616" stroke="#161616" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.7 8.5957L22.4 5.1929L21.3622 2L13.6758 8.0398L16.6454 10.7957L20.8926 12.1494L21.8304 10.9947L21.4382 10.7051L22.0879 10.1167L21.6139 9.73357L22.2636 9.24434L21.7 8.5957Z" fill="#763E1A" stroke="#763E1A" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.59998 5.1929L2.29998 8.5957L1.71819 9.24434L2.37704 9.73357L1.90301 10.1167L2.55273 10.7051L2.16057 10.9947L3.09835 12.1494L7.35461 10.7957L10.3242 8.0398L2.63782 2L1.59998 5.1929Z" fill="#763E1A" stroke="#763E1A" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.8926 12.1494L16.6454 10.7957L17.9177 12.8955L16.0254 16.8754L18.4938 16.8396H22.3089L20.8926 12.1494Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.35461 10.7957L3.09835 12.1494L1.7002 16.8396H5.50615L7.97461 16.8754L6.07227 12.8955L7.35461 10.7957Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3623 13.0926L13.6758 8.0398L14.5365 4.7179H9.46348L10.3242 8.0398L10.6277 13.0926L10.7446 14.5091L10.7446 18.3687H13.2455L13.2455 14.5091L13.3623 13.0926Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>  ${shortenAddress(selectedAddress)} | ${balanceEth} ${nativeSymbol}
`;

      connectWalletBtn.style.backgroundColor = '#3f3eb3';
      walletConnected = true;

      alert('MetaMask wallet connected successfully!');
    } catch (err) {
      console.error('User rejected the connection request', err);
      alert('Failed to connect to MetaMask.');
    }
  });

  function getNativeTokenSymbol(chainId) {
    switch (parseInt(chainId)) {
      case 1: return 'ETH';
      case 137: return 'MATIC';
      case 56: return 'BNB';
      default: return 'ETH';
    }
  }


  // Helper to shorten wallet address
  function shortenAddress(address) {
    return address.slice(0, 6) + '...' + address.slice(-4);
  }

  // Handle image upload
  imageUpload.addEventListener('change', function (e) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
      }

      reader.readAsDataURL(file);
    }
  });

  // Handle NFT minting
  mintBtn.addEventListener('click', async function () {
    const name = nameInput.value;
    const description = descriptionInput.value;
    const image = imageUpload.files[0];

    if (!name || !description || !image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    if (!walletConnected) {
      alert('Please connect your wallet first.');
      return;
    }

    try {
      // 1. Upload image to IPFS
      const imageUrl = await uploadImageToIPFS(image);

      // 2. Create metadata and upload to IPFS
      const metadata = {
        name,
        description,
        image: imageUrl,
      };
      const tokenURI = await uploadMetadataToIPFS(metadata);

      // 3. Call smart contract mint function
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const selectedAddress = accounts[0];

        // Import the ABI (assuming it's in the same directory or adjust the path)
        // const CONTRACT_ABI = NFTMinterABI.abi;

        // Replace with your deployed contract address

        const CONTRACT_ADDRESS = '0xad34A5Bc626f3034Edecb5bebd55C6F83c4AE406';

        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abiJson, CONTRACT_ADDRESS);

        // await contract.methods.safeMint(selectedAddress, tokenURI).send({ from: selectedAddress });

        const gasLimit = await contract.methods.safeMint(selectedAddress, tokenURI).estimateGas({ from: selectedAddress });
        const gasPrice = await web3.eth.getGasPrice();  // Get current gas price

        try {
          const receipt = await contract.methods.safeMint(selectedAddress, tokenURI).send({
            from: selectedAddress,
            gas: gasLimit,
            gasPrice: gasPrice
          });
          console.log("Minting successful:", receipt);
        } catch (error) {
          console.error("Error during minting:", error);
        }

        alert('NFT minted successfully!');
      } else {
        alert('Please install MetaMask or another Web3 provider.');
      }
    } catch (error) {
      console.error('Error minting NFT:', error);
      alert('Minting failed. Check the console for details.');
    }
  });

  async function uploadImageToIPFS(file) {
    const formData = new FormData();
    formData.append("file", file);

    const metadata = JSON.stringify({ name: file.name });
    formData.append("pinataMetadata", metadata);

    const options = JSON.stringify({ cidVersion: 0 });
    formData.append("pinataOptions", options);

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PINATA_JWT}`,
      },
      body: formData,
    });

    const data = await res.json();
    return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
  }

  async function uploadMetadataToIPFS(metadata) {
    const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PINATA_JWT}`,
      },
      body: JSON.stringify(metadata),
    });

    const data = await res.json();
    return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
  }
  console.log("Metadata")
});
