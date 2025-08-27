"use client";

import { PROJECT_TITLE } from "~/lib/constants";
import { NFTMintFlow } from "~/components/nft-mint-flow";

export default function App() {
  return (
    <div className="w-[400px] mx-auto py-8 px-4 min-h-screen flex flex-col items-center justify-center">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <div className="space-y-6 w-full max-w-sm">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">
            Mint Your NFT
          </h1>
          <p className="text-sm text-muted-foreground">
            Connect wallet and mint in 2 clicks
          </p>
        </div>
        
        <NFTMintFlow
          contractAddress="0xD2Ede6B7b1B08B2A8bB36118fBC0F76409719070"
          tokenId="1"
          network="celo"
          buttonText="Mint NFT"
        />
      </div>
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
