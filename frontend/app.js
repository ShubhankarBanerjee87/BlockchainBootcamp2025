document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const connectWalletBtn = document.getElementById('connectWalletBtn');
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    const nameInput = document.getElementById('name');
    const descriptionInput = document.getElementById('description');
    const mintBtn = document.getElementById('mintBtn');
    
    let walletConnected = false;

    // Handle wallet connection
    connectWalletBtn.addEventListener('click', function() {
      walletConnected = true;
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
        </svg>
        Wallet Connected
      `;
      connectWalletBtn.style.backgroundColor = '#3f3eb3';
      alert('MetaMask wallet connected successfully!');
    });

    // Handle image upload
    imageUpload.addEventListener('change', function(e) {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
          imagePreview.src = e.target.result;
          imagePreview.style.display = 'block';
        }
        
        reader.readAsDataURL(file);
      }
    });

    // Handle NFT minting
    mintBtn.addEventListener('click', function() {
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

      console.log('Minting NFT with:', { name, description, image });
      alert(`NFT "${name}" is being minted! In a real application, this would connect to a blockchain.`);
    });

    // You would replace these with actual logo images in a real implementation
    document.getElementById('csharpCornerLogo').innerHTML = `
      <div style="width: 120px; height: 30px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">C# Corner</div>
    `;
    
    document.getElementById('csharpCornerLogoFooter').innerHTML = `
      <div style="width: 120px; height: 24px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">C# Corner</div>
    `;
    
    document.getElementById('sharpEconomyLogo').innerHTML = `
      <div style="width: 120px; height: 24px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">SharpEconomy</div>
    `;
  });