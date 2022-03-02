import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xAF3957C84b9E2291996B3636133dBd41BeB15A3b",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Sunrise in Dali",
        description: "This NFT will give you access to DaliDAO!",
        image: readFileSync("scripts/assets/DaliDAO.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()