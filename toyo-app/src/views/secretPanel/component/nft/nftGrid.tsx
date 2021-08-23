import { FunctionalComponent } from "preact";
import { mintNft } from "../../../../services/nft/mintNft";

export const NftGrid: FunctionalComponent = (): JSX.Element => {
  return (
    <Row width="75%">
      <Column id="boxes">
        <div onClick={() => mintNft(101, [playerWallet])}>
          <div class="text--simple">WARRIOR BOX</div>
          <img class="img--simple" src={box1} />
        </div>
        <div onClick={() => mintNft(51, [playerWallet])}>
          <div class="text--simple">HERO BOX</div>
          <img class="img--simple" src={box2} />
        </div>
        <div onClick={() => mintNft(1, [playerWallet])}>
          <div class="text--simple">EPIC BOX</div>
          <img class="img--simple" src={box3} />
        </div>
      </Column>
    </Row>
  );
};
