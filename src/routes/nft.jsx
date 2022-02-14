// import Web3 from "web3";
import Web3 from "web3/dist/web3.min";

import React from 'react';

export default function NFT() {

    const [punkImageSvg, setPunkImageSvg] = React.useState("");

    function reloadData(){
        window.location.reload();
    }

    async function connectToContract(){
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    
        web3.eth.getAccounts().then(console.log);

        // https://etherscan.io/address/0x16f5a35647d6f03d5d3da7b35409d65ba03af3b2#readContract
        const contractAddress = '0x16F5A35647D6F03D5D3da7b35409D65ba03aF3B2';
        const contractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint8","name":"index","type":"uint8"},{"internalType":"bytes","name":"encoding","type":"bytes"},{"internalType":"string","name":"name","type":"string"}],"name":"addAsset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"key1","type":"uint64"},{"internalType":"uint32","name":"value1","type":"uint32"},{"internalType":"uint64","name":"key2","type":"uint64"},{"internalType":"uint32","name":"value2","type":"uint32"},{"internalType":"uint64","name":"key3","type":"uint64"},{"internalType":"uint32","name":"value3","type":"uint32"},{"internalType":"uint64","name":"key4","type":"uint64"},{"internalType":"uint32","name":"value4","type":"uint32"}],"name":"addComposites","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"index","type":"uint8"},{"internalType":"bytes","name":"_punks","type":"bytes"}],"name":"addPunks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"index","type":"uint16"}],"name":"punkAttributes","outputs":[{"internalType":"string","name":"text","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"index","type":"uint16"}],"name":"punkImage","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"index","type":"uint16"}],"name":"punkImageSvg","outputs":[{"internalType":"string","name":"svg","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sealContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_palette","type":"bytes"}],"name":"setPalette","outputs":[],"stateMutability":"nonpayable","type":"function"}];
        const cryptoPunks = new web3.eth.Contract(contractAbi, contractAddress);

        return cryptoPunks.methods.punkImageSvg(Math.floor(Math.random() * 10000)).call();

    }
    
    const fetchData = React.useCallback(async () => {
        const data = await connectToContract();
        setPunkImageSvg(data.split('data:image/svg+xml;utf8,')[1]);
    }, [])
    
    React.useEffect(() => {
        fetchData()
        .catch(console.error);
    }, [fetchData])
    
    return(
        <svg onClick={reloadData} width="300" height="300" dangerouslySetInnerHTML={{ __html: punkImageSvg }} />
    )
}