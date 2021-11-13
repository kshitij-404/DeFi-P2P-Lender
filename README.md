[![Contributors][contributors-shield]][contributors-url]
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">DeFi-P2P-Lender</h1>
  <p align="center">
  Connecting people with their money.
   <br />
  </p>
</p>
<p align ="center">
<img src="https://i.ibb.co/z45CJfm/reva.png" alt="reva" border="0">
</p>
<br />

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary><br />
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      </li>
     <li>
         <a href="#flow">Project Design</a>
      </li>
      <li>
      <a href="#screenshots">Screenshots</a>
      </li>
      <li>
         <a href="#video">Demonstration Video</a>
      </li>
    <li><a href="#features">Features</a>
    </li>
    <li><a href="#technologies-used">Technologies, Libraries and Packages Used</a>
    </li>
      <li><a href="#local-setup">Local Setup</a></li>
      <li><a href="#next">What Next?</a></li>
    <li><a href="#team">Team Members</a></li>
  </ol>
</details>


<div id="about-the-project" />

<!-- ABOUT THE PROJECT -->
# About The Project

This project was developed for the RevaHack-2021, by team **PilluzyM**.

Small business owners often get exploited by moneylenders when borrowing money. High and unfair rates of interest, middlemen, and a process where the entire power lies in the hands of the lender leaves the borrowers vulnerable to exploitation. The entire process is very slow, and requires a lot of manual work.

We propose a solution to this problem through our DApp Decentralised Financial Peer to Peer Lender based on blockchain technology built on ethereum.

### Why Blockchain?

* **Time efficient :** Blockchain allows us to make the entire process decentralized, where neither of the parties has all of the power. It offers transparency and connects the borrower directly to the lender; with no middlemen involved. The process is automated and hence a lot faster than traditional lending methods.
* **Fair Interest Rates :** Since blockchain is immutable, the interest rate once decided upon cannot be changed later in an unfair way. The lender gets to specify the desired interest rate beforehand and the borrower gets to choose the interest rate he wants from the ones offered by the different lenders.
* **Seamless repayment :** Blockchain also removes the worry of the lenders of having their loans repaid. If the borrower does not repay the loan before the specified due date, the lenders have the mortgage submitted by the borrower which can then be auctioned off.

<div id="flow" />

# Project Design

<p align ="center">
<img src="https://i.ibb.co/z54hX1v/Untitled-Workspace.png" alt="reva" border="0">
</p>

<div id="screenshots" />

# Screenshots

Screenshots of our DApp are added to [this link](https://photos.app.goo.gl/rM9hR66io1JGBUfEA).

<div id="video" />

# Demonstration Video

Demonstration of our Dapp is added to [this link](https://vimeo.com/645497797).

<div id="features" />

<!-- GETTING STARTED -->
# Features

* Borrowers can create their loan proposal with the amount they want, their favourable repayment due date and CID of their mortgage uploaded on IPFS.
> As of now we are using a decentralised public IPFS gateway. To use our DApp generate your file CID [here](https://www.dreamlink.cloud/) before adding it as a mortgage.
* Lender's can verify the borrower's data and send their proposal with their favourable interest rate.
* Borrower's can choose multiple lenders of their interest.
* Borrower can repay the loan anytime they want before the due date and amortized loan will be transacted.
* After the repayment date has passed, borrower cannot repay the loan and their mortgage will be revoked and auctioned off.

<div id="technologies-used" />

# Technologies, Libraries and Packages Used

1. Ethereum
2. Solidity
3. Truffle
4. MetaMask
5. JavaScript
6. Ganache
7. Web3
8. jQuery


<div id="local-setup" />

# Local Setup

> **Pre-Requisites**
> Ganache 
> MetaMask
> Truffle
1. Fork this repository.
2. Clone the repository
   ```sh
    git clone https://github.com/kshitij-404/DeFi-P2P-Lender.git
    ```
3. Open the folder in which you cloned the repository.
4. Open Ganache to run your local blockchain.
5. Run this command to build your smart contracts.
    ```sh
    truffle init
    truffle test
    truffle migrate --reset
    ```
6. Update your config.js present in frontend directory using abi and address present in build files.
7. Run on your local host and connect your wallet with metamask to perfrom the transactions.

> Star this repository ✨ or send us some ethers at 0x08C5374DfB9Df1A5D42C76a00AcA277CF98ABe50

<div id="next" />

# What Next?

* We can create a local IPFS gateway to store the files and create CIDs.
* We can have user profile system for both borrowers and lenders.
* We can have a more robust system to verify the mortgages.
* We can have a credit score system for both the borrowers and the lenders based on their transaction history.
* We can have an alternative way to revoke the mortgage other than auctioning it off.

<div id="team" />
<!-- CONTACT -->

# Team

Team Name - **PilluzyM**

- #### Team Members
    - [Kshitij Ayush](https://github.com/kshitij-404)
    - [Shreshth Goyal](https://github.com/shreshthgoyal)
    - [Rishabh Kumar](https://github.com/rish78)
   - [Mounica Sruthi](https://github.com/mounicasruthi)
# 

[contributors-shield]: https://img.shields.io/github/contributors/kshitij-404/DeFi-P2P-Lender.svg?style=for-the-badge
[contributors-url]: https://github.com/kshitij-404/DeFi-P2P-Lender
