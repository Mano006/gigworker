// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";

// const App = () => {
//   const contractAddress = "0xAe3489cb7eD3a921B04dcF227B953C46f50dd393";
//   const abi = [
//     {
//       inputs: [
//         { internalType: "address payable", name: "_gigWorker", type: "address" },
//         { internalType: "uint256", name: "_paymentAmount", type: "uint256" },
//       ],
//       stateMutability: "nonpayable",
//       type: "constructor",
//     },
//     { inputs: [], name: "InsufficientBalance", type: "error" },
//     { inputs: [], name: "OnlyOwner", type: "error" },
//     { inputs: [], name: "TransferFailed", type: "error" },
//     {
//       anonymous: false,
//       inputs: [
//         { indexed: false, internalType: "address", name: "oldWorker", type: "address" },
//         { indexed: false, internalType: "address", name: "newWorker", type: "address" },
//       ],
//       name: "GigWorkerUpdated",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         { indexed: false, internalType: "uint256", name: "oldAmount", type: "uint256" },
//         { indexed: false, internalType: "uint256", name: "newAmount", type: "uint256" },
//       ],
//       name: "PaymentAmountUpdated",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         { indexed: true, internalType: "address", name: "from", type: "address" },
//         { indexed: true, internalType: "address", name: "to", type: "address" },
//         { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
//         { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
//       ],
//       name: "PaymentSent",
//       type: "event",
//     },
//     {
//       inputs: [],
//       name: "getContractBalance",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "gigWorker",
//       outputs: [{ internalType: "address payable", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "owner",
//       outputs: [{ internalType: "address", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "paymentAmount",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "sendPayment",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address payable", name: "_newWorker", type: "address" },
//       ],
//       name: "updateGigWorker",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "_newAmount", type: "uint256" }],
//       name: "updatePaymentAmount",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     { stateMutability: "payable", type: "receive" },
//   ];

//   const [account, setAccount] = useState(null);
//   const [provider, setProvider] = useState(null);
//   const [signer, setSigner] = useState(null);
//   const [contract, setContract] = useState(null);
//   const [balance, setBalance] = useState(0);
//   const [paymentAmount, setPaymentAmount] = useState("");

//   // Connect Wallet
//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
//         await web3Provider.send("eth_requestAccounts", []);
//         const signer = web3Provider.getSigner();
//         const account = await signer.getAddress();
//         const contract = new ethers.Contract(contractAddress, abi, signer);

//         setProvider(web3Provider);
//         setSigner(signer);
//         setAccount(account);
//         setContract(contract);

//         alert("Wallet connected!");
//       } catch (error) {
//         console.error("Error connecting wallet:", error);
//       }
//     } else {
//       alert("No Ethereum wallet found! Install MetaMask.");
//     }
//   };

//   // Get Contract Balance
//   const getContractBalance = async () => {
//     try {
//       const balance = await contract.getContractBalance();
//       setBalance(ethers.utils.formatEther(balance));
//     } catch (error) {
//       console.error("Error fetching contract balance:", error);
//     }
//   };

//   // Send Payment
//   const sendPayment = async () => {
//     try {
//       const tx = await contract.sendPayment();
//       await tx.wait();
//       alert("Payment sent successfully!");
//       getContractBalance(); // Refresh balance after sending
//     } catch (error) {
//       console.error("Error sending payment:", error);
//       alert("Payment failed. Check contract balance or permissions.");
//     }
//   };

//   // Update Payment Amount
//   const updatePaymentAmount = async () => {
//     try {
//       const tx = await contract.updatePaymentAmount(
//         ethers.utils.parseEther(paymentAmount)
//       );
//       await tx.wait();
//       alert("Payment amount updated!");
//     } catch (error) {
//       console.error("Error updating payment amount:", error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Gig Payment DApp</h1>
//       {!account ? (
//         <button onClick={connectWallet}>Connect Wallet</button>
//       ) : (
//         <p>Connected Account: {account}</p>
//       )}

//       <hr />

//       <h2>Contract Actions</h2>
//       <button onClick={getContractBalance}>Get Contract Balance</button>
//       <p>Contract Balance: {balance} ETH</p>

//       <button onClick={sendPayment}>Send Payment</button>

//       <div>
//         <input
//           type="number"
//           placeholder="New Payment Amount in ETH"
//           value={paymentAmount}
//           onChange={(e) => setPaymentAmount(e.target.value)}
//         />
//         <button onClick={updatePaymentAmount}>Update Payment Amount</button>
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";

const App = () => {
  return <h1>Hello, React is working!</h1>;
};

export default App;
